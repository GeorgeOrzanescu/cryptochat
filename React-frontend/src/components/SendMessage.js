import { Button, Input } from '@material-ui/core'
import React, {useState} from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase';

function SendMessage() {
    const [msg, SetMsg] = useState("");

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        SetMsg("");
        // scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="sendMsg">
            <form onSubmit={sendMessage}>
                <Input style={{ width: '50%', fontSize: '25px', fontWeight: '550', marginLeft: '5px', marginBottom: '20px' }} value={msg} onChange={(e) => SetMsg(e.target.value)} placeholder="Message..."/>
                <Button style={{ width: '18%', fontSize: '25px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px', }} type="submit">Send</Button>
            </form>
        </div>
    )
}

export default SendMessage
