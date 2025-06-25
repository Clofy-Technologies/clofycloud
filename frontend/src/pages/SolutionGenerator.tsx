
import React, { useState, useRef, useEffect } from 'react';
import { Upload, Zap, FileText, Download, CheckCircle, ArrowRight, Cloud, Database, Shield, GitBranch, RotateCcw, Code, X, Plus, Calendar, BookOpen, MessageCircle, HelpCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SolutionGenerator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedM365Service, setSelectedM365Service] = useState<string>('');
  const [selectedPurpose, setSelectedPurpose] = useState<string>('');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('');
  const [selectedAuthenticationMethod, setSelectedAuthenticationMethod] = useState<string>('');
  const [selectedErrorHandlingLevel, setSelectedErrorHandlingLevel] = useState<string>('');
  const [selectedSchedulingStub, setSelectedSchedulingStub] = useState<string>('');
  const [selectedOutputFormat, setSelectedOutputFormat] = useState<string>('');
  const [projectContext, setProjectContext] = useState<string>('');
  const [context, setContext] = useState('');
  const [activeTab, setActiveTab] = useState<'service' | 'challenge'>('service');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSolution, setGeneratedSolution] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
const [showPlatformQuestion, setShowPlatformQuestion] = useState(false);
 const [selectedChallenge, setSelectedChallenge] = React.useState('');
const [showM365Question, setShowM365Question] = useState(false);
const [showPurposeQuestion, setShowPurposeQuestion] = useState(false);
const [showComplexityQuestion, setShowComplexityQuestion] = useState(false);
const [showAuthMethodQuestion, setShowAuthMethodQuestion] = useState(false);
const [showErrorHandlingQuestion, setShowErrorHandlingQuestion] = useState(false);
const [showSchedulingQuestion, setShowSchedulingQuestion] = useState(false);
const [showOutputFormatQuestion, setShowOutputFormatQuestion] = useState(false);
  const [showTip, setShowTip] = useState(true);
const [currentStep, setCurrentStep] = useState(0);
  const services = [
    'PowerShell'
  ];

  const platforms = [
    'Microsoft 365'
  ];

  const m365Services = [
    'Exchange Online'
  ];

  const purposes = [
    'Automation'
  ];

  const complexities = [
    'Conditional Logic'
  ];

  const authenticationMethods = [
    'Interactive User (Connect-* cmdlets)'
  ];

  const errorHandlingLevels = [
    'None'
  ];

  const schedulingStubs = [
    'None'
  ];

  const outputFormats = [
    '.ps1 Script'
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
        : [service] // Changed to only allow single selection
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white/90 backdrop-blur-lg border-r border-blue-100 flex flex-col shadow-md">
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
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300  ${
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
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ">
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
                  className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl cursor-pointer transition-all duration-300 "
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
      
      <div className="flex-1 ml-64 flex">
        
        {/* Left Content Area (Main Panel) */}
        <div className="w-full lg:basis-2/5 bg-white p-10 shadow-md rounded-xl border border-gray-200 m-6">
           {/* Progress Bar */}
      <div className="mb-8 w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${(currentStep / 9) * 100}%` }}
        ></div>
      </div>

         <div className="max-w-2xl">
            {/* Header Question*/}
              <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                What cloud challenge can we solve for you?
              </h1>
            {/* New Dropdown Field - Cloud Challenge */}
            <div className="mb-8 delay-100">
      
              <Select
                onValueChange={(value) => {
                  setSelectedChallenge(value); // Set the value for the new dropdown
                  setCurrentStep(1); // Set to step 0 for the first dropdown
                }}
                value={selectedChallenge}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                      <SelectValue placeholder="Select a cloud challenge" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                      <p className="text-sm">Choose the primary cloud challenge you are facing.</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  <SelectItem value="Migration">Migration</SelectItem>
                  <SelectItem value="Automation">Automation</SelectItem>
                  <SelectItem value="Optimization">Optimization</SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                  <SelectItem value="Cost Management">Cost Management</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Service Selection */}
            <div className="mb-8 delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product or Interface?</h3>
              <Select
                onValueChange={(value) => {
                  setSelectedServices([value]);
                  setShowPlatformQuestion(true); // Show next question after selection
                  setCurrentStep(2);
                }}
                value={selectedServices[0] || ''}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                      <SelectValue placeholder="Select product or interface" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                   
                      
                      <p className="text-sm">Choose the product or interface you’d like to use.</p>
                    
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Primary platform selection */}
            {showPlatformQuestion && (
              <div className="mb-8  delay-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Platform or Cloud Service?</h3>
                <Select
                  onValueChange={(value) => {
                    setSelectedPlatform(value);
                    setShowM365Question(true); // Show next question after selection
                  setCurrentStep(3);
                  }}
                  value={selectedPlatform || ''}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                      <SelectValue placeholder="Select platform or cloud service" />
                      </SelectTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                      <p className="text-sm">Choose the primary platform or cloud service you are targeting.</p>
                    </TooltipContent>
                  </Tooltip>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform} value={platform}>
                        {platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Microsoft 365 Service or App selection */}
            {showM365Question && (
              <div className="mb-8  delay-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Microsoft 365 Service or App?</h3>
                <Select
                  onValueChange={(value) => {
                    setSelectedM365Service(value);
                    setShowPurposeQuestion(true); // Show next question after selection
                  setCurrentStep(4);
                  }}
                  value={selectedM365Service || ''}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                      <SelectValue placeholder="Select Microsoft 365 Service or App" />
                      </SelectTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                      <p className="text-sm">Pick the specific Microsoft 365 workload (Exchange, SharePoint, Teams, etc.) you need to target.</p>
                    </TooltipContent>
                  </Tooltip>
                  <SelectContent>
                    {m365Services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Purpose of Script selection */}
            {showPurposeQuestion && (
            <div className="mb-8  delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Purpose of Script?</h3>
              <Select
                onValueChange={(value) => {
                  setSelectedPurpose(value);
                  setShowComplexityQuestion(true);
                  setCurrentStep(5);
                }}
                value={selectedPurpose || ''}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                    <SelectValue placeholder="Select purpose of script" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                    <p className="text-sm">Define why you’re writing this script—automation, reporting, troubleshooting, and so on.</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  {purposes.map((purpose) => (
                    <SelectItem key={purpose} value={purpose}>
                      {purpose}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            )}

            {/* Task / Script Complexity selection */}
            {showComplexityQuestion && (
            <div className="mb-8  delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Task / Script Complexity?</h3>
              <Select
                onValueChange={(value) => {
                  setSelectedComplexity(value);
                  setShowAuthMethodQuestion(true);
                  setCurrentStep(6);
                }}
                value={selectedComplexity || ''}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                    <SelectValue placeholder="Select task/script complexity" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                    <p className="text-sm">Select how sophisticated the script should be: simple tasks, conditional logic, loops, error-handling…</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  {complexities.map((complexity) => (
                    <SelectItem key={complexity} value={complexity}>
                      {complexity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
)}
            {/* Authentication Method selection */}
            {showAuthMethodQuestion && (
            <div className="mb-8  delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentication Method?</h3>
              <Select
                onValueChange={(value) => {
                  setSelectedAuthenticationMethod(value);
                  setShowErrorHandlingQuestion(true);
                  setCurrentStep(7);
                }}
                value={selectedAuthenticationMethod || ''}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                    <SelectValue placeholder="Select authentication method" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                    <p className="text-sm">Choose how the script will authenticate: interactive, service principal, or managed identity.</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  {authenticationMethods.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            )}
            {/* Error-Handling Level selection */}
            {showErrorHandlingQuestion && (
            <div className="mb-8  delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Error-Handling Level?</h3>
              <Select
                onValueChange={(value) => {
                  setSelectedErrorHandlingLevel(value);
                  setShowSchedulingQuestion(true);
                  setCurrentStep(8);
                }}
                value={selectedErrorHandlingLevel || ''}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                    <SelectValue placeholder="Select error-handling level" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                    <p className="text-sm">Decide the verbosity of error handling: none, basic try/catch, or full logging with retries.</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  {errorHandlingLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            )}
            {/* Scheduling Stub selection */}
            {showSchedulingQuestion && (
            <div className="mb-8  delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scheduling Stub?</h3>
              <Select
                onValueChange={(value) => {
                  setSelectedSchedulingStub(value);
                  setShowOutputFormatQuestion(true);
                  setCurrentStep(9);
                }}
                value={selectedSchedulingStub || ''}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                    <SelectValue placeholder="Select scheduling stub" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                    <p className="text-sm">If you want the script to run on a schedule, pick Windows Task Scheduler or Azure Automation.</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  {schedulingStubs.map((stub) => (
                    <SelectItem key={stub} value={stub}>
                      {stub}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            )}
            {/* Output Format selection */}
            {showOutputFormatQuestion && (
            <div className="mb-8  delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Output Format?</h3>
              <Select
                onValueChange={(value) => {
                  setSelectedOutputFormat(value);
                 
                }}
                value={selectedOutputFormat || ''}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 group">
                    <SelectValue placeholder="Select output format" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-300/40 transition-opacity duration-300">
                    <p className="text-sm">Select how you want to consume results: as a .ps1, module, JSON/CSV report, email, etc.</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  {outputFormats.map((format) => (
                    <SelectItem key={format} value={format}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            )}
            {/* Project / Task Context */}
            <div className="mb-8  delay-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project / Task Context</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Textarea
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300 resize-none overflow-hidden"
                    placeholder="E.g. ‘We need to onboard 50 new sales hires into Contoso’s tenant, assigning them Sales E5 licenses and adding them to the Sales and Marketing groups.’"
                    value={projectContext}
                    onChange={(e) => setProjectContext(e.target.value)}
                    rows={4}
                  />
                </TooltipTrigger>
                
              </Tooltip>
            </div>

            {/* Generate Button */}
            <div className="space-y-4 ">
              <Button
                onClick={generateSolution}
                disabled={isGenerating || selectedServices.length === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl transition-all duration-300  shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Generating...
                  </div>
                ) : (
                  'Generate'
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Preview Area (Solution Panel) */}
        <div className="basis-[60%] bg-white/80 backdrop-blur-md border-l border-blue-100 p-10 flex flex-col h-full">
          {showTip && (
            <div className="mb-6 bg-blue-50/70 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg flex items-start shadow-sm">
              <HelpCircle className="w-5 h-5 mr-2 mt-0.5" />
              <span className="flex-1 text-sm">Tip: Answering more questions helps us craft a solution perfectly tailored to your needs.</span>
              <button onClick={() => setShowTip(false)} className="ml-2 hover:text-blue-900">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-4">
              <span className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
              <h3 className="mx-4 text-2xl font-bold text-gray-800 tracking-tight flex items-center">
                <Zap className="w-6 h-6 text-blue-600 mr-2" />
                Solution Preview
              </h3>
              <span className="h-0.5 w-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
            </div>
            <p className="text-gray-600 text-base text-center max-w-md mx-auto leading-relaxed">
              Select a service or describe your challenge to see your tailored plan here.
            </p>
          </div>

          {/* Empty State */}
          {!generatedSolution && !isGenerating && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative">
              <div className="border-2 border-dashed border-blue-200 bg-white/70 rounded-xl shadow-inner p-12 w-full flex flex-col items-center">
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
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative ">
              <div className="bg-white/90 rounded-2xl shadow-lg p-10 w-full border border-blue-100 flex flex-col items-center">
                <div className="relative flex justify-center mb-8">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 shadow-lg"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                </div>
                <p className="text-blue-600 font-bold text-xl mb-2">Analyzing your requirements...</p>
                <p className="text-gray-500 text-sm">This may take a few moments</p>
                <div className="mt-6 w-full max-w-xs">
                  <div className="bg-blue-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full animate-pulse" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solution State */}
          {generatedSolution && (
            <div className="flex-1 flex flex-col items-center justify-center z-10 relative">
              <div className="bg-white/90 rounded-2xl shadow-lg p-10 w-full border border-blue-100  transform  transition-all duration-500 ">
                <div className="flex items-center mb-10">
                  <div className="bg-blue-500 rounded-full p-2 mr-4 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-800">Key Benefits</h4>
                </div>
                <ul className="space-y-8">
                  {generatedSolution.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start space-x-5 group " style={{animationDelay: `${index * 150}ms`}}>
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                      Download Report
                    </button>
                    <button className="bg-white text-blue-600 border-2 border-blue-300 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
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
