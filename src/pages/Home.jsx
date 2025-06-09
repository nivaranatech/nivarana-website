import CountUp from 'react-countup';
export default function Home() {

  const portfolioCount = 6;

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
              className="counter">
              <CountUp end={portfolioCount} duration={3} separator="," delay={2}/>
            </div>
            <div
              className="count-label">
              Projects Completed
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

//npm install react-countup