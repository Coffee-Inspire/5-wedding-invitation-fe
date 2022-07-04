import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Row, Col, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import './index.scss'

import Button from '../../components/Button'
import WishCard from './WishCard';

function Wishes() {

    const [data, setData] = useState([])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => postData(data);

    const postData = (data) => {
        axios.post(process.env.REACT_APP_WISH_API, data)
        .then(res => setData(res.data.data) )
    }

    const getData = () => {
        axios.get(process.env.REACT_APP_WISH_API)
        .then(res => setData(res.data.data))
    }

    useEffect(() => {
        getData()
    }, [])
    

    return (
        <div className='cst-wish-bg'>
            <h1 className='cst-wish-title'>WISHES</h1>
            <Row className='m-0 d-flex justify-content-center'>
                <Col xs={11} md={6}>                            
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control
                            {...register("name", { required: true })} 
                            className='my-5 shadow-none cst-form'
                            placeholder='Nama Anda'
                        />
                        <Form.Control
                            as="textarea" 
                            {...register("wish", { required: true })} 
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
            <Row className='mx-0 d-flex justify-content-center cst-wish-section'>
                <Col xs={11} md={6} className='cst-wish-canvas pe-4'>    
                    {data.length > 0 && data.map((item, idx) => (
                        <WishCard key={idx} data={item} />

                    )).reverse()}                        
                </Col>
            </Row>

        </div>
    )
}

export default Wishes