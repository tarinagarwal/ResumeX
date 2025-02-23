import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import { templateComponents, TemplateId } from './templates';

export function Preview() {
  const { resume } = useResumeStore();
  const TemplateComponent = templateComponents[resume.template as TemplateId] || templateComponents.modern;

  const getFileName = () => {
    const name = resume.personalDetails?.fullName || 'resume';
    return `${name.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`;
  };

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <PDFDownloadLink
          document={<ResumePDF resume={resume} />}
          fileName={getFileName()}
          className="btn-primary flex items-center gap-2"
        >
          {({ loading }) => (
            <>
              <Download className="h-4 w-4" />
              {loading ? 'Generating PDF...' : 'Download PDF'}
            </>
          )}
        </PDFDownloadLink>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg overflow-auto max-h-[calc(100vh-12rem)]">
        <TemplateComponent resume={resume} />
      </div>
    </div>
  );
}