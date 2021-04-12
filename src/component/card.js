import { Card, Col, Row } from 'antd';
import './card.css'
import {
    YoutubeOutlined,
    EyeOutlined,
    AndroidOutlined
  } from '@ant-design/icons';
const IconCard=()=>{
return(
  <div className='card_section' id='product'>
<div>
WHAT'S INSIDE
<h1>Connect can bring charm to your website.</h1>
Get staright to the point always, people find it attractive when they visit your website.
</div>

  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card bordered={true}><div className='card'>
        <div className='icon'><YoutubeOutlined /></div>
         <h1>Fluid Layout</h1>
<p>Deliver the best stories and ideas on the topics you care about most straight to you</p>
</div></Card>
        
      </Col>
      <Col span={8}>
      <Card bordered={true}><div className='card'>
      <div className='icon'><EyeOutlined /></div>
         <h1>Fluid Layout</h1>
<p>Deliver the best stories and ideas on the topics you care about most straight to you</p>
</div></Card>
      </Col>
      <Col span={8}>
      <Card bordered={true}><div className='card'>
      <div className='icon'><AndroidOutlined /></div>
         <h1>Fluid Layout</h1>
<p>Deliver the best stories and ideas on the topics you care about most straight to you</p>
</div></Card>
      </Col>
    </Row>
  </div>
  </div>
)
}
export default IconCard;