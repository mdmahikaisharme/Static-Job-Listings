import React from "react";
import { } from "../index";
import img from "../../asset/img";
import "./ResultItem.css";

export default function ResultItem({ data }) {
    return (
        <article className="resultItem">
            <div className="resultLeft">
                <img className="resultAvater" src={img[data.logo]} alt="" />

                <div className="resultInfo">
                    <div className="resultShort">
                        <p className="resultCompany">{data.company}</p>
                        {data.new ? <p className="resultNew">NEW!</p> : null}
                        {data.featured ? (
                            <p className="resultFeatured">FEATURED</p>
                        ) : null}
                    </div>

                    <h2 className="resultPosition">{data.position}</h2>

                    <ResultDetail data={data} />
                </div>
            </div>

            <ResultKeyword data={data.keywords} />
        </article>
    );
}

const ResultDetail = ({ data }) => {
    const details = [data.postedAt, data.contract, data.location];

    return (
        <div className="resultDetailHold">
            {details.map((item, index) => {
                const isShowSep = index !== details.length - 1;

                return (
                    <React.Fragment key={index}>
                        <p className="resultDetail">{data.postedAt}</p>
                        {isShowSep ? <span className="resultSep"></span> : null}
                    </React.Fragment >
                );
            })}
        </div>
    );
};

const ResultKeyword = ({ data }) => {
    return (
        <div className="resultKeywordHold">
            {data.map((item, index) => (
                <p className="resultKeyword" key={index}>{item}</p>
            ))}
        </div>
    );
};
