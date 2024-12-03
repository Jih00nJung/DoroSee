import React from "react";
import './Login.css'

import Layout from "../components/Layout";


const Login = () => {
    window.alert("Login.js 들어옴");
    return (
            <>
                <Layout/>
                <h1>도로See</h1>
                <div className="nav_item">
                    <button>회원</button>
                    <button>관리자</button>
                </div>
                <br/>
                <div className="id">
                    <input type="text" placeholder="아이디를 입력하세요."/></div>
                <div className="password">
                    <input type="password" placeholder="비밀번호를 입력하세요."/></div>
                <br/>
                <div className="submit">
                    <button>로그인</button>
                </div>
                <br/>
                <a href="">아이디 찾기</a>
                &nbsp;/&nbsp;
                <a href="">비밀번호 찾기</a>
                &nbsp;/&nbsp;
                <a href="">회원가입</a>

            </>
    )
}

export default Login