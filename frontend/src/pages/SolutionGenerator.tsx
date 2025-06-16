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
      <div className="basis-[15%] min-w-[180px] max-w-[260px] bg-white border-r border-blue-100 flex flex-col shadow-sm">
        {/* Logo */}
        <div className="p-6 border-b border-blue-100">
          <h1 className="text-2xl font-bold text-blue-600">CLOFY</h1>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </div>
            ))}
          </nav>

          {/* Upgrade Button */}
          <div className="mt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
              Upgrade to Premium
            </Button>
          </div>

         

          {/* Support Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
            <nav className="space-y-2">
              {supportItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-blue-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">your.email@dom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Content Area (Main Panel) */}
        <div className="basis-[40%] bg-white p-8">
          <div className="max-w-2xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                What cloud challenge can we solve for you?
              </h1>
              <div className="flex space-x-8 mb-6">
                <button
                  onClick={() => setActiveTab('service')}
                  className={`pb-2 border-b-2 transition-colors font-medium ${
                    activeTab === 'service' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-400 hover:text-blue-600'
                  }`}
                >
                  By Service
                </button>
                
              </div>
            </div>

            {/* Service Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Service(s):</h3>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className="w-full bg-blue-50 border border-blue-100 rounded-lg p-3 flex justify-between items-center"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <span>
                    {selectedServices.length > 0
                      ? selectedServices.join(', ')
                      : 'Select services'}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 mt-2 w-full bg-white border border-blue-100 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    <div className="p-2 space-y-2">
                      {services.map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer hover:bg-blue-50 rounded px-2 py-1">
                          <Checkbox
                            id={service}
                            checked={selectedServices.includes(service)}
                            onCheckedChange={() => handleServiceToggle(service)}
                            className="border-blue-300"
                          />
                          <span className="text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* Generate Button */}
            <div className="space-y-4">
              <Button
                onClick={generateSolution}
                disabled={isGenerating || selectedServices.length === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-lg transition-all duration-300"
              >
                {isGenerating ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Generate My Cloud Solution (1 credit)
                  </div>
                )}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Tip: Not enough credits? 
                <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
                  Purchase 50 Credits for $10
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Preview Area (Solution Panel) */}
        <div className="basis-[60%] bg-white border-l border-blue-100 p-10 flex flex-col h-full relative overflow-hidden">
          {/* Optionally remove the decorative blur for a fully clean look */}
          {/* <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl pointer-events-none" /> */}
          <div className="mb-8 z-10 relative">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-3 shadow-md">
                <Cloud className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-1 tracking-tight">Solution Preview</h3>
              <p className="text-gray-500 text-base">
                Select a service or describe your challenge to see your tailored plan here.
              </p>
            </div>
          </div>

          {/* Empty State */}
          {!generatedSolution && !isGenerating && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative">
              <div className="bg-white rounded-2xl shadow-lg p-10 w-full border border-blue-100 flex flex-col items-center">
                <Cloud className="w-20 h-20 text-blue-200 mx-auto mb-6" />
                <p className="text-gray-400 text-lg font-medium">
                  Your customized cloud solution will appear here after generation.
                </p>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isGenerating && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative">
              <div className="bg-white rounded-2xl shadow-lg p-10 w-full border border-blue-100 flex flex-col items-center">
                <div className="flex justify-center mb-6">
                  <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-200 border-t-blue-600"></div>
                </div>
                <p className="text-blue-600 font-semibold text-lg">Analyzing your requirements...</p>
              </div>
            </div>
          )}

          {/* Solution State */}
          {generatedSolution && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative">
              <div className="bg-white rounded-2xl shadow-lg p-10 w-full border border-blue-100 animate-fade-in">
                <h4 className="text-xl font-bold text-blue-700 mb-6 tracking-tight">Key Benefits</h4>
                <ul className="space-y-4">
                  {generatedSolution.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start space-x-4">
                      <span className="mt-1 text-blue-500">
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="#3B82F6" fillOpacity="0.18"/>
                          <path d="M8 12.5l2 2 4-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-gray-800 text-base font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionGenerator;
