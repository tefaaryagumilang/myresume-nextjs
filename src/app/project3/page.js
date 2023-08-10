import Head from 'src/app/components/Head'
// import Navbar from '../components/Navbar'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('src/app/components/Navbar'), {
  ssr: false,
});

export default function Project3() {
  return (
        <>
        <Head />
        <Navbar />
        <section
            className="page-section bg-light text-black mb-0 mt-5"
            id="portfolio"
            style={{
                backgroundImage: 'url("../assets/img/webb.png")',
                backgroundRepeat: "repeat"
            }}
            >
            <div className="container">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-black pb-4">
                Securing Site via Kong OIDC and Single Sign On using Keycloak
                </h2>
                {/* About Section Content*/}
                <div className="row">
                <div className="col-lg-4">
                    <img src="../assets/img/portfolio/Kong.png" width="100%" alt="" />
                </div>
                <div className="col-lg-8">
                    <p style={{ textAlign: "justify" }}>
                    If the client is a browser, there is a known issue with this plugin
                    caused by a limitation of the CORS specification that prevents
                    specifying a custom Host header in a preflight OPTIONS request.
                    Because of this limitation, this plugin only works for routes that
                    have been configured with a paths setting. The CORS plugin does not
                    work for routes that are being resolved using a custom DNS (the hosts
                    property). To learn how to configure paths for a route, read the Proxy
                    Reference.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    See the complete reference &amp; documentation below :
                    </p>
                    <ul>
                    <li>
                        <a
                        href="https://docs.konghq.com/hub/kong-inc/cors/"
                        target="_blank"
                        >
                        CORS Kong Plugin
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
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></Script>
        </>
  )
}
