import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import './index.scss'

import Button from '../../components/Button'
import WishCard from './WishCard';

function Wishes() {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='cst-wish-bg'>
            <h1 className='cst-wish-title'>WISHES</h1>
            <Row className='m-0 d-flex justify-content-center'>
                <Col xs={11} md={6}>                            
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control
                            {...register("wishGuest", { required: true })} 
                            className='my-5 shadow-none cst-form'
                            placeholder='Nama Anda'
                        />
                        <Form.Control
                            as="textarea" 
                            {...register("wishText", { required: true })} 
                            className='my-5 shadow-none cst-textarea'
                            placeholder='Isi Ucapan dan Doa'
                        />
                        <Button
                            className="w-100"
                        >
                            send
                        </Button>
                    </Form>

                </Col>
            </Row>

        </div>
    )
}

export default Wishes