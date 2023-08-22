import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategory } from '../../redux/actions';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './CategoryNavbar.module.css'

export class CategoryNavbar extends Component {
    constructor(props) {
        super(props);
        this.navbarContainer = React.createRef();
        this.handleScrollLeft = this.handleScrollLeft.bind(this);
        this.handleScrollRight = this.handleScrollRight.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategory();
    }

    handleScrollLeft() {
        this.navbarContainer.current.scrollLeft += 100
    }

    handleScrollRight() {
        this.navbarContainer.current.scrollLeft -= 100
    };

    render() {
        return (
            <Navbar bg="light" expand="lg" className="mb-3">
                <div className={styles.leftButtonContainer}>
                    <FaChevronLeft
                        size={22}
                        onClick={this.handleScrollLeft}
                        className={styles.arrowIcon}
                    />
                </div>
                <Container ref={this.navbarContainer} fluid className={styles.NavbarContainer} style={{ overflowX: "auto", transition: "transform 0.3s ease" }}>
                    {/* <Navbar.Toggle aria-controls="category-navbar" /> */}
                    <Navbar id="category-navbar">
                        <Nav className={styles.categoryNavbar}>
                            {this.props.categories.map((category, index) => (
                                <Nav.Link
                                    key={index}
                                    href="#"
                                    className={styles.categoryLink}
                                >
                                    {category}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar>
                </Container>
                <div className={styles.rightButtonContainer}>
                    <FaChevronRight
                        size={22}
                        onClick={this.handleScrollRight}
                        className={styles.arrowIcon}
                    />
                </div>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.category.category
})

const mapDispatchToProps = {
    fetchCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNavbar)