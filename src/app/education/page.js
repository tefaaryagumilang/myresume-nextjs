import Head from '../components/Head'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false,
});

export default function Education() {
  return (
        <>
        <Head />
        <Navbar />
      
        <section
          className="page-section bg-light text-black mb-0 mt-5"
          id="education"
          style={{
            backgroundImage: 'url("assets/img/webb.png")',
            backgroundRepeat: "repeat"
          }}
        >
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-black pb-4">
              Education
            </h2>
            {/* About Section Content*/}
            <div className="row">
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2022 - Present</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img
                  className="p-1"
                  src="https://pelajarinfo.id/wp-content/uploads/2022/11/Logo-Universitas-Terbuka.png"
                  alt=""
                  width="30%"
                />
                <h4>
                  <strong>System Information</strong>
                </h4>
                <h5>
                  <strong>Open University</strong>
                </h5>
              </div>
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2019 - 2020</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img className="p-1" src="assets/img/unindra.png" alt="" width="30%" />
                <h4>
                  <strong>Informatics Engineering</strong>
                </h4>
                <h5>
                  <strong>University Indraprasta PGRI</strong>
                </h5>
              </div>
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2015 - 2018</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img className="p-1" src="assets/img/vhs2be.png" alt="" width="30%" />
                <h4>
                  <strong>Computer and Networking Engineering</strong>
                </h4>
                <h5>
                  <strong>State Vocational High School of 2 Baleendah</strong>
                </h5>
              </div>
            </div>
          </div>
        </section>


        <Footer />
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/scripts.js"></Script>
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></Script>
        </>
  )
}
