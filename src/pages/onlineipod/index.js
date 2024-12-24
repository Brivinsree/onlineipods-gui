import thiranlogo from '../../assets/THIRAN_LOGO.jpeg'

import { Link } from "react-router-dom";
const Smartpods = () => {
    return (
        <>
            <div>
                <div>
                    <h1><img src={thiranlogo} alt="Bridgera Logo" width={150} height={150} />Welcome to Thiran Technologies</h1>
                </div>
                <Link to="/onlineipods"><h1>Online Ipods</h1></Link>
                <Link to="/parantheses"><h1>GenerateParantheses</h1></Link>


            </div>
        </>
    )
}

export default Smartpods;