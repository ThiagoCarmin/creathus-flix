import React from 'react';
import { Outlet } from 'react-router-dom';
import SiderMenu from '../SiderMenu';
import { Layout as AntdLayout} from 'antd';
import { Content } from 'antd/es/layout/layout';
import "../../styles/home/home.css";



// import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <SiderMenu></SiderMenu>
      <AntdLayout className="site-layout">
      <Content className='content'>
        <Outlet></Outlet>
      </Content>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;