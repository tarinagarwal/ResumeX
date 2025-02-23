import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Editor } from '../components/Editor';
import { Preview } from '../components/Preview';
import { supabase } from '../lib/supabase';
import { useResumeStore } from '../store/useResumeStore';
import toast from 'react-hot-toast';
import { Save, ArrowLeft } from 'lucide-react';

export function Builder() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resumeId = searchParams.get('id');
  const { resume, setResume } = useResumeStore();
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (resumeId) {
      loadResume();
    } else {
      navigate('/dashboard');
    }
  }, [resumeId]);

  const loadResume = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .eq('id', resumeId)
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      if (!data) throw new Error('Resume not found');

      setResume(data.content);
    } catch (error) {
      console.error('Error loading resume:', error);
      toast.error('Failed to load resume');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const saveResume = async () => {
    if (!resumeId) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('resumes')
        .update({
          content: resume,
          last_modified: new Date().toISOString(),
        })
        .eq('id', resumeId);

      if (error) throw error;
      toast.success('Resume saved successfully');
    } catch (error) {
      console.error('Error saving resume:', error);
      toast.error('Failed to save resume');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Resume Builder
            </h1>
          </div>
          <button
            onClick={saveResume}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
          >
            <Save className="h-5 w-5" />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <Editor />
            </div>
          </div>
          <div className="lg:sticky lg:top-8 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}