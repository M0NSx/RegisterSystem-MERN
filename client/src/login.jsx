import React from 'react'
import './Register.css'
import './Login.css'
import ImageL from './img/Site-logo.png';
import ImageBG from './img/BF-BG2.png';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

export default function Login() {

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = (e) => {
        e.preventDefault()
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
                        value={data.email} onChange={(e) = setData({...data, email: e.target.value})}
                        />
                    </div>
                    <div className='input-box'>
                        <span className='icon'><i className="bi bi-key"></i></span>
                        <input type="password" name='password' placeholder='Password' required
                        value={data.email} onChange={(e) = setData({...data, email: e.target.value})}
                        />
                    </div>
                    <div id='settings-create' className="d-flex justify-content-between align-items-center">
                        <div>
                            <input
                                type='checkbox'
                                name='rememberme'
                                className='remember-me'
                            />
                                <span className='remember-me-span'>
                                    Remember me
                                </span>
                        </div>
                        <Link to='/register'> - Don't have an account?</Link>
                    </div>
                    <button className='btn btn-primary'>Login</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

