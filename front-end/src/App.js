import React, { Component } from 'react'
import Header from './components/Header'
import CategoryNavbar from './components/CategoryNavbar'
import Footer from './components/Footer'
// setup fake backend
import { configureFakeBackend } from './helpers'
import { USE_FAKE_DB } from './constants'
import DigitalMenuBody from './components/DigitalMenuBody'

// configure fake backend
if (USE_FAKE_DB) {
  configureFakeBackend()
}

class App extends Component {
  render() {

    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10', 'Category 11', 'Category 12', 'Category 13', 'Category 14', 'Category 15', 'Category 16', 'Category 14', 'Category 15', 'Category 16'];

    return (
      <div>
        <Header></Header>
        <CategoryNavbar categories={categories} />
        <DigitalMenuBody />
        <Footer />
      </div>
    )
  }
}

export default App;
