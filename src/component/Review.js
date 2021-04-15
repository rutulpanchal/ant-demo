import { Carousel } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Review.css";
const Review = () => {
  const contentStyle = {
    color: "#fff",

    textAlign: "center",
    background: "#c2c2c2",
  };
  return (
    <div className="Review" id="Reviews">
      <div>
        <h1> Stories from our customers</h1>
        <p>
          When you get staright to the point the presentation looks attractive.
        </p>
      </div>
      <div className="Carousel">
        <Carousel autoplay dots={false}>
          <div>
            <h3 style={contentStyle}>
              "We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure)."
            </h3>
            <p>
              <span>
                <Avatar size={64} icon={<UserOutlined />} />
              </span>
              <span>name</span>
            </p>
          </div>
          <div>
            <h3 style={contentStyle}>
              "We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure)."
            </h3>
            <p>
              <span>
                <Avatar size={64} icon={<UserOutlined />} />
              </span>
              <span>name</span>
            </p>
          </div>
          <div>
            <h3 style={contentStyle}>
              " We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure)."
            </h3>
            <p>
              <span>
                <Avatar size={64} icon={<UserOutlined />} />
              </span>
              <span>name</span>
            </p>
          </div>
          <div>
            <h3 style={contentStyle}>
              " We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure)."
            </h3>
            <p>
              <span>
                <Avatar size={64} icon={<UserOutlined />} />
              </span>
              <span>name</span>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Review;
