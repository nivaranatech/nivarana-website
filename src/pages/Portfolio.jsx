import { useRef, useState, useEffect } from 'react';
import ev_img from '../assets/ev_app_img.jpg';
import blog_img from '../assets/blog_app_img.jpg';
import health_img from '../assets/health_app_img.jpg';
import finance_img from '../assets/expense_website_img.jpg';
import whisper_img from '../assets/whisper_app_img.jpg';

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
      title: 'Personal finance tracker - Website',
      desc: 'The platform allows users to register and log in securely, track their income and expenses, set monthly budgets, monitor transaction history, export financial reports as Excel or PDF, and gain visual insights via charts.',
      image: finance_img,
      link: '#',
    },
    {
      title: 'EV charging station finder - Android App',
      desc: 'It is an android application which shows EV charging stations on a map.Using this app user can book charging slots in advance. User can pay slot booking fees via wallet.',
      image: ev_img,
      link: '#',
    },
    {
      title: 'Social media app',
      desc: 'It is a social media application with video call, voice call and Reat time chat functionality. Other than that it also include functionalities like Follow, Unfollow, Post, Upvote, Downvote, Dynamic app theme, Location sharing, Contact Sharing, Gemini AI.',
      image: whisper_img,
      link: '#',
    },
    {
      title: 'Mental health monitoring - Android App',
      desc: 'It is an intuitive, psychiatrist-guided Android application designed to help users track, assess, and improve their mental health, while offering a seamless platform to book appointments with certified mental health professionals.',
      image: health_img,
      link: '#',
    },
    {
      title: 'Blog Application',
      desc: 'It is an easy-to-use platform where you can write, edit, and share your blog posts. You can sign up, log in, and start creating content.',
      image: blog_img,
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