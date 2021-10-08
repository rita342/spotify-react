import { Nav } from "react-bootstrap"


const VerticalNavbar = ()=>{
    return(
        <Nav>
        <div className="vertical-nav" id="sidebar">
          <Nav.Link className="navbar-brand mt-3" href="main.html"
            ><img
              src="data:image/png;base64,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"
              alt="Spotify logo"
              className="mx-4 mb-3"
          /></Nav.Link>
  
          <ul className="nav flex-column mb-0">
            <div className="mx-1 mb-1">
              <li className="nav-item d-flex ml-3 px-4">
                <i className="bi bi-house-door-fill"></i>
                <Nav.Link href="Home" className="nav-link ">Home </Nav.Link>
              </li>
            </div>
            <div className="mx-1 mb-1">
              <li className="nav-item d-flex ml-3  px-4">
                <i className="bi bi-search "></i>
                <Nav.Link href="#" className="nav-link "> Search </Nav.Link>
              </li>
            </div>
            <div className="mx-1 mb-1">
              <li className="nav-item d-flex ml-3  px-4">
                <i className="bi bi-collection "></i>
                <Nav.Link href="#" className="nav-link "> Your Library </Nav.Link>
              </li>
            </div>
          </ul>
          <ul className="nav flex-column mt-3">
            <div className="mx-1 mb-1">
              <li className="nav-item d-flex ml-3  px-4">
                <i className="bi bi-plus-square "></i>
                <Nav.Link href="#" className="nav-link"> Create Playlist </Nav.Link>
              </li>
            </div>
            <div className="mx-1 mb-0">
              <li className="nav-item px-4 ml-3  d-flex ">
                <i className="bi bi-heart-fill"></i>
                <Nav.Link href="favourites.html" className="nav-link ">
                  Liked Songs
                </Nav.Link>
              </li>
            </div>
          </ul>
          <hr className="hr-line" />
          <ul className="nav flex-column mt-3">
            <div className="mx-1 mb-1">
              <li className="nav-item mr-5 px-2">
                <Nav.Link
                  href="#"
                  className="nav-link d-inline-block"
                  style={{fontSize: '13px'}}
                >
                  My playlist #1
                </Nav.Link>
              </li>
              <li className="nav-item mr-5 px-2">
                <Nav.Link
                  href="#"
                  className="nav-link d-inline-block"
                  style={{fontSize: "13px"}}
                >
                  My playlist #2
                </Nav.Link>
              </li>
            </div>
          </ul>
          <ul className="nav flex-column mt-3">
            <div className="mx-1 mb-0">
              <li className="nav-item d-flex ml-3 px-4">
                
                  <i className="bi bi-arrow-down-circle" style={{verticalAlign: "middle"}}></i>
                
                <Nav.Link href="#" className="nav-link "> Install App </Nav.Link>
              </li>
            </div>
          </ul>
        </div>
      </Nav>

    )
}
export default VerticalNavbar