 
 import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
 import HelpSupport from "../../components/help&support/HelpSupport";
import './prof-payment.css';

export default function ProfPayment() {
    return (
        <div className="prof-payment-container">
            <div className="prof-main-container">
                <PaymentMethod />
            </div>
            <div className="prof-help-container">
                <HelpSupport />
            </div>
        </div>
    )
}