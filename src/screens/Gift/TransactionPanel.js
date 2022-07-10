import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './index.scss';

import QR from '../../assets/images/qr.png';

function TransactionPanel() {

    return (
        <Row className='cst-wish-panel d-flex flex-column flex-md-row align-items-center'>
            <Col xs={12} md={6} className='cst-wish-panel-qr'>
                <img src={QR} alt="" className='cst-wish-qr-img'/>
            </Col>
            <Col xs={12} md={6} className='cst-wish-panel-bankacc'>
                <h4 className='my-3'>BCA</h4>
                <h4 className='my-3'>1767235721.</h4>
                <h4 className='my-3'>Lorem Ipsum</h4>
            </Col>
        </Row>
    )
}

export default TransactionPanel