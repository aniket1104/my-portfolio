import React from "react";

const Navbar = () => {
  return (
    <div className="gridRow container">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navv my-1">
          <div className="container-fluid">
            {/* <a class="navbar-brand" href="#">
              Navbar
            </a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-end align-items-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item mx-3 listItems">
                  <a class="nav-link" aria-current="page" href="#home">
                    HOME
                  </a>
                </li>
                <li class="nav-item mx-3 listItems">
                  <a class="nav-link" href="#about">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item mx-3 listItems">
                  <a class="nav-link" href="#project">
                    PROJECTS
                  </a>
                </li>
                <li class="nav-item mx-3 listItems">
                  <a class="nav-link" href="#timeline">
                    JOURNEY
                  </a>
                </li>

                <li class="nav-item mx-3 listItems">
                  <a class="nav-link" href="#contact">
                    CONTACTS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
