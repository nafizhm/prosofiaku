import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    hp: '',
    password: '',
    perusahaan: '',
    syarat: false,
  });

  const API_BINDERBYTE = '9d625997676c62920bc7d64141a4df70ec99b8d555a7548d1cfce1f4a8344840';
  const ADMIN_NUMBER = '6282221992911';

  useEffect(() => {
    fetch(`https://api.binderbyte.com/wilayah/provinsi?api_key=${API_BINDERBYTE}`)
      .then((res) => res.json())
      .then((data) => {
        const options = data.value.map((prov) => ({
          value: prov.id,
          label: prov.name
        }));
        setProvinces(options);
      })
      .catch((err) => console.error('Error ambil provinsi:', err));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://api.binderbyte.com/wilayah/kabupaten?api_key=${API_BINDERBYTE}&id_provinsi=${selectedProvince.value}`)
        .then((res) => res.json())
        .then((data) => {
          const options = data.value.map((city) => ({
            value: city.id,
            label: city.name
          }));
          setCities(options);
        })
        .catch((err) => console.error('Error ambil kabupaten:', err));
    } else {
      setCities([]);
      setSelectedCity(null);
    }
  }, [selectedProvince]);

  const handleSubmit = async (e) => {
  e.preventDefault();

 if (!formData.syarat) {
  toast.error("Kamu harus menyetujui Syarat dan Ketentuan dulu ");
  return;
}


  const message = `*Pendaftaran Baru Prosofia.id*\n\n` +
    `*Nama:* ${formData.nama}\n` +
    `*Email:* ${formData.email}\n` +
    `*No. HP:* ${formData.hp}\n` +
    `*Perusahaan:* ${formData.perusahaan}\n` +
    `*Provinsi:* ${selectedProvince?.label || '-'}\n` +
    `*Kota/Kabupaten:* ${selectedCity?.label || '-'}`;

  const whatsappUrl = `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Please provide your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
              <Select
                options={provinces}
                value={selectedProvince}
                onChange={setSelectedProvince}
                placeholder="Pilih Provinsi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kota/Kabupaten</label>
              <Select
                options={cities}
                value={selectedCity}
                onChange={setSelectedCity}
                isDisabled={!selectedProvince}
                placeholder="Pilih Kota/Kabupaten"
              />
            </div>

            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-yellow-300"
                  checked={formData.syarat}
                  onChange={(e) => setFormData({ ...formData, syarat: e.target.checked })}
                />
                <span>
                  Saya menyetujui <a href="#" className="text-yellow-600 font-semibold underline">Syarat dan Ketentuan</a> pada Prosofia.id.
                </span>
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-gray-500 py-3 rounded-md font-semibold transition duration-200"
              >
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

export default Form;
