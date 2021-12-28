import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/App";
import { Btn } from "../index";
import img from "../../asset/img";
import "./Search.css";

export default function Search() {
    const appContext = useContext(AppContext);
    const [keywords, setKeywords] = useState([]);
    const refInput = useRef(null);

    const fSubmit = (e) => {
        e.preventDefault();

        const inputValue = refInput.current.value;
        if (!inputValue) return;
        setKeywords(() => [...keywords, inputValue]);
        refInput.current.value = '';
    };

    const fRemove = (index) => {
        const copyKeywords = keywords;
        copyKeywords.splice(index, 1);
        setKeywords(() => [...copyKeywords]);
    };

    const fClear = () => setKeywords(() => []);

    /**
     * Search
     * 1. convert all the keywords in lowercase.
     * 2. filter all data
     *      1. convert all the keywords of data in lowercase.
     *      2. then check all the keywords in the data.
     * 3. set the result.
     */
    const fSearch = () => {
        const lowercaseKeywords = keywords.map(item => item.toLowerCase())
        const result = appContext.data.filter((item) => {
            const lowercaseKey = item.keywords.map(key => key.toLowerCase());
            return lowercaseKeywords.every(key => lowercaseKey.includes(key));
        });

        appContext.dispatch({ type: "SET_RESULT", payload: result })
    };

    // Search --- WHEN keywords UPDATED Search
    useEffect(() => fSearch(), [keywords]);

    return (
        <div className="search" >
            <div className="searchKeywordHold">
                {keywords.map((item, index) => (
                    <div className="searchKeyword" key={index}>
                        <p className="searchKeywordName">{item}</p>
                        <Btn className="searchKeywordRemove" icon={img.iconRemove} onClick={() => fRemove(index)} />
                    </div>
                ))}
            </div>

            <form className="searchForm" onSubmit={fSubmit}>
                <input className="searchInput" type="text" placeholder="Type Here To Search..." ref={refInput} />
            </form>

            <Btn className="searchClear" txt="Clear" onClick={fClear} />
        </div>
    );
}