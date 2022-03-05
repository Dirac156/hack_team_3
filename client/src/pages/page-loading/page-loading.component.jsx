import React from "react";
import "./styles.css";

const LoadingPage = () => {
    return (
        <div className="loading">
            
            <div className="about">
            <a className="bg_links social portfolio" href="/#" >
                <span className="icon"></span>
            </a>
            <a className="bg_links social dribbble" href="/#">
                <span className="icon"></span>
            </a>
            <a className="bg_links social linkedin" href="/#">
                <span className="icon"></span>
            </a>
            <a className="bg_links logo" href="/#">.</a>
            </div>

            <div className="content-loading">
            <div className="loading">
            <p>loading</p>
                <span></span>
            </div>
            </div>
            </div>
    )
}

export default LoadingPage;