/*
  # Add title field to resumes table

  1. Changes
    - Add title field to resumes table with default value
    - Update existing rows to have a title
*/

-- Add title field if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'resumes' AND column_name = 'title'
  ) THEN
    ALTER TABLE resumes ADD COLUMN title text NOT NULL DEFAULT 'Untitled Resume';
  END IF;
END $$;