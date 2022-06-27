import React, {useState} from "react";
import { Form, Row } from "react-bootstrap";

function SendMessage(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState({error:'', field:''})

    const send = () => {
        console.log('Name: %d', name)
        console.log('Email: %d', email)
        console.log('Tel: %d', tel)
        console.log('Message: %d', message)
    }
    const validate = () => {
        const emailRegex =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
        const emailConfirm = emailRegex.test(email)
        if(!emailConfirm){ setError({error: 'Invalid email', field: 'email'}); return false}

        if(name == ''){ setError({error: 'Invalid name', field: 'name'}); return false}

        if(tel == ''){ setError({error: 'Invalid tel', field: 'tel'}); return false}

        if(message == ''){setError({error: 'Invalid message', field: 'message'}); return false}

        return true
    }

    return(
        <Row style={{width: '50%', margin: 'auto'}}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>*Name / Organization</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>*Telephone</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>*Email Address</Form.Label>
                    <Form.Control type="email"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>*Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Row>
    )
}

export default SendMessage