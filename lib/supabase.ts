import { createClient } from '@supabase/supabase-js';

// আপনার দেওয়া সুনির্দিষ্ট ক্রেডেনশিয়াল
const supabaseUrl = 'https://wnujugutaejgvjyclofq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndudWp1Z3V0YWVqZ3ZqeWNsb2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MjYyMTcsImV4cCI6MjA4NjQwMjIxN30.JqpZKLfl_4DskZNrUUX0zLTcp0Tw6_kzzSZvw_dXTww';

export const supabase = createClient(supabaseUrl, supabaseKey);
