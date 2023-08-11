import Head from 'src/app/components/Head'
// import Navbar from '../components/Navbar'
import Footer from 'src/app/components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('src/app/components/Navbar'), {
  ssr: false,
});

export default function Project1() {
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
                Implementing CI/CD Environment
                </h2>
                {/* About Section Content*/}
                <div className="row">
                <div className="col-lg-4">
                    <img src="/assets/img/portfolio/Sentuh.png" width="100%" alt="" />
                </div>
                <div className="col-lg-8">
                    <p style={{ textAlign: "justify" }}>
                    In current Software Development process we didn't want to have a gap
                    between the Developer and the Operation Team, we want a continuous
                    process without any manual and repetitive action so the Developer
                    could focus on Bug Fixing and fulfill business requirement and the
                    Operation teams could be focus on Maintaining and Monitoring running
                    Applications/Services.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    In this project, i implemented and fully migrated from conventional
                    system (Bare Metal and Virtualization Server) moving to
                    Containerization and Orchestration Environment using Kubernetes as a
                    Highly Available Cluster and integrated to Pipelining platform using
                    Jenkins and using Gitlab as Source Repository and Container Registry.
                    And also implemented a centralized monitoring dashboard using Grafana
                    and connected to few Logs/Metrics Exporter using Prometheus.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    See the complete reference &amp; documentation below :
                    </p>
                    <ul>
                    <li>
                        <a href="https://kubernetes.io/id/" target="_blank">
                        Kubernetes
                        </a>
                    </li>
                    <li>
                        <a href="https://www.jenkins.io/" target="_blank">
                        Jenkins
                        </a>
                    </li>
                    <li>
                        <a href="https://about.gitlab.com/" target="_blank">
                        Gitlab
                        </a>
                    </li>
                    <li>
                        <a href="https://grafana.com/" target="_blank">
                        Grafana
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://github.com/kubernetes-sigs/kubespray"
                        target="_blank"
                        >
                        Kubespray
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://github.com/prometheus-operator/kube-prometheus"
                        target="_blank"
                        >
                        Kube Prometheus
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
