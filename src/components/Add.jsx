import React, { useContext, useState } from 'react'
import { ChatContext } from '../context/ChatProvider'

const Add = () => {

    const { addMessage, usuario } = useContext(ChatContext);
    const [message, setMessage] = useState('')

    const add = (e) => {
        e.preventDefault();
        if (!message.trim()) {
            console.log('viene vacio')
            return
        }

        addMessage( usuario.uid, message )
        setMessage('')
        
    }

    return (
        <form 
            className="fixed-bottom input-group p-3 bg-dark"
            onSubmit={ add }
        >
            <input 
                type="text" 
                className="form-control"
                value={ message }
                onChange={ e => setMessage(e.target.value) }
            />
            <div className="input-group-append">
                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Add
