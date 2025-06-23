import { useState } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

function Message() {
    const navigate=useNavigate();

    const [name, setName]=useState("");
    const [message, setMessage]=useState("");
    const [isSubmitting, setIsSubmitting]=useState(false);
    const [status, setStatus]=useState("");
    
    const handleSubmit=async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("Sending...");

        try {
            const response=await fetch("/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, message })
            });

            if(response.ok){
                setMessage("");
                setName("");
                setStatus("Success! Message posted.");
            }
            else{
                const data=await response.json();
                setStatus(`Failed request: ${data.error}`);
            }
        }
        catch (err) {
            console.error("Failed to send message:", err);
            setStatus("Failed  to send message");
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='App-header'>
            <h2>Send message</h2>
            <form onSubmit={handleSubmit}>
                <label>Message</label>
                <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required/><br/>
                <label>Name</label>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
                <input className="button-17" type="submit" value={isSubmitting ? "Posting..." : "Post"} disabled={isSubmitting}/>
            </form>
            <div style={{color: status.startsWith("Failed") ? "red" : "green" }}> {status} </div>
            <button className="button-17" role="button" onClick={() => navigate("/")}>Go to home page</button>
        </div>
        
    );
}

export default Message;