import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { collapseMenu } from './actions';
import { connect } from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const mapStateToProps = state => {
    return {
        // menuCollapsed: state.homeReducer.menuCollapsed
        menuCollapsed: state.menuCollapsed

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuCollapse: (event) => dispatch(collapseMenu(event))
    }
}

class Home extends Component {

    render() {  
        const { menuCollapsed, onMenuCollapse } = this.props;

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={menuCollapsed}
                    onCollapse={onMenuCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a {menuCollapsed ? ' cat when menu is collapsed.' : ' a dog when menu is not collapsed.'}
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React / Redux / AntD Boilerplate
          </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);