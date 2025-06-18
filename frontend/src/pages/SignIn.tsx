import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful login and redirect to User Management page
      navigate('/user-management'); 
    }, 1500);
=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      console.log('Sign in attempted with:', { email, password });
      setIsLoading(false);
      // For now, just navigate to home
      navigate('/');
    }, 1000);
>>>>>>> 86263964ac7cfc481f55d2b9effc4dc3ce62c15c
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white">
        <div className="w-full max-w-md p-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-4"
            type="button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <div className="mb-8">
            <div className="flex border-b border-gray-200 mb-6">
              <Link
                to="/signin"
                className={`px-4 py-2 -mb-px border-b-2 text-lg font-medium ${
                  location.pathname === '/signin'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`px-4 py-2 -mb-px border-b-2 text-lg font-medium ${
                  location.pathname === '/signup'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                Sign Up
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-blue-600 mb-2">CLOFY</h1>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to your account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4 text-gray-400">or login with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium">Google</button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded font-medium">GitHub</button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded font-medium">LinkedIn</button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              {isLoading ? 'Signing In...' : 'Login'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-center">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right: Decorative with content */}
      <div className="hidden md:flex w-1/2 bg-[#f3f6f9] flex-col justify-center items-center">
        <div className="max-w-xs text-center">
          <img
            src="\Screenshot_2025-06-13_210056-removebg-preview.png"
            alt="CLOFY Logo"
            className="mx-auto mb-6 w-20 h-20"
          />
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Welcome to CLOFY</h2>
          <p className="text-gray-600 mb-4">
            Securely manage your cloud solutions, collaborate with your team, and unlock the full potential of your cloud infrastructure.
          </p>
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            Your Cloud, Simplified
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
