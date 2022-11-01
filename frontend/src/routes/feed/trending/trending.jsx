import React from "react"
import Trend from "./trend"
import "./style.css"
const Trending = () => {
    return (
        <section id="trendingFeed" className="width-25-rem width-100">
            <article className="mx-1 mb-1">
                <div className="card theme-primary br-lg d-flex flex-column align-items-center cursor-pointer">
                    <h3 className="p-__ center">
                        Try premium for <b>FREE</b>
                    </h3>
                    <p className="center font-sm">
                        Lorem ipsum dolor, sit amet ctetur adipisicing ipsum
                        elit A aliquam! ctetur.
                    </p>
                </div>
            </article>

            <article className="card br-md mb-2 d-flex flex-column gap-1-rem">
                <Trend
                    hint={"Technology"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                    first={true}
                />
                <Trend
                    hint={"Alpha Dem - trending"}
                    instance={"@alpha123dem"}
                    stats={"7,041 followers"}
                />
                <Trend
                    hint={"Technology - trending"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                />
                <Trend
                    hint={"Technology - trending"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                    last={true}
                />
            </article>

            <article className="card br-md mb-2 d-flex flex-column gap-1-rem">
                <Trend
                    hint={"Technology"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                    first={true}
                />
                <Trend
                    hint={"Alpha Dem - trending"}
                    instance={"@alpha123dem"}
                    stats={"7,041 followers"}
                />
                <Trend
                    hint={"Technology - trending"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                />
                <Trend
                    hint={"Technology - trending"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                    last={true}
                />
                <Trend
                    hint={"Technology - trending"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                    last={true}
                />
                <Trend
                    hint={"Technology - trending"}
                    instance={"#opensourse"}
                    stats={"5,741 streams"}
                    last={true}
                />
            </article>

            <div className="d-flex justify-content-center mt-3 mx-1">
                <div className="theme-primary br-md d-flex align-items-center gap-1 p-1 font-lg">
                    <span className=" py-__">Request Premium</span>
                    <span className="icon-wrapper width-3-rem height-3-rem ml-__">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M490.7 345.4L435.6 256l55.1-89.38c14.87-24.25-3.62-54.61-33.12-54.61l-110.6-.005l-57.87-93.1C281.7 6.003 268.9 0 256 0C243.1 0 230.3 6.003 222.9 18L165 112H54.39c-29.62 0-47.99 30.37-33.12 54.62L76.37 256l-55.1 89.38C6.4 369.6 24.77 399.1 54.39 399.1h110.6l57.87 93.1C230.3 505.1 243.1 512 256 512c12.88 0 25.74-6.002 33.12-18l57.83-93.1h110.7C487.2 399.1 505.6 369.6 490.7 345.4zM256 73.77l23.59 38.23H232.5L256 73.77zM89.48 343.1l20.59-33.35l20.45 33.35H89.48zM110 201.3L89.48 168h41.04L110 201.3zM256 438.2l-23.59-38.25h47.08L256 438.2zM313.9 343.1H198L143.8 256l54.22-87.1h116L368.3 256L313.9 343.1zM381.3 343.1l20.67-33.29l20.52 33.29H381.3zM401.1 201.3l-20.51-33.29h41.04L401.1 201.3z" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Trending
