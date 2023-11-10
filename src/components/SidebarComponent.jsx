/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/logo/logo.png";
import { setSearchFilter } from "../redux/actions/actions";
import { searchFetch } from "../redux/actions/actions";
import { BookFill, FileMusicFill, HouseDoorFill } from "react-bootstrap-icons";
import { Navigate, useNavigate } from "react-router-dom";

const SidebarComponent = () => {
  //   const handleSearch = (event) => {
  //     event.preventDefault();
  //   };
  const navigate = useNavigate();

  const searchFilter = useSelector((state) => state.search.searchFilter);

  const dispatch = useDispatch();

  return (
    <div className="col col-2 ">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={Logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="p-0">
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <HouseDoorFill />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <BookFill />
                    &nbsp; Your Library
                  </a>
                </li>
                <li
                  onClick={() => {
                    navigate("/playlist");
                  }}
                >
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <FileMusicFill />
                    &nbsp; Your playlist
                  </a>
                </li>
                <li>
                  <form
                    className="input-group mt-3"
                    onChange={(e) => dispatch(setSearchFilter(e.target.value))}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={searchFilter}
                      onChange={(e) =>
                        dispatch(setSearchFilter(e.target.value))
                      }
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm h-100"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(searchFetch(searchFilter));
                        }}
                      >
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarComponent;
