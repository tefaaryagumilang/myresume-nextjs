import Head from 'src/app/components/Head'
// import Navbar from '../components/Navbar'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('src/app/components/Navbar'), {
  ssr: false,
});

export default function Training() {
  return (
        <>
        <Head />
        <Navbar />
      
        <section
          className="page-section text-white mb-0 mt-5"
          id="training"
        >
          <div id="particles-js" />
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase pb-4">
              Training &amp; Certification
            </h2>
            {/* About Section Content*/}
            <div className="row">
              <div className="col-lg-12 ms-auto pb-3">
                <p className="lead">
                  <b>Technology Training &amp; Certification</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    <strong>Developing a Google SRE Culture</strong> - Issued by Google
                    (2023)
                  </li>
                  <li>
                    <strong>Google Cloud Fundamental : Core Infrastructure</strong> -
                    Issued by Google (2023)
                  </li>
                  <li>
                    <strong>Architecting in AWS</strong> - Issued by Amazon Web Service
                    (2022)
                  </li>
                  <li>
                    <strong>Developing in AWS</strong> - Issued by Amazon Web Service
                    (2022)
                  </li>
                  <li>
                    <strong>Cisco Certified Network Associate (CCNA)</strong> - Issued
                    by Cisco Network Academy (2018)
                  </li>
                  <li>
                    <strong>IC3 Computing Fundamental</strong> - Certiport (2018)
                  </li>
                  <li>
                    <strong>IC3 Key Application</strong> - Certiport (2018)
                  </li>
                </ul>
                <p />
                <p className="lead">
                  <b>Others Training &amp; Certification</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    <strong>MGMP Bahasa Inggris Jawa Barat</strong> - Issued by
                    Education Office of West Java (2018)
                  </li>
                  <li>
                    <strong>English Intemediate</strong> - Issued by LA English Course
                    (2018)
                  </li>
                  <li>
                    <strong>
                      Test of English for International Communication (TOEIC)
                    </strong>{" "}
                    - Issued by ETS (2018)
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
