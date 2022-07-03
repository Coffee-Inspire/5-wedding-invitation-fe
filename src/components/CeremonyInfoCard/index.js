import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss' 

import Button from '../Button'

function CeremonyInfoCard({props}) {

    const {
        title,
        buttonTitle,
        locationText,
        day,
        month,
        date,
        year,
        time
    } = props;

    return (
        <div className='d-flex justify-content-center align-items-center p-5'>
            <div className='text-center'>
                <h4 className='cst-cer-title '>{title}</h4>
                <Row className='mx-0 mt-5 mb-4 d-flex justify-content-center align-items-center cst-cer-date-row'>
                    <Col xs={3} md={2}>
                        <p>
                            {month}
                        </p>
                    </Col>
                    <Col xs={5} md={2} className='cst-cer-day-col'>
                        <p>{day}</p>
                        <h2 className='cst-text-highlight-one text-center'>{date}</h2>
                    </Col>
                    <Col xs={3} md={2}>
                        <p>
                            {year}
                        </p>
                    </Col>
                </Row>
                <p className='my-4'>{time}</p>
                <p className='my-2'>Lokasi:</p>
                <p className='m-0'>{locationText}</p>
                <Button
                    className="mt-5"
                >
                    {buttonTitle}
                </Button>
            </div>
        </div>
    )
}

export default CeremonyInfoCard