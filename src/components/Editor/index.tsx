import React from 'react';
import { TemplateSelector } from './TemplateSelector';
import { PersonalDetails } from './PersonalDetails';
import { Summary } from './Summary';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { Certifications } from './Certifications';

export function Editor() {
  return (
    <div className="p-6 space-y-8">
      <TemplateSelector />
      <PersonalDetails />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
    </div>
  );
}