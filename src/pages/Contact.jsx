import { useEffect, useState, useRef  } from 'react';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Contact() {

  useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener('resize', handleResize);

  AOS.init({
    duration: 800,
    once: true,
  });

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);




  return (
    <>

      <main
  className="relative min-h-screen bg-white bg-no-repeat bg-cover px-6 pt-24 md:px-72 md:pt-42 overflow-hidden"
  style={{
    backgroundImage: "url('/background.webp')",
  }}
>
  <div className="absolute inset-0 bg-amber-300/60"></div>

  <div className="mb-20 relative z-20 bg-white py-5 px-6 rounded-lg shadow-lg">
    <div
      className="flex flex-col items-center text-center  rounded-md p-6 mb-6"
    >
      <h1 className="text-gray-800 font-bold text-3xl md:text-5xl mb-2">
        Hubungi Kami
      </h1>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl">
        Kami siap membantu Anda dalam mengelola dan mengembangkan sistem penjualan tanah kavling secara digital. 
        Silakan isi formulir di bawah untuk konsultasi, demo sistem, atau pertanyaan lainnya.
      </p>
    </div>

    <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2" >
            <label className="text-gray-700 font-medium">
            Nama<span className="text-red-500 mx-1">*</span>
            </label>
            <input
            type="text"
            className="border border-gray-400 rounded-md py-3 px-4 outline-none focus:border-blue-400"
            placeholder="Nama Lengkap"
            />
        </div>

        <div className="flex flex-col gap-2" >
            <label className="text-gray-700 font-medium">Perusahaan</label>
            <input
            type="text"
            className="border border-gray-400 rounded-md py-3 px-4 outline-none focus:border-blue-400"
            placeholder="Nama Perusahaan (Opsional)"
            />
        </div>

        <div className="flex-col flex lg:flex-row md:flex-col gap-5">
            <div
            className="flex flex-col gap-2 w-full"
            data-aos-duration="1000"
            >
            <label className="text-gray-700 font-medium">
                Email<span className="text-red-500 mx-1">*</span>
            </label>
            <input
                type="email"
                className="border border-gray-400 rounded-md py-3 px-4 outline-none focus:border-blue-400"
                placeholder="Masukan Email"
            />
            </div>

            <div
            className="flex flex-col gap-2 w-full"
            >
            <label className="text-gray-700 font-medium">
                No HP<span className="text-red-500 mx-1">*</span>
            </label>
            <input
                type="text"
                className="border border-gray-400 rounded-md py-3 px-4 outline-none focus:border-blue-400"
                placeholder="Masukan No. Telp Valid"
            />
            </div>
        </div>

        <div className="flex flex-col gap-2" >
            <label className="text-gray-700 font-medium">
            Pesan<span className="text-red-500 mx-1">*</span>
            </label>
            <textarea
            rows={4}
            className="border border-gray-400 rounded-md py-3 px-4 outline-none focus:border-blue-400 resize-none"
            placeholder="Tuliskan pertanyaan atau kebutuhan Anda"
            ></textarea>
        </div>

        <button
            type="submit"
            className="bg-yellow-300 text-gray-700 py-3 px-8 font-semibold rounded-md cursor-pointer hover:bg-yellow-400 transition duration-200"
        >
            Kirim
        </button>
    </form>
  </div>
</main>

        
      <Footer />
    </>
  );
}

export default Contact;
