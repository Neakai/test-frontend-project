import { useRef } from 'react'
import { tryLogin } from '../services/login.service'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleClick = async () => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email)
        console.log(password)
        const res = await tryLogin(email, password)

        alert(res)
    }

    return (
        <>
            <div>
                <h1>Inicia sesión en tu cuenta</h1>
                <div className=''>
                    <input type='text' placeholder='Correo electrónico'
                        ref={emailRef} />
                    <input type='password' placeholder='Contraseña'
                        ref={passwordRef} />
                    <button onClick={handleClick}>Iniciar sesión</button>
                </div>
            </div>
        </>
    )
}

export default Login
