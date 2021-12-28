import React, { useEffect } from "react";
import { AppContextProvider } from "./context/App";
import { Home } from "./page";
import "./asset/scss/main.css";

export default function App() {
    useEffect(() => { document.title = "Static Job Listings - mdmahikaishar.me" }, [])

    return (
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    );
}
