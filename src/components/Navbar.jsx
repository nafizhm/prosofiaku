import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  return (
    <div className={`menu ${open ? 'active' : ''}`}>
      <nav className={`fixed w-full z-50 px-6 md:px-20 py-4 text-white transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`} data-aos="fade-down">

        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <span className="flex flex-col leading-4">
              <h1 className="font-semibold text-yellow-400 text-lg">Prosofia.</h1>
            </span>
          </div>

          <div className="items-center hidden md:flex">
            <ul className="flex gap-8 font-semibold text-gray-700">
              <li><a href="#home" className="relative inline-block">Home</a></li>
              <li><a href="#about" className="relative inline-block">About Us</a></li>
              <li><a href="#fitur" className="relative inline-block">Fitur Produk</a></li>
              <li><a href="#keunggulan" className="relative inline-block">Keunggulan</a></li>
              <li><a href="#demo" className="relative inline-block">Demo / Galeri</a></li>
              <li><a href="#harga" className="relative inline-block">Harga & Paket</a></li>
              <li><a href="#testi" className="relative inline-block">Testimoni</a></li>
            </ul>

          <Link
            to="/contact"
            className='relative group overflow-hidden bg-yellow-300 ml-5 text-gray-700 font-semibold py-2 px-5 text-sm cursor-pointer rounded-md min-w-[120px] h-10 flex items-center justify-center'
          >
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:translate-y-full whitespace-nowrap'>
              Kontak Kami
            </span>
            <span className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full transition-all duration-300 group-hover:translate-y-1/2 whitespace-nowrap'>
              Let's Talk
            </span>
          </Link>

          </div>
        </div>

        <button
          className="nav-tgl fixed right-4 top-4 w-8 h-8 rounded-full bg-white z-[100] shadow-md flex items-center justify-center focus:outline-none md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="relative w-5 h-[14px] flex flex-col justify-between items-center">
            <span className={`h-[1.5px] bg-[#293335] rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-[6px] w-5' : 'w-4'}`} />
            <span className={`h-[1.5px] bg-[#293335] rounded transition-all duration-200 ${open ? 'opacity-0' : 'w-3'}`} />
            <span className={`h-[1.5px] bg-[#293335] rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6px] w-5' : 'w-4'}`} />
          </span>
        </button>

        <div
          className={`fixed top-0 left-0 z-50 w-screen h-screen transition-all duration-500 ease-in-out 
            ${open ? 'visible' : 'invisible'} 
            bg-black/50 backdrop-blur-md backdrop-saturate-150`}
          style={{
            clipPath: open
              ? 'circle(150% at calc(100% - 30px) 50px)'
              : 'circle(20px at calc(100% - 30px) 50px)',
          }}
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`fixed top-0 left-0 w-screen h-screen z-[99] transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } flex items-center justify-center`}
        >
          <ul className="flex flex-col gap-6 text-lg text-white text-center">
            <li><a href="#home" className="relative inline-block">Home</a></li>
            <li><a href="#about" className="relative inline-block">About Us</a></li>
            <li><a href="#fitur" className="relative inline-block">Fitur Produk</a></li>
            <li><a href="#keunggulan" className="relative inline-block">Keunggulan</a></li>
            <li><a href="#demo" className="relative inline-block">Demo / Galeri</a></li>
            <li><a href="#harga" className="relative inline-block">Harga & Paket</a></li>
            <li><a href="#testi" className="relative inline-block">Testimoni</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
