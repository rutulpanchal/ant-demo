import {
    MobileTwoTone,
    EyeTwoTone,
    RocketTwoTone,
    WalletTwoTone
  } from '@ant-design/icons';
  import './ourResults.css'
const OurResults = () =>{

    return(
<div className='our_results'>
    <p>OUR RESULTS</p>
    <h1>Our awesome results worth displaying</h1>
    <div className='our_result_cards'><div><div className='our_results_icon'><MobileTwoTone /></div><h1>37%</h1><div>mobile user</div></div>
    <div><div className='our_results_icon'><EyeTwoTone /></div><h1>37%</h1><div>Daily Views</div></div>
    <div><div className='our_results_icon'><WalletTwoTone /></div><h1>37%</h1><div>Monthly Returns</div></div>
    <div><div className='our_results_icon'><RocketTwoTone /></div><h1>37%</h1><div>Annual Growth</div></div>
    </div>
</div>
    )
}
export default OurResults