import { useRef, useState, useEffect } from 'react';

export default function Services() {
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

  const services = [
    { title: 'Web Development', desc: 'Responsive websites with modern tech stack.' },
    { title: 'Mobile App Development', desc: 'Cross-platform apps for Android & iOS.' },
    { title: 'UI/UX Design', desc: 'Designs that engage and convert users.' },
    { title: 'Consulting', desc: 'Strategy, architecture, and tech decisions.' },
    { title: 'SEO & Analytics', desc: 'Improve visibility and track performance.' },
    { title: 'Cloud Deployment', desc: 'Scalable, secure cloud infrastructure.' },
  ];

  return (
    <section className="services-section">
    <div className="services-header">
      <h1>Our Services</h1>
    </div>

    <div className="slider-container">
      <button
        className={`arrow ${leftDisabled ? 'disabled' : ''}`}
        onClick={() => scroll('left')}
        disabled={leftDisabled}>
        &#9664;
      </button>

      <div className="cards-wrapper" ref={scrollRef}>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href="#">Learn More →</a>
          </div>
        ))}
      </div>

      <button
        className={`arrow ${rightDisabled ? 'disabled' : ''}`}
        onClick={() => scroll('right')}
        disabled={rightDisabled}
      >
        &#9654;
      </button>
    </div>
  </section>
  );
}