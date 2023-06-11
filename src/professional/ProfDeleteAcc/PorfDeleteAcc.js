 
 import DeleteAccount from "../../components/DeleteAccount/DeleteAccount";
 import HelpSupport from "../../components/help&support/HelpSupport";
import './prof-delete-acc.css';

export default function ProfDeleteAcc() {
    return (
        <div className="prof-delete-container">
            <div className="prof-main-container">
                <DeleteAccount />
            </div>
            <div className="prof-help-container">
                <HelpSupport />
            </div>
        </div>
    )
}