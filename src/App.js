import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = boolean => {
    this.setState({showContent: boolean})
  }

  onToggleShowLeftNavbar = boolean => {
    this.setState({showLeftNavbar: boolean})
  }

  onToggleShowRightNavbar = boolean => {
    this.setState({showRightNavbar: boolean})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(showContent)
    return (
      <>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </>
    )
  }
}

export default App
