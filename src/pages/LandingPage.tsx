import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/Auth/AuthForm';
import { FileText, Sparkles, Clock, Award } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Content',
      description: 'Generate professional summaries and achievements with advanced AI',
    },
    {
      icon: Clock,
      title: 'Quick & Easy',
      description: 'Create a stunning resume in minutes, not hours',
    },
    {
      icon: Award,
      title: 'Professional Templates',
      description: 'Choose from beautifully designed, ATS-friendly templates',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Create Your Perfect Resume with{' '}
              <span className="text-primary">AI Power</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Stand out from the crowd with professionally crafted resumes.
              Let AI help you showcase your best professional self.
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all"
            >
              Get Started Free
            </button>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  ResumeRise
                </h2>
              </div>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <AuthForm />
          </div>
        </div>
      )}
    </div>
  );
}