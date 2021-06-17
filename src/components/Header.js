
const Header = (props) => {
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/SVCCLogo.png" alt="Logo" />
          </div>
          <div className="light">
            <h4 className="header-title">
              Silicon Valley Code Camp
            </h4>
          </div>
          <div className="text-dark">
            Hello Duy Khau &nbsp;&nbsp;
            <span>
              <a href="#">Sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;