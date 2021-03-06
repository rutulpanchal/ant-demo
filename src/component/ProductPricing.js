import { Card, Col, Row } from "antd";
import { MobileTwoTone, WalletTwoTone } from "@ant-design/icons";
import "./ProductPricing.css";
import { Button } from "antd";
const Product = () => {
  return (
    <div className="product" id="Pricing">
      <div className="site-card-wrapper">
        <h1>Simple Affordable Pricing.</h1>
        <p>
          Our plans are designed to meet the requirements of both beginners and
          players. Get the right plan that suits you.
        </p>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card className="product_card" bordered={true}>
              <div>
                <h1>Basic</h1>
                <p>limited features</p>
                <div className="product_icon">
                  <MobileTwoTone />
                </div>
                <h1>free</h1>
                <h1>0$</h1>
                <Button type="primary">download</Button>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card className="product_card" bordered={true}>
              <div>
                <h1>Premiem</h1>

                <p>limited features</p>
                <div className="product_icon">
                  <WalletTwoTone />
                </div>
                <h1>subscribe</h1>
                <h1>99$</h1>
                <Button className="subscribe_btn">subscribe</Button>
              </div>
            </Card>
          </Col>
        </Row>
        <p>
          * Refund requests can be accepted with in 10 days of the purchase.
        </p>
      </div>
    </div>
  );
};
export default Product;
