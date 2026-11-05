import { useState } from "react";
import Buttons from "../components/common/Button";
import { Form, Input, Avatar, Button } from "antd";

import { Leaf, Eye, EyeOff, Phone, Users, UserRoundCog } from "lucide-react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [loginText, setLoginText] = useState("User login");
  const [loginType, setLoginType] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    setLoading(true);
  };
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-[#F8FAFC] p-4 md:p-6">
      <div className=" w-100 p-4 rounded-3xl  bg-white border border-[#E2E8F0] md:p-6">
        <div className="w-full h-full flex flex-col items-center space-y-5 p-4 md:p-6">
          <div className=" flex flex-col items-center gap-y-1.5">
            <Leaf size={50} className="text-[#16A34A]" />
            <h1 className="text-2xl font-bold text-[#16A34A] font-serif">
              Spring Coffee
            </h1>
          </div>
          <div className="w-full flex gap-3 justify-center items-center">
            <div className="flex flex-col items-center">
              <Button
                type={loginType ? "primary" : "default"}
                onClick={() => {
                  setLoginType(true);
                  setLoginText("Manager login");
                }}
                className="p-2! border! border-gray-300! rounded-lg! "
                icon={<UserRoundCog size={20} />}
              />
            </div>
            <div className="flex flex-col items-center">
              <Button
                type={loginType ? "default" : "primary"}
                onClick={() => {
                  setLoginType(false);
                  setLoginText("User login");
                }}
                className="p-2! border! border-gray-300! rounded-lg! "
                icon={<Users size={20} />}
              />
            </div>
          </div>
          <div className="w-full h-full">
            <Form className="p-4 space-y-5 md:p-6 ">
              <div className="space-y-1.5">
                <p>Tel</p>
                <Input
                  placeholder="Enter phone number"
                  className={
                    " w-full! h-10! rounded-lg! border! bg-white! px-3 text-sm! text-gray-900! placeholder:text-gray-400!outline-none transition! focus:border-blue-500!focus:ring-4 focus:ring-blue-50! disabled:bg-gray-50! disabled:text-gray-400!"
                  }
                  suffix={<Phone size={17} />}
                />
              </div>
              <div className="space-y-1.5">
                <p>Password</p>
                <Input
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"}
                  className={
                    " w-full! h-10! rounded-lg! border! bg-white! px-3 text-sm! text-gray-900! placeholder:text-gray-400!outline-none transition! focus:border-blue-500!focus:ring-4 focus:ring-blue-50! disabled:bg-gray-50! disabled:text-gray-400!"
                  }
                  suffix={
                    showPassword ? (
                      <Eye
                        size={17}
                        onClick={() => {
                          showPassword
                            ? setShowPassword(false)
                            : setShowPassword(true);
                        }}
                      />
                    ) : (
                      <EyeOff
                        size={17}
                        onClick={() => {
                          showPassword
                            ? setShowPassword(false)
                            : setShowPassword(true);
                        }}
                      />
                    )
                  }
                />
              </div>
              <div>
                <Buttons
                  disabled={loading}
                  loading={loading}
                  children={loginText}
                  onClick={login}
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
