import {Button,} from 'react-bootstrap'
import logo from '../img/logo-spotify.png';

const MyNavbar = ()=>{
   return(
    <div
    id="top-bar"
    className="
      page-content
      px-3 px-lg-5
      py-3
      d-flex
      justify-content-between
      sticky-top
    "
  >
    <div className="d-flex">
      <div className="left-controls">
        <i className="bi bi-chevron-left"></i>
        <i className="d-none d-lg-inline pl-4 bi bi-chevron-right"></i>
      </div>
     
    </div>

    <div className="userpanel">
      <div className="btn-group d-inline-block">
        <Button
          type="button"
          className="btn btn-secondary profile-btn" id="basic-nav-dropdown"
          data-toggle="dropdown"
          data-display="static"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            className="d-inline-block profile-logo"
            src={logo}
            alt="user logo"
          />
          
      
      </Button>

      </div>
    </div>
  </div>
   )
}
export default MyNavbar