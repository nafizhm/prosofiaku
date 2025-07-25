import {  useState  } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    hp: '',
    password: '',
    perusahaan: '',
    syarat: false,
  });

  const API_WATZAP = 'CQBZLJP8VFITUMIC';

  const handleSubmit = async (e) => {
  e.preventDefault();

  const message = `*Dari Contact Prosofia.id*\n\n` +
    `*Nama:* ${formData.nama}\n` +
    `*Email:* ${formData.email}\n` +
    `*No. HP:* ${formData.hp}\n` +
    `*Perusahaan:* ${formData.perusahaan}`;

  try {
    const response = await axios.post('https://api.watzap.id/v1/send_message', {
      api_key: API_WATZAP,
      number_key: 'uGcdufWF62yz7NO4', 
      phone_no: formData.hp,
      message: message,
      type: 'text',
    });

    const msg = response.data?.message?.toLowerCase();

    if (response.data.status === true || msg?.includes("delivery process")) {
      navigate('/sukses');
    } else {
      alert("Gagal kirim pesan: " + response.data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Terjadi kesalahan saat mengirim pesan.");
  }
};


  return (
    <>

    <main
        className="relative min-h-screen bg-white bg-no-repeat bg-cover px-6 pt-24 md:px-72 md:pt-42 overflow-hidden"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        <div className="absolute inset-0 bg-amber-300/60"></div>

        <div className="max-w-2xl relative z-20 mx-auto bg-white mb-28 shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-700 py-5 px-6 text-center">
            <h2 className="text-white text-2xl font-semibold tracking-wide">
              PROSOFIA.<span className='text-yellow-300'>id</span>
            </h2>
          </div>

          <form className="px-6 py-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Anda</label>
              <input
                type="text"
                placeholder="Silahkan isikan nama anda"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email anda"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. HP</label>
                <input
                  type="text"
                  placeholder="Masukkan No. HP Anda"
                  value={formData.hp}
                  onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                  className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Perusahaan</label>
              <input
                type="text"
                placeholder="Silahkan isikan nama perusahaan anda"
                value={formData.perusahaan}
                onChange={(e) => setFormData({ ...formData, perusahaan: e.target.value })}
                className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-gray-500 py-3 rounded-md font-semibold transition duration-200"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </main>
        
      <Footer />
    </>
  );
}

export default Contact;
