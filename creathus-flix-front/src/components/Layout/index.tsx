import React from 'react';
import { Outlet } from 'react-router-dom';
import SiderMenu from '../SiderMenu';
import { Layout as AntdLayout} from 'antd';


// import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <SiderMenu></SiderMenu>
      <AntdLayout className="site-layout">
        <Outlet></Outlet>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;