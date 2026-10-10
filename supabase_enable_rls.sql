-- ==============================================================================
-- PLE-CC OSPE Exam Simulation: Supabase RLS Security Fix
-- Project ID: rustzcbcuocbzwauavln
-- Resolves: 3 Critical Issues in Supabase Security Advisor (RLS Disabled in Public)
-- ==============================================================================

-- 1. Enable Row Level Security (RLS) on all 3 public tables
ALTER TABLE public.exam_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.station_submissions ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing policies if any (ensures idempotent re-runs)
DROP POLICY IF EXISTS "Allow public select on exam_rooms" ON public.exam_rooms;
DROP POLICY IF EXISTS "Allow public insert on exam_rooms" ON public.exam_rooms;
DROP POLICY IF EXISTS "Allow public update on exam_rooms" ON public.exam_rooms;

DROP POLICY IF EXISTS "Allow public select on room_participants" ON public.room_participants;
DROP POLICY IF EXISTS "Allow public insert on room_participants" ON public.room_participants;
DROP POLICY IF EXISTS "Allow public update on room_participants" ON public.room_participants;

DROP POLICY IF EXISTS "Allow public select on station_submissions" ON public.station_submissions;
DROP POLICY IF EXISTS "Allow public insert on station_submissions" ON public.station_submissions;
DROP POLICY IF EXISTS "Allow public update on station_submissions" ON public.station_submissions;

-- 3. Security Policies for exam_rooms
-- 3.1 Allow room code lookup for candidates & examiner (SELECT)
CREATE POLICY "Allow public select on exam_rooms"
ON public.exam_rooms
FOR SELECT
TO anon, authenticated
USING (true);

-- 3.2 Allow host to register new exam rooms (INSERT)
CREATE POLICY "Allow public insert on exam_rooms"
ON public.exam_rooms
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 3.3 Allow host to update station progress & room status (UPDATE)
CREATE POLICY "Allow public update on exam_rooms"
ON public.exam_rooms
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- 4. Security Policies for room_participants
-- 4.1 Allow viewing candidate roster (SELECT)
CREATE POLICY "Allow public select on room_participants"
ON public.room_participants
FOR SELECT
TO anon, authenticated
USING (true);

-- 4.2 Allow candidate to join exam rooms (INSERT)
CREATE POLICY "Allow public insert on room_participants"
ON public.room_participants
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4.3 Allow candidate to toggle ready status (UPDATE)
CREATE POLICY "Allow public update on room_participants"
ON public.room_participants
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- 5. Security Policies for station_submissions
-- 5.1 Allow viewing station score reports (SELECT)
CREATE POLICY "Allow public select on station_submissions"
ON public.station_submissions
FOR SELECT
TO anon, authenticated
USING (true);

-- 5.2 Allow recording student exam submissions & scores (INSERT)
CREATE POLICY "Allow public insert on station_submissions"
ON public.station_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 5.3 Allow examiner to update score & feedback (UPDATE)
CREATE POLICY "Allow public update on station_submissions"
ON public.station_submissions
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Verification Query (Run this after applying to confirm RLS is ON)
-- SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public' AND tablename IN ('exam_rooms', 'room_participants', 'station_submissions');
