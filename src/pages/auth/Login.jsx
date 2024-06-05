import { InputField, SubmitButton } from "@/components"
import http from "@/http"
import { useFormik } from "formik"
import { useState } from "react"
import {Col, Form, Row } from "react-bootstrap"
import * as Yup from "yup"

export const Login = () => {

const [remember, setRemember] = useState(false)

    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
        },
        validationSchema: Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required(),
        }),
        onSubmit: (values, { setSubmitting }) => {
            http.post('/auth/login', values)
            .then()
            .catch()
            .finally(() => setSubmitting(false))
        }
        
    })
    return<Col lg={4} md={6} sm={8} className="bg-white py-3 my-5 mx-auto rounded-3 shadow-sm">
        <Row>
            <Col className= "text-center">
            <h1>Login</h1>
            </Col>
        </Row>
        <Row>
            <Col>
        <Form onSubmit={formik.handleSubmit}>
            <InputField formik={formik} name="email" label="Email" type="email" required/>

            <InputField formik={formik} name="password" label="password" type="password" required/>

        
            <Form.Check className = "mb-3">
                <Form.Check.Input name= "remember" id= "remember" checked= {remember} onChange={() => setRemember (!remember)} />
                <Form.Check.Label htmlFor="remember">Remember Me</Form.Check.Label>
            </Form.Check>


            <Form.Group className= "d-grid">
               <SubmitButton label ="Log In" icon = " fa-arrow-right-to-bracket" disabled ={formik.isSubmitting} />
            </Form.Group>
        </Form>
        </Col>
        </Row>
    </Col>
}