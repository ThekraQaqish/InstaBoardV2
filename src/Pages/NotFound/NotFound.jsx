import './NotFound.css';
import { Link } from "react-router-dom";
export default function NotFound(){
    return(
        <div className="NotFoundContainer">
            <img src="/images/NotFound.png" alt="NotFound"/>
            <h1 >404</h1>
            <p>Page Not Found</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}