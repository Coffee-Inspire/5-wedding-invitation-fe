import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

import Button from '../../components/Button'

function Gift() {

    const screenContent = {
        title: "LOVE GIFT",
        backgroundImage: "https://images.unsplash.com/photo-1610599905570-0dc5693fe584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk mempelai, dapat melalui virtual account / E-wallet",
        buttonText: "click here"
    }

    return (
        <div className='d-flex flex-column justify-content-center cst-gift-wrap'>
            <img src={screenContent.backgroundImage} className='cst-gift-bg-photo' alt=""/>
            <Row className='m-0 d-flex justify-content-center text-center cst-gift-content'>
                <Col xs={10} md={5}>
                    <h3 className='cst-live-title'>
                        {screenContent.title}
                    </h3>
                    <p>
                        {screenContent.text}
                    </p>
                    <Button
                        className="mt-5"
                    >
                        {screenContent.buttonText}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Gift