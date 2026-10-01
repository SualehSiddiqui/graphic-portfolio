import { useState } from "react";
import {
    Hero,
    Footer,
    OfficialNotice,
    ScrollToTheSection
} from "../../components";
import {
    Services,
    Portfolio,
    ForGamers,
    HowWeWork,
    Contact,
    PaymentMethods,
    Reviews,
} from "../../Sections";

function Home() {
    const [noticeOpen, setNoticeOpen] = useState(true);

    return (
        <>
            <ScrollToTheSection />
            <OfficialNotice
                isOpen={noticeOpen}
                onClose={() => setNoticeOpen(false)}
            />
            <Hero />
            <Services />
            <Portfolio />
            <ForGamers />
            <HowWeWork />
            <Contact />
            <PaymentMethods />
            <Reviews />
            <Footer />
        </>
    );
}

export default Home;