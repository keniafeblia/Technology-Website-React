import React from 'react';
import '../styles/About.css'; // pastikan kamu punya About.css ya!
import astronot from '../assets/astronot.jpeg';
import space from '../assets/space.jpeg';
import ship from '../assets/ship.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <header className="hero-section image-hero">
        <div className="background-image" />
        <div className="hero-content">
          <h1>About AstreviX</h1>
          <p>Mengukir masa depan eksplorasi angkasa dengan semangat yang tak terbatas.</p>
        </div>
      </header>

      <section className="about-section-who">
        <div className="about-section-who-content">
          <div className="about-section-who-image">
            <img src={ship} alt="Who We Are" />
          </div>
          <div className="about-section-who-text">
            <h2>Who We Are</h2>
            <p>
            AstreviX merupakan perusahaan aerospace yang berdedikasi untuk memperluas cakrawala eksplorasi manusia. 
            Inovasi adalah inti dari setiap langkah kami dalam menghadirkan terobosan teknologi luar angkasa.
            </p>
          </div>
        </div>
      </section>


      <section className="about-section-vision">
        <div className="about-section-vision-content">
          <div className="about-section-vision-text">
            <h2>Our Vision: Transformasi Dunia Melalui Eksplorasi Luar Angkasa.</h2>
            <p>
            Kami membayangkan dunia di mana perjalanan luar angkasa menjadi bagian dari kehidupan manusia — mudah diakses, berkelanjutan, dan membawa perubahan positif bagi peradaban.
            </p>
          </div>
          <div className="about-section-vision-image">
            <img src={space} alt="Our Vision" /> {/* Gambar di kiri */}
          </div>
        </div>
      </section>

      <section className="about-section-our-story">
        <div className="about-section-our-story-content">
          <div className="about-section-our-story-image">
            <img src={astronot} alt="Our Story" /> {/* Gambar atau video tentang cerita perusahaan */}
          </div>
          <div className="about-section-our-story-text">
            <h3>Our Journey to the Stars</h3>
            <p>
            AstreviX dimulai dengan sebuah impian besar: untuk mendorong batas eksplorasi manusia 
            melampaui Bumi dan membuka peluang luar angkasa untuk semua. 
            Perjalanan kami dimulai pada tahun 2020, ketika sekelompok insinyur, ilmuwan, dan pemimpi yang dipenuhi semangat bergabung untuk menghadirkan perjalanan luar angkasa yang lebih terjangkau dan dapat diakses oleh generasi mendatang.
            </p>
            <p>
            Dengan tekad yang kuat dan kerja keras tanpa henti, kami telah berhasil meraih berbagai pencapaian penting: peluncuran roket reusable yang sukses, kemitraan dengan badan antariksa terkemuka, 
            serta pengembangan teknologi yang mengubah cara pandang kita terhadap eksplorasi luar angkasa.
            </p>
            <p>
            Namun, perjalanan kami baru dimulai. Setiap langkah yang kami ambil bertujuan untuk membuat perjalanan luar angkasa lebih berkelanjutan, 
            lebih aman, dan lebih berdampak bagi kemanusiaan. 
            Kami percaya bahwa masa depan umat manusia terletak di luar bintang-bintang, dan kami di AstreviX berkomitmen untuk memastikan bahwa perjalanan ke bintang bukan lagi sebuah mimpi, tetapi kenyataan yang dapat dijangkau oleh semua orang.
            </p>
            <p>
            Bersama-sama, kami membangun masa depan yang lebih besar dari sekadar teknologi. 
            Kami membangun sebuah warisan yang akan menginspirasi dan membuka cakrawala baru bagi umat manusia.
            </p>
          </div>
        </div>
      </section>



      <section className="about-section-values">
        <h2>Our Values</h2>
        <div className="about-values-cards">
          <div className="about-values-card">
            <i className="fas fa-cogs"></i> {/* Innovation Icon */}
            <h3>Innovation</h3>
            <p>Mendorong batasan teknologi untuk membuka kemungkinan baru.</p>
          </div>
          <div className="about-values-card">
            <i className="fas fa-users"></i> {/* Collaboration Icon */}
            <h3>Collaboration</h3>
            <p>Bekerja sama untuk mencapai pencapaian yang lebih besar.</p>
          </div>
          <div className="about-values-card">
            <i className="fas fa-handshake"></i> {/* Integrity Icon */}
            <h3>Integrity</h3>
            <p>Menjaga kepercayaan dan transparansi dalam setiap langkah yang kami ambil.</p>
          </div>
          <div className="about-values-card">
            <i className="fas fa-leaf"></i> {/* Sustainability Icon */}
            <h3>Sustainability</h3>
            <p>Menciptakan solusi yang menghormati dan melindungi alam semesta.</p>
          </div>
        </div>
      </section>


      <section className="about-section-milestones">
        <h2>Milestones</h2>
        <div className="about-milestones-cards">
          <div className="about-milestone-card">
            <i className="fas fa-rocket"></i>
            <h3>First Private Reusable Rocket Launch (2021)</h3>
            <p>Berhasil melakukan peluncuran roket reusable pertama oleh sektor swasta, menandai kemajuan besar dalam teknologi luar angkasa.</p>
          </div>
          <div className="about-milestone-card">
            <i className="fas fa-globe"></i>
            <h3>Partnership with International Space Agencies (2022)</h3>
            <p>Menjalin kerja sama dengan berbagai badan antariksa dunia untuk mendukung riset eksplorasi bulan.</p>
          </div>
          <div className="about-milestone-card">
            <i className="fas fa-certificate"></i>
            <h3>Established First Space Tourism Program (2023)</h3>
            <p>Meluncurkan program pariwisata antariksa pertama, membuka akses perjalanan luar angkasa bagi masyarakat umum.</p>
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

export default About;
