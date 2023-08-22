import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Card, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

import { fetchRestaurant } from '../../redux/actions';
import styles from './Header.module.css';

export class Header extends Component {
    componentDidMount() {
        this.props.fetchRestaurant(1);
    }

    render() {
        const {
            restaurantName,
            logoImage,
            restaurantLocation,
            bannerImage
        } = this.props;

        return (
            <Card className={`bg-dark text-white position-relative ${styles.headerCard}`}>
                <Card.Img src={bannerImage} alt="Banner Image" className={styles.bannerImage} />
                <div className={`position-absolute top-0 start-0 w-100 h-100 ${styles.overlay}`} />
                <Card.ImgOverlay className={`d-flex flex-column justify-content-center align-items-center ${styles.overlayContent}`}>
                    <Image className={`mb-4 ${styles.logo}`} src={logoImage} alt="Logo Image" />
                    <h1 className={`text-center ${styles.restaurantName}`}>{restaurantName}</h1>
                    <div className="d-flex align-items-center justify-content-center">
                        <Button variant="outline-light" className={`me-2 fw-bold mb-1 ${styles.openNowButton}`}>
                            Aberto agora
                            <FaCheckCircle size={12} className={styles.checkIcon} />
                        </Button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className={`text-center mb-0 fw-bold ${styles.location}`}>
                            <FaMapMarkerAlt size={16} className={styles.locationIcon} />
                            {restaurantLocation}
                        </p>
                    </div>
                </Card.ImgOverlay>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    logoImage: state.restaurant.restaurant.imageLogoUrl,
    restaurantLocation: state.restaurant.restaurant.restaurantAddress,
    bannerImage: state.restaurant.restaurant.coverBgUrl,
    restaurantName: state.restaurant.restaurant.restaurantName,
});

const mapDispatchToProps = {
    fetchRestaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
