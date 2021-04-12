import { Breadcrumb, Menu } from "antd";
import { Button } from "antd";
import "./Footer.css";
import {
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1>Connect</h1>
      </div>
      <div className="navbar_list">
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="">About</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Privacy</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Terms</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Contact</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="Footer_icon">
        <Breadcrumb>
          <Breadcrumb.Item>
            <InstagramOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
          <TwitterOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
          <LinkedinOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <InstagramOutlined />
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};
export default Footer;
