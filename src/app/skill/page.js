import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

export default function Skill() {
  return (
        <>
        <Head />
        <Navbar />
        
        <section
          className="page-section bg-light text-black mb-0 mt-5"
          id="skill"
          style={{
            backgroundImage: 'url("assets/img/webb.png")',
            backgroundRepeat: "repeat"
          }}
        >
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-black pb-4">
              Skill / Competencies
            </h2>
            {/* About Section Content*/}
            <div className="row">
              <div className="col-lg-6 ms-auto">
                <h4>
                  <strong>Hardware/Infrasturcture</strong>{" "}
                </h4>
                <p className="lead">
                  <strong>Cloud System</strong> - Google Cloud Platform, Amazon Web
                  Service, Azure Cloud, Digital Ocean
                </p>
                <p className="lead">
                  <strong>Container Orchestration</strong> - Kubernetes, Google
                  Kubernetes Engine, Amazon Elastic Kubernetes Service, Azure Kubernetes
                  Service, Digital Ocean Kubernetes
                </p>
                <p className="lead">
                  <strong>Server Administration</strong> - Linux (CentOS, RHEL, Debian,
                  Ubuntu), Windows Server
                </p>
                <p className="lead">
                  <strong>Server Peripheral</strong> - HPE, Dell, Nutanix
                </p>
                <p className="lead">
                  <strong>Storage Administration</strong> - NAS (Network Attached
                  Storage), SAN (Storage Area Network), Google Cloud Storage, Google
                  File Store, AWS Simple Storage Service (S3), AWS Elastic File System
                  (EFS), Azure Cloud Storage{" "}
                </p>
                <p className="lead">
                  <strong>Networking Peripheral</strong> - Synology, NetApp
                </p>
                <p className="lead">
                  <strong>Networking Concept</strong> - 7 OSI Layer, Network
                  Architecturing, TCP/IP, SSH, FTP, SMTP, SNMP, DHCP, DNS/DDNS,
                  Firewall, VPN, Static/Dynamic Routing
                </p>
                <p className="lead">
                  <strong>Networking Peripheral</strong> - Cisco, Mikrotik, Meraki,
                  Aruba, Juniper, Fortinet
                </p>
                <p className="lead">
                  <strong>Database &amp; Data Administration</strong> - SQL Server,
                  MySQL, PostgreSQL, Apache Kafka, Google CloudSQL, Google BigQuery,
                  Amazon RDS, Azure SQL Database
                </p>
                <p className="lead">
                  <strong>Monitoring</strong> - Pandora FMS, Prometheus, Nagios, Open
                  NMS, Grafana Dashboard, Open Telemetry, Loki, Jaeger, Zipkins, ELK,
                  DatadogHQ, Google SRE Suites (Cloud Monitoring, Cloud Logging, Cloud
                  Tracer), Amazon Cloud Watch, Azure Cloud Monitoring, Digital Ocean
                  Monitoring
                </p>
                <p className="lead">
                  <strong>Virtualization &amp; Containerization</strong> - Google
                  Compute Engine, Amazon EC2, Azure Compoute, Digital Ocean Droplets,
                  VMWare VSphere, HyperV, Proxmox, Docker, Google Container Registry,
                  Google Artifact Registry, Azure Container Registry, Amazon Elastic
                  Container Registry
                </p>
                <p className="lead">
                  <strong>Web Server &amp; Reverse Proxy</strong> - Apache, NginX,
                  Haproxy, IIS, Glassfish, Ingress, Traefik, Kong
                </p>
                <p className="lead">
                  <strong>IT Support</strong> - PC (Laptop/Desktop) Diagnostic,
                  Troubleshooting, Repairement
                </p>
                <br />
                <h4>
                  <strong>Art &amp; Design</strong>
                </h4>
                <p className="lead">
                  <strong>3D Design</strong> - Blender, 3Ds Max, Sketchup
                </p>
                <p className="lead">
                  <strong>Architecture Design</strong> - Visio, Draw.io, Edraw Max
                </p>
                <p className="lead">
                  <strong>Graphic Design &amp; Editing</strong> - Adobe Photoshop, Adobe
                  Ilustrator, Adobe Lightroom, Corel Draw
                </p>
                <p className="lead">
                  <strong>Photography &amp; Cinematography</strong>
                </p>
                <p className="lead">
                  <strong>Video Editing</strong> - Adobe Premiere Pro, Adobe After
                  Effect, Filmora, Camtasia
                </p>
              </div>
              <div className="col-lg-6 me-auto">
                <h4>
                  <strong>Software Development</strong>
                </h4>
                <p className="lead">
                  <strong>Backend Programming</strong> - PHP, JavaScript, JAVA, Python,
                  C++
                </p>
                <p className="lead">
                  <strong>Backend Framework</strong> - (PHP) Laravel &amp; CI, (JAVA)
                  Spring, (Python) Django
                </p>
                <p className="lead">
                  <strong>Frontend Programming</strong> - HTML &amp; CSS
                </p>
                <p className="lead">
                  <strong>Frontend Framework</strong> - Bootstrap, jQuery, Thymeleaf,
                  Flutter, React, Vue
                </p>
                <p className="lead">
                  <strong>Mockup and Prototyping</strong> - Xd, Figma, Draw.io
                </p>
                <p className="lead">
                  <strong>Programming Language</strong> - PHP, JavaScript, JAVA, Python,
                  C++
                </p>
                <p className="lead">
                  <strong>Programming Platform</strong> - Web, Desktop, Mobile (Android)
                </p>
                <p className="lead">
                  <strong>Source Repository &amp; Version Control</strong> - Git, Git
                  Hub, Git Lab, Google Source Repository, Azure Repository, AWS Code
                  Commit{" "}
                </p>
                <p className="lead">
                  <strong>CI/CD</strong> - Jenkins, Git Lab, Git Hub Action, Google
                  Cloud Build, Amazon Cloud Build, Amazon Cloud Pipeline, Azure DevOps
                </p>
                <p className="lead">
                  <strong>Automation</strong> - Ansible, Terraform, Selenium
                </p>
                <p className="lead">
                  <strong>Single Sign On Integration</strong> - RH SSO, Keycloak
                </p>
                <p className="lead">
                  <strong>API Management</strong> - SoftwareAG, Kong
                </p>
                <br />
                <h4>
                  <strong>Personal Strength</strong>
                </h4>
                <p className="lead">
                  <strong>Fast Learner</strong>
                </p>
                <p className="lead">
                  <strong>Fast Pace Working</strong>
                </p>
                <p className="lead">
                  <strong>Leadership</strong>
                </p>
                <p className="lead">
                  <strong>Public Speaking</strong>
                </p>
                <p className="lead">
                  <strong>Project Management</strong>
                </p>
                <p className="lead">
                  <strong>Task Management</strong>
                </p>
                <p className="lead">
                  <strong>Teamwork</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/scripts.js"></Script>
        <Script src="/js/particles.js"></Script>
        <Script src="/js/app.js"></Script>
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></Script>
        </>
  )
}
