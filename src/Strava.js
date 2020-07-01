import {useCallback, useState} from "react";
import React from "react";

function StravaButton(props) {
    const [connected, setConnected] = useState(false)
    const [user, setUser] = useState()

    const connectStrava = useCallback(async () => {
        const response = await fetch(`http://127.0.0.1:8000/strava/authorization_url`)
        const url = await response.json();

        window.open(url.url, "_blank")
        setConnected(true)
    }, [connected])

    return (
        <div>
            {connected
                ?
                <h1>Welcome! </h1>
                :
                <button onClick={connectStrava}>
                    Connect with Strava here!
                </button>
            }
        </div>
    );
}

export default StravaButton
