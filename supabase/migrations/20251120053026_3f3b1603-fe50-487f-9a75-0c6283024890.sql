-- Create book_requests table for new book requests
CREATE TABLE public.book_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  book_name TEXT NOT NULL,
  author TEXT NOT NULL,
  publisher TEXT,
  year TEXT,
  pages INTEGER,
  language TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create upload_requests table for book upload requests
CREATE TABLE public.upload_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  book_name TEXT NOT NULL,
  author TEXT NOT NULL,
  publisher TEXT,
  file_url TEXT,
  year TEXT,
  pages INTEGER,
  language TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.book_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.upload_requests ENABLE ROW LEVEL SECURITY;

-- RLS Policies for book_requests
CREATE POLICY "Users can insert their own book requests"
ON public.book_requests
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own book requests"
ON public.book_requests
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Anonymous users can insert book requests"
ON public.book_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- RLS Policies for upload_requests
CREATE POLICY "Users can insert their own upload requests"
ON public.upload_requests
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own upload requests"
ON public.upload_requests
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Anonymous users can insert upload requests"
ON public.upload_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Add updated_at triggers
CREATE TRIGGER update_book_requests_updated_at
BEFORE UPDATE ON public.book_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_upload_requests_updated_at
BEFORE UPDATE ON public.upload_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();