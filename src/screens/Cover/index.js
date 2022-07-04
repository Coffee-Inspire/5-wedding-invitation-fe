import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

import Button from '../../components/Button'

function Cover(props) {

    const {
        show,
        setShow
    } = props

    const contentData = {
        cover: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }

    const closeCover = () => {        
        setShow(false)
        document.body.style.overflow = "auto"

    }

    useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])
    

    return (
        <div
            className={(show ? 'd-block' : 'd-none') + ' cst-cover-container'}
        >
            <img
                className='cst-cover-photo'
                src={contentData.cover}
                alt=""
            />
            <Row className='m-0 cst-cover-content'>
                <Col md={6} className='text-center'>
                    <h1 className='cst-cover-bride'>PETER & MEGA</h1>
                    <h5 className='cst-cover-dear'>Dear :</h5>
                    <h4 className='cst-cover-guest my-4'>Nama Tamu</h4>
                    <Button
                        onClick={()=>closeCover()}
                    >
                        Buka Undangan
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Cover