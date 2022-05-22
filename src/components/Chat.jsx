
import React, { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../context/ChatProvider'
import Add from './Add'

const Chat = () => {

    const { messages, usuario } = useContext(ChatContext)
    const refChatDiv = useRef(null)


    useEffect(() => {
        console.log(refChatDiv)
        refChatDiv.current.scrollTop = refChatDiv.current.scrollHeight;
    }, [messages])

    return (
        <div className="mt-3 px-2"
            style={{ height:'75vh', overflowY: 'scroll' }}
            ref={ refChatDiv }
        >

            {
                messages.map((item, index) => (
                    usuario.uid === item.uid ? (
                    <div className="d-flex justify-content-end mb-2" key={index}>
                        <span className="badge badge-pill badge-primary">
                            {item.text}
                        </span>
                    </div>

                    ):(

                    <div className="d-flex justify-content-start mb-2" key={index}>
                        <span className="badge badge-pill badge-secondary">
                            {item.text}
                        </span>
                    </div>
                    )
                ))
            }


          <Add />
        </div>
    )
}

export default Chat
