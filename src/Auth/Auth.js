
import LoginAndRegNav from "../components/LogAndRegNav/LoginAndRegNav";
import AuthCard from "./Login/AuthCard";

export default function Auth( {authenticationType} ) {
    return(
        <div>
            <LoginAndRegNav />
            <AuthCard authenticationType={authenticationType} />
        </div>
    )
}