import React from 'react';
import '../styles/Mission.css';
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png';
import part3 from '../assets/part3.png';
import part4 from '../assets/part4.png';


const Mission = () => {
  return (
    <div className="mission-container">
      {/* Hero Section */}
      <header className="hero-section image-hero">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/images/footageworking.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1>Our Mission</h1>
          <p>We aim to revolutionize space exploration with cutting-edge technology.</p>
        </div>
      </header>

      {/* Core Mission Section */}
      <section className="mission-section core-mission">
        <div className="core-mission-content">
          <div className="core-mission-icon">
            <i className="fas fa-cogs"></i> {/* Icon to represent technology and innovation */}
          </div>
          <div className="core-mission-text">
            <h2>Our Core Mission</h2>
            <p>
            Di AstreviX, kami berkomitmen untuk mendorong batas teknologi kedirgantaraan.
            Kami berupaya menghadirkan solusi inovatif yang akan mentransformasi masa depan eksplorasi luar angkasa. Kolaborasi, keberlanjutan, dan inovasi terdepan menjadi inti dari setiap misi yang kami jalankan.
            </p>
          </div>
        </div>
      </section>


      {/* Technologies We Develop Section */}
      <section className="mission-section technology">
        <h2>Technologies We Develop</h2>
        <div className="technology-cards">
          <div className="technology-card">
            <i className="fas fa-rocket"></i> {/* Rocket Icon */}
            <h3>Rocket Propulsion Systems</h3>
            <p>Kami merancang dan membangun sistem propulsi yang efisien dan berkinerja tinggi untuk mendorong masa depan perjalanan luar angkasa.</p>
          </div>
          <div className="technology-card">
            <i className="fas fa-satellite-dish"></i> {/* Satellite Icon */}
            <h3>Satellite Technology</h3>
            <p>Kami mengembangkan satelit canggih untuk komunikasi, observasi Bumi, dan penelitian ilmiah.
            </p>
          </div>
          <div className="technology-card">
            <i className="fas fa-robot"></i> {/* Robot Icon */}
            <h3>Space Robotics</h3>
            <p>Kami menciptakan robot-robot yang mampu beroperasi di lingkungan ekstrem, membuka peluang baru dalam eksplorasi luar angkasa.</p>
          </div>
        </div>
      </section>


      {/* Our Partnerships Section */}
      <section className="mission-section partnership">
        <h2>Our Partnerships</h2>
        <p>
          Collaboration is key to achieving the next great leaps in space exploration. We are proud to partner with international space agencies, private companies, and scientific institutions to advance our collective knowledge and capabilities.
        </p>
        <p>Kolaborasi adalah kunci untuk mencapai lompatan besar berikutnya dalam eksplorasi luar angkasa.
        Kami bangga bermitra dengan badan antariksa internasional, perusahaan swasta, dan institusi ilmiah untuk mengembangkan pengetahuan dan kapabilitas bersama.</p>
        
        <div className="partnership-cards">
          <div className="partnership-card">
            <img src={part1} alt="NASA" className="partner-logo" />
            <h3>NASA</h3>
            <p>We collaborate with NASA on advanced propulsion and satellite systems.</p>
          </div>
          <div className="partnership-card">
            <img src={part2} alt="ESA" className="partner-logo" />
            <h3>ESA</h3>
            <p>Partnering with the European Space Agency for Earth observation missions.</p>
          </div>
          <div className="partnership-card">
            <img src={part3} alt="JAXA" className="partner-logo" />
            <h3>JAXA</h3>
            <p>We collaborate with JAXA to develop innovative space exploration technologies.</p>
          </div>
          <div className="partnership-card">
            <img src={part4} alt="SpaceX" className="partner-logo" />
            <h3>SpaceX</h3>
            <p>Partnering with SpaceX for reusable spacecraft and interplanetary missions.</p>
          </div>
        </div>
      </section>

      {/* Looking Towards the Future Section */}
      <section className="mission-section future">
        <h2>Looking Towards the Future</h2>
        <div className="future-cards">
          <div className="future-card">
            <i className="fas fa-rocket"></i>
            <h3>Developing Mars Exploration Missions</h3>
            <p>Kami tengah mempersiapkan misi manusia ke Mars, dengan tujuan mengeksplorasi dan membangun kehadiran yang berkelanjutan di Planet Merah.</p>
          </div>
          <div className="future-card">
            <i className="fas fa-space-shuttle"></i>
            <h3>Expanding Space Tourism</h3>
            <p>Kami berkomitmen untuk mewujudkan pariwisata luar angkasa, memberikan kesempatan bagi individu untuk merasakan pengalaman perjalanan ke luar Bumi.</p>
          </div>
          <div className="future-card">
            <i className="fas fa-moon"></i>
            <h3>Sustainable Lunar Bases</h3>
            <p>Kami membangun pangkalan di Bulan yang berkelanjutan untuk mendukung penelitian ilmiah dan membuka potensi sumber daya Bulan.</p>
          </div>
        </div>
      </section>

      {/* Impact on Earth and Future Generations Section */}
      <section className="mission-section impact">
        <h2>Impact on Earth and Future Generations</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <i className="fas fa-globe-americas"></i>
            <h3>Global Connectivity</h3>
            <p>Meningkatkan komunikasi global melalui teknologi satelit canggih, menghubungkan daerah-daerah terpencil dan kurang terlayani.</p>
          </div>
          <div className="impact-card">
            <i className="fas fa-briefcase-medical"></i>
            <h3>Disaster Management</h3>
            <p>Menggunakan teknologi luar angkasa untuk respons bencana secara real-time, menyediakan data penting guna menyelamatkan nyawa dan meminimalkan kerusakan.</p>
          </div>
          <div className="impact-card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Inspiring Future Generations</h3>
            <p>Kami menginspirasi generasi muda untuk menekuni karier di bidang STEM, membentuk inovator dan penjelajah masa depan.</p>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AstreviX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Mission;
