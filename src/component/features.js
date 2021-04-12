import {
    CheckCircleOutlined
  } from '@ant-design/icons';
import './features.css'

const Features = () => {


    return(
        <div id='Features'>
            <div className='features_wrapper'>
                <div className='features_image'><img src='https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-programming-and-web-technology-vector-with-computer-illustration-png-image_755051.jpg'/></div>
            <div className='features_text'><h1> Data Sharing.</h1>
When you get staright to the point the presentation looks attractive on your web pages.

<br></br><CheckCircleOutlined />Tick Realtime broadcasts
<br></br><CheckCircleOutlined />Tick Upload and sit tight
<br></br><CheckCircleOutlined />Tick View realtime stats</div>
            </div>
            <div className='features_wrapper'>
            <div className='features_text'><h1> High Definition</h1>
When you get staright to the point the presentation looks attractive on your web pages.

<br></br><CheckCircleOutlined />Tick Realtime broadcasts
<br></br><CheckCircleOutlined />Tick Upload and sit tight
<br></br><CheckCircleOutlined />Tick View realtime stats</div>  
            <div className='features_image'><img src='https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-programming-and-web-technology-vector-with-computer-illustration-png-image_755051.jpg'/></div>  
            </div>
        </div>
    )
}
export default Features;