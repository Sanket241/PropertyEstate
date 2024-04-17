import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

const AuthbyGoogle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                })
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');

        } catch (error) {
            console.log("Could not connect with google", error)
        }
    }
    return (
        <>
            <button onClick={handleGoogle} type="button" className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95' >Continue with Google</button>
        </>
    )
}

export default AuthbyGoogle