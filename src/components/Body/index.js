import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <>
          {showLeftNavbar ? (
            <div>
              <h1>Left Navbar</h1>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
          ) : null}

          {showContent ? (
            <div>
              <h1>Content</h1>
              <p>asjcfnsehv jmawerlvbjsrn tovbiawevjsfgeroijk</p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div>
              <h1>Right Navbar</h1>
              <p>AD 1</p>
              <p>AD 2</p>
            </div>
          ) : null}
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
