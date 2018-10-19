import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {login} from '../actions/login'


class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleInputChange (event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    onLogin(email, password) {
        this.props.login({'email': email, 'password': password})
    }

    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login Website www.blog.local</div>
                            <div className="card-body">
                                <form method="POST" action = "">
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <input onChange={(event)=>this.handleInputChange(event)} id="email" type="email" className="form-control" name="email" placeholder="Your email..." required />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <input onChange={(event)=>this.handleInputChange(event)} id="password" type="password" className="form-control" name="password" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button onClick={() =>this.onLogin(this.state.email, this.state.password)} type="button" className="btn btn-primary">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state =>{
     return {
         dataLogin: state.dataLogin
     }
}

//chuyen du lieu tu action thanh props
const mapDispatchToProps = dispatch=> {
    return bindActionCreators({login: login}, dispatch)
};

export const Login_Container = connect(mapStateToProps,mapDispatchToProps)(Login);