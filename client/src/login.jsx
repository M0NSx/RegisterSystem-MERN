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
