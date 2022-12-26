import { userIdAdapter } from 'adapters/userIdAdapter';
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import Chat from '../../components/Chat'
import PageLayout from '../../components/PageLayout'

function WebChat() {
  const res_user = useLoaderData();
  const navigate = useNavigate();
  const user = userIdAdapter(res_user);

  const handleClick = () => {
    navigate(`/chat/${user.id}/edit`);
  };
  return (
    <PageLayout>
        <h1>Web Chat</h1>
        <Chat />
        <div style={{border: "1px solid white", borderRadius: "20px", padding: "1rem"}}>
          <div style={{margin: "10px", fontWeight: "700"}}>
            <span>{`Number: ${user.id}`}</span>
          </div>
          <div style={{margin: "10px", fontWeight: "700"}}>
            <span>{`User Name: ${user.username}`}</span>
          </div>
          <div style={{margin: "10px", fontWeight: "700"}}>
            <span>{`Name: ${user.name}`}</span>
          </div>
          <div style={{margin: "10px", fontWeight: "700"}}>
            <span>{`Email: ${user.email}`}</span>
          </div>
          <div style={{margin: "10px", fontWeight: "700"}}>
            <span>{`Phone: ${user.phone}`}</span>
          </div>
          <button onClick={handleClick}>Edit</button>
        </div>
    </PageLayout>
  )
}

export default WebChat