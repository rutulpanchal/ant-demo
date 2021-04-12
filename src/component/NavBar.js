import { Breadcrumb, Menu } from 'antd';
import { Button } from 'antd';
import './NavBar.css';

const Nav = ()=>{
    return(
        <div className='navbar'>
        <div className='logo'><h1>Connect</h1></div>
  <div className='navbar_list'><Breadcrumb>
  

    <Breadcrumb.Item><a href="#product">Product</a></Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#Features">Features</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
      <a href="#Reviews">Reviews</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
      <a href="#Pricing">Pricing</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
      <a href="#FAQ">FAQ</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item><Button>DOWNLOAD</Button></Breadcrumb.Item>
  </Breadcrumb></div>

  
  </div>
  )}
  export default Nav;