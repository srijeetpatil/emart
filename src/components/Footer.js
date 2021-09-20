import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="foot">
      <Jumbotron>
        <div className="footer basic-font">
          <div className="container">
            <div className="row">
              <div className="col-4 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://github.com/srijeetpatil">
                      https://github.com/srijeetpatil
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sri-patil-536a02148/">
                      https://www.linkedin.com/in/sri-patil-536a02148/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <p>© Copyright 2020 E Mart</p>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </footer>
  );
}

export default Footer;
