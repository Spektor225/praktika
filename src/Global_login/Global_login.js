import { useEffect, useState } from 'react';
import './Global_login.css';



export const GlobalLogin = () =>
{
    const [login, set_login] = useState('')
    const [password, set_password] = useState('')



    useEffect(
        ()=>
        {
            console.log(window.innerWidth, window.innerHeight)
            console.log(window.outerWidth, window.outerWidth)
        }
        ,
        []
    )



    return (
        <div className="container_login">

            <label style={{fontSize: '4vw'}}>Вход</label>

            <div className="div_login">
                <label className='text_header margin_bottom_60'>Вход</label>

                <label className='text_max margin_bottom_5'>Введите логин</label>
                <input 
                    value={login} 
                    onChange={ (text) => set_login(text.target.value) }
                    
                    className='text_input margin_bottom_20' 
                    style={{width: '100%'}}
                />

                <label className='text_max margin_bottom_5'>Введите пароль</label>
                <input 
                    value={password} 
                    onChange={ (text) => set_password(text.target.value) } 
                    
                    className='text_input margin_bottom_60' 
                    style={{width: '100%'}}
                /> 

                <button className='text_max' onClick={() => window.prompt("!!!")}>Войти</button>
            </div>

            {/* <div style={{backgroundColor: 'red', height: '10px', width: '830px'}}></div> */}

        </div>
    )
}



