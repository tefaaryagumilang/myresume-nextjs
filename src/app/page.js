import Head from 'src/app/components/Head'
// import Navbar from './components/Navbar'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('src/app/components/Navbar'), {
  ssr: false,
});

export default function Home() {
  return (
        <>
        <Head />
        <Navbar />
        
        <header className="masthead text-white text-center">
          <div id="particles-js" />
          <div className="container d-flex align-items-center flex-column">
              {/* Masthead Avatar Image */}
              <img
                  className="masthead-avatar mb-5"
                  src="assets/img/me_square.png"
                  style={{
                      border: "1px solid",
                      borderRadius: "50%",
                      boxShadow: "5px 10px #888888"
                  }}
                  alt="Profile"
              />
              {/* Masthead Heading */}
              <h1 className="masthead-heading text-uppercase mb-2">Tefa Arya Gumilang</h1>
              {/* Masthead Subheading */}
              <p className="masthead-subheading font-weight-light mb-0 bg-white text-black p-2">
                  DevOps Engineer - Freelancer
              </p>
              <br />
              <div className="row">
                  <div className="col-lg-12 m-auto">
                      <p className="lead">
                          Hi! I'm Tefa Arya Gumilang. I currently work at PT. Gudang Solusi Group
                          as a DevOps Engineer in the R&amp;D Division. I'm also a Freelancer
                          offering One Stop IT Services to fulfill client needs based on their requests.
                          With over 5 years of experience in the IT field, I have a strong background to serve clients.
                      </p>
                      <p className="lead">
                          I graduated in Computer and Network Engineering from State Vocational
                          High School 2 Baleendah.
                      </p>
                  </div>
              </div>
          </div>
        </header>

        <Footer />
        
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script type="text/javascript" src="js/scripts.js"></Script>
        <Script type="text/javascript" src="js/particles.js"></Script>
        <Script type="text/javascript" src="js/app.js"></Script>
        <Script type="text/javascript" src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></Script>
        </>
  )
}
