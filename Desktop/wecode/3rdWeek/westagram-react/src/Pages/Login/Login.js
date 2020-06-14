import React, { Component } from 'react'
import "./Login.css";

class Login extends Component {
    constructor (){
        super();
        this.state = {
            validID : "",
            validPW : "",
            pwType : "password",
            pwShow : "",
            showText : "비밀번호 표시",
        }
    }
    idValid = (e) => {
        if(e.target.value){
            this.setState({
                validID : e.target.value,
            });
        } else {
            this.setState({
                validID : e.target.value,
            });
        }
    }
    pwValid = (e) => {
        if(e.target.value){  
            this.setState({
                validPW : e.target.value,
                pwShow : "visible",
            });
        } else {
            this.setState({
                validPW : e.target.value,
                pwShow : "",
            });
        }
    }
    pwTypeFunc = () => {
        if(this.state.pwType ===  "password"){
            this.setState({
                pwType : "text",
                showText : "숨기기",
            });
        } else {
            this.setState({
                pwType : "password",
                showText :"비밀번호 표시",
            })
        }
    }

    // allow = () => {
    //     if(this.state.validID === true && this.state.validPW === true){
    //         this.setState({
    //             LoginAllow : true,
    //         })
    //     } else {
    //         this.setState({
    //             LoginAllow : false,
    //         })
    //     }
    // }
    
    render() {
        console.log(this.state.validID && this.state.validPW)
        return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-logo"></div>
                <form className="login-form">
                    <div className="label-move-one">
                        <input onChange={this.idValid} type="text" id="IDINPUT" className={`inputId${this.state.validID ? " down" : ""}`}/>
                        <label htmlFor="IDINPUT" className={`labelId ${this.state.validID ? " up" : ""}`}>전화번호, 사용자 이름 또는 이메일</label>
                    </div>
                    <div className="label-move-two">
                        <input onChange={this.pwValid} type={this.state.pwType} id="PWINPUT" className={`inputId${this.state.validPW ? " down" : ""}`}/>
                        <label htmlFor="PWINPUT" className={`labelPw ${this.state.validPW ? " up" : ""}`}>비밀번호</label>
                        <div className="pwShow">
                            <button type="button" onClick={this.pwTypeFunc}className={`pwShow-btn ${this.state.pwShow}`}>
                                {this.state.showText}
                            </button>
                        </div>
                    </div>
                    <button className={`loginBtn ${(this.state.validID && this.state.validPW.length > 5) ? "true" : "false"}`} type="button">로그인</button>
                </form>
                <div className="passwordFind">
                    <a href="#">비밀번호를 잊으셨나요?</a>
                </div>
            </div>
        </div>
        )
    }
}
export default Login