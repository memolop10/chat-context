import React, { createContext, useEffect, useState } from 'react'
import { auth, db, provider } from '../firebase'

export const ChatContext = createContext()

const ChatProvider = (props) => {
    
    const dataUser = { uid: null, email: null, estado: null }
    const [usuario, setUsuario] = useState(dataUser)
    const [messages , setMessages] = useState([])

    useEffect(() => {

        userDetected()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    const userDetected = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUsuario({ uid: user.uid, email: user.email, estado: true })
                uploadMessages();   
            } else {
                setUsuario({ uid: null, email: null, estado: false })
            }
        })
    }

    const accessUser = async() => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    }

    const singOff = () => {
        auth.signOut()
    }

    const uploadMessages = () => {
        db.collection('chat').orderBy('date')
            .onSnapshot( query => {
                const arrayMessages = query.docs.map( item => item.data())
                setMessages(arrayMessages)
            })
    }

    const addMessage = async(uidChat, textInput) => {
        try {
            await db.collection('chat').add({
                date: Date.now(),
                text: textInput,
                uid: uidChat 
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChatContext.Provider value={{
            usuario,
            accessUser,
            singOff,
            messages,
            addMessage
        }}>
           {props.children} 
        </ChatContext.Provider>
    )
}

export default ChatProvider
