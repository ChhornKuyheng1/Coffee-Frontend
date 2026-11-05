import { Sidebar } from "lucide-react";
import HeaderCustom from "../../components/layout/HeaderCustom";
import SiderCustom from "../../components/layout/SiderCustom";
import { useState } from "react";
import DrawerCustom from "../../components/layout/DrawerCustom";

export default function OwnerMain() {
  const [drawer, setDrawer] = useState(false);
  const [sider, setSider] = useState(false);

  const showDrawer = () => {
    drawer ? setDrawer(false) : setDrawer(true);
  };
  const showSider = () => {
    sider ? setSider(false) : setSider(true);
  };
  return (
    <main className="w-screen h-screen flex  bg-[#F8FAFC]  ">
      <DrawerCustom open={drawer} close={showDrawer} />
      <section className="hidden md:block  h-full bg-white border-r border-[#E2E8F0] ">
        <SiderCustom collapsed={sider} selectable={true} key={true} />
      </section>
      <section className="w-full h-full">
        <header>
          <HeaderCustom showDrawer={showDrawer} showSider={showSider} />
        </header>
        <main></main>
      </section>
    </main>
  );
}
