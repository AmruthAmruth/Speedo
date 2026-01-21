import { useState } from 'react';
import Navbar from './components/navigation/Navbar';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/auth/LoginPage';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-50">
      {showLanding && <Navbar onLoginClick={() => setShowLanding(false)} />}
      {showLanding ? (
        <LandingPage />
      ) : (
        <LoginPage onBackToHome={() => setShowLanding(true)} />
      )}
    </div>
  );
}

export default App;