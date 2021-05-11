import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <p className="copyright">
            Copyright © 2020 Art Factory Company . Design:{" "}
            <a rel="nofollow" href="https://templatemo.com">
              TemplateMo
            </a>
          </p>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <ul className="social">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-rss"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
