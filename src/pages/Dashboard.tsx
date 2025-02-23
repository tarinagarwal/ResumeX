import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export function Dashboard() {
  const navigate = useNavigate();
  const [resumes, setResumes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showNewResumeModal, setShowNewResumeModal] = React.useState(false);
  const [newResumeName, setNewResumeName] = React.useState('');

  React.useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResumes(data || []);
    } catch (error) {
      console.error('Error fetching resumes:', error);
      toast.error('Failed to load resumes');
    } finally {
      setLoading(false);
    }
  };

  const calculateProgress = (resume) => {
    const sections = ['personalDetails', 'summary', 'experience', 'education', 'skills', 'certifications'];
    let completed = 0;

    // Check personal details
    const personalDetails = resume.content.personalDetails || {};
    if (Object.values(personalDetails).some(value => value)) completed++;

    // Check other sections
    if (resume.content.summary) completed++;
    if ((resume.content.experience || []).length > 0) completed++;
    if ((resume.content.education || []).length > 0) completed++;
    if ((resume.content.skills || []).length > 0) completed++;
    if ((resume.content.certifications || []).length > 0) completed++;

    return Math.round((completed / sections.length) * 100);
  };

  const createNewResume = async () => {
    if (!newResumeName.trim()) {
      toast.error('Please enter a resume name');
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      const { data, error } = await supabase
        .from('resumes')
        .insert({
          user_id: user.id,
          title: newResumeName.trim(),
          content: {
            personalDetails: {},
            summary: '',
            experience: [],
            education: [],
            skills: [],
            certifications: [],
            template: 'modern',
            theme: {
              primary: '#4F46E5',
              font: 'inter',
            },
          },
        })
        .select()
        .single();

      if (error) throw error;

      toast.success('Resume created successfully');
      setShowNewResumeModal(false);
      setNewResumeName('');
      navigate(`/builder?id=${data.id}`);
    } catch (error) {
      console.error('Error creating resume:', error);
      toast.error('Failed to create resume');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Total Resumes
            </h3>
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {loading ? '...' : resumes.length}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Resumes
        </h2>
        <button
          onClick={() => setShowNewResumeModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          <Plus className="h-5 w-5" />
          Build Resume
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      ) : resumes.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No resumes yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create your first resume to get started
          </p>
          <button
            onClick={() => setShowNewResumeModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            <Plus className="h-5 w-5" />
            Build Resume
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {resume.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Last modified: {new Date(resume.last_modified).toLocaleDateString()}
              </p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {calculateProgress(resume)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${calculateProgress(resume)}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/builder?id=${resume.id}`)}
                  className="flex-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New Resume Modal */}
      {showNewResumeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Create New Resume
            </h3>
            <input
              type="text"
              placeholder="Enter resume name"
              value={newResumeName}
              onChange={(e) => setNewResumeName(e.target.value)}
              className="input-field mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowNewResumeModal(false);
                  setNewResumeName('');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={createNewResume}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}