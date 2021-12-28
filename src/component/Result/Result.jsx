import React, { useContext } from "react";
import { AppContext } from "../../context/App";
import { ResultItem, Search } from "../index";
import "./Result.css";

export default function Result() {
    const appContext = useContext(AppContext);

    return (
        <section className="result">
            <div className="hold">
                <Search />

                {appContext.result.map((item, index) => (
                    <ResultItem data={item} key={index} />
                ))}
            </div>
        </section>
    );
}
