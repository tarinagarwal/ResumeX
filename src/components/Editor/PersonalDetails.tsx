import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';

export function PersonalDetails() {
  const { resume, updatePersonalDetails } = useResumeStore();
  const { personalDetails } = resume;

  const fields = [
    { icon: User, name: 'fullName', label: 'Full Name', type: 'text' },
    { icon: Mail, name: 'email', label: 'Email', type: 'email' },
    { icon: Phone, name: 'phone', label: 'Phone', type: 'tel' },
    { icon: MapPin, name: 'location', label: 'Location', type: 'text' },
    { icon: Briefcase, name: 'title', label: 'Professional Title', type: 'text' },
  ] as const;

  return (
    <div className="space-y-4">
      <h3 className="section-title">Personal Details</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map(({ icon: Icon, name, label, type }) => (
          <div key={name} className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Icon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={type}
              placeholder={label}
              value={personalDetails[name] || ''}
              onChange={(e) => updatePersonalDetails({ [name]: e.target.value })}
              className="input-field pl-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}