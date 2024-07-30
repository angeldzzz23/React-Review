
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://nuowemuchiytboozkiep.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51b3dlbXVjaGl5dGJvb3praWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4OTE5MDksImV4cCI6MjAzNzQ2NzkwOX0.aXp1z2djUIsy0TmKhKtJS4ekL78lFuKtE9IBHRBEIZ0';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;