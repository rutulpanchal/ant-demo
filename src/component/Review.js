import { Carousel } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Review.css'
const Review = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#c2c2c2',
      };
    return(
<div className='Review' id='Reviews'>
    <div>
   <h1> Stories from our customers</h1>
<p>When you get staright to the point the presentation looks attractive.</p>
    </div>
    <div className='Carousel'>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Quote Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. We use Connect for key for easy and seamless weekly communication with our clients and .
Feature
Marty McFly
Head of OP, Future LLC



</h3>
<p><Avatar size={64} icon={<UserOutlined />} />name</p>
    </div>
    <div>
      <h3 style={contentStyle}>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).

</h3>
<p><Avatar size={64} icon={<UserOutlined />} />name</p>
    </div>
    <div>
      <h3 style={contentStyle}>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).

</h3>
<p><Avatar size={64} icon={<UserOutlined />} />name</p>
    </div>
    <div>
      <h3 style={contentStyle}>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).

</h3>
<p><Avatar size={64} icon={<UserOutlined />} />name</p>
    </div>
  </Carousel>   
    </div>
</div>
    )
}
export default Review;