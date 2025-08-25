import logo from "../../images/logo.png"

function Header() {
    return (
        <header className="header page__header">
                <img
                  src={logo}
                  alt="Logo de Around the US"
                  className="logo"
                />
              </header>
    )
}

export default Header