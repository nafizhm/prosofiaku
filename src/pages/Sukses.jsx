import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

export default function Sukses() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <BsCheckCircle className="text-green-500 text-[6rem] mb-4" />
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">Berhasil Dikirim</h1>
      <p className="text-gray-600 mt-2 max-w-md">
        Terima kasih telah mendaftar akun demo ke <strong>Prosofia</strong>.
        mohon ditunggu sebentar tim kami akan segera memprosesnya.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-medium py-2 px-6 rounded-md"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
