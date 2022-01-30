import React, { useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  const [sidebarActive, setSidebaractive] = useState(false);
  const sidebarChange = ()=>setSidebaractive(true)
  return (
    <div>
      <Header func={sidebarChange} />
      <Sidebar condition={sidebarActive} />
    </div>
  );
}

export default Home;
