import { Input } from 'antd';
import { Button } from 'antd';
import './SignUp.css'
const SignUp = () =>{
    return(
        <div className='signup'>
            
           <p> START YOUR TRIAL</p>
<h1>Connect is made just for you. Ready to build your next project?</h1>
<div className='signup_button'><Input placeholder="enter your enmail adress" />
<div><Button type="primary">signup</Button></div>
</div></div>
    )
}
export default SignUp; 