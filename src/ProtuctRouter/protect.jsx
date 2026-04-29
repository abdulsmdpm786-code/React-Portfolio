
import { Navigate, replace } from "react-router-dom";

const Protect = ({ children })=>{
    const token = localStorage.getItem("token")
    console.log("got it token::", token);

    if(!token){
        return <Navigate to={"/Contact"} replace:true />
    }
    return children
    
}

export default Protect
