import { useState } from "react";
import "./LoginPage.css";
import DoctorStrangeBG from "../assets/DoctorStrange_BG.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-slate-100">
      {/* Doctor Strange Background Image - Full Screen */}
      <div 
        className="fixed inset-0 z-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${DoctorStrangeBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      {/* Gradient overlay - fades edges and lightens for readability */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.75) 50%, rgba(241,245,249,0.95) 100%)'
        }}
      ></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-10 w-full max-w-xl">
          {/* Arc Reactor Logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="arc-reactor">
              <div className="reactor-container">
                <div className="reactor-outer"></div>
                <div className="reactor-inner">
                  <div className="reactor-coil coil-1"></div>
                  <div className="reactor-coil coil-2"></div>
                  <div className="reactor-coil coil-3"></div>
                  <div className="reactor-coil coil-4"></div>
                  <div className="reactor-coil coil-5"></div>
                  <div className="reactor-coil coil-6"></div>
                  <div className="reactor-coil coil-7"></div>
                  <div className="reactor-coil coil-8"></div>
                </div>
                <div className="reactor-core">
                  <div className="core-inner"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Login Page
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label for="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ID"
                className="w-full border-b border-gray-300 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label for="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                className="w-full border-b border-gray-300 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember my ID
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        ©2026 Abhishek Playground
      </footer>
    </div>
  );
};

export default LoginPage;
