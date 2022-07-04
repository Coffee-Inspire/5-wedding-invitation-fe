import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

function Introduction() {
  return (
    <>
        <Row className="mx-0 mb-3 cst-intro-row">
            <Col md={5} className='px-0 d-flex align-items-center'>
                <img
                    src={"https://images.unsplash.com/photo-1546572797-e8c933a75a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    className='cst-intro-photo'
                    alt=""
                />                
            </Col>
            <Col md={7} className='d-flex justify-content-center align-items-center'>
                <div className='cst-intro-name-card'>
                    <h1 className='py-3 cst-text-highlight-two cst-intro-text-spacing fw-normal'>PETER JIMIE</h1>
                    <p className='m-0'>Putra Kedua Dari :</p>
                    <p className='m-0'>Lorem ipsum dolor sit amet, consectus adispicing elit. Aliquas quis sodales metus</p>                
                </div>
            </Col>
        </Row>

        <Row className="mx-0 mb-3 cst-intro-row">
            <Col md={7} className='d-flex justify-content-center align-items-center'>
                <div className='cst-intro-name-card'>
                    <h1 className='py-3 cst-text-highlight-two cst-intro-text-spacing fw-normal'>MEGA PISTIA</h1>
                    <p className='m-0'>Putri Pertama Dari :</p>
                    <p className='m-0'>Lorem ipsum dolor sit amet, consectus adispicing elit. Aliquas quis sodales metus</p>                
                </div>
            </Col>
            <Col md={5} className='px-0 d-flex justify-content-end align-items-center'>
                <img
                    src={"https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    className='cst-intro-photo'
                    alt=""
                />                
            </Col>
        </Row>
    </>
  )
}

export default Introduction