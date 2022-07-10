import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

import Button from '../../components/Button'
import TransactionPanel from './TransactionPanel'

function Gift() {

    const screenContent = {
        title: "LOVE GIFT",        
        text: "Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk mempelai, dapat melalui virtual account / E-wallet",
        buttonText: "click here"
    }

    const [showPanel, setShowPanel] = useState(false);
    const handleShowPanel = () => setShowPanel(true);
    const handleClosePanel = () => setShowPanel(false);

    return (
        <div className='d-flex flex-column justify-content-center cst-gift-wrap'>
            <Row className='m-0 d-flex justify-content-center text-center cst-gift-content'>
                <Col xs={10} md={6}>
                    {showPanel ? <TransactionPanel/>                
                        : <>
                            <h3 className='cst-live-title'>
                                {screenContent.title}
                            </h3>
                            <p>
                                {screenContent.text}
                            </p>
                            <Button
                            onClick={()=>handleShowPanel()}
                            className="mt-5"
                            >
                                {screenContent.buttonText}
                            </Button>
                        </>                                                     
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Gift