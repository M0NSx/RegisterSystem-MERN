import React, { useState } from 'react'
import './Register.css'
import ImageL from './img/Site-logo.png';
import ImageBG from './img/BF-BG2.png';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';

export default function Register() {

    const [data, setData] = useState({
        nickname: '',
        email: '',
        password: '',
    })

    const registerUser = (e) => {
        e.preventDefault()
    }

  return (

    <>
    <img className='image-bf' src={ImageBG} />
    <div className='container'>
        <div className='container-box'>
            <form onSubmit={registerUser} className='form'>
                <img className='logo-site' src={ImageL} />
                <h1>Register</h1>
                <div className='input-box'>
                    <span className='icon'><i className="bi bi-person"></i></span>
                    <input type="text" name='nickname' placeholder='Nickname' required
                    value={data.nickname} onChange={(e) = setData({...data, nickname: e.target.value})}
                    />
                </div>
                <div className='input-box'>
                    <span className='icon'><i className="bi bi-envelope"></i></span>
                    <input type="email" name='email' placeholder='Email' required
                    value={data.email} onChange={(e) = setData({...data, email: e.target.value})}
                    />
                </div>
