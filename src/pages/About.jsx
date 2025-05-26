
export default function About(){

  const teamMembers = [
    { name: 'Dev Suthar', role: 'Chief Executive Officer (CEO)', link: 'https://linkedin.com/in/devsuthar' },
    { name: 'Devdutt Solanki', role: 'Chief Financial Officer (CFO)', link: 'https://linkedin.com/in/devduttsolanki' },
    { name: 'Het Shukla', role: 'Chief Technology Officer (CTO)', link: 'https://linkedin.com/in/hetshukla' },
    { name: 'Akshay Sarkale', role: 'Database Handler', link: 'https://linkedin.com/in/akshaysarkale' },
    { name: 'Dhairya Bhoya', role: 'Backend Developer', link: 'https://linkedin.com/in/dhairyabhoya' },
    { name: 'Pratik Bhavsar', role: 'Backend Developer', link: 'https://linkedin.com/in/pratikbhavsar' },
  ];

  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Nivarana Tech delivers innovative and scalable software solutions to help businesses thrive in the digital age.</p>
      </div>
      
      <div className="about-content">
        <h3>Who We Are</h3>
        <p>We’re a team of developers, designers, and tech enthusiasts solving real-world problems with elegant solutions and a passion for technology.</p>

        <h3>Our Mission</h3>
        <p>Empower individuals and businesses by turning digital ideas into reality—from startups to enterprises.</p>
      </div>

      <div className="team-section">
        <h2>Team Members</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.link} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};