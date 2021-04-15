import { Button } from "antd";
import "./Header.css";
import { LaptopOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="header">
      <div className="header_text">
        {" "}
        <p>Launch your product</p>
        <h1>Connect better with interactive stream.</h1>
        <div className="header_btn">
          <span className="header_btn">
            <Button className="header_seemore_btn" size="large">
              see more
            </Button>
          </span>
          <span className="header_btn">
            <Button type="primary" size="large">
              Download
            </Button>
          </span>
        </div>
        <p className="header_bottom_text">
          Free unrestricted usage for 14 days. No credit card required*
        </p>
      </div>

      <div className="header_image">
        <LaptopOutlined />
      </div>
    </div>
  );
};
export default Header;
