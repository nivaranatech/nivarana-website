import CountUp from 'react-countup';
export default function Home({portfolioCount}) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome To NivaranaTech</h2>
        <p>"Where Vision, Meets Execution"</p>
        <a href="#contact">
          <button className="cta-button">Start Your Journey</button>
        </a>&nbsp;
         {portfolioCount > 0 && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <div
              className="count-animation"
              style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}
            >
              <CountUp end={portfolioCount} duration={3} separator="," delay={2}/>
            </div>
            <div
              className="count-label-animation"
              style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}
            >
              Completed Projects
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

//npm install react-countup