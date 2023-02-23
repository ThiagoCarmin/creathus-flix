import React, { useState } from "react";
import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { links } from "../../constant";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    
  } as MenuItem;
}
const {addMovie, home} = links

const items: MenuItem[] = [
  getItem(<Link to={home}>Home</Link>, "1", <HomeOutlined />),
  getItem(<Link to={addMovie}>Adicionar</Link>, "2", <UserAddOutlined />),
];

const SiderMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation()
  const activeElement = location.pathname === home ? "1" : "2"

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          backgroundImage: `url("/creathusflix.png")`,
        }}
      />
      <Menu
        theme="dark"
        selectedKeys={[activeElement]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default SiderMenu;
