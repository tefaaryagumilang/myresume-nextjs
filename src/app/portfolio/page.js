import Head from 'src/app/components/Head'
// import Navbar from '../components/Navbar'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';
import Link from 'next/link'

const Navbar = dynamic(() => import('src/app/components/Navbar'), {
  ssr: false,
});

export default function Portfolio() {
  return (
        <>
        <Head />
        <Navbar />
      
        <section
          className="page-section bg-light text-black mb-0 mt-5"
          id="portfolio"
          style={{
            backgroundImage: 'url("assets/img/webb.png")',
            backgroundRepeat: "repeat"
          }}
        >
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-black pb-4">
              Portfolio &amp; Showcase
            </h2>
            {/* About Section Content*/}
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-lg-4 mb-2">
                <div className="card">
                  <div className="card-header">
                    <h4>Implementing CI/CD Environment</h4>
                  </div>
                  <div className="card-body">
                    <img
                      src="assets/img/portfolio/Sentuh.png"
                      width="100%"
                      alt=""
                      className="mb-2"
                    />
                    <p style={{ textAlign: "justify" }}>
                      Current Software Development process we didn't want to have a gap
                      between the Developer and the Operation Team, we want a continuous
                      process without any manual and repetitive action so the Developer
                      could focus on Bug Fixing and fulfill business requirement and the
                      Operation teams could be focus on Maintaining and Monitoring
                      running Applications/Services
                    </p>
                    <Link
                      className="btn bg-black"
                      style={{ color: "white" }}
                      href="/project1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className="card">
                  <div className="card-header">
                    <h4>
                      Securing Site via Kong OIDC and Single Sign On using Keycloak
                    </h4>
                  </div>
                  <div className="card-body">
                    <img
                      src="assets/img/portfolio/Edmo.png"
                      width="100%"
                      alt=""
                      className="mb-2"
                    />
                    <p style={{ textAlign: "justify" }}>
                      As we start shipping services out to the open world, one of the
                      primary considerations is how we can prevent any malicious
                      attacks, since now we are in the wild west.Thankfully, We have the
                      opportunity to tinker and experiment with open-source solutions
                      due our work nature at that time. In this post, i would like to
                      share how we incorporate Kong Ingress Controller, KeyCloak and
                      Kubernetes to have an initial OIDC flow to front our external
                      services.
                    </p>
                    <Link
                      className="btn bg-black"
                      style={{ color: "white" }}
                      href="/project2"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className="card">
                  <div className="card-header">
                    <h4>
                      Securing Site via Custom Security Header using CORS Kong Plugins
                    </h4>
                  </div>
                  <div className="card-body">
                    <img
                      src="assets/img/portfolio/Kong.png"
                      width="100%"
                      alt=""
                      className="mb-2"
                    />
                    <p style={{ textAlign: "justify" }}>
                      If the client is a browser, there is a known issue with this
                      plugin caused by a limitation of the CORS specification that
                      prevents specifying a custom Host header in a preflight OPTIONS
                      request. Because of this limitation, this plugin only works for
                      routes that have been configured with a paths setting. The CORS
                      plugin does not work for routes that are being resolved using a
                      custom DNS (the hosts property). To learn how to configure paths
                      for a route, read the Proxy Reference.
                    </p>
                    <Link
                      className="btn bg-black"
                      style={{ color: "white" }}
                      href="/project3"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      
        <Footer />
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="js/scripts.js"></Script>
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></Script>
        </>
  )
}
