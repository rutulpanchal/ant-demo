import { CheckCircleOutlined, LaptopOutlined } from "@ant-design/icons";
import "./features.css";

const Features = () => {
  return (
    <div id="Features">
      <div className="features_wrapper">
        <div className="features_image">
          <LaptopOutlined />
        </div>

        <div className="features_text">
          <h1> Data Sharing.</h1>
          When you get staright to the point the presentation looks attractive
          on your web pages.
          <br />
          <CheckCircleOutlined style={{ color: "green" }} />
          Tick Realtime broadcasts
          <br />
          <CheckCircleOutlined style={{ color: "green" }} />
          Tick Upload and sit tight
          <br />
          <CheckCircleOutlined style={{ color: "green" }} />
          Tick View realtime stats
        </div>
      </div>
      <div className="features_wrapper">
        <div className="features_text">
          <h1> High Definition</h1>
          When you get staright to the point the presentation looks attractive
          on your web pages.
          <br />
          <CheckCircleOutlined style={{ color: "green" }} />
          Tick Realtime broadcasts
          <br />
          <CheckCircleOutlined style={{ color: "green" }} />
          Tick Upload and sit tight
          <br />
          <CheckCircleOutlined style={{ color: "green" }} />
          Tick View realtime stats
        </div>
        <div className="features_image">
          <LaptopOutlined />
        </div>
      </div>
    </div>
  );
};
export default Features;
