import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import styles from './ProductPanel.module.css'
import ProductModal from '../ProductModal'

export class index extends Component {
  constructor(props) {
    super(props)
    this.productId = props.productId
    this.categoryId = props.categoryId
    this.productName = props.productName
    this.price = props.price
    this.ingredients = props.ingredients
    this.description = props.description
    this.productImageUrl = props.productImageUrl
    this.state = {
      showmodal: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState((prevState) => ({ showmodal: !prevState.showmodal }))
  }

  render() {

    const description = `${this.description}. ${this.ingredients}`
    const showModal = this.state.showmodal
    return (
      <>
        <Col
          sm={12}
          lg={6}
          onClick={this.toggleModal}
          className={styles.productMainContainer}
        >
          <div className={styles.productInfosDiv}>
            <h5 className='fw-light'>{this.productName}</h5>
            <p className='fw-lighter'>
              <small className='d-block text-truncate'>
                {description}
              </small>
            </p>
            <p className='fs-5'>R$ {this.price}</p>
          </div>
          <div className={styles.productImageDiv}>
            <Image
              className={`${styles.productImage} mt-2`}
              src={this.productImageUrl}
              thumbnail
            />
          </div>
        </Col>
        <ProductModal
          productId={this.productId}
          show={showModal}
          handleClose={this.toggleModal}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)