import React, { useState } from 'react'
import './Register.css'
import './Login.css'
import ImageL from './img/Site-logo.png';
import ImageBG from './img/BF-BG2.png';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios';

export default function Login() {

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = (e) => {
        e.preventDefault()
        axios.get('/')
    }

  return (
    <>
    <div>
        <img className='image-bf' src={ImageBG} />
        <div className='container'>
            <div className='container-box'>
                <form onSubmit={loginUser} className='form'>
                    <img className='logo-site' src={ImageL} />
                    <h1>Login</h1>
                    <div className='input-box'>
                        <span className='icon'><i className="bi bi-envelope"></i></span>
                        <input type="email" name='email' placeholder='Email' required
                        value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                        />
                    </div>
                    <div className='input-box'>
                        <span className='icon'><i className="bi bi-key"></i></span>
                        <input type="password" name='password' placeholder='Password' required
                        value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                        />
