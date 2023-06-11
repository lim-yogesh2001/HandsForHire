 
 import PaymentHistory from "../../components/PaymentHistory/PaymentHistory";
 import HelpSupport from "../../components/help&support/HelpSupport";
import './prof-payment-history.css';

export default function ProfPaymentHistory() {
    return (
        <div className="prof-history-container">
            <div className="prof-main-container">
                <PaymentHistory />
            </div>
            <div className="prof-help-container">
                <HelpSupport />
            </div>
        </div>
    )
}