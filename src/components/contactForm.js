import React, {useState} from "react";
import { Form, Row, Button } from "react-bootstrap";

function SendMessage(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState({error:'', field:''})

    const validate = () => {
        const emailRegex =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
        const emailConfirm = emailRegex.test(email)

        if(name == ''){ setError({error: 'Invalid name', field: 'name'}); return false}

        if(!emailConfirm){ setError({error: 'Invalid email', field: 'email'}); return false}

        if(tel == ''){ setError({error: 'Invalid tel', field: 'tel'}); return false}

        if(message == ''){setError({error: 'Invalid message', field: 'message'}); return false}

        return true
    }
    const send = () => {
        if(validate()){
            console.log('Name: %s \nEmail: %s\nTel: %s\nMessage: %s', name, email, tel, message)    
        }
    }

    return(
        <Row style={{width: '50%', margin: 'auto', marginBottom: '50px'}}>
            <Form>
                {error.field == 'name' && (
                    <div style={{ fontSize: 15, color: "red", fontFamily: 'Poppins, sans-serif' }}>{error.error}</div>
                )}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>*Name / Organization</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                {error.field == 'tel' && (
                    <div style={{ fontSize: 15, color: "red", fontFamily: 'Poppins, sans-serif' }}>{error.error}</div>
                )}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>*Telephone</Form.Label>
                    <Form.Control type="text" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                </Form.Group>
                {error.field == 'email' && (
                    <div style={{ fontSize: 15, color: "red", fontFamily: 'Poppins, sans-serif' }}>{error.error}</div>
                )}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>*Email Address</Form.Label>
                    <Form.Control type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                {error.field == 'message' && (
                    <div style={{ fontSize: 15, color: "red", fontFamily: 'Poppins, sans-serif' }}>{error.error}</div>
                )}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>*Message</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" style={{width: '80px', float: 'right'}} onClick={()=>send()}>Send</Button>{' '}
            </Form>
        </Row>
    )
}

export default SendMessage