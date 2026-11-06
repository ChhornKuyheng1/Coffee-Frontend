import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { User } from "lucide-react";
export default function SiderCustom({ collapsed, item, select, selectable }) {
  return (
    <Sider
      className="h-full! w-full! border-0! "
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Menu
        className="h-full! w-full! border-0! space-y-4!"
        mode="inline"
        defaultSelectedKeys={[select]}
        selectable={selectable}
        items={item}
      />
    </Sider>
  );
}
