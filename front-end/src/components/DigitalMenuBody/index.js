import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import CategoryPanelItem from '../CategoryPanelItem'

export class index extends Component {
    render() {

        console.log("this.props.category!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(this.props.category);
        const categories = this.props.categories
        return (
            <Container>
                {categories && categories.map((v, k) => <CategoryPanelItem categoryId={k} categoryName={v} />)}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.category.category
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)