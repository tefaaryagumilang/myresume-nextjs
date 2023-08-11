import Head from 'src/app/components/Head'
// import Navbar from '../components/Navbar'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('src/app/components/Navbar'), {
  ssr: false,
});

export default function Experience() {
  return (
        <>
        <Head />
        <Navbar />
      
        <section
          className="page-section text-white mb-0 mt-5"
          id="experience"
        >
          <div id="particles-js" />
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase pb-4">
              Experience
            </h2>
            {/* About Section Content*/}
            <div className="row">
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2023 - Present</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img
                  className="p-1"
                  src="assets/img/AIGS Logo Long.png"
                  alt=""
                  width="50%"
                />
                <h4>
                  <strong>DevOps Engineer &amp; RnD</strong>
                </h4>
                <h5>
                  <strong>PT Gudang Solusi Group</strong>
                </h5>
                <p className="lead">
                  DigiForm is digital transformation consultancy headquartered in
                  Jakarta. Back then we only have one developer working on small web
                  development request. Today, we have variety projects, ranging from
                  product strategy, full stack web and mobile development, Automation
                  Testing and CI/CD Integration as part of DevOps, and IT Managed
                  Services.
                </p>
                <p className="lead">
                  <b>Responsibilities</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>Understanding customer requirements and project KPIs</li>
                  <li>
                    Implementing various development, testing, automation tools, and IT
                    infrastructure
                  </li>
                  <li>
                    Planning the team structure, activities, and involvement in project
                    management activities.
                  </li>
                  <li>Managing stakeholders and external interfaces</li>
                  <li>Setting up tools and required infrastructure</li>
                  <li>
                    Defining and setting development, test, release, update, and support
                    processes for DevOps operation
                  </li>
                </ul>
                <p />
                <p className="lead">
                  <b>Achievements</b>
                </p>
                <ul style={{ listStyleType: "square" }}>
                  <li>Implemented CI/CD for eDMO Application Mandiri on GKE</li>
                  <li>
                    Implemented Observability Concept using Open Source Tools (Grafana,
                    Prometheus, Otel, Loki, Jaeger, Zipkin)
                  </li>
                  <li>
                    Implemented CMS (Corporate Management System) in order to full fill
                    System Digitalization within the organization
                  </li>
                  <li>
                    Implemented Single Sign On Integration using RH SSO and Keycloak for
                    eDMO Application Mandiri
                  </li>
                  <li>
                    Implemented Highly Available Production Ready Kubernetes Cluster
                  </li>
                </ul>
                <p />
              </div>
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2021 - 2023</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img className="p-1" src="assets/img/whi.png" alt="" width="50%" />
                <h4>
                  <strong>IT Excutive</strong>
                </h4>
                <h5>
                  <strong>PT Woh Hup Indonesia</strong>
                </h5>
                <p className="lead">
                  Woh Hup Indonesia is construction company that provides design-build,
                  architecture and engineering services. Originally branched out as a
                  subsidiary from the established Woh Hup (Private) Limited since 1927,
                  we have notably gained various expertise and have an impressive
                  portfolio in the construction business. Our mission is to reintegrate
                  the evolving cityscape of Indonesia with best-inclass Client
                  partnerships.
                </p>
                <p className="lead">
                  <b>Responsibilities</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>Oversee Tech Department</li>
                  <li>Strategize Tech Improvement</li>
                  <li>Manage IT Budgeting and Expenditure</li>
                  <li>
                    Create Site Office and Site Project Preparation Planning (Hardware,
                    Software, Netowrking, Security System, etc)
                  </li>
                  <li>Setup Site Office and Site for Project Prepatation</li>
                  <li>Learn Company and Industry Trends</li>
                </ul>
                <p />
                <p className="lead">
                  <b>Achievements</b>
                </p>
                <ul style={{ listStyleType: "square" }}>
                  <li>Implemented Internal Informative Portal (Intranet)</li>
                  <li>Implemented Employee Digital ID Card/Name Card</li>
                  <li>
                    Implemented CMS (Corporate Management System) in order to full fill
                    System Digitalization within the organization
                  </li>
                  <li>
                    Succeded Site Office and Site Area Setup for Warehouse &amp; Data
                    Center Project
                  </li>
                  <li>Compile and Create a standarized Company SOP and Forms</li>
                  <li>
                    Support SOP Team for ISO Certification (9001, 14001, &amp; 450001)
                  </li>
                </ul>
                <p />
              </div>
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2021 - Present</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img className="p-1" src="assets/img/s8.png" alt="" width="50%" />
                <h4>
                  <strong>Chief Technology Officer</strong>
                </h4>
                <h5>
                  <strong>Studio 8 Jakarta</strong>
                </h5>
                <p className="lead">
                  STUDIO 8 is an one stop engineering services team in AEC
                  (Architecture, Engineering, and Construction) industry. All services
                  form management, design and built is under one roof to bring the best
                  ;
                </p>
                <p className="lead">✓ Quality delivered product</p>
                <p className="lead">
                  ✓ Cross disciplinary integration for clashes detection and faster
                  communication
                </p>
                <p className="lead">✓ Save lots of design and construction cost.</p>
                <p className="lead">
                  <b>Responsibilities</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    Oversee development and dissemination of technology for external
                    customers
                  </li>
                  <li>Coordinating with client/customer</li>
                  <li>Strategize technological resource</li>
                  <li>
                    Ensure technologies efficiency, effectifity, profitability, and
                    security
                  </li>
                  <li>Evaluating and implementing new system and infrastructure</li>
                </ul>
                <p />
                <p className="lead">
                  <b>Achievements</b>
                </p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    Developing PQP (Project Quality Plan), Work Permit for Construction
                    Project Purpose
                  </li>
                  <li>Designing Networking System for Glamping/Villa in Bogor</li>
                </ul>
                <p />
              </div>
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2016 - Present</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img className="p-1" src="assets/img/ttech.png" alt="" width="50%" />
                <h4>
                  <strong>Owner &amp; Freelancer</strong>
                </h4>
                <h5>
                  <strong>Tefatech.id</strong>
                </h5>
                <p className="lead">
                  Passionate Freelancer that have interest on IT, Developing and
                  creating product based on user requirement and market trends. Become a
                  multi segment of work from System (Hardware/Software), Graphic
                  Designer, Photo Editor, Video Editing, etc. We deliver good quality of
                  product and services,
                </p>
                <p className="lead">
                  <b>Responsibilities</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    Giving a One Stop IT Services (Hardware, Software, Designing, etc)
                  </li>
                  <li>Analyze user request</li>
                  <li>Compile user request into a project planning</li>
                  <li>Give user recommendation or best suggestion</li>
                </ul>
                <p />
                <p className="lead">
                  <b>Achievements</b>
                </p>
                <ul style={{ listStyleType: "square" }}>
                  <li>Designing Logo for one of Indonesia Police Instance</li>
                  <li>
                    Hosted Website and SMTP (Mailing System) for Solar Energy Company
                  </li>
                  <li>
                    Architecting, Migrating &amp; Implementing DevOps Environment for
                    Digital Signage Company
                  </li>
                </ul>
                <p />
              </div>
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2019 - 2021</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img className="p-1" src="assets/img/mtj.png" alt="" width="50%" />
                <h4>
                  <strong>System Engineer &amp; Infrastructure Team Lead</strong>
                </h4>
                <h5>
                  <strong>CV. Media Telematika Jaya</strong>
                </h5>
                <p className="lead">
                  System Development &amp; Procurement Project (2019-2020) and Data
                  Center Care &amp; Maintenance Project (2020-2021) at Pusiknas - Mabes
                  Polri (National Crime Information Center - Indonesian National Police
                  Headquarters). Pusiknas is a work unit under the Bareskrim (Criminal
                  Investigation Agency) and tasked with administering a national online
                  criminal information system and analysis of reports related to
                  transnational crimes.
                </p>
                <p className="lead">
                  <b>Project Completion</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    “Belanja Modal” or Procurement Project of National Criminal
                    Information Center (2019-2020)
                  </li>
                  <li>
                    “Pemeliharaan dan Perawatan” or Maintenance Project of National
                    Criminal Information Center (2020-2021)
                  </li>
                </ul>
                <p />
                <p className="lead">
                  <b>Responsibilities</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    Managing and monitoring all installed system &amp; Infrastructure
                  </li>
                  <li>
                    Installing, configuring, testing and maintaining operating system,
                    application, and management tools
                  </li>
                  <li>Ensure system and infrastructure high availability</li>
                  <li>Maintain security, backup, and redundancy strategies</li>
                  <li>
                    Designing existing, upcoming, and future diagram of entire system
                  </li>
                  <li>Ensure project repository keep up to date</li>
                  <li>Ensure application sources up to date</li>
                  <li>Create system requirement for procurement</li>
                </ul>
                <p />
                <p className="lead">
                  <b>Achievements</b>
                </p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    Completed External System Audit from “Badan Siber dan Sandi Negara
                    Indonesia”
                  </li>
                  <li>
                    Completed Installing and Configuring 5 unit of Super Computer for
                    Business Inteligence System, OCR (Optical Character Recognition),
                    API Gateway system, Application Server, and Big Data System
                  </li>
                </ul>
                <p />
              </div>
              <div className="col-lg-4 ms-auto pb-3">
                <h2>
                  <strong>2018 - 2019</strong>
                </h2>
              </div>
              <div className="col-lg-6 me-auto pb-3">
                <img className="p-1" src="assets/img/bit.png" alt="" width="50%" />
                <h4>
                  <strong>Network Engineer</strong>
                </h4>
                <h5>
                  <strong>PT. Bentang Inspira Teknologi</strong>
                </h5>
                <p className="lead">
                  Data Center Care and Maintenance Project at Pusiknas - Mabes Polri
                  (National Crime Information Center - Indonesian National Police
                  Headquarters). Pusiknas is a work unit under the Bareskrim (Criminal
                  Investigation Agency) and tasked with administering a national online
                  criminal information system and analysis of reports related to
                  transnational crimes.
                </p>
                <p className="lead">
                  <b>Project Completion</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    “Pemeliharaan dan Perawatan” or Maintenance Project of National
                    Criminal Information Center (2018-2019)
                  </li>
                </ul>
                <p />
                <p className="lead">
                  <b>Responsibilities</b>
                </p>
                <p className="lead"></p>
                <ul style={{ listStyleType: "square" }}>
                  <li>Managing and monitoring all installed networking system</li>
                  <li>
                    Installing, configuring, testing and maintaining operating system,
                    application, and management tools
                  </li>
                  <li>Ensure system and infrastructure high availability</li>
                  <li>Maintain security, backup, and redundancy strategies</li>
                </ul>
                <p />
                <p className="lead">
                  <b>Achievements</b>
                </p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    Completed External System Audit from “Badan Siber dan Sandi Negara
                    Indonesia”
                  </li>
                </ul>
                <p />
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="js/scripts.js"></Script>
        <Script src="js/particles.js"></Script>
        <Script src="js/app.js"></Script>
        <Script type="text/javascript" src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></Script>
        </>
  )
}
