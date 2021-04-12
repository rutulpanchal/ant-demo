import { Button } from 'antd';
import './Header.css'
const Header = ()=>{
    return(
        <div className='header'>
            <div className='header_text'> <p>Launch your product</p>
<h1>Connect better with interactive stream.</h1>
        
    <span className='header_btn'><Button size='large'>see more</Button></span>
    <span><Button type="primary" size='large'>Download</Button></span>
    <p className='header_bottom_text'>Free unrestricted usage for 14 days.
No credit card required*</p></div>
    
        <div className='header_image'><img src='https://img.favpng.com/8/15/17/computer-programming-web-development-computer-software-programming-language-theme-png-favpng-ADiNamEa9ypDrNhWR1jNazY80.jpg' /></div>
    </div>)
}
export default Header;