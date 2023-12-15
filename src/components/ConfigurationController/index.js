import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {' '}
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        if (event.target.checked === true) {
          onToggleShowContent(true)
        } else {
          onToggleShowContent(false)
        }
      }
      const onChangeLeftNavbar = event => {
        if (event.target.checked === true) {
          onToggleShowLeftNavbar(true)
        } else {
          onToggleShowLeftNavbar(false)
        }
      }
      const onChangeRightNavbar = event => {
        if (event.target.checked === true) {
          onToggleShowRightNavbar(true)
        } else {
          onToggleShowRightNavbar(false)
        }
      }

      return (
        <div>
          <input type="checkbox" id="1" onChange={onChangeContent} />
          <label htmlFor="1">Content</label>
          <input type="checkbox" id="2" onChange={onChangeLeftNavbar} />
          <label htmlFor="2">Left Navbar</label>
          <input type="checkbox" id="3" onChange={onChangeRightNavbar} />
          <label htmlFor="3">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
