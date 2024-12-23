import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MendjeAI</h3>
            <p className="text-gray-300">
              Asistenti juaj i inteligjencës artificiale në gjuhën shqipe
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300">support@mendjeai.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ndiqni</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">© 2024 MendjeAI. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;