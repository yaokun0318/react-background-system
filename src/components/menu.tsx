import React from 'react';
import { Menu } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { SubMenu } = Menu;

const SideMenu = () => {
  let history = useHistory();
  const { page, subPage, subPage2 } = useParams<{
    page: string;
    subPage?: string;
    subPage2?: string;
  }>();
  const handleSelect = React.useCallback((param: any) => {
    history.push(`/main/${param.key}`);
  }, []);

  return (
    <Wraper>
      <div className="logo" />
      <Menu
        selectedKeys={[
          `${page}${subPage ? `/${subPage}` : ''}${
            subPage2 ? `/${subPage2}` : ''
          }`,
        ]}
        defaultOpenKeys={[page]}
        mode="inline"
        theme="light"
        onClick={handleSelect}
      >
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation one">
          <Menu.Item key="navigation">Option 1</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Two">
          <Menu.Item key="navigation2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Wraper>
  );
};

const Wraper = styled.div`
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`;
export default SideMenu;
