import { useRef, useState, useEffect } from 'react';
import project_img from '../assets/test-project.png';
import ev_img from '../assets/ev_project_img.jpg';

export default function Portfolio() {
  const scrollRef = useRef(null);
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      const scrollLeft =
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setLeftDisabled(container.scrollLeft <= 0);
      setRightDisabled(
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const projects = [
    {
      title: 'EV charging station finder - Android App',
      desc: 'It is an android application which shows EV charging stations on a map.Using this app user can book charging slots in advance. User can pay slot booking fees via wallet.',
      image: ev_img,
      link: '#',
    },
    {
      title: 'Project B',
      desc: 'Fitness tracking mobile app with real-time stats.',
      image: project_img,
      link: '#',
    },
    {
      title: 'Project C',
      desc: 'A creative personal portfolio built with animations.',
      image: project_img,
      link: '#',
    },
    {
      title: 'Project D',
      desc: 'Landing page for SaaS startup with lead capture.',
      image: project_img,
      link: '#',
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Check out some of our recent projects.</p>
      </div>

      <div className="portfolio-slider">
        <button className={`arrow ${leftDisabled ? 'disabled' : ''}`} onClick={() => scroll('left')} disabled={leftDisabled}>
          &#9664;
        </button>

        <div className="portfolio-cards" ref={scrollRef}>
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              {/* <a href={project.link} target="_blank" >Show Project →</a> */}
            </div>
          ))}
        </div>

        <button className={`arrow ${rightDisabled ? 'disabled' : ''}`} onClick={() => scroll('right')} disabled={rightDisabled}>
          &#9654;
        </button>
      </div>
    </section>
  );
}