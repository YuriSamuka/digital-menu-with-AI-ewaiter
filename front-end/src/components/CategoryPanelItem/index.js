import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import ProductPanel from '../ProductPanel'
import category from '../../redux/category/reducer'

export class index extends Component {
    constructor(props) {
        super(props)
        this.categoryId = props.categoryId;
    }

    getCategoryName(){
        const category = this.props.categories.filter(category => category.categoryId === this.categoryId)
        return category[0].name
    }

    render() {
        const { categoryId, products, categories } = this.props;
        const filteredProducts = products.filter(product => product.categoryId === categoryId )
        return (
            <Row className='mb-4 shadow-sm'>
                <Col md={12}>
                    <h4>{this.getCategoryName()}</h4>
                </Col>
                {filteredProducts.map(e =>
                    <ProductPanel
                        key={e.categoryId}
                        productId={e.productId}
                        categoryId={e.categoryId}
                        productName={e.name}
                        price={e.price}
                        ingredients={e.ingredients}
                        productImageUrl={e.productImageUrl}
                    />
                )}
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.category.category,
    products: state.products.products
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)