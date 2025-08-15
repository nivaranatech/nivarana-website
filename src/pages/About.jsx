
export default function About(){

  const teamMembers = [
    { name: 'Devdutt Solanki', link: 'https://www.linkedin.com/in/devdutt-solanki-46429332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    /*{ name: 'Pratik Bhavsar', link: 'https://www.linkedin.com/in/pratik-bhavsar-b67522272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },*/
    { name: 'Dev Suthar', link: 'https://www.linkedin.com/in/dev-suthar-9107b0245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Akshay Sarkale', link: 'https://www.linkedin.com/in/akshaysarkale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Ayush Bhavsar', link: 'https://www.linkedin.com/in/ayushbhavsar5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Dhairya Bhoya', link: 'https://www.linkedin.com/in/dhairya-bhoya-232623241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  ];

  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Nivarana Tech delivers innovative and scalable software solutions to help businesses thrive in the digital age.</p>
      </div>
      
      <div className="about-content">
        <h3>Who We Are</h3>
        <p>We are a team of developers, designers, and tech enthusiasts solving real-world problems with elegant solutions and a passion for technology.</p>

        <h3>Our Mission</h3>
        <p>Empower individuals and businesses by turning digital ideas into reality—from startups to enterprises.</p>
      </div>

      <div className="team-section">
        <h2>Team Members</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <h3>{member.name}</h3>
              <a href={member.link} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};