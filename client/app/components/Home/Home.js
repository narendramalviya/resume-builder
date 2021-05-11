import React from "react";
import "whatwg-fetch";

const Home = () => {
  return (
    <>
      {/*

ART FACTORY

https://templatemo.com/tm-537-art-factory

*/}
      {/* Additional CSS Files */}
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/font-awesome.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/templatemo-art-factory.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/owl-carousel.css"
      />
      {/* ***** Preloader Start ***** */}
      {/* <div id="preloader">
        <div className="jumper">
          <div />
          <div />
          <div />
        </div>
      </div> */}
      {/* ***** Preloader End ***** */}
     
      {/* ***** Welcome Area Start ***** */}
      <div className="welcome-area" id="welcome">
        {/* ***** Header Text Start ***** */}
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Build Resume, it's free <strong>for YOU</strong>
                </h1>
                <p>
                  This template is available for 100% free of charge on
                  TemplateMo. Download, modify and use this for your business
                  website.
                </p>
                <a href="#about" className="main-button-slider">
                  Find Out More
                </a>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/slider-icon.png"
                  className="rounded img-fluid d-block mx-auto"
                  alt="First Vector Graphic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ***** Header Text End ***** */}
      </div>
      {/* ***** Welcome Area End ***** */}
      {/* ***** Features Big Item Start ***** */}
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-md-12 col-sm-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/left-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
              <div className="left-heading">
                <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
              </div>
              <div className="left-text">
                <p>
                  This template is{" "}
                  <a href="#">last updated on 20 August 2019 </a>for main menu
                  drop-down arrow and sub menu text color. Duis auctor dolor eu
                  scelerisque vestibulum. Vestibulum lacinia, nisl sit amet
                  tristique condimentum. <br />
                  <br />
                  Sed a consequat velit. Morbi lectus sapien, vestibulum et
                  sapien sit amet, ultrices malesuada odio. Donec non quam
                  euismod, mattis dui a, ultrices nisi.
                </p>
                <a href="#about2" className="main-button">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="hr" />
            </div>
          </div>
        </div>
      </section>
      {/* ***** Features Big Item End ***** */}
      {/* ***** Features Big Item Start ***** */}
      <section className="section" id="about2">
        <div className="container">
          <div className="row">
            <div className="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
              <div className="left-heading">
                <h5>Curabitur aliquam eget tellus id porta</h5>
              </div>
              <p>
                Proin justo sapien, posuere suscipit tortor in, fermentum mattis
                elit. Aenean in feugiat purus.
              </p>
              <ul>
                <li>
                  <img src="assets/images/about-icon-01.png" alt />
                  <div className="text">
                    <h6>Nulla ultricies risus quis risus</h6>
                    <p>
                      You can use this website template for commercial or
                      non-commercial purposes.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="assets/images/about-icon-02.png" alt />
                  <div className="text">
                    <h6>Donec consequat commodo purus</h6>
                    <p>
                      You have no right to re-distribute this template as a
                      downloadable ZIP file on any website.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="assets/images/about-icon-03.png" alt />
                  <div className="text">
                    <h6>Sed placerat sollicitudin mauris</h6>
                    <p>
                      If you have any question or comment, please{" "}
                      <a rel="nofollow" href="https://templatemo.com/contact">
                        contact
                      </a>{" "}
                      us on TemplateMo.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/right-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ***** Features Big Item End ***** */}
      {/* ***** Features Small Start ***** */}
      <section className="section" id="services">
        <div className="container">
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="assets/images/service-icon-01.png" alt />
                  </i>
                </div>
                <h5 className="service-title">First Box Service</h5>
                <p>
                  Aenean vulputate massa sed neque consectetur, ac fringilla
                  quam aliquet. Sed a enim nec eros tempor cursus at id libero.
                </p>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="assets/images/service-icon-02.png" alt />
                  </i>
                </div>
                <h5 className="service-title">Second Box Title</h5>
                <p>
                  Pellentesque vitae urna ut nisi viverra tristique quis at
                  dolor. In non sodales dolor, id egestas quam. Aliquam erat
                  volutpat.{" "}
                </p>
                <a href="#" className="main-button">
                  Discover More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="assets/images/service-icon-03.png" alt />
                  </i>
                </div>
                <h5 className="service-title">Third Title Box</h5>
                <p>
                  Quisque finibus libero augue, in ultrices quam dictum id.
                  Aliquam quis tellus sit amet urna tincidunt bibendum.
                </p>
                <a href="#" className="main-button">
                  More Detail
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="assets/images/service-icon-02.png" alt />
                  </i>
                </div>
                <h5 className="service-title">Fourth Service Box</h5>
                <p>
                  Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit
                  nec. Duis auctor dolor eu scelerisque vestibulum.
                </p>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="assets/images/service-icon-01.png" alt />
                  </i>
                </div>
                <h5 className="service-title">Fifth Service Title</h5>
                <p>
                  Curabitur aliquam eget tellus id porta. Proin justo sapien,
                  posuere suscipit tortor in, fermentum mattis elit.
                </p>
                <a href="#" className="main-button">
                  Discover
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="assets/images/service-icon-03.png" alt />
                  </i>
                </div>
                <h5 className="service-title">Sixth Box Title</h5>
                <p>
                  Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae
                  lacus. Aliquam porttitor urna ut pellentesque.
                </p>
                <a href="#" className="main-button">
                  Detail
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="assets/images/service-icon-01.png" alt />
                  </i>
                </div>
                <h5 className="service-title">Seventh Title Box</h5>
                <p>
                  Sed a consequat velit. Morbi lectus sapien, vestibulum et
                  sapien sit amet, ultrices malesuada odio. Donec non quam.
                </p>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Features Small End ***** */}
      {/* ***** Frequently Question Start ***** */}
      <section className="section" id="frequently-question">
        <div className="container">
          {/* ***** Section Title Start ***** */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="section-heading">
                <p>
                  Vivamus venenatis eu mi ac mattis. Maecenas ut elementum
                  sapien. Nunc euismod risus ac lobortis congue. Sed erat quam.
                </p>
              </div>
            </div>
          </div>
          {/* ***** Section Title End ***** */}
          <div className="row">
            <div className="left-text col-lg-6 col-md-6 col-sm-12">
              <h5>
                Class aptent taciti sociosqu ad litora torquent per conubia
              </h5>
              <div className="accordion-text">
                <p>
                  Curabitur placerat diam in risus lobortis, laoreet porttitor
                  est elementum. Nulla ultricies risus quis risus scelerisque, a
                  aliquam tellus maximus. Cras pretium nulla ac convallis
                  iaculis. Aenean bibendum erat vitae odio sodales, in facilisis
                  tellus volutpat.
                </p>
                <p>
                  Sed lobortis pellentesque magna ac congue. Suspendisse quis
                  molestie magna, id eleifend ex. Ut mollis ultricies diam nec
                  dictum. Morbi commodo hendrerit mi vel vulputate. Proin non
                  tincidunt dui. Lorem ipsum dolor sit amet.
                </p>
                <span>
                  Email: <a href="#">email@company.com</a>
                  <br />
                </span>
                <a href="#contact-us" className="main-button">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="accordions is-first-expanded">
                <article className="accordion">
                  <div className="accordion-head">
                    <span>First Common Question</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Duis vulputate porttitor urna sit amet pretium.
                        Phasellus sed pulvinar eros, condimentum consequat ex.
                        Suspendisse potenti.
                        <br />
                        <br />
                        Pellentesque maximus lorem sed elit imperdiet mattis.
                        Duis posuere mauris ut eros rutrum sodales. Aliquam erat
                        volutpat.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Second Question Answer</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Sed odio elit, cursus sed consequat at, rutrum eget
                        augue. Cras ac eros iaculis, tempor quam sit amet,
                        scelerisque mi. Quisque eu risus eget nunc porttitor
                        vestibulum at a ante.
                        <br />
                        <br />
                        Praesent ut placerat turpis, vel pellentesque dolor. Sed
                        rutrum eleifend tortor, eu luctus orci sagittis in. In
                        blandit fringilla mollis.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Third Answer for you</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Proin feugiat ante ut vulputate rutrum. Nam quis erat
                        turpis. Nullam maximus pharetra lorem, eu condimentum
                        est iaculis ut. Pellentesque mattis ultrices dignissim.
                        <br />
                        <br />
                        Etiam et enim finibus, feugiat massa efficitur, finibus
                        sapien. Sed cursus lacus quis arcu scelerisque, eget
                        ornare risus maximus. Aenean non lectus id odio rhoncus
                        pharetra.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Fourth Question Asked</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Phasellus eu purus ornare, eleifend orci nec, egestas
                        nulla. Sed sed aliquet sapien. Proin placerat, ipsum eu
                        posuere blandit, tellus quam consectetur nisi, id
                        sollicitudin diam ex at nisi.
                        <br />
                        <br />
                        Aenean fermentum eget turpis egestas semper. Sed finibus
                        mollis venenatis. Praesent at sem in massa iaculis
                        pharetra.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Fifth Ever Question</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Quisque aliquet ipsum ut magna rhoncus, euismod lacinia
                        elit rhoncus. Sed sapien elit, mollis ut ultricies quis,
                        fermentum nec ante.
                        <br />
                        <br />
                        Sed nec ex nec tortor fermentum sollicitudin id ut
                        ligula. Ut sagittis rutrum lectus, non sagittis ante
                        euismod eu.{" "}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Sixth Sense Question</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Suspendisse potenti. Ut dapibus leo ut massa vulputate
                        semper. Pellentesque maximus lorem sed elit imperdiet
                        mattis. Duis posuere mauris ut eros rutrum sodales.
                        Aliquam erat volutpat.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Frequently Question End ***** */}
      {/* ***** Contact Us Start ***** */}
      <section className="section" id="contact-us">
        <div className="container-fluid">
          <div className="row">
            {/* ***** Contact Map Start ***** */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div id="map">
                {/* How to change your own map point
                     1. Go to Google Maps
                     2. Click on your location point
                     3. Click "Share" and choose "Embed map" tab
                     4. Copy only URL and paste it within the src="" field below
              */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
                  width="100%"
                  height="500px"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
            {/* ***** Contact Map End ***** */}
            {/* ***** Contact Form Start ***** */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="contact-form">
                <form id="contact" action method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                          required
                          className="contact-field"
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="E-mail"
                          required
                          className="contact-field"
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows={6}
                          id="message"
                          placeholder="Your Message"
                          required
                          className="contact-field"
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send It
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* ***** Contact Form End ***** */}
          </div>
        </div>
      </section>
      {/* ***** Contact Us End ***** */}
      {/* ***** Footer Start ***** */}
  
      <script src="assets/js/jquery-2.1.0.min.js"></script>

      {/* <!-- Bootstrap --> */}
      <script src="assets/js/popper.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>

      {/* <!-- Plugins --> */}
      <script src="assets/js/owl-carousel.js"></script>
      <script src="assets/js/scrollreveal.min.js"></script>
      <script src="assets/js/waypoints.min.js"></script>
      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/imgfix.min.js"></script>

      {/* <!-- Global Init --> */}
      <script src="assets/js/custom.js"></script>
    </>
  );
};

export default Home;
