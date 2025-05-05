import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gdrwmldtjvrzweyrckfq.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkcndtbGR0anZyendleXJja2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMxMDEsImV4cCI6MjA2MTc3OTEwMX0.z5lyZ-vRxlDEa005r6-NOlBgj-gXCvYpfSg32JD_z-A"

export const supabase = createClient(supabaseUrl, supabaseKey);
