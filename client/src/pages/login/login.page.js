import React from "react";
import { useNavigate } from 'react-router-dom';
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomNavbar from "../../components/custom-navbar/custom-navbar.component";
import Input from "../../components/input/input.component";
import Logo from "../../components/logo/logo.component";
import "./login.page.css";

const Login = () => {
    // navigate to other pages
    const navigate = useNavigate();
    const [state, setstate] = React.useState({
        password: "",
        email: "",
        checkbox: true,
    })

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setstate({ [name]: value });
    }

    const handleLogin = (event) => {
        navigate("/home");
    }

    const handleForgotPassword = (event) => {
        navigate("/auth/forgot-password")
    }


    return (
        <div className="login-page">
            <CustomNavbar />
            <div className="row login-page-items">
                <div className="col-md-6">
                    <Logo />
                </div>

                <div className="col-md-6">
                    <h2 className="secondary-header login-title">login to your account</h2>
                    <p className="text-paragraph center login-text">create your own space.</p>

                    <div className="custom-form">
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <CustomButton classes={"overlay"} onClick={handleLogin}>
                                    <i className="fa-brands fa-google custom-button-icon"></i>
                                    <span className="custom-button-text">login with google</span>
                                </CustomButton>
                            </div>
                            <div className="col-md-6">
                                <CustomButton classes={"overlay"} onClick={handleLogin}>
                                    <i className="fa-brands fa-apple custom-button-icon"></i>
                                    <span className="custom-button-text">login with apple</span>
                                </CustomButton>
                            </div>
                        </div>

                        <div className="">
                            {/* create vertical lignes */}
                            <p className="text-paragraph center color-grey-text line-between mt-2 mb-2">
                                OR
                            </p>
                        </div>

                        <div className="form-group">
                            <Input 
                                leadingIcon={<i className="fa-solid fa-envelope"></i>}
                                value={state.email}
                                placeholder="Email Address"
                                name="email"
                                handleOnChange={(event) => handleOnChange(event)}
                                type="email"
                                />
                        </div>
                        <div className="form-group">
                            <Input 
                                leadingIcon={<i className="fa-solid fa-key"></i>}
                                value={state.password}
                                placeholder="Password"
                                name="password"
                                type={"password"}
                                handleOnChange={(event) => handleOnChange(event)}
                                >
                                    <i className="fa-solid fa-eye"></i>
                                </Input>
                        </div>

                        <div className="form-group space-between mt-3">
                            <div>
                                <label className="control control-checkbox">
                                    <input type="checkbox" checked={state.checkbox} onChange={()  => setstate({ checkbox: !state.checkbox })}/>
                                        Remember me
                                    <div className="control_indicator"></div>
                                </label>
                            </div>
                            <div className="capitalize forgot-password" onClick={handleForgotPassword}>
                                forgot password
                            </div>
                        </div>

                        <div className="form-group width-content block-center">
                            <CustomButton 
                                onClick={(event) => handleLogin(event)}
                                classes={"filled"}
                                >
                                    login to your account
                                </CustomButton>    
                        </div>

                        <div className="form-group">
                            <p className="text-paragraph center color-grey mt-3">
                                Not a member yet? <span onClick={() => navigate("auth/register")}>Register Now</span>
                            </p>
                        </div>
                    </div>

                    
                    {/* text on the button */}
                    <div className="space-between login-footer">
                        <div>
                            <a href="/#" className="color-grey">privacy policy</a>
                        </div>

                        <div>
                            <span className="color-grey">copyright 2022</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Login;