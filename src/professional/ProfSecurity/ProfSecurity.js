 
 import Security from "../../components/Security/Security";
 import HelpSupport from "../../components/help&support/HelpSupport";
import './prof-security.css';

export default function ProfSecurity() {
    return (
        <div className="prof-security-container">
            <div className="prof-main-container">
                <Security />
            </div>
            <div className="prof-help-container">
                <HelpSupport />
            </div>
        </div>
    )
}