import React, { Component } from 'react'

export default class Login extends Component {
    onmd=()=>{
        window.location.href="http://localhost:3000/home";
    }
    render() {
        return (
            <div>
                <div className='logn1'>
                    <p><a href='#'>主页&nbsp;</a>/&nbsp; 登录</p>
                </div>
                <div className="logn2">
                    <p>用户名<input type="text"></input></p>
                    <p>密码<input type="password"></input></p>
                    <br/>
                    <button onMouseDown={this.onmd}>登录</button><a href="#">忘记密码了?</a>
                </div>
            </div>
        )
    }
}