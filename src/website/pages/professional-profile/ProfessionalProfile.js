
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProfessionalBody from "./ProfessionalBody/ProfessionalBody";


export default function ProfessionalProfile() {
    return (
        <>
            <Header boolSearchBar={false} isAuthenticated={true} imageheight="40vh" height="40vh" />
            <main>
                <ProfessionalBody />
            </main>
            <Footer />
        </>
    )
}