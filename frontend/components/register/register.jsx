import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../greeting/login_modal_container';
import { withRouter } from 'react-router-dom';
import RegisterContent from './register_content'

class Register extends React.Component {
    constructor(props){
        super(props)
    }

    navBar(){
        return (
        <header className="logged-out-nav">
            <div className="logged-out-nav-container">
                <a className="duoLogo" href=""></a>

                <div className="langlogin-container">
                    <div className="site-lang">
                        Site language:
                                <span className="site-lang-language">English</span>
                    </div>
                    <div className="login-button-div">
                        <button className="login-button" id="login-button">Login</button>
                    </div>

                    <LoginModalContainer />

                </div>
            </div>
        </header>
        )
    }

    render (){
        return <RegisterContent />
    }
}

export default withRouter(Register);