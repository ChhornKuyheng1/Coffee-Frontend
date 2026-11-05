import { Menu, LeafIcon, Leaf, LeafyGreen } from "lucide-react";
import { Image, Avatar, Button } from "antd";
import login from "../../assets/login-logo.svg";
export default function HeaderCustom({ showDrawer, showSider }) {
  return (
    <header className="w-full h-12.5 flex justify-between items-center bg-white  border-b border-[#E2E8F0] p-2 md:p-3">
      <span className="text-2xl font-bold font-serif text-[#16A34A] items-center flex gap-1.5 ">
        Spring Caffe <Leaf size={30} />
      </span>
      <div className="flex gap-5 items-center">
        <Image width={25} src={login} />
        <Menu className="md:hidden!" onClick={showDrawer} />
        <Menu className="hidden! md:block!" onClick={showSider} />
      </div>
    </header>
  );
}
