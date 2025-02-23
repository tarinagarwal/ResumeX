/*
  # Resume Builder Schema

  1. New Tables
    - `resumes`
      - Stores user resumes with all sections and metadata
      - Includes theme and template preferences
    - `templates`
      - Predefined resume templates
      - Stores layout and style information

  2. Security
    - Enable RLS on all tables
    - Users can only access their own resumes
    - Templates are readable by all authenticated users
*/

-- Create resume templates table
CREATE TABLE IF NOT EXISTS templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  preview_url text,
  layout jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create resumes table
CREATE TABLE IF NOT EXISTS resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  title text NOT NULL DEFAULT 'Untitled Resume',
  content jsonb NOT NULL,
  template_id uuid REFERENCES templates(id),
  last_modified timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

-- Templates are readable by all authenticated users
CREATE POLICY "Templates are readable by authenticated users"
  ON templates
  FOR SELECT
  TO authenticated
  USING (true);

-- Users can perform all operations on their own resumes
CREATE POLICY "Users can manage their own resumes"
  ON resumes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Insert default templates
INSERT INTO templates (name, description, preview_url, layout) VALUES
  (
    'Modern',
    'A clean and professional template with a modern layout',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "summary", "experience", "education", "skills", "certifications"],
      "styles": {
        "fontFamily": "Inter",
        "spacing": "comfortable",
        "accentColor": "#2563eb"
      }
    }'
  ),
  (
    'Minimal',
    'A minimalist design that puts your content first',
    'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "experience", "education", "skills"],
      "styles": {
        "fontFamily": "system-ui",
        "spacing": "compact",
        "accentColor": "#18181b"
      }
    }'
  );