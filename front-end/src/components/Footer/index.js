import React from 'react'
import { Container, Row } from 'react-bootstrap'

const index = () => {
    return (
        <Container>
            <Row>
                <p className='text-center'>
                    Desenvolvido por <a target="_blank" href='https://www.yuridpaula.com/'>Yuri D Paula</a>
                    <small> - let's build something amazing together</small>
                </p>
            </Row>
        </Container>
    )
}

export default index