import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export class Login extends Component {

    logInSubmit = () => {
        console.log("clicked");
    };


    render() {
        return (
            <section className="login-container">
                <section className="header-container">
                    <section className="chat-name d-flex align-items-end">
                        <p>Chat</p>
                    </section>
                    <header className="chat-logo d-flex justify-content-center">
                        <section className="d-flex flex-column">
                            <section className='shape1 d-flex align-items-center justify-content-center'>
                                <section className="shape-info">
                                    <section className="shape-i-1"></section>
                                    <section className="shape-i-2"></section>
                                </section>
                            </section>
                            <section className='shape2'>
                            </section>
                        </section>
                    </header>
                </section>
                <section className="triangle-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 752" width="752" height="752"
                         className="triangle">
                        <path id="Triangle" className="shp0" d="M0.59,0.46v750.03l750.41,0.52z"/>
                    </svg>
                </section>
                <section className="login-footer d-flex align-items-end justify-content-center">
                    <section className="signUp-area text-center">
                        <p className="text-white">Not registered? <span className="text">Create Account</span></p>
                    </section>
                </section>
                <section className="login-area d-flex justify-content-center">
                    <section className="login-cube">
                        <section className="input-area d-flex justify-content-center align-items-center">
                            <section className="input-cube">
                                <section className="h-50 w-100 input">
                                    <span className="w-100 h-50">USERNAME</span>
                                    <section className="w-100 h-50 inp d-flex align-items-end">
                                        <input className="w-100" type="text" name="username" value={this.props.username}
                                               onChange={this.props.changer}/>
                                    </section>
                                </section>
                                <section className="h-50 w-100 input">
                                    <span className="w-100 h-50">PASSWORD</span>
                                    <section className="w-100 h-50 inp d-flex align-items-end">
                                        <input className="w-100" type="password" name="password"
                                               value={this.props.password} onChange={this.props.changer}/>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className="button-area d-flex align-items-center justify-content-end">
                            <section className="button"
                                     onClick={this.logInSubmit}><NavLink
                                to="/chat" style={{color: "white"}}>Get Started</NavLink></section>
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}