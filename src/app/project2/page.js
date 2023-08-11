import Head from 'src/app/components/Head'
// import Navbar from '../components/Navbar'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('src/app/components/Navbar'), {
  ssr: false,
});

export default function Project2() {
  return (
        <>
        <Head />
        <Navbar />
      
        <section
            className="page-section text-white mb-0 mt-5"
            id="portfolio"
            >
            <div id="particles-js" />
            <div className="container">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase pb-4">
                Securing Site via Kong OIDC and Single Sign On using Keycloak
                </h2>
                {/* About Section Content*/}
                <div className="row">
                <div className="col-lg-4">
                    <img src="../assets/img/portfolio/Edmo.png" width="100%" alt="" />
                </div>
                <div className="col-lg-8">
                    <p style={{ textAlign: "justify" }}>
                    As we start shipping services out to the open world, one of the
                    primary considerations is how we can prevent any malicious attacks,
                    since now we are in the wild west.Thankfully, We have the opportunity
                    to tinker and experiment with open-source solutions due our work
                    nature at that time. In this post, i would like to share how we
                    incorporate Kong Ingress Controller, KeyCloak and Kubernetes to have
                    an initial OIDC flow to front our external services.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    See the complete reference &amp; documentation below :
                    </p>
                    <ul>
                    <li>
                        <a
                        href="https://dev.to/robincher/securing-your-site-via-oidc-powered-by-kong-and-keycloak-2ccc"
                        target="_blank"
                        >
                        Securing Your Site via OIDC Powered by Kong and Keycloak
                        </a>
                    </li>
                    </ul>
                    <p />
                </div>
                </div>
            </div>
        </section>

        <Footer />
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="js/scripts.js"></Script>
        <Script src="js/particles.js"></Script>
        <Script src="js/app.js"></Script>
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></Script>
        </>
  )
}
