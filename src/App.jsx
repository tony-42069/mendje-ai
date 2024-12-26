import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, Sparkles } from 'lucide-react';
import ChatBox from './components/Chat/ChatBox';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: "url('/images/albania-coast.jpg')",
             backgroundColor: "rgba(0, 0, 0, 0.5)",
             backgroundBlendMode: "overlay"
           }}>
        {/* Navbar */}
        <header className="bg-red-600 text-white shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold tracking-wide flex items-center">
              <Brain className="w-8 h-8 mr-2" />
              MendjeAI
              <Sparkles className="w-5 h-5 ml-2 opacity-75 animate-pulse" />
            </Link>
            <div className="space-x-8">
              <Link to="/" className="hover:opacity-80 transition-opacity">Ballina</Link>
              <Link to="/chat" className="hover:opacity-80 transition-opacity">Bisedo</Link>
              <Link to="/about" className="hover:opacity-80 transition-opacity">Rreth Nesh</Link>
            </div>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto h-screen px-4 py-8 flex items-center justify-center">
              <div className="w-full max-w-2xl text-center text-white">
                <h1 className="text-5xl font-bold mb-6">Mirë se vini në MendjeAI</h1>
                <p className="text-xl mb-8">
                  Asistenti juaj personal i inteligjencës artificiale në gjuhën shqipe.
                </p>
                <Link
                  to="/chat"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 
                           transition-all duration-200 transform hover:scale-105"
                >
                  Filloni Bisedën
                </Link>
              </div>
            </div>
          } />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;