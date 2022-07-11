import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

// import PhotoCover from '../../assets/photos/cover.jpeg'
import Button from '../../components/Button'
import {fadeIn} from '../../helpers/musicFadeInOut'

function Cover(props) {

    const {
        show,
        setShow,
        music
    } = props
    
    const PhotoCover = "https://uc219e06ad7c42d7d17cd6e1eace.previews.dropboxusercontent.com/p/thumb/ABmFkC98z7YxtpHcZLyHt6k6XtwhxzOlDd6NUyRc9fC7XL1YCRmwuFznrV6XsNqo09okKA2j_cOJqrYuNVbrJlR-7tPVb7L1oGMso4p7PfnVMQBKBOL2MoQm-c3jWTy507ZREsh6Wiiz5iUofkVHv0JFv-VRBHeNWI02UWYM-hBsTjCAQjBI0ryjA2I8OmxZ3-MeRGQQK2otbrrEJ4m--tlDvwKQnZK8MQLIE93jMfNZd8sDIaJjRzXhwzn9Femc14e1N4JbVwcstV4R_568L3qYjTcWCHIhiB4XMVliXQdtSMEfz0z5_GQlNUxnvr8Ico3q6bwTd_pbUvFlmLJzkKc1BcWJVhOKDrtQ20lkPJMdKyLpGOS5Unxp6cTk3qCnhXD-Zf8M5nq2THvO_hj_o0dOrULW9EL1iWeCKWPpK3w8_vHQ8FPJRa1AyAH-CR3hN8DERjpZwZMzoNtlHvMxCnLO6qnPUPhWS6E5siu-vTbJag/p.jpeg"
    const params = (new URL(document.location)).searchParams;
    const guest = params.get('guest');

    const closeCover = () => { 
        setShow(false)
        document.body.style.overflow = "auto"
        fadeIn(music);
        music.play();
        music.loop = true;
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
                src={PhotoCover}
                alt=""
            />
            <Row className='m-0 cst-cover-content'>
                <Col md={6} className='text-center'>
                    <h1 className='cst-cover-bridegroom m-4'>PETER & MEGA</h1>
                    {guest && 
                        <>
                            <h5 className='cst-cover-dear'>Dear :</h5>
                            <h4 className='cst-cover-guest my-4'>{guest}</h4>
                        </>
                    }
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