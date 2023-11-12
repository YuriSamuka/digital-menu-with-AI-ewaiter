import React, { Component } from 'react'
import Header from './components/Header'
import CategoryNavbar from './components/CategoryNavbar'
import Footer from './components/Footer'
// setup fake backend
import { configureFakeBackend } from './helpers'
import { USE_FAKE_BACKEND } from './constants'
import DigitalMenuBody from './components/DigitalMenuBody'

// configure fake backend
if (USE_FAKE_BACKEND) {
  configureFakeBackend()
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CategoryNavbar />
        <DigitalMenuBody />
        <Footer />
      </div>
    )
  }
}

export default App;
