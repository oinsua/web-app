import { useEffect } from 'react'
import { io } from "socket.io-client";

function Chat() {
  
  const socket = io(process.env.REACT_APP_SOCKET_URL || '');

    useEffect(() => {
        socket.on("hello", (arg) => {
            console.log(arg); // world
          });
    },[socket])
  return (
    <div>Chat</div>
  )
}

export default Chat