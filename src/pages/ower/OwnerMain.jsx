import { LayoutDashboardIcon, Share2, Sidebar, Users } from "lucide-react";
import HeaderCustom from "../../components/layout/HeaderCustom";
import SiderCustom from "../../components/layout/SiderCustom";
import { useState } from "react";
import DrawerCustom from "../../components/layout/DrawerCustom";
import { Outlet, useNavigate } from "react-router-dom";

export default function OwnerMain() {
  const [drawer, setDrawer] = useState(false);
  const [sider, setSider] = useState(false);
  const goto = useNavigate();
  const showDrawer = () => {
    drawer ? setDrawer(false) : setDrawer(true);
  };
  const showSider = () => {
    sider ? setSider(false) : setSider(true);
  };

  const items = [
    {
      key: "1",
      label: "Dashboard",
      icon: <LayoutDashboardIcon size={20} />,
    },
    {
      key: "2",
      label: "Branch",
      icon: <Share2 size={20} />,
      onClick: () => {
        goto("branch");
      },
    },
    {
      key: "3",
      label: "User",
      icon: <Users size={20} />,
      onClick: () => {
        goto("user");
      },
    },
  ];
  return (
    <div className="h-dvh w-dvw flex overflow-hidden bg-[#F8FAFC]  ">
      <DrawerCustom open={drawer} close={showDrawer} item={items} />
      <div className="flex w-full h-full">
        <section className="hidden md:block h-full bg-white border-r border-[#E2E8F0] pt-3">
          <SiderCustom
            collapsed={sider}
            selectable={true}
            select={"1"}
            item={items}
          />
        </section>
        <section className="w-full h-full flex flex-col">
          <header>
            <HeaderCustom showDrawer={showDrawer} showSider={showSider} />
          </header>
          <main className="md:p-6 w-full h-full overflow-hidden">
            <div className="w-full h-full overflow-y-scroll hide-scrollbar">
              <Outlet />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
