import { Container } from "@mui/material";
import React, {FC} from "react";
import { Button, Form } from "react-bootstrap";
import { Footer } from "../components/footer/footer";
import { MainNavbar } from "../components/navbar/mainnavbar";
import logo from '../public/mainheader.svg'


const Login:FC<{}> = () => {
    return (
    <div className="login-main-container" >
        <MainNavbar linkList = {
          [
            {
              linkName: 'Home',
              href: '/'
            },
            {
              linkName: 'Blog',
              href: '/'
            },
            {
              linkName: 'About',
              href: '/about'
            },
            {
              linkName: 'Contact',
              href: '/'
            }
          ]
        }
        Logo = {logo}
        userAvatar ={true}
         />
         <Container id = 'login-form-container'>
                
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id ="login-form-label" >Email address</Form.Label>
                    <Form.Control id ="login-form-input" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We will never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label id ="login-form-label" >Password</Form.Label>
                    <Form.Control id ="login-form-input" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
         </Container>
    </div>)
}

export default Login