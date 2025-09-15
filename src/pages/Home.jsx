import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gambar from '../assets/Home.png';
import AboutAsset from '../assets/aboutIcon.svg';
import { useState } from 'react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaHouseChimney, FaUserGroup, FaFolderOpen  } from "react-icons/fa6";
import { FaRegChartBar, FaRegFileAlt, FaPlay, FaCheck, FaUserLock, FaCode  } from "react-icons/fa";
import { BsCalendarDate, BsLightningChargeFill  } from "react-icons/bs";
import { SiBnbchain } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../assets/gallery/1.webp';
import img2 from '../assets/gallery/2.webp';
import img3 from '../assets/gallery/3.webp';
import img4 from '../assets/gallery/4.webp';
import img5 from '../assets/gallery/5.webp';
import DashboardIcon from '../assets/DashboardIcon.svg';
import { Link } from 'react-router-dom';


function Home() {
    const images = [img1, img2, img3, img4, img5];
    const [selectedImage, setSelectedImage] = useState(null);

    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const [showModal, setShowModal] = useState(false);

    const allImages = Object.values(
    import.meta.glob('/src/assets/{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22}.webp', {
        eager: true,
        import: 'default',
    })
    );
    const topImages = allImages.slice(0, 22);

    AOS.init({
        duration: 800,
        once: true,
    });
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />
      <main className="relative bg-white overflow-hidden">

        <section id='home' className="relative z-0 h-screen flex items-center justify-center px-6 text-center">
            <div className="absolute inset-0 z-[-1] pointer-events-none">
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-yellow-400 to-transparent" />
            </div>
            <div className="max-w-5xl justify-center flex flex-col items-center max-sm:space-y-4 space-y-6">
            <img src={DashboardIcon} className='hidden max-sm:block w-sm' data-aos="fade" data-aos-duration="2500"/>
                <h1 className="text-4xl max-sm:text-lg font-bold text-gray-600"  data-aos="fade" data-aos-duration="2500">
                Solusi Digital Manajemen Penjualan Kavling & Perumahan
                    Cepat, Transparan, dan Terintegrasi — Bersama Prosofia
                </h1>
                <p className="text-gray-700 max-sm:text-sm text-lg" data-aos="fade" data-aos-duration="3000">
                Prosofia adalah aplikasi berbasis web yang dirancang khusus untuk memudahkan developer perumahan dalam mengelola unit kavling, konsumen, dan transaksi, dalam satu platform terpadu.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center" data-aos="fade" data-aos-duration="3000">
                    <button
                    onClick={() => setShowModal(true)}
                    className="btn border flex items-center gap-2 border-black text-gray-700 px-6 py-3 rounded hover:bg-gray-700 cursor-pointer hover:text-white transition"
                    >
                    <FaPlay /> Lihat Demo
                    </button>

                    <Link
                    to="/form"
                    className="btn bg-yellow-400 text-gray-600 px-6 py-3 rounded font-medium"
                    >
                    Coba Demo Gratis
                    </Link>
                </div>
            </div>
        </section>
        
         <div
            ref={imageRef}
            className="relative z-10 h-[500px] w-full flex justify-center pointer-events-none mt-[-300px] md:mt-[-400px]" data-aos="fade" 
            style={{ perspective: '2200px' }}
            >

            <motion.div
                style={{
                rotateX,
                transformStyle: 'preserve-3d',
                transformOrigin: 'bottom center',
                }}
                className="p-3"
            >
                <img
                src={gambar}
                alt="Gambar Tengah"
                className="w-[900px] drop-shadow-2xl"
                />
            </motion.div>
        </div>

         {showModal && (
            <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            >
            <div
                className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                onClick={() => setShowModal(false)}
                >
                &times;
                </button>

                <div className="aspect-video z-50 w-full">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/9tD-fpGTNno"
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            </div>
          )}

       <section className="h-auto max-sm:-top-44 min-md:top-44 min-lg:top-40 relative py-10 overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 selection:bg-yellow-500" data-aos="fade">Our Client</h2>
            <p className="text-gray-600 mt-2 text-xs md:text-sm w-xs md:w-2xl mx-auto selection:bg-yellow-500 selection:text-white" data-aos="fade">
              Kami dipercaya oleh berbagai perusahaan ternama dan brand terbaik di Indonesia. 
              Berikut adalah beberapa klien yang telah bekerja sama dengan kami.
            </p>
          </div>

            <div className="relative w-full overflow-hidden" data-aos="fade" data-aos-duration="2000">
              <div className="flex animate-infinite-left w-[200%]">
                {[...topImages, ...topImages].map((src, i) => (
                  <img
                    key={`top-${i}`}
                    src={src}
                    alt={`Top Logo ${i}`}
                    className="h-12 md:h-20 w-auto object-contain mx-5  transition duration-500"
                  />

                ))}
              </div>
            </div>
        </section>

        <section id='about' className='h-auto flex flex-col justify-center text-center items-center gap-20 md:mt-44 sm:mt-0 max-sm:-top-44 relative'>
           <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full">

                  <div className="w-full md:w-1/2 flex justify-center">
                        <img src={AboutAsset} alt="Tentang Kami" className="w-full max-w-xs md:max-w-xs z lg:max-w-md" data-aos="fade" />
                  </div>

                  <div className="flex flex-col gap-6 text-center md:text-left">
                      <h1 className="font-bold text-lg md:text-4xl text-gray-600 selection:bg-yellow-500" data-aos="fade"   data-aos-duration="2500"> Mitra Digital Developer Properti di Era Modern</h1>

                      <p className="text-gray-700 md:w-xl text-sm md:text-lg selection:bg-yellow-500" data-aos="fade-up">
                        Prosofia merupakan produk dari PT Berkah Mitra Solusindo (BMS), sebuah perusahaan yang berfokus pada penyediaan solusi digital berbasis web. Kami percaya bahwa kemajuan teknologi harus dimanfaatkan untuk menciptakan efisiensi, transparansi, dan kemudahan dalam manajemen proyek properti.
                      </p>
                      <p className='text-gray-700 md:w-lg text-sm md:text-lg selection:bg-yellow-500' data-aos="fade-up"> Kami hadir untuk menjadi mitra terbaik Anda dalam mengelola proyek perumahan — dari pengaturan kavling, pemantauan progres pembayaran, hingga pelaporan instan.</p>
                  </div>
                </div>
        </section>

        <section id="fitur" className="h-auto py-10 px-5">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-600" data-aos="fade">
                    Fitur Lengkap untuk Pengelolaan Proyek Perumahan Anda
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"> 
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-yellow-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-yellow-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaHouseChimney className="text-lg" />
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Manajemen Kavling
                        </h3>
                        <p className="text-gray-600 text-md">
                            Input, atur, dan pantau status unit kavling (tersedia, booking, terjual) dalam tampilan visual peta.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="150">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-blue-300 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-blue-300 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaUserGroup className="text-lg" />
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Manajemen Konsumen
                        </h3>
                        <p className="text-gray-600 text-md">
                            Simpan dan kelola data customer, histori pembayaran, serta dokumen penting dalam satu tempat.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-green-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-green-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <BsCalendarDate className="text-lg" />
                            </div>
                        </div>
                    
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Simulasi & Jadwal Pembayaran
                        </h3>
                        <p className="text-gray-600 text-md">
                            Atur skema pembayaran, cicilan, dan pantau progresnya secara otomatis.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="250">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-orange-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-orange-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaFolderOpen className="text-lg" />
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Dokumentasi & Pengarsipan
                        </h3>
                        <p className="text-gray-600 text-md">
                            Upload dan simpan dokumen (KTP, NPWP, SPK, dll) untuk masing-masing unit secara aman dan terorganisir.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-gray-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-gray-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaRegFileAlt className="text-lg" />
                            </div>
                        </div>
                    
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Invoice & Kuitansi Otomatis
                        </h3>
                        <p className="text-gray-600 text-md">
                            Buat dan cetak invoice & kuitansi dengan logo perusahaan Anda dalam hitungan detik.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="350">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-red-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-red-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaRegChartBar className="text-lg" />
                            </div>
                        </div>
                    
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Invoice & Kuitansi Otomatis
                        </h3>
                        <p className="text-gray-600 text-md">
                            Buat dan cetak invoice & kuitansi dengan logo perusahaan Anda dalam hitungan detik.
                        </p>
                    </div>

                    </div>
        </section>
        
        <section id="keunggulan" className="h-auto py-10 px-5">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-600" data-aos="fade">
                    Keunggulan <span className='text-yellow-400'>Prosofia</span> 
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"> 
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-green-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-green-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaCheck  className="text-lg" />
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                           User Friendly – Desain antarmuka yang mudah dipahami semua staf.
                        </h3>
                        
                    </div>

                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="150">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-yellow-300 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-yellow-300 text-white rounded-full w-full h-full flex items-center justify-center">
                            <BsLightningChargeFill className="text-lg" />
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                           Cepat & Real-time – Semua data langsung diperbarui secara instan.
                        </h3>
                      
                    </div>

                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-red-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-red-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaUserLock className="text-lg" />
                            </div>
                        </div>
                    
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Aman & Terproteksi – Data Anda disimpan dengan sistem keamanan berlapis.
                        </h3>
                     
                    </div>

                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="250">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-orange-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-orange-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <SiBnbchain className="text-lg" />
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Terintegrasi – Seluruh fungsi mulai dari sales hingga keuangan terhubung.
                        </h3>
                       
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                        <div className="relative w-10 h-10 mb-4">
                            <div className="absolute inset-0 scale-125 bg-gray-400 opacity-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-gray-400 text-white rounded-full w-full h-full flex items-center justify-center">
                            <FaCode  className="text-lg" />
                            </div>
                        </div>
                    
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                             Cocok untuk Developer Kecil hingga Menengah
                        </h3>
                      
                    </div>
                    </div>
        </section>
        
        <section id="demo" className="h-auto py-10 px-5">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-600" data-aos="fade">
                Lihat Langsung Cara Kerja <span className="text-yellow-400">Prosofia</span>
                </h1>
            </div>

            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg mb-10" data-aos="zoom-in">
                <div className="relative pb-[56.25%] h-0">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/9tD-fpGTNno?autoplay=1&mute=1&controls=1&rel=0"
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>

            <div className="max-w-5xl mx-auto" data-aos="fade-up">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Galeri Tampilan</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                    >
                    <img
                        src={img}
                        alt={`Galeri ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    </div>
                ))}
                </div>
            </div>
            {selectedImage && (
                <div
                className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
                >
                <div className="relative max-w-4xl max-h-[90vh] p-4">
                    <button
                    className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                    onClick={() => setSelectedImage(null)}
                    >
                    &times;
                    </button>
                    <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                    />
                </div>
                </div>
            )}
        </section>


    
        <section id="harga" className="h-auto py-10 px-5 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-600" data-aos="fade">
                    Paket yang Fleksibel Sesuai Kebutuhan Developer Anda
                    </h1>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white cursor-pointer hover:scale-110  transition-transform rounded-xl border border-gray-300 shadow-md hover:shadow-lg  duration-300 p-6 flex flex-col justify-between">
                    <div>
                        <div className="border-b pb-4 mb-4">
                        <h2 className="text-3xl font-bold text-yellow-500">
                            IDR 249.000 <span className="text-sm font-normal text-gray-500">/ bulan</span>
                        </h2>
                        <p className="text-sm font-medium text-gray-700 mt-1">Basic</p>
                        <p className="text-gray-500 text-sm">Paket langganan dengan fitur dasar untuk memulai</p>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-800">
                        {["Manajemen Kavling", "Konsumen", "Laporan Dasar"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                            <span className="bg-green-100 text-green-600 p-2 rounded-full text-xs">
                                <FaCheck />
                            </span>
                            {item}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <a
                        href="https://wa.me/6282114966123?text=Halo%20saya%20ingin%20berlangganan%20Prosofia%20paket%20Basic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-transform px-5 py-2 rounded-md font-medium text-sm"
                        >
                        Order Now
                        </a>
                    </div>
                    </div>

                    <div className="bg-white hover:scale-110  transition-transform cursor-pointer rounded-xl border border-gray-300 shadow-md hover:shadow-lg duration-300 p-6 flex flex-col justify-between">
                    <div>
                        <div className="border-b pb-4 mb-4">
                        <h2 className="text-3xl font-bold text-yellow-500">
                            IDR 499.000 <span className="text-sm font-normal text-gray-500">/ bulan</span>
                        </h2>
                        <p className="text-sm font-medium text-gray-700 mt-1">Pro</p>
                        <p className="text-gray-500 text-sm">Solusi lengkap dengan fitur lanjutan untuk pengelolaan proyek</p>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-800">
                        {[
                            "Semua fitur Basic",
                            "Invoice Otomatis",
                            "Dokumen",
                            "Simulasi Pembayaran",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                            <span className="bg-green-100 text-green-600 p-2 rounded-full text-xs">
                                <FaCheck />
                            </span>
                            {item}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <a
                        href="https://wa.me/6282114966123?text=Halo%20saya%20tertarik%20dengan%20paket%20Pro%20Prosofia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white  px-5 py-2 rounded-md font-medium text-sm"
                        >
                        Order Now
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        
            <section id="testi" className="h-auto py-16 px-5 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-600" data-aos="fade">
                Apa Kata Klien Kami?
                </h1>
            </div>

            <div className="max-w-4xl mx-auto">
                <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                >
                <SwiperSlide>
                    <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-xl shadow-md">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                        "Dulu semua kami tulis manual di Excel, sekarang semua transaksi, laporan, dan status kavling bisa dilihat real-time. Sangat membantu proyek kami di Cirebon."
                    </p>
                    <h4 className="text-right font-semibold text-yellow-600">– PT Jaya Graha Sentosa</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-xl shadow-md">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                        "Invoice otomatis dan histori pembayaran sangat memudahkan kerja admin. UI-nya juga gampang dipakai."
                    </p>
                    <h4 className="text-right font-semibold text-yellow-600">– CV Pelita Permai</h4>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
            </section>
        
       

      </main>
      <Footer />
    </>
  );
}

export default Home;
