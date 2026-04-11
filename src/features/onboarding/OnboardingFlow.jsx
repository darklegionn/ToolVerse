import { useState } from 'react';
import IntroSequence from './IntroSequence';
import UserForm from './UserForm';
import UnderDevelopment from './UnderDevelopment';
import DomainPage from '../domain/DomainPage';
import HomePage from '../home/HomePage';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleIntroComplete = () => {
    setCurrentStep(1);
  };

  const handleFormSubmit = (domain) => {
    setSelectedDomain(domain);
    setCurrentStep(2);
  };

  const handleFormSkip = () => {
    setCurrentStep(3); // Go to Home Page
  };

  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
    setCurrentStep(2); // Go to Domain Page
  };

  const handleBackToHome = () => {
    setCurrentStep(3); // Go back to Home Page
    setSelectedDomain(null);
  };

  return (
    <div data-testid="onboarding-flow" className="min-h-screen bg-[#0A0A0A]">
      {currentStep === 0 && <IntroSequence onComplete={handleIntroComplete} />}
      {currentStep === 1 && <UserForm onSubmit={handleFormSubmit} onSkip={handleFormSkip} />}
      {currentStep === 2 && <DomainPage domainKey={selectedDomain} onBack={handleBackToHome} />}
      {currentStep === 3 && <HomePage onDomainSelect={handleDomainSelect} />}
    </div>
  );
};

export default OnboardingFlow;