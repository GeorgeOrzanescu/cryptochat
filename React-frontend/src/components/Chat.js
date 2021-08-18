import React, { useState , useEffect ,useRef} from 'react';
import { db } from '../firebase';
import SendMessage from './SendMessage';
import { auth } from '../firebase.js';


function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])


    return (
        <div className="msg-box">
            <h3 style={{ textAlign:"center" }}>Share your thoughts</h3>
            <div className="msgs"></div>
            {messages.map(({ id, text, photoURL,uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="user"/>
                            <p>{text}</p>
                        </div>
                    </div>
            ))}
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
