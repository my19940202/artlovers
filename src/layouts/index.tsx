import React from 'react';
import {Layout, Menu, Button} from 'antd';
import Link from 'umi/link';
import 'antd/dist/antd.css';
import styles from './index.css';

const {Header, Content, Footer} = Layout;
const BasicLayout: React.FC = props => {
  return (
    <Layout className="layout">
        <Header className={styles['white-header']}>
            <div className="logo" />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <Link to='/apply'>志愿者申请</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/'>艺术新闻</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/activity'>公开活动</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to='/museum'>我的美术馆</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to='/about-us'>关于我们</Link>
                </Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff',minHeight: 280 }}>
                {props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Created by xishengbo</Footer>
    </Layout>
  );
};

export default BasicLayout;
