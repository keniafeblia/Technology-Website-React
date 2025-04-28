import React from 'react';
import '../styles/Technology.css';
import { FaRocket, FaRobot, FaSatellite } from 'react-icons/fa'; // Import FontAwesome icons
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.webp';
import news3 from '../assets/news3.webp';


const Technology = () => {
  return (
    <div className="technology-page">
      <section className="tech-hero">
        <h1>Our Technology</h1>
        <p>Leading innovation in aerospace and space exploration.</p>
      </section>

      <section className="tech-content">
        {/* Advanced Propulsion Card */}
        <div className="tech-card">
          <FaRocket className="tech-icon" />
          <h2>Advanced Propulsion</h2>
          <p>
          Sistem propulsi kami dirancang untuk perjalanan antar bintang, menawarkan efisiensi, keandalan, dan kecepatan luar biasa untuk menjelajahi dunia baru.
          </p>
        </div>

        {/* Autonomous Navigation Card */}
        <div className="tech-card">
          <FaRobot className="tech-icon" />
          <h2>Autonomous Navigation</h2>
          <p>
          Dengan sistem otonom berbasis AI, wahana kami mampu menavigasi lingkungan kompleks tanpa intervensi manusia, memastikan keberhasilan setiap misi.
          </p>
        </div>

        {/* Quantum Communication Card */}
        <div className="tech-card">
          <FaSatellite className="tech-icon" />
          <h2>Quantum Communication</h2>
          <p>
          Melalui teknologi keterikatan kuantum, kami menghadirkan komunikasi ultra-aman dan real-time melintasi jarak kosmik yang luas.
          </p>
        </div>

        {/* Ultra-light Materials Card */}
        <div className="tech-card">
          <FaRocket className="tech-icon" />
          <h2>Ultra-light Materials</h2>
          <p>
          Kami menggunakan material canggih berteknologi tinggi yang sangat ringan, mengurangi bobot wahana secara drastis untuk meningkatkan efisiensi dan menghemat konsumsi bahan bakar.</p>
        </div>

        {/* AI in Rocket Control Card */}
        <div className="tech-card">
          <FaRobot className="tech-icon" />
          <h2>AI in Rocket Control</h2>
          <p>
          Sistem AI kami mengoptimalkan performa roket secara real-time, memastikan stabilitas dan presisi maksimal selama peluncuran dan manuver.</p>
        </div>
      </section>

      {/* News Section */}
      <section className="tech-news">
        <h2>Berita Teknologi Terkini</h2>
        <div className="news-item">
          <img src={news1} alt="Satelit AI" className="news-image"/>
          <div className="news-content">
            <h3>NASA Kembangkan Satelit AI untuk Respons Bencana</h3>
            <p>
              NASA bekerja sama dengan startup Irlandia, Ubotica, mengembangkan sistem berbasis AI yang memungkinkan satelit memproses data gambar secara mandiri di orbit, meningkatkan respons bencana secara real-time.
              <a href="https://www.fastcompany.com/91295780/nasas-new-ai-satellites-could-revolutionize-disaster-response" target="_blank" rel="noreferrer noopener" className="read-more"> Baca Selengkapnya</a>
            </p>
          </div>
        </div>
        <div className="news-item">
          <img src={news2} alt="Sistem Propulsi" className="news-image"/>
          <div className="news-content">
            <h3>Revolusi Teknologi Propulsi: Roket Fusi untuk Perjalanan Antarbintang</h3>
            <p>
              Teknologi propulsi berbasis fusi terbaru dapat mengurangi waktu perjalanan ke Mars hingga setengahnya, membuka kemungkinan eksplorasi luar angkasa yang lebih cepat dan efisien.
              <a href="https://www.sustainability-times.com/low-carbon-energy/a-stunning-fusion-rocket-takes-shape-revolutionary-propulsion-tech-promises-to-slash-interplanetary-travel-time-in-half-rewriting-the-future-of-spaceflight/" target="_blank" rel="noreferrer noopener" className="read-more"> Baca Selengkapnya</a>
            </p>
          </div>
        </div>
        <div className="news-item">
          <img src={news3}alt="Komunikasi Kuantum" className="news-image"/>
          <div className="news-content">
            <h3>Terobosan Komunikasi Kuantum: Pesan Aman Dikirim Melalui Jaringan Telekomunikasi</h3>
            <p>
              Para ilmuwan di Toshiba Eropa berhasil mengirim pesan terenkripsi kuantum melalui jaringan telekomunikasi komersial sejauh 254 km, menandai langkah penting dalam pengembangan komunikasi aman masa depan.
              <a href="https://www.ft.com/content/51a65e45-302c-45fa-8bd1-c828a66b012d" target="_blank" rel="noreferrer noopener" className="read-more"> Baca Selengkapnya</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Technology;
