import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import bgImg from '../assets/photo.jpg';
import {auth} from '../firebase';

export default function Form(){     
     
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = () => {
        createUserWithEmailAndPassword(auth, username, password).then(e => {
            console.log('LOGGGED')
            console.log(e);
        }).catch(e => {
            console.log('error');
            console.log(e);
        });
    };

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={(e) => e.preventDefault()}>
                    <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder='username' />
                    <input type="text" value={password} onChange={e=>setPassword(e.target.value)} placeholder='password' />
                    <button className='btn' onClick={onSubmit}>Sign In</button>
                </form>
            
                

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )

}