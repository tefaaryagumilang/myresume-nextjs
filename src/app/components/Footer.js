export default function Head() {
    return(
        <>
        {/* Footer*/}
        <footer className="footer bg-black text-center">
          <div className="container">
            <div className="row">
              {/* Footer Location*/}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  Jl. Pelita 1 No.18, RT.7/RW.10, Kby. Lama Utara, Kec. Kby. Lama,
                  Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                  <br />
                  Indonesia, 12240
                </p>
              </div>
              {/* Footer About Text*/}
              <div className="col-lg-4 mb-5">
                <h4 className="text-uppercase mb-4">Contact</h4>
                <p className="lead mb-0">
                  <i className="fa-solid fa-phone" /> (+62)896-5782-6142 (WA &amp;
                  Telegram)
                  <br />
                  <i className="fa-solid fa-briefcase" /> tefa.arya@digiform.co.id{" "}
                  <br />
                  <i className="fa-solid fa-envelope" /> tefa.arya@gmail.com
                </p>
              </div>
              {/* Footer Social Icons*/}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  target="_blank"
                  href="https://gitlab.com/tefa.arya"
                >
                  <i className="fab fa-fw fa-gitlab" />
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  target="_blank"
                  href="https://github.com/tefaaryagumilang"
                >
                  <i className="fab fa-fw fa-github" />
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  target="_blank"
                  href="https://www.linkedin.com/in/tefa-arya-a0076b1b2/"
                >
                  <i className="fab fa-fw fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  target="_blank"
                  href="https://www.instagram.com/tefaarya_27/?hl=id"
                >
                  <i className="fab fa-fw fa-instagram" />
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  target="_blank"
                  href="https://www.facebook.com/tefa.arya.98"
                >
                  <i className="fab fa-fw fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
      
    )
}