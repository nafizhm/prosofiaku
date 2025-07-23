import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderBox, setShouldRenderBox] = useState(false);

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setShouldRenderBox(false), 300);
    } else {
      setShouldRenderBox(true); 
      setTimeout(() => setIsOpen(true), 10); 
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-20 flex flex-col items-end gap-2">
      {shouldRenderBox && (
        <div
          className={`mb-3 w-72 bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <div className="flex bg-green-500 rounded-t-xl items-start gap-2 p-3">
            <FaWhatsapp className="text-white text-3xl mt-1" />
            <span className="text-white">
              <h1 className="font-medium">Mulai Percakapan</h1>
              <p className="text-xs">Click dibawah untuk konsultasi gratis</p>
            </span>
          </div>

          <div
            className="flex mt-4 mb-4 items-center justify-between cursor-pointer px-4 py-3 transition border-l-4 rounded-sm ml-2 border-green-500"
            onClick={() => window.open('https://wa.me/6282221992911', '_blank')}
          >
            <p className="text-sm text-gray-600">Heru Hidayat</p>
            <FaWhatsapp className="text-green-500 text-xl" />
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <div
          className={`text-sm text-gray-800 bg-white shadow-md rounded-full px-4 py-2 transition-all duration-500 ease-in-out
            ${isOpen ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}
          `}
        >
          Need help? <span className="text-green-600 font-semibold">Chat with us</span>
        </div>

        <button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full flex items-center cursor-pointer justify-center text-white shadow-lg transition-transform duration-500 relative
            ${isOpen ? 'bg-green-500 rotate-[180deg]' : 'bg-green-500 rotate-0'}
          `}
        >
          <span
            className="absolute transition-opacity duration-300 ease-in-out"
            style={{ opacity: isOpen ? 0 : 1 }}
          >
            <FaWhatsapp size={28} />
          </span>
          <span
            className="absolute transition-opacity duration-300 ease-in-out"
            style={{ opacity: isOpen ? 1 : 0 }}
          >
            <FaTimes size={24} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default FloatingWhatsApp;
