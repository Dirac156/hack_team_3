import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import Logo from '../logo/logo.component';
import "./custom-navbar.style.css";

const CustomNavbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand me-auto logo-navbar" href="/#" style={{ width: "7rem" }}><Logo /></a>
                <form className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <CustomButton onClick={() => navigate("auth/register")} classes={"filled"}>get started</CustomButton>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default CustomNavbar;