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
