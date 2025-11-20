-- Create book categories table
CREATE TABLE public.book_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create books table for bookstore
CREATE TABLE public.books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.book_categories(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  sku TEXT UNIQUE NOT NULL,
  age_group TEXT,
  description TEXT,
  author TEXT,
  publisher TEXT,
  language TEXT,
  pages INTEGER,
  year INTEGER,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  availability TEXT DEFAULT 'in_stock',
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  order_number TEXT UNIQUE NOT NULL,
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  shipping_address JSONB,
  subtotal DECIMAL(10,2) NOT NULL,
  shipping_cost DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending',
  order_status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create order items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  book_id UUID REFERENCES public.books(id) ON DELETE SET NULL,
  book_title TEXT NOT NULL,
  book_sku TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.book_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for book_categories (public read)
CREATE POLICY "Anyone can view active categories"
ON public.book_categories
FOR SELECT
USING (is_active = true);

-- RLS Policies for books (public read)
CREATE POLICY "Anyone can view active books"
ON public.books
FOR SELECT
USING (is_active = true);

-- RLS Policies for orders
CREATE POLICY "Users can view their own orders"
ON public.orders
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orders"
ON public.orders
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anonymous users can create orders"
ON public.orders
FOR INSERT
TO anon
WITH CHECK (true);

-- RLS Policies for order_items
CREATE POLICY "Users can view their order items"
ON public.order_items
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.orders
    WHERE orders.id = order_items.order_id
    AND orders.user_id = auth.uid()
  )
);

CREATE POLICY "Anyone can view order items for their orders"
ON public.order_items
FOR SELECT
USING (true);

-- Add updated_at triggers
CREATE TRIGGER update_book_categories_updated_at
BEFORE UPDATE ON public.book_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_books_updated_at
BEFORE UPDATE ON public.books
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert seed data for categories
INSERT INTO public.book_categories (name, slug, description, display_order) VALUES
('Ship Jaina Education Books – In USA', 'usa', 'Educational books available for shipping within USA', 1),
('Ship Jaina Education Books – In India', 'india', 'Educational books available for shipping within India', 2),
('Ship Jaina Education Books – In Other Countries', 'other-countries', 'Educational books available for international shipping', 3),
('Ship Jaina Education Books – Special Books for USA Only', 'usa-special', 'Special collection exclusively for USA customers', 4);