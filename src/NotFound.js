import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound=()=>{
    return(
        <div>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default NotFound;