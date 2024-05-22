import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { loginUserApi } from '../../apis/Api'


const Login = () => {

  //useState
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Error state
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  //validation
  const validation = () => {
    let isValid = true;

    if (email.trim() === '' || !email.includes('@')) {
      setEmailError('Email is empty or invalid')
      isValid = false
    }

    if (password.trim() === '') {
      setPasswordError('Password is required')
      isValid = false
    }
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validation) {
      return
    }

    const data = {
      "email": email,
      "password": password
    }

    loginUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)

        //Setting token and user data in local storage

        localStorage.setItem('token',res.data.token)

        //setting user data
        const convertedData=JSON.stringify(res.data.userData)

        //local stirage set 
        localStorage.setItem('user',convertedData)
      }
    })



  }
  return (
    <>
      <div className='container '>
        <h1>Login</h1>
        <form className='w-50'>

          <label className='mt-2'>Email :{email}</label>
          <input onChange={(e) => setEmail(e.target.value)} type='text' className='form-control' placeholder='Enter your email' />
          {
            emailError && <p className='text-danger'>{emailError}</p>
          }

          <label className='mt-2'>Password :{password}</label>
          <input onChange={(e) => setPassword(e.target.value)} type='text' className='form-control' placeholder='Enter your password' />
          {
            passwordError && <p className='text-danger'>{passwordError}</p>
          }


          <button onClick={handleSubmit} className='btn btn-dark mt-2 w-100'>Login</button>


        </form>
      </div>
    </>
  )
}


export default Login



