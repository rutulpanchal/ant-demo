import { Collapse } from 'antd';
import './Feedback.css'
const Feedback = () =>{
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

return(
    <div className='feedback' id='FAQ'>
       <h1> Frequently Asked Queries</h1>
<p>Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>

<p>Still have questions? Contact us</p>
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="What is Connect?" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="How much does template cost?" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="How can updates be downloaded?" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
  </div>
)
}
export default Feedback;