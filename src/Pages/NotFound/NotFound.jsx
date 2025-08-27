import './NotFound.css';
import { Link } from "react-router-dom";
export default function NotFound(){
    return(
        <div className="NotFoundContainer">
            <img src={`${process.env.PUBLIC_URL}/images/NotFound.png`} alt="My Image" />
            <h1 >404</h1>
            <p>Page Not Found</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}