import album from "../img/logo-spotify.png"
const MyFooter = () => {
    return(
        <footer
      className="container-fluid fixed-bottom player-bar d-flex align-items-center"
    >
    
      <div className="col-4">
        <div className="d-none d-xl-inline-block">
          <img src={album} />
        </div>
        <div
          className="d-inline-block text-truncate align-middle px-2"
          style={{maxWidth: '60%'}}
        >
          <p className="title">
            <a href="#"></a>
          </p>
          <p className="artist"><a href="#">Queen</a></p>
        </div>
        <div className="d-none d-md-inline-block px-2">
          <i className="bi bi-heart"></i>
        </div>
        <div className="d-none d-md-inline-block px-1">
          <i className="bi bi-fullscreen"></i>
        </div>
      </div>
      {/* <!-- LEFT SIDE END -->
      <!-- MIDDLE PART START --> */}
      <div className="col-4 text-center">
        <div className="pb-1">
          <div className="d-none d-xl-inline-block">
            <i className="bi bi-shuffle px-2"></i>
          </div>
          <div className="d-inline-block">
            <i className="bi bi-skip-start-fill px-2" style={{fontSize: "18px"}}></i>
          </div>
          <div className="d-inline-block">
            <i className="bi bi-play-circle-fill px-2"></i>
          </div>
          <div className="d-inline-block">
            <i className="bi bi-skip-end-fill px-2" style={{fontSize: '18px'}}></i>
          </div>
          <div className="d-none d-xl-inline-block">
            <i className="bi bi-arrow-repeat px-2"></i>
          </div>
        </div>
        <div className="progress-time">
          <div className="d-inline-block ml-n5">0:00</div>
          <div className="d-inline-block progress-bar mx-2"></div>
          <div className="d-inline-block mr-n5">3:29</div>
        </div>
      </div>
      {/* <!-- MIDDLE PART END -->
      <!-- RIGHT SIDE START --> */}
      <div className="col-4 text-right">
        <div className="d-inline-block">
          <i className="bi bi-music-note-list"></i>
        </div>
        <div className="d-inline-block">
          <i className="bi bi-speaker px-3"></i>
        </div>
        <div className="d-inline-block">
          <i className="bi bi-volume-up pr-2" style={{fontSize: "20px"}}></i>
        </div>
        <div className="d-inline-block volume-bar"></div>
      </div>
    
    </footer>
    )
}
export default MyFooter