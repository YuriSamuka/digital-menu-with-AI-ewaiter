import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import CategoryPanelItem from '../CategoryPanelItem'
import { fetchProducts } from '../../redux/actions'

export class index extends Component {

    componentDidMount() {
        this.props.fetchProducts(1)
    }

    render() {
        const categories = this.props.categories || []
        return (
            <Container>
                {categories.map((v) => <CategoryPanelItem categoryId={v.categoryId} />)}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.category.category
})

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(index)