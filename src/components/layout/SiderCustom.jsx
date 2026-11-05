import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { User } from "lucide-react";
export default function SiderCustom({
  collapsed,
  item,
  key,
  selectable = false,
}) {
  const s = [
    {
      key: "1",
      label: "User",
      icon: <User />,
    },
  ];
  return (
    <Sider
      className="h-full! w-full! border-0! "
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Menu
        className="h-full! w-full! border-0!"
        mode="inline"
        defaultSelectedKeys={["1"]}
        selectedKeys={key}
        selectable={selectable}
        items={s}
      />
    </Sider>
  );
}
