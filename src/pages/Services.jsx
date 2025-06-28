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
    {
      title: 'Web Development',
      desc: 'We build fast, secure, and visually stunning websites that help your business attract more customers and grow online.'
    },
    {
      title: 'Mobile App Development',
      desc: 'We create user-friendly apps for Android and iOS that keep your audience engaged and boost your brand’s presence on mobile devices.'
    },
    {
      title: 'UI/UX Design',
      desc: 'We design intuitive and attractive interfaces that make your website or app easy to use, helping visitors enjoy the experience and take action.'
    },
    {
      title: 'Logo Design',
      desc: 'We craft unique and memorable logos that reflect your brand’s personality and make a strong impression on your customers.'
    },
    {
      title: 'Photo & Video Editing',
      desc: 'We expertly edit your photos and videos to create stunning, high-quality content that grabs attention and communicates your message clearly across digital platforms.'
    }
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