import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';  // Tambahkan useEffect di sini
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import FontAwesome CSS
import '../styles/Home.css';

import gal1 from '../assets/gal1.jpeg';
import gal2 from '../assets/gal2.jpeg';
import gal3 from '../assets/gal3.jpeg';
import gal4 from '../assets/gal4.jpeg';
import gal5 from '../assets/gal5.jpeg';
import gal6 from '../assets/gal6.jpeg';
import building from '../assets/building.jpeg';
import tim1 from '../assets/tim1.PNG';
import tim2 from '../assets/tim2.JPG';
import tim3 from '../assets/tim3.JPG';
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png';
import part3 from '../assets/part3.png';
import part4 from '../assets/part4.png';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = {
    "Kenia Feblia": {
      name: "Kenia Feblia, M.Eng.",
      title: "Chief Technology Officer",
      details: `Lulusan Master of Engineering (M.Eng.) di bidang Aerospace Engineering dari Stanford University, Amerika Serikat, Kenia Feblia memiliki pengalaman luas dalam pengembangan sistem peluncuran roket, satelit, dan teknologi propulsi canggih.
      Sebelum bergabung dengan AstreviX, Kenia pernah memimpin beberapa proyek riset inovatif di perusahaan teknologi ruang angkasa internasional.
      Sebagai CTO, Kenia memimpin strategi teknologi AstreviX, memastikan setiap inovasi membawa standar tinggi dalam efisiensi, keberlanjutan, dan eksplorasi luar angkasa.`,
      email: "keniafeblia@gmail.com"
    },
    "Hafiz Ario": {
      name: "Hafiz Ario, Ph.D.",
      title: "Lead Aerospace Engineer",
      details: `Hafiz Ario meraih gelar Doctor of Philosophy (Ph.D.) di bidang Aerospace Engineering dari Massachusetts Institute of Technology (MIT), Amerika Serikat.
      Dengan spesialisasi dalam desain roket dan sistem penerbangan orbital, Hafiz telah berkontribusi dalam berbagai proyek luar angkasa berskala internasional.
      Di AstreviX, Hafiz memimpin tim teknik untuk merancang teknologi peluncuran terbaru yang mengutamakan efisiensi, keselamatan, dan keberlanjutan.`,
      email: "hafizario@gmail.com"
    },
    "Adelia Nurazizah": {
      name: "Adelia Nurazizah, M.Sc.",
      title: "Mission Operations Lead",
      details: `Adelia Nurazizah menyelesaikan gelar Master of Science (M.Sc.) di bidang Space Systems Operations dari University of Colorado Boulder, Amerika Serikat — salah satu kampus terbaik di bidang penelitian luar angkasa.
      Berpengalaman dalam pengelolaan misi satelit dan operasi penerbangan luar angkasa, Adelia bertanggung jawab mengoordinasikan semua aspek operasional misi AstreviX, dari peluncuran hingga pengendalian di orbit.`,
      email: "adelia@gmail.com"
    }
  };

  const handleCardClick = (memberName) => {
    setSelectedMember(teamMembers[memberName]);  // Set the selected member based on their name
    setShowPopup(true);  // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Close the modal
    setSelectedMember(null); // Reset selected member to null
  };
  

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.message) {
      setMessage('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } else {
      setMessage('Please fill out the form completely.');
    }
  };

  // Automatically hide message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000); // 3000ms = 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or message changes
    }
  }, [message]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/images/videobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1>Carving the Sky, Conquering the Stars</h1>
          <p>Dari bumi Nusantara, kami bangun jembatan menuju bintang.</p>
          <div className="cta-buttons">
            <Link to="/mission" className="btn btn-primary">
              Jelajahi Masa Depan <i className="fas fa-rocket"></i>
            </Link>
            <Link to="/join-us" className="btn btn-secondary">
              Gabung dengan Kami <i className="fas fa-user-plus"></i>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="scroll-menu">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#innovation-section">Innovation</a></li>
          <li><a href="#gallery-section">Gallery</a></li>
        </ul>
      </nav>

      {/* Featured Sections */}
      <section className="features-section" id='features'>
        <div className="feature">
          <h2>Cutting-edge Rockets</h2>
          <p>AstreviX mengembangkan roket dengan teknologi tercanggih, dirancang untuk menjelajahi luar angkasa dengan efisiensi dan daya tahan optimal.</p>
        </div>
        <div className="feature">
          <h2>Advanced Satellites</h2>
          <p>Satelit AstreviX memberikan solusi unggul dalam komunikasi, pemantauan, dan eksplorasi antariksa dengan presisi tinggi.</p>
        </div>
        <div className="feature">
          <h2>Space Research</h2>
          <p>Kami berkolaborasi secara global untuk mendorong batas pengetahuan melampaui orbit Bumi.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id='about-section'>
         <div className="image">
          <img src={building} alt="AstreviX" style={{ width: '100%', height: 'auto' }} />
        </div>

        <div className="text">
          <h2>Tentang AstreviX</h2>
          <p>
            AstreviX adalah perusahaan teknologi aerospace anak bangsa yang berkomitmen untuk membawa Indonesia ke garis depan eksplorasi luar angkasa. Dengan inovasi yang menggabungkan kecanggihan teknologi dan riset mendalam, kami menghadirkan solusi aerospace yang mendukung kemajuan global di bidang penerbangan, satelit, dan penelitian luar angkasa.
          </p>
          <p>
            Sejak berdiri, AstreviX telah berfokus pada pengembangan roket, satelit canggih, dan sistem yang mendorong batasan pengetahuan manusia tentang alam semesta. Kami bekerja sama dengan mitra internasional untuk mewujudkan visi besar kami—menjadi pionir dalam industri aerospace, menghubungkan Bumi dengan luar angkasa untuk masa depan yang lebih cerah.
          </p>
          <p>
            Dengan tim ahli dan fasilitas terkini, AstreviX terus berinovasi untuk menciptakan teknologi yang membawa manfaat bagi umat manusia, baik di Bumi maupun di luar angkasa.
          </p>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="innovation-section" id='innovation-section'>
        <h2>Innovation That Matters</h2>
        <div className="innovation-cards">
          <div className="card">
            <h3>Reusable Launch Systems</h3>
            <p>Developing cost-efficient rockets with reusability in mind.</p>
          </div>
          <div className="card">
            <h3>AI Navigation</h3>
            <p>Advanced onboard systems for autonomous route correction in orbit.</p>
          </div>
          <div className="card">
            <h3>Eco Propulsion</h3>
            <p>Exploring new fuel systems for sustainable space travel.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id='gallery-section'>
      <h2>Our Work in Action</h2>
        <div className="gallery-grid">
          {[gal1, gal2, gal3, gal4, gal5, gal6].map((image, i) => (
            <div key={i} className="gallery-item">
              <img src={image} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p className="team-subtitle">
          The minds behind our mission to push humanity beyond Earth.
        </p>
        <div className="team-grid">
          <div className="team-member" onClick={() => handleCardClick('Kenia Feblia')}>
            <img src={tim1} alt="Team Member 1" />
            <h3>Kenia Feblia</h3>
            <p>Chief Technology Officer</p>
            <a href={`mailto:${teamMembers['Kenia Feblia'].email}`} className="team-email">{teamMembers['Kenia Feblia'].email}</a>
          </div>
          <div className="team-member" onClick={() => handleCardClick('Hafiz Ario')}>
            <img src={tim3} alt="Team Member 2" />
            <h3>Hafiz Ario</h3>
            <p>Lead Aerospace Engineer</p>
            <a href={`mailto:${teamMembers['Hafiz Ario'].email}`} className="team-email">{teamMembers['Hafiz Ario'].email}</a>
          </div>
          <div className="team-member" onClick={() => handleCardClick('Adelia Nurazizah')}>
            <img src={tim2} alt="Team Member 3" />
            <h3>Adelia Nurazizah</h3>
            <p>Mission Operations Lead</p>
            <a href={`mailto:${teamMembers['Adelia Nurazizah'].email}`} className="team-email">{teamMembers['Adelia Nurazizah'].email}</a>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showPopup && selectedMember && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedMember.name}</h2>
            <h3>{selectedMember.title}</h3>
            <p>{selectedMember.details}</p>
            <a href={`mailto:${selectedMember.email}`} className="team-email">{selectedMember.email}</a>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}



      {/* Partners Section */}
      <section className="partners-section">
        <h2>Trusted By</h2>
        <div className="partners-logos">
          <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">
            <img src={part1} alt="Partner 1" />
          </a>
          <a href="https://www.esa.int" target="_blank" rel="noopener noreferrer">
            <img src={part2} alt="Partner 2" />
          </a>
          <a href="https://www.jaxa.jp" target="_blank" rel="noopener noreferrer">
            <img src={part3} alt="Partner 3" />
          </a>
          <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer">
            <img src={part4} alt="Partner 4" style={{ width: '150px', height: 'auto' }} />
          </a>
        </div>
      </section>



      {/* Contact Section */}
      <section className="contact-section py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
          <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your message..."
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Send Message</button>
            </div>
          </form>
          {/* Pop-up Message */}
          {message && (
            <div className={`popup-message ${message === 'Message sent successfully!' ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AstreviX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
