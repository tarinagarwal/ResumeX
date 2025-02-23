/*
  # Add new resume templates

  1. Updates
    - Add new templates to the templates table
    - Add additional styling options for templates
    - Include preview URLs and detailed layouts

  2. New Templates
    - Executive
    - Creative
    - Technical
    - Academic
    - Startup
    - Enterprise
    - Portfolio
    - Compact
    - Timeline
    - Hybrid
*/

-- Insert new templates
INSERT INTO templates (name, description, preview_url, layout) VALUES
  (
    'Executive',
    'Sophisticated design for senior professionals and executives',
    'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "summary", "experience", "education", "skills", "certifications"],
      "styles": {
        "fontFamily": "Merriweather",
        "spacing": "generous",
        "accentColor": "#1e3a8a",
        "headerStyle": "centered",
        "sectionStyle": "bordered",
        "typography": {
          "headings": "serif",
          "body": "sans-serif"
        }
      }
    }'
  ),
  (
    'Creative',
    'Dynamic and artistic layout for creative professionals',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "summary", "portfolio", "experience", "skills"],
      "styles": {
        "fontFamily": "Poppins",
        "spacing": "dynamic",
        "accentColor": "#059669",
        "headerStyle": "asymmetric",
        "sectionStyle": "cards",
        "typography": {
          "headings": "display",
          "body": "modern"
        }
      }
    }'
  ),
  (
    'Technical',
    'Clean layout emphasizing technical expertise',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "skills", "experience", "projects", "education", "certifications"],
      "styles": {
        "fontFamily": "JetBrains Mono",
        "spacing": "compact",
        "accentColor": "#2563eb",
        "headerStyle": "minimal",
        "sectionStyle": "grid",
        "typography": {
          "headings": "monospace",
          "body": "sans-serif"
        }
      }
    }'
  ),
  (
    'Academic',
    'Formal layout for academic and research positions',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "research", "publications", "education", "teaching", "grants"],
      "styles": {
        "fontFamily": "Crimson Pro",
        "spacing": "traditional",
        "accentColor": "#4338ca",
        "headerStyle": "classic",
        "sectionStyle": "numbered",
        "typography": {
          "headings": "serif",
          "body": "serif"
        }
      }
    }'
  ),
  (
    'Startup',
    'Modern and energetic design for startup environments',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "impact", "experience", "projects", "skills"],
      "styles": {
        "fontFamily": "Inter",
        "spacing": "airy",
        "accentColor": "#7c3aed",
        "headerStyle": "bold",
        "sectionStyle": "cards",
        "typography": {
          "headings": "modern",
          "body": "modern"
        }
      }
    }'
  ),
  (
    'Enterprise',
    'Professional template for corporate positions',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "summary", "experience", "achievements", "education", "skills"],
      "styles": {
        "fontFamily": "Source Sans Pro",
        "spacing": "balanced",
        "accentColor": "#0f766e",
        "headerStyle": "professional",
        "sectionStyle": "clean",
        "typography": {
          "headings": "sans-serif",
          "body": "sans-serif"
        }
      }
    }'
  ),
  (
    'Portfolio',
    'Visual-focused layout for showcasing work',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "gallery", "experience", "projects", "skills"],
      "styles": {
        "fontFamily": "Montserrat",
        "spacing": "gallery",
        "accentColor": "#be185d",
        "headerStyle": "creative",
        "sectionStyle": "masonry",
        "typography": {
          "headings": "display",
          "body": "sans-serif"
        }
      }
    }'
  ),
  (
    'Compact',
    'Space-efficient design without compromising readability',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "summary", "experience", "education", "skills", "certifications"],
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "spacing": "condensed",
        "accentColor": "#475569",
        "headerStyle": "compact",
        "sectionStyle": "efficient",
        "typography": {
          "headings": "condensed",
          "body": "condensed"
        }
      }
    }'
  ),
  (
    'Timeline',
    'Chronological focus with visual timeline elements',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "experience", "education", "milestones"],
      "styles": {
        "fontFamily": "Nunito",
        "spacing": "timeline",
        "accentColor": "#0369a1",
        "headerStyle": "minimal",
        "sectionStyle": "connected",
        "typography": {
          "headings": "modern",
          "body": "modern"
        }
      }
    }'
  ),
  (
    'Hybrid',
    'Versatile design combining traditional and modern elements',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300',
    '{
      "sections": ["header", "summary", "experience", "skills", "education", "interests"],
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "spacing": "hybrid",
        "accentColor": "#6d28d9",
        "headerStyle": "balanced",
        "sectionStyle": "mixed",
        "typography": {
          "headings": "modern",
          "body": "traditional"
        }
      }
    }'
  );