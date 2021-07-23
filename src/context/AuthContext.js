import { useContext, createContext, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        return firebase.auth().onAuthStateChanged(firebaseUser => {
            setUser(firebaseUser)
            setLoading(false)
        })
    })

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithPopup(provider)
    }

    const logout = async () => await firebase.auth().signOut()

    return (
        loading ?
        <div>Loading...</div> :
        <AuthContext.Provider value={{ isAuthed: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}