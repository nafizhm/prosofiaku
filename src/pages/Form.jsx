import { useEffect, useState, useRef  } from 'react';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Form() {



  return (
    <>

      <main
        className="relative min-h-screen bg-white bg-no-repeat bg-cover px-6 pt-24 md:px-72 md:pt-42 overflow-hidden"
        style={{
            backgroundImage: "url('/background.webp')",
        }}
        >
        <div className="absolute inset-0 bg-amber-300/60"></div>

        <div className="max-w-2xl relative z-20 mx-auto bg-white mb-28 shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-700 py-5 px-6 text-center">
                <h2 className="text-white text-2xl font-semibold tracking-wide">Buat akun <span className='text-yellow-300'>Prosofia</span></h2>
            </div>

            <form className="px-6 py-8 space-y-5">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Anda</label>
                <input
                    type="text"
                    placeholder="Silahkan isikan nama anda"
                    className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                    type="email"
                    placeholder="Masukkan email anda"
                    className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">No. HP</label>
                    <input
                    type="text"
                    placeholder="Masukkan No. HP Anda"
                    className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                    <input
                        type="password"
                        placeholder="Please provide your password"
                        className="w-full border rounded-md px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <span className="absolute right-3 top-3.5 text-gray-400 cursor-pointer">
                    </span>
                    </div>
                </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Perusahaan</label>
                <input
                    type="text"
                    placeholder="Silahkan isikan nama perusahaan anda"
                    className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Domisili Perusahaan</label>
                <select className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                    <option value="">Pilih Kota Domisili</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="surabaya">Surabaya</option>
                </select>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-yellow-300" />
                    <span>Perusahaan saya terdaftar pada asosiasi.</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-yellow-300" />
                    <span>Saya mempunyai Kode Referral.</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-green-300" checked readOnly />
                    <span>
                    Saya menyetujui <a href="#" className="text-green-600 font-semibold underline">Syarat dan Ketentuan</a> pada SiMandor.
                    </span>
                </label>
                </div>

                <div className="pt-4">
                <button
                    type="submit"
                    className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-500 py-3 rounded-md font-semibold transition duration-200"
                >
                    Daftar Sekarang
                </button>
                </div>
            </form>
            </div>

     </main>


        
      <Footer />
    </>
  );
}

export default Form;
