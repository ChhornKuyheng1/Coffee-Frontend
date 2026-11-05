import { Drawer } from "antd";
import SiderCustom from "./SiderCustom";
import { Menu } from "lucide-react";

export default function DrawerCustom({ open, close, tiem }) {
  return (
    <Drawer
      open={open}
      placement={"bottom"}
      closeIcon={false}
      onClose={close}
      size={378}
      mask={true}
      classNames={{
        body: "!p-0",
        section: "rounded-2xl!",
        wrapper: "bottom-4! left-4! w-[calc(100%-32px)]! rounded-3xl!",
      }}
    >
      <div className="min-h-full ">
        <div className="flex justify-center py-4">
          <div className="w-12 h-1.5 rounded-full bg-gray-300"></div>
        </div>
        <div className="w-full h-full px-5">
          <SiderCustom collapsed={false} selectable={false} key={false} />
        </div>
      </div>
    </Drawer>
  );
}
