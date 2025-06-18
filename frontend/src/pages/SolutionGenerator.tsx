import React, { useState, useRef, useEffect } from 'react';
import { Upload, Zap, FileText, Download, CheckCircle, ArrowRight, Cloud, Database, Shield, GitBranch, RotateCcw, Code, X, Plus, Calendar, BookOpen, MessageCircle, HelpCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const SolutionGenerator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [context, setContext] = useState('');
  const [activeTab, setActiveTab] = useState('service');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSolution, setGeneratedSolution] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    'Cloud Consultation',
    'Cloud Migration', 
    'Cloud Security',
    'DevOps & Automation',
    'Backup & Recovery'
  ];

  const sidebarItems = [
    { title: 'Generate Solution', icon: Zap, active: true },
    { title: 'My Solutions', icon: FileText },
  ];


  const supportItems = [
    { title: 'Help Center', icon: HelpCircle }
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const generateSolution = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockSolution = {
        title: "Customized Cloud Solution",
        benefits: [
          "Optimize Kubernetes cost",
          "Explore AWS Activate credits", 
          "Secure multi-cloud architecture"
        ]
      };
      
      setGeneratedSolution(mockSolution);
      setIsGenerating(false);
    }, 3000);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex">
      {/* Sidebar */}
      <div className="basis-[15%] min-w-[180px] max-w-[260px] bg-white/80 backdrop-blur-lg border-r border-blue-100 flex flex-col shadow-lg">
        {/* Logo */}
        <div className="p-6 border-b border-blue-100/50 hover:bg-blue-50/50 transition-colors">
          <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">CLOFY</h1>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-3">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  item.active 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </div>
            ))}
          </nav>

          {/* Upgrade Button */}
          <div className="mt-8">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              Upgrade to Premium
            </Button>
          </div>

          {/* Support Section */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 px-4">Support</h3>
            <nav className="space-y-2">
              {supportItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-blue-100/50 hover:bg-blue-50/50 transition-colors">
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-md">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">your.email@dom</p>
              <p className="text-xs text-gray-500">Free Plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Content Area (Main Panel) */}
        <div className="basis-[40%] bg-white/80 backdrop-blur-lg p-8 shadow-lg">
          <div className="max-w-2xl">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                What cloud challenge can we solve for you?
              </h1>
              <div className="flex space-x-8 mb-6">
                <button
                  onClick={() => setActiveTab('service')}
                  className={`pb-2 border-b-2 transition-all duration-300 font-medium ${
                    activeTab === 'service' 
                      ? 'border-blue-500 text-blue-600 scale-105' 
                      : 'border-transparent text-gray-400 hover:text-blue-600'
                  }`}
                >
                  By Service
                </button>
              </div>
            </div>

            {/* Service Selection */}
            <div className="mb-8 animate-fade-in delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Service(s):</h3>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className="w-full bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <span className="font-medium text-gray-700">
                    {selectedServices.length > 0
                      ? selectedServices.join(', ')
                      : 'Select services'}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-300 text-blue-500 group-hover:text-blue-600 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 mt-2 w-full bg-white border border-blue-100 rounded-xl shadow-xl max-h-60 overflow-y-auto animate-fade-in-up">
                    <div className="p-2 space-y-1">
                      {services.map((service) => (
                        <label key={service} className="flex items-center space-x-3 cursor-pointer hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors duration-200">
                          <Checkbox
                            id={service}
                            checked={selectedServices.includes(service)}
                            onCheckedChange={() => handleServiceToggle(service)}
                            className="border-blue-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                          <span className="text-gray-700 font-medium">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Generate Button */}
            <div className="space-y-4 animate-fade-in delay-200">
              <Button
                onClick={generateSolution}
                disabled={isGenerating || selectedServices.length === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Generate My Cloud Solution</span>
                    <span className="text-blue-200">(1 credit)</span>
                  </div>
                )}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Tip: Not enough credits? 
                <span className="text-blue-600 hover:text-blue-700 hover:underline ml-1 cursor-pointer transition-colors">
                  Purchase 50 Credits for $10
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Preview Area (Solution Panel) */}
        <div className="basis-[60%] bg-gradient-to-br from-white via-blue-50/20 to-blue-100/30 backdrop-blur-xl border-l border-blue-200/30 p-10 flex flex-col h-full relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          <div className="mb-8 z-10 relative animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-3xl p-5 mb-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group border border-blue-200/50">
                <Cloud className="w-12 h-12 text-blue-500 group-hover:text-blue-600 transition-all duration-300 drop-shadow-sm" />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-3 tracking-tight">Solution Preview</h3>
              <p className="text-gray-600 text-lg text-center max-w-lg leading-relaxed">
                Select a service or describe your challenge to see your tailored plan here.
              </p>
            </div>
          </div>

          {/* Empty State */}
          {!generatedSolution && !isGenerating && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative animate-fade-in delay-200">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 w-full border border-blue-200/40 flex flex-col items-center transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl group">
                <div className="relative mb-8">
                  <Cloud className="w-24 h-24 text-blue-300 mx-auto group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <p className="text-gray-600 text-xl font-medium text-center leading-relaxed max-w-md">
                  Your customized cloud solution will appear here after generation.
                </p>
                <div className="mt-6 flex space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isGenerating && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative animate-fade-in">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 w-full border border-blue-200/40 flex flex-col items-center">
                <div className="relative flex justify-center mb-8">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 shadow-lg"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                </div>
                <p className="text-blue-600 font-bold text-xl mb-2">Analyzing your requirements...</p>
                <p className="text-gray-500 text-sm">This may take a few moments</p>
                <div className="mt-6 w-full max-w-xs">
                  <div className="bg-blue-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full animate-pulse" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solution State */}
          {generatedSolution && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 w-full border border-blue-200/40 animate-fade-in-up transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
                <div className="flex items-center mb-10">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-full p-2 mr-4 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent tracking-tight">Key Benefits</h4>
                </div>
                <ul className="space-y-8">
                  {generatedSolution.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start space-x-5 group animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                      <span className="mt-1.5 text-blue-500 transform group-hover:scale-125 transition-all duration-300 drop-shadow-sm">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="group-hover:rotate-12 transition-transform duration-300">
                          <circle cx="12" cy="12" r="12" fill="url(#gradient)" fillOpacity="0.2"/>
                          <path d="M8 12.5l2 2 4-4" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#1D4ED8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="text-gray-800 text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-blue-100">
                  <div className="flex justify-center space-x-4">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      Download Report
                    </button>
                    <button className="bg-white text-blue-600 border-2 border-blue-200 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      Share Solution
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionGenerator;
