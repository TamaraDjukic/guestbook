import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      fetchMessages();
    }, []);

    const fetchMessages = async () => {
      try {
        const response=await fetch('http://localhost:4000/');
        if(!response.ok)
          console.error("Failed to fetch messages");
        
        const data = await response.json();
        setMessages(data);
      }
      catch(err) {
          console.error("Error while getting messages!: ", err);
      }
    };

    return (
        <div className='App App-header'>
            <h1>Guestbook</h1>
            <p>See what people wrote about us and feel free to leave a message.</p>
            <div>
              <h3>Last 10 messages:</h3>
              <ol>
                {messages.map((msg) => (
                  <li key={msg.id}>
                    <p><strong>{msg.name}</strong> wrote: "{msg.message}"</p>
                    <small>Posted at: {new Date(msg.created_at).toLocaleString()}</small>
                  </li>
                ))}
              </ol>
            </div>
            <button className="button-17" role="button" onClick={() => navigate("/messages")}>Leave message</button>
      </div>
    );
  }

export default Home;