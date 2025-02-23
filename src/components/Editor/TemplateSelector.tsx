import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Eye, X } from 'lucide-react';
import { Resume } from '../../types/resume';
import { ModernTemplate } from '../Preview/ModernTemplate';
import { MinimalTemplate } from '../Preview/MinimalTemplate';
import { ExecutiveTemplate } from '../Preview/templates/ExecutiveTemplate';
import { CreativeTemplate } from '../Preview/templates/CreativeTemplate';
import { TechnicalTemplate } from '../Preview/templates/TechnicalTemplate';
import { AcademicTemplate } from '../Preview/templates/AcademicTemplate';
import { StartupTemplate } from '../Preview/templates/StartupTemplate';
import { EnterpriseTemplate } from '../Preview/templates/EnterpriseTemplate';
import { PortfolioTemplate } from '../Preview/templates/PortfolioTemplate';
import { CompactTemplate } from '../Preview/templates/CompactTemplate';
import { TimelineTemplate } from '../Preview/templates/TimelineTemplate';
import { HybridTemplate } from '../Preview/templates/HybridTemplate';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional',
    color: '#4F46E5',
    component: ModernTemplate,
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant',
    color: '#18181B',
    component: MinimalTemplate,
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated and authoritative',
    color: '#1E3A8A',
    component: ExecutiveTemplate,
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Dynamic and artistic',
    color: '#059669',
    component: CreativeTemplate,
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Clean and structured',
    color: '#2563EB',
    component: TechnicalTemplate,
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Formal and detailed',
    color: '#4338CA',
    component: AcademicTemplate,
  },
  {
    id: 'startup',
    name: 'Startup',
    description: 'Modern and energetic',
    color: '#7C3AED',
    component: StartupTemplate,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Professional and corporate',
    color: '#0F766E',
    component: EnterpriseTemplate,
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Visual and impactful',
    color: '#BE185D',
    component: PortfolioTemplate,
  },
  {
    id: 'compact',
    name: 'Compact',
    description: 'Space-efficient design',
    color: '#475569',
    component: CompactTemplate,
  },
  {
    id: 'timeline',
    name: 'Timeline',
    description: 'Chronological focus',
    color: '#0369A1',
    component: TimelineTemplate,
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    description: 'Traditional meets modern',
    color: '#6D28D9',
    component: HybridTemplate,
  },
];

const demoData: Resume = {
  personalDetails: {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Software Engineer',
  },
  summary: 'Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership. Proven track record of delivering scalable solutions and driving technical innovation.',
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      startDate: '2020-01',
      endDate: '',
      current: true,
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Reduced system latency by 40% through performance optimization',
        'Mentored 5 junior developers and implemented agile best practices',
      ],
    },
    {
      id: '2',
      company: 'Innovation Labs',
      position: 'Software Engineer',
      startDate: '2017-03',
      endDate: '2019-12',
      current: false,
      description: [
        'Developed and maintained cloud-native applications using React and Node.js',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Collaborated with product team to deliver features used by 500K+ users',
      ],
    },
  ],
  education: [
    {
      id: '1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2013-09',
      endDate: '2017-05',
      gpa: '3.8',
    },
  ],
  skills: [
    { id: '1', name: 'JavaScript', level: 'Expert' },
    { id: '2', name: 'React', level: 'Expert' },
    { id: '3', name: 'Node.js', level: 'Advanced' },
    { id: '4', name: 'AWS', level: 'Advanced' },
    { id: '5', name: 'Python', level: 'Intermediate' },
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2022-06',
      url: 'https://aws.amazon.com/certification',
    },
  ],
  projects: [],
  template: 'modern',
  theme: {
    primary: '#4F46E5',
    font: 'inter',
  },
};

export function TemplateSelector() {
  const { resume, setResume } = useResumeStore();
  const [showPreview, setShowPreview] = React.useState(false);
  const [previewTemplate, setPreviewTemplate] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePreview = (templateId: string) => {
    setPreviewTemplate(templateId);
    setShowPreview(true);
  };

  const handleSelectTemplate = (templateId: string) => {
    setResume({
      ...resume,
      template: templateId,
      theme: {
        ...resume.theme,
        primary: templates.find(t => t.id === templateId)?.color || resume.theme.primary,
      },
    });
  };

  const PreviewTemplate = previewTemplate
    ? templates.find(t => t.id === previewTemplate)?.component
    : ModernTemplate;

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">Template</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-3 pr-8 py-1 text-sm rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex items-center"
            >
              <button
                onClick={() => handleSelectTemplate(template.id)}
                className={`px-3 py-1.5 rounded-l-lg transition-colors ${
                  resume.template === template.id
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
                style={{
                  backgroundColor: resume.template === template.id ? template.color : undefined,
                }}
              >
                {template.name}
              </button>
              <button
                onClick={() => handlePreview(template.id)}
                className={`px-2 py-1.5 rounded-r-lg border-l transition-colors ${
                  resume.template === template.id
                    ? 'text-white hover:bg-black/10'
                    : 'bg-white dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
                style={{
                  backgroundColor: resume.template === template.id ? template.color : undefined,
                }}
                title={`Preview ${template.name} template`}
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && PreviewTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {templates.find(t => t.id === previewTemplate)?.name} Template Preview
              </h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-auto p-6 max-h-[calc(90vh-80px)]">
              <PreviewTemplate
                resume={{
                  ...demoData,
                  template: previewTemplate || 'modern',
                  theme: {
                    ...demoData.theme,
                    primary: templates.find(t => t.id === previewTemplate)?.color || demoData.theme.primary,
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}