import { Input } from "antd";
import { Button } from "antd";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="signup">
      <p> START YOUR TRIAL</p>
      <h1>Connect is made just for you. Ready to build your next project?</h1>
      <div className="signup_input">
        <Input placeholder="enter your email adress" />
        <div className="signup_button">
          <Button className="signup_button" type="primary">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
