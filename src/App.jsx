import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from "antd";
import Intro from "./pages/intro";
import About from "./pages/about";
import System from "./pages/system";
import Demo1 from "./pages/demo1";
import Demo2 from "./pages/demo2";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;

const LeftSider = withRouter(({ location }) => (
  <Sider
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0
    }}
  >
    <div style={{ width: "100%", textAlign: "center" }}>
      <Avatar
        size={96}
        className="qathena-avatar"
        src="https://i.loli.net/2019/06/11/5cff2120d0b1230348.jpeg"
      />
    </div>
    <div className="logo" />
    <Menu
      className="qathena-menu"
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname.split("/")[1]]}
      defaultSelectedKeys={["intro"]}
    >
      <Menu.Item key="intro">
        <Link to="/intro">
          <Icon type="bulb" />
          <span className="nav-text">Introduction</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="system">
        <Link to="/system">
          <Icon type="deployment-unit" />
          <span className="nav-text">Our System</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="demo1">
        <Link to="/demo1">
          <Icon type="star" />
          <span className="nav-text">Demo1</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="demo2">
        <Link to="/demo2">
          <Icon type="star" />
          <span className="nav-text">Demo2</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link className="nav-text" to="/about">
          <Icon type="question-circle" />
          <span className="nav-text">About</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
));

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Layout>
          <LeftSider />
          <Layout style={{ marginLeft: 200, height: "100%" }}>
            <Header
              className="material-card"
              style={{
                background: "#F0F8FF",
                padding: 0,
                position: "fixed",
                zIndex: 1,
                width: "100%"
              }}
            >
              <p className="header-intro">
                <Icon type="smile" theme="twoTone" />
                &nbsp; Qathena Visual Recommendation Project Demo
                {/* &nbsp; &nbsp;Imitating the format of social networking posts, input
            a picture and a paragraph of text, and analyze the content through
            machine learning technology. */}
              </p>
            </Header>

            <Content
              style={{
                paddingBottom: "2rem",
                paddingTop: "3rem",
                margin: "2rem 20px 0",
                overflow: "initial"
              }}
            >
              <Route exact path="/intro" component={Intro} />
              <Route exact path="/about" component={About} />
              <Route exact path="/demo2" component={Demo2} />
              <Route exact path="/demo1" component={Demo1} />
              <Route exact path="/system" component={System} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Qathena ©2019 Created by Yizheng Huang
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
