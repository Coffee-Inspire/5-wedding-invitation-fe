import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import axios from 'axios'
import { useForm } from "react-hook-form";
import './index.scss'

import BannerOverlay from '../../components/BannerOverlay'
import Button from '../../components/Button'

function Reservation() {

    const screenContent = {
        title: "RSVP",
        text: "*Kepada tamu undangan diharapkan untuk mengisi form kehadiran dibawah ini",
        buttonText: "send"
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => postData(data);
    

    const postData = (data) => {
        axios.post(process.env.REACT_APP_RSVP_API, data)
        .then(res => {} )
    }
    
    return (
        <div className='d-flex flex-column justify-content-center cst-reserve-bg-photo'>
            <BannerOverlay className='text-center'>
                <Row className='m-0 d-flex justify-content-center'>
                    <Col xs={10} md={6}>
                        <h3 className='cst-reserve-title'>
                            {screenContent.title}
                        </h3>
                        <p>
                            {screenContent.text}
                        </p>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row className='m-0'>
                                <Col md={3} className='p-0 d-flex  align-items-center'>
                                    <label>Nama</label>
                                </Col>  
                                <Col md={9} className='p-0'>
                                    <Form.Control
                                        {...register("guestName", { required: true })} 
                                        className='shadow-none cst-form'
                                    />
                                </Col>

                                <Col md={3} className='p-0 d-flex  align-items-center'>
                                    <label>Jumlah Tamu</label>
                                </Col>  
                                <Col md={9} className='p-0'>
                                   <Form.Select
                                        {...register("guestCount", { required: true })} 
                                        className='shadow-none cst-select'
                                   >
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Select>
                                </Col>

                                <Col md={3} className='p-0 d-flex  align-items-center'>
                                    <label>Kehadiran Tamu</label>
                                </Col>  
                                <Col md={9} className='p-0'>
                                   <Form.Select
                                        {...register("guestStatus", { required: true })} 
                                        className='shadow-none cst-select'
                                   >
                                        <option>Hadir</option>
                                        <option>Tidak Dapat Hadir</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Button
                                className="mt-5 w-100"
                                >
                                {screenContent.buttonText}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </BannerOverlay>
        </div>
    )
}

export default Reservation