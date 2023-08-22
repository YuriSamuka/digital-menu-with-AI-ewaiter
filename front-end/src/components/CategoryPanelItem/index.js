import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { fetchProducts } from '../../redux/actions'
import ProductPanel from '../ProductPanel'

export class index extends Component {
    constructor(props) {
        super(props)
        this.categoryName = props.categoryName;
        this.categoryId = props.categoryId;
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const { categoryId, products } = this.props;
        const filteredProducts = products.filter((product) => product.category_id === categoryId)
        return (
            <Row className='mb-4 shadow-sm'>
                <Col md={12}>
                    <h4>{this.categoryName}</h4>
                </Col>
                {filteredProducts.map(e =>
                    <ProductPanel
                        key={e.category_id}
                        productId={e.product_id}
                        categoryId={e.category_id}
                        productName={e.name}
                        price={e.price}
                        ingredients={e.ingredients}
                        productImageUrl={e.product_image_url}
                    />
                )}
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products
})

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(index)