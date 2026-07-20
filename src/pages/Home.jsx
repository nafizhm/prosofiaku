import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gambar from '../assets/home.svg';
import AboutAsset from '../assets/aboutIcon.svg';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaHouseChimney, FaUserGroup, FaFolderOpen } from "react-icons/fa6";
import { FaRegFileAlt, FaPlay, FaCheck, FaUserLock, FaCode } from "react-icons/fa";
import { BsCalendarDate, BsLightningChargeFill } from "react-icons/bs";
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
import img6 from '../assets/gallery/6.jpg';
import testimonial1 from '../assets/testimonials/1.jpg';
import testimonial2 from '../assets/testimonials/2.jpg';
import testimonial3 from '../assets/testimonials/3.jpg';
import DashboardIcon from '../assets/DashboardIcon.svg';
import { FaMapMarkedAlt } from "react-icons/fa";

function Home() {
  const demoWhatsAppUrl = 'https://wa.me/6282221992911?text=Halo%2C%20saya%20ingin%20coba%20demo%20gratis%20Prosofia.';
  const customWhatsAppUrl = 'https://wa.me/6281250274777?text=Halo%2C%20saya%20ingin%20diskusi%20kebutuhan%20custom%20aplikasi%20Prosofia.';
  const paketWhatsAppUrl = (namaPaket) =>
    `https://wa.me/6281250274777?text=${encodeURIComponent(`Halo, saya ingin konsultasi paket ${namaPaket} Prosofia.`)}`;
  const packageCards = [
    {
      name: 'Tanah Kavling',
      price: 'IDR 2.000.000',
      description: 'Cocok untuk developer yang fokus pada penjualan tanah kavling dan membutuhkan pengelolaan data yang rapi sejak awal.',
      legacyFeatures: [
        'Domain 1 tahun',
        'Hosting 1 tahun',
        'Support 1 tahun',
        '1 siteplan project',
        'Source aplikasi',
      ],
      features: [
        'Dashboard penjualan',
        'Siteplan digital',
        'Cetak akad',
        'Cetak kwitansi pembayaran',
        'Cetak rekap pembayaran customer',
        'Status legalitas unit kavling',
        'Manajemen berkas customer',
        'Multi user sesuai hak akses',
        'Pengaturan siteplan transaksi',
      ],
    },
    {
      name: 'Kavling Pemakaman',
      price: 'IDR 4.000.000',
      description: 'Dirancang untuk pengelolaan kavling pemakaman dengan alur data yang lebih tertib, cepat dicari, dan mudah dipantau.',
      legacyFeatures: [
        'Domain 1 tahun',
        'Hosting 1 tahun',
        'Support 1 tahun',
        '1 siteplan project',
        'Source aplikasi',
      ],
      features: [
        'Dashboard penjualan',
        'Siteplan digital',
        'Cetak akad',
        'Cetak kwitansi pembayaran',
        'Cetak rekap pembayaran customer',
        'Cetak sertifikat pembelian',
        'Status pemakaian kavling makam',
        'Manajemen berkas customer',
        'Multi user sesuai hak akses',
        'Pengaturan siteplan transaksi',
      ],
    },
    {
      name: 'Penjualan Perumahan',
      price: 'IDR 8.000.000',
      description: 'Pilihan tepat untuk developer yang ingin memantau penjualan unit perumahan, pembayaran customer, dan dokumen secara terpusat.',
      legacyFeatures: [
        'Domain 1 tahun',
        'Hosting 1 tahun',
        'Support 1 tahun',
        '1 siteplan project',
        'Source aplikasi',
      ],
      features: [
        'Dashboard penjualan',
        'Siteplan digital',
        'Modul booking oleh marketing',
        'Modul verifikasi booking',
        'Modul SPR',
        'Modul wawancara',
        'Modul SP3K',
        'Modul akad',
        'Modul pindah unit',
        'Modul pembelian cancel',
        'Modul ganti nama',
        'Modul status pemasangan listrik dan air',
        'Cetak form subsidi',
        'Cetak kwitansi pembayaran',
        'Cetak rekap pembayaran customer',
        'Status legalitas unit kavling',
        'Manajemen berkas customer',
        'Multi user sesuai hak akses',
        'Pengaturan siteplan transaksi',
        'Log aktivitas pengguna',
      ],
    },
    {
      name: 'Proyek & Gudang',
      price: 'IDR 7.000.000',
      description: 'Untuk developer yang membutuhkan pengelolaan proyek, progres pekerjaan, dan kontrol material dalam satu alur kerja.',
      legacyFeatures: [
        'Domain 1 tahun',
        'Hosting 1 tahun',
        'Support 1 tahun',
        '1 siteplan project',
        'Source aplikasi',
      ],
      features: [
        'Dashboard pembangunan',
        'Siteplan progress pembangunan',
        'Opname bangunan',
        'Opname saluran',
        'Opname jalan',
        'Pembelian barang',
        'Penggunaan barang',
        'Barang keluar',
        'Master data',
        'Pengaturan pengguna',
      ],
    },
  ];
  const MotionDiv = motion.div;
  const images = [img1, img2, img3, img4, img5, img6];
  const testimonialImages = [testimonial1, testimonial2, testimonial3];
  const [selectedImage, setSelectedImage] = useState(null);

  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const [showModal, setShowModal] = useState(false);

  const allImages = Object.values(
    import.meta.glob('/src/assets/{1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22}.webp', {
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
        <section id='home' className="relative z-0 min-h-screen flex items-center justify-center px-5 pt-28 pb-16 text-center md:px-6 md:pt-24">
          <div className="absolute inset-0 z-[-1] pointer-events-none">
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-yellow-400 to-transparent" />
          </div>
          <div className="max-w-5xl justify-center flex flex-col items-center space-y-4 md:space-y-6">
            <img src={DashboardIcon} className='hidden max-sm:block w-full max-w-[280px]' data-aos="fade" data-aos-duration="2500" />
            <h1 className="text-3xl leading-tight md:text-4xl font-bold text-gray-600" data-aos="fade" data-aos-duration="2500">
              Kelola Penjualan Kavling dan Proyek Perumahan Lebih Rapi, Cepat, dan Mudah Dipantau
            </h1>
            <p className="text-base leading-7 text-gray-700 md:text-lg" data-aos="fade" data-aos-duration="3000">
              Prosofia membantu developer properti merapikan data unit, customer, pembayaran, siteplan, hingga laporan dalam satu sistem berbasis web. Tidak perlu lagi bergantung pada catatan manual, file Excel yang tercecer, atau update progress yang lambat.
            </p>
            <p className="text-sm md:text-base font-medium text-gray-600" data-aos="fade" data-aos-duration="3100">
              Sudah digunakan lebih dari 70 developer kavling dan perumahan.
            </p>
            <div className="flex w-full flex-col md:w-auto md:flex-row gap-3 md:gap-4 justify-center" data-aos="fade" data-aos-duration="3000">
              <button
                onClick={() => setShowModal(true)}
                className="btn w-full md:w-auto border flex items-center justify-center gap-2 border-black text-gray-700 px-6 py-3 rounded hover:bg-gray-700 cursor-pointer hover:text-white transition"
              >
                <FaPlay /> Lihat Demo
              </button>

              <a
                href={demoWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full md:w-auto bg-yellow-400 text-gray-600 px-6 py-3 rounded font-medium"
              >
                Coba Demo Gratis
              </a>
            </div>
            <p className="text-sm leading-6 text-gray-600 md:max-w-2xl" data-aos="fade" data-aos-duration="3200">
              Demo dan konsultasi gratis. Jika paket yang tersedia belum sesuai, kami juga melayani custom aplikasi sesuai kebutuhan bisnis Anda.
            </p>
          </div>
        </section>

        <div
          ref={imageRef}
          className="relative z-10 h-[220px] md:h-[500px] w-full flex justify-center pointer-events-none mt-[-40px] md:mt-[-400px]"
          data-aos="fade"
          style={{ perspective: '2200px' }}
        >
          <MotionDiv
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
              className="w-full max-w-[900px] drop-shadow-2xl"
            />
          </MotionDiv>
        </div>

        {showModal && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-[calc(100%-24px)] md:w-full relative"
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

        <section className="h-auto relative py-10 md:py-12 overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 selection:bg-yellow-500" data-aos="fade">Dipilih Oleh Berbagai Pelaku Bisnis Properti</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base max-w-xs md:max-w-2xl mx-auto selection:bg-yellow-500 selection:text-white leading-6" data-aos="fade">
              Logo berikut adalah sebagian mitra yang telah bekerja sama dengan kami. Prosofia dirancang untuk membantu operasional developer lebih tertata, memudahkan tim admin, sales, dan manajemen melihat data yang sama secara real-time.
            </p>
          </div>

          <div className="relative w-full overflow-hidden" data-aos="fade" data-aos-duration="2000">
            <div className="flex animate-infinite-left w-[200%]">
              {[...topImages, ...topImages].map((src, i) => (
                <img
                  key={`top-${i}`}
                  src={src}
                  alt={`Top Logo ${i}`}
                  className="h-12 md:h-20 w-auto object-contain mx-5 transition duration-500"
                />
              ))}
            </div>
          </div>
        </section>

        <section id='about' className='h-auto flex flex-col justify-center text-center items-center px-5 md:px-3 gap-12 md:gap-20 md:mt-20 relative'>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={AboutAsset} alt="Tentang Kami" className="w-full max-w-[260px] md:max-w-xs z lg:max-w-md" data-aos="fade" />
            </div>

            <div className="flex flex-col gap-6 text-center md:text-left">
              <h1 className="font-bold text-2xl md:text-4xl text-gray-600 selection:bg-yellow-500 leading-tight" data-aos="fade" data-aos-duration="2500">Bantu Developer Properti Keluar dari Excel, Chat, dan Laporan Manual</h1>

              <p className="text-gray-700 md:w-xl text-base md:text-lg leading-7 selection:bg-yellow-500" data-aos="fade-up">
                Prosofia merupakan produk dari PT Berkah Mitra Solusindo (BMS), perusahaan yang berfokus pada solusi digital berbasis web untuk kebutuhan bisnis yang lebih rapi dan terukur. Kami memahami tantangan developer properti: data unit berubah cepat, follow up customer harus rapi, pembayaran harus akurat, dan laporan harus selalu siap saat dibutuhkan.
              </p>
              <p className='text-gray-700 md:w-lg text-base md:text-lg leading-7 selection:bg-yellow-500' data-aos="fade-up">
                Karena itu, kami menghadirkan sistem yang membantu tim Anda bekerja lebih cepat, mengurangi human error, dan membuat proses penjualan hingga pelaporan terasa jauh lebih terkendali. Jika alur kerja bisnis Anda unik, kami juga siap menyesuaikan sistem secara custom.
              </p>
            </div>
          </div>
        </section>

        <section id="fitur" className="h-auto py-12 px-5">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-600" data-aos="fade">
              Fitur Lengkap untuk Pengelolaan Proyek Perumahan Anda
            </h1>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-base leading-6" data-aos="fade-up">
              Setiap fitur dirancang bukan sekadar menambah menu, tetapi untuk membantu tim Anda bekerja lebih cepat, lebih rapi, dan lebih mudah dipantau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-yellow-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-yellow-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaHouseChimney className="text-lg" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Manajemen Kavling
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-6">
                Pantau unit tersedia, booking, atau terjual dalam tampilan visual yang mudah dipahami, sehingga tim sales dan manajemen tidak lagi saling silang informasi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="150">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-blue-300 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-blue-300 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaUserGroup className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Manajemen Konsumen
              </h3>
              <p className="text-gray-600 text-md">
                Simpan data customer, histori follow up, pembayaran, dan dokumen penting dalam satu tempat agar admin tidak perlu mencari data dari chat atau file terpisah.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-green-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-green-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <BsCalendarDate className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Simulasi & Jadwal Pembayaran
              </h3>
              <p className="text-gray-600 text-md">
                Susun skema pembayaran dan cicilan dengan lebih jelas, lalu pantau progres tagihan secara otomatis untuk meminimalkan keterlambatan dan salah hitung.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="250">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-orange-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-orange-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaFolderOpen className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Dokumentasi & Pengarsipan
              </h3>
              <p className="text-gray-600 text-md">
                Arsipkan dokumen seperti KTP, NPWP, SPK, dan file pendukung lain dengan rapi agar mudah dicari kapan pun dibutuhkan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-gray-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-gray-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaRegFileAlt className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Invoice & Kuitansi Otomatis
              </h3>
              <p className="text-gray-600 text-md">
                Buat invoice dan kuitansi lebih cepat dengan format yang konsisten, sehingga proses penagihan terlihat lebih profesional di mata customer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="350">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-red-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-red-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaMapMarkedAlt className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Siteplan Dinamis
              </h3>
              <p className="text-gray-600 text-md">
                Tampilkan status penjualan dan progress pembangunan dalam siteplan dinamis agar perkembangan proyek bisa dipantau lebih cepat oleh tim dan calon buyer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="250">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-orange-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-orange-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaFolderOpen className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Pengelolaan Keuangan
              </h3>
              <p className="text-gray-600 text-md">
                Catat pemasukan dan transaksi proyek secara lebih terstruktur agar laporan keuangan lebih mudah disusun dan dicek.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-gray-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-gray-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaRegFileAlt className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Stok Obname Bangunan
              </h3>
              <p className="text-gray-600 text-md">
                Pantau progres pekerjaan lapangan secara real-time sehingga manajemen bisa melihat perkembangan proyek tanpa menunggu laporan manual yang terlambat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="350">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-red-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-red-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaMapMarkedAlt className="text-lg" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Pengelolaan Gudang Material
              </h3>
              <p className="text-gray-600 text-md">
                Kontrol stok material dan pemakaiannya di tiap proyek dengan lebih akurat untuk mengurangi selisih, pemborosan, dan miskomunikasi antar tim.
              </p>
            </div>
          </div>
        </section>

        <section id="keunggulan" className="h-auto py-12 px-5">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-600" data-aos="fade">
              Keunggulan <span className='text-yellow-400'>Prosofia</span>
            </h1>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-base leading-6" data-aos="fade-up">
              Bukan hanya lengkap secara fitur, Prosofia juga dirancang agar mudah dipakai tim Anda dan cukup fleksibel untuk mengikuti kebutuhan operasional di lapangan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-green-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-green-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaCheck className="text-lg" />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 leading-7 text-center md:text-left">
                User friendly - mudah dipahami admin, sales, hingga owner tanpa butuh proses adaptasi yang rumit.
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="150">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-yellow-300 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-yellow-300 text-white rounded-full w-full h-full flex items-center justify-center">
                  <BsLightningChargeFill className="text-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Data real-time - perubahan status unit, pembayaran, dan progress proyek bisa langsung dipantau saat itu juga.
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-red-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-red-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaUserLock className="text-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Aman dan terproteksi - data penting perusahaan tersimpan lebih rapi dan tidak mudah tercecer di banyak file atau perangkat.
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="250">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-orange-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-orange-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <SiBnbchain className="text-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Terintegrasi - alur dari sales, admin, pembayaran, hingga laporan saling terhubung dalam satu sistem.
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-gray-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-gray-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaCode className="text-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Hak akses fleksibel - setiap pengguna dapat diberi akses sesuai peran dan tanggung jawabnya.
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="relative w-10 h-10 mb-4 mx-auto md:mx-0">
                <div className="absolute inset-0 scale-125 bg-gray-400 opacity-50 rounded-full z-0"></div>
                <div className="relative z-10 bg-gray-400 text-white rounded-full w-full h-full flex items-center justify-center">
                  <FaCode className="text-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                Fleksibel untuk bertumbuh - cocok untuk developer skala kecil, berkembang, hingga operasional yang lebih kompleks.
              </h3>
            </div>
          </div>
        </section>

        <section id="demo" className="h-auto py-12 px-5">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-600" data-aos="fade">
              Lihat Langsung Cara Kerja <span className="text-yellow-400">Prosofia</span>
            </h1>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-base leading-6" data-aos="fade-up">
              Lihat bagaimana sistem membantu tim Anda mengelola unit, customer, pembayaran, dan laporan dalam alur kerja yang lebih tertata.
            </p>
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
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 text-center">Galeri Tampilan</h2>
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

        <section id="harga" className="h-auto py-12 px-5 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-600" data-aos="fade">
              Paket yang Fleksibel Sesuai Kebutuhan Developer Anda
            </h1>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-base leading-6" data-aos="fade-up">
              Pilih paket yang paling dekat dengan kebutuhan bisnis Anda. Jika alur kerja, modul, atau proses operasional Anda membutuhkan penyesuaian khusus, kami juga melayani custom aplikasi.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {packageCards.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white md:hover:scale-[1.02] transition-transform rounded-xl border border-gray-300 shadow-md hover:shadow-lg duration-300 p-6 flex flex-col"
              >
                <div className="border-b pb-4 mb-4">
                  <p className="text-2xl font-bold text-gray-800 leading-tight">{pkg.name}</p>
                  <h2 className="mt-2 text-xl font-semibold text-yellow-500">
                    {pkg.price}
                  </h2>
                  <p className="text-gray-500 text-sm leading-6 mt-2">{pkg.description}</p>
                </div>

                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Isi Paket</p>
                  <ul className="space-y-2.5 text-sm text-gray-800">
                    {pkg.legacyFeatures.map((item, i) => (
                      <li key={`legacy-${i}`} className="flex items-start gap-2.5 leading-5">
                        <span className="mt-0.5 bg-green-100 text-green-600 p-1.5 rounded-full text-[10px] shrink-0">
                          <FaCheck />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <hr className="my-4 border-gray-200" />

                  <p className="text-sm font-semibold text-gray-700 mb-3">Fitur Utama</p>
                  <ul className="space-y-2.5 text-sm text-gray-800">
                    {pkg.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-5">
                        <span className="mt-0.5 bg-green-100 text-green-600 p-1.5 rounded-full text-[10px] shrink-0">
                          <FaCheck />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <a
                    href={paketWhatsAppUrl(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-transform px-5 py-2.5 rounded-md font-medium text-sm"
                  >
                    Konsultasi Paket
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-10" data-aos="fade-up">
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 md:p-8 text-center shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 leading-tight">Butuh Sistem yang Lebih Spesifik? Kami Juga Melayani Custom Aplikasi</h3>
              <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-base leading-6">
                Jika paket yang tersedia belum sepenuhnya sesuai dengan proses bisnis Anda, kami dapat membantu merancang aplikasi custom sesuai kebutuhan operasional, alur approval, laporan, dan modul yang Anda butuhkan.
              </p>
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-yellow-400 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                Diskusikan Kebutuhan Custom
              </a>
            </div>
          </div>
        </section>

        <section id="testi" className="h-auto py-12 md:py-16 px-5 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-600" data-aos="fade">
              Apa Kata Klien Kami?
            </h1>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-base leading-6" data-aos="fade-up">
              Pengalaman mereka menunjukkan bagaimana sistem yang rapi bisa membantu tim bekerja lebih cepat, lebih akurat, dan lebih siap saat data dibutuhkan.
            </p>
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
              {testimonialImages.map((imageSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white border border-gray-200 p-3 md:p-4 rounded-2xl shadow-md">
                    <img
                      src={imageSrc}
                      alt={`Testimoni pelanggan ${index + 1}`}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="px-5 pb-16 bg-white">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gray-700 text-white px-5 py-8 md:px-10 md:py-12 text-center" data-aos="fade-up">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">Ingin Lihat Apakah Prosofia Cocok untuk Bisnis Anda?</h2>
            <p className="mt-4 text-gray-200 max-w-3xl mx-auto text-sm md:text-base leading-6">
              Kami siap membantu Anda memilih paket yang paling sesuai, atau mendiskusikan kebutuhan custom aplikasi jika proses bisnis Anda membutuhkan alur yang lebih spesifik. Konsultasi dan demo awal tidak dipungut biaya.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href={demoWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                Jadwalkan Demo Gratis
              </a>
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition"
              >
                Konsultasi Custom Aplikasi
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
