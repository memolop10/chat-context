import React, { useContext } from 'react'
import Chat from './components/Chat'
import Navbar from './components/Navbar'
import { ChatContext } from './context/ChatProvider'

const App = () => {
    
    const { usuario } = useContext(ChatContext)
    
    return usuario !== null ?(
        <div>
            <Navbar />
            {
                usuario.estado ? (
                    <Chat />
                ) : (
                    <div className="lead text-center mt-5">
                        Debes Iniciar Sesion
                    </div>
                )
            }
           
        </div>
    ):(
        <div>
            <span> Cargando :&#41; </span> 
        </div>
    )
}

export default App
