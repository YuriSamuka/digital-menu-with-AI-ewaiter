import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

class index extends React.Component {
    render() {
        const { products, productId, show, handleClose } = this.props;
        const product = products.find(product => product.product_id === productId);

        return (
            <Modal
                show={show}
                backdrop="static"
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                fullscreen={'sm-down'}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {product?.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <Image src={product?.product_image_url} fluid />
                            </Col>
                            <Col xs={12} md={4}>
                                {product?.ingredients}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products,
});

export default connect(mapStateToProps)(index);
