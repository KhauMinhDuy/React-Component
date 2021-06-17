
const SpeakerToolBar = (props) => {
  const {theme, setTheme, showSessions, setShowSessions} = props;

  const sessionsHandler = event => {
    setShowSessions(event.target.checked);
  }

  const themeHandler = event => {
    setTheme(event.target.value);
  }

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolbar d-flex flex-column flex-lg-row pt-3">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions &nbsp;&nbsp;</b>
              <label className="fav">
                <input type="checkbox" checked={showSessions}
                  onChange={sessionsHandler}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select 
                  className="form-control theme" 
                  value={theme}
                  onChange={themeHandler}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SpeakerToolBar;
