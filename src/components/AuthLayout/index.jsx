import { useEffect, useState } from 'react'
import "./style.css";

function AccessDeniedUi() {
    return (
        <div className="main-access-div">
            <div className="sub-access-div">
                <h1>Access Denied</h1>
            </div>
        </div>
    );
}

function AuthLayout({ children }) {
    const [accessGranted, setAccessGranted] = useState(null);

    useEffect(() => {
        const blacklistCountries = ["PK"];

        async function checkCountry() {
            try {
                const response = await fetch("/ip.php");

                if (!response.ok) {
                    throw new Error(`IP check failed with status ${response.status}`);
                }

                const result = await response.json();

                const countryCode = result?.data?.geoLocation?.countryCode;

                if (!countryCode) {
                    throw new Error("Country code not found in IP API response");
                }

                if (blacklistCountries.includes(countryCode)) {
                    setAccessGranted(false);
                } else {
                    setAccessGranted(true);
                }
            } catch (error) {
                console.error("IP check failed:", error);

                // Allow access if the IP check itself fails
                setAccessGranted(true);
            }
        }

        checkCountry();
    }, []);

    if (accessGranted === null) {
        return null;
    }

    return accessGranted ? children : <AccessDeniedUi />;
}

export default AuthLayout;