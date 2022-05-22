import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatProvider'


const Navbar = () => {
 
    const { usuario, accessUser, singOff} = useContext(ChatContext)
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                Chat
            </span>
            <div>

                {
                    usuario.estado ? (

                        <button 
                            className="btn btn-outline-danger my-2"
                            onClick={ singOff }
                        >
                            Logout
                        </button>   
                    ):(
                        <button 
                            className="btn btn-outline-success my-2 mr-3"
                            onClick={ accessUser }
                            >
                            Access
                        </button>

                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
