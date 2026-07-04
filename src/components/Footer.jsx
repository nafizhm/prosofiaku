import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";

function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300 pt-10 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="leading-tight">
              <img src={Logo} className="w-[100px]" />
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-white">Ingin Coba Prosofia?</h2>
            <p className="text-sm text-gray-300">Hubungi kami sekarang dan jadwalkan demo gratis!</p>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <h3 className="text-yellow-400 font-medium">WhatsApp</h3>
              <a href="https://wa.me/6282221992911" target="_blank" className="text-white hover:text-yellow-300 transition">
                0822 2199 2911 - Naufal Ahmad
              </a>
              <br></br>
              <a href="https://wa.me/6281250274777" target="_blank" className="text-white hover:text-yellow-300 transition">
                0812 5027 4777 - Heru Hidayat
              </a>
            </div>

            <div>
              <h3 className="text-yellow-400 font-medium">Email</h3>
              <a href="mailto:info@prosofia.id" className="text-white hover:text-yellow-300 transition">
                info@prosofia.id / marketingprosofia@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="mt-6 flex flex-col gap-10 justify-center">
            <div>
              <h3 className="text-yellow-400 font-medium">Alamat Kantor</h3>
              <p className="text-white leading-relaxed">
                Jl. Moch Sahar Gg I No. 34
                <br />
                Ngaglik Kota Batu Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="text-center text-xs text-gray-500">&copy; {new Date().getFullYear()} Prosofia. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
