import { useEffect } from "react";

function ScrollToTheSection() {
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);

            // Wait for the page/DOM to render
            setTimeout(() => {
                const element = document.getElementById(id);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 0);
        }
    }, []);
    return;
}

export default ScrollToTheSection;