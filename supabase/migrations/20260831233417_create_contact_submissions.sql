/*
# Create contact_submissions table (single-tenant, no auth)

1. Purpose
   Stores inquiries submitted through the public "Work With Linda" contact form
   on the InnerView Health marketing website. There is no sign-in flow on this
   site, so submissions are created by anonymous visitors.

2. New Tables
   - contact_submissions
     - id            (uuid, primary key, auto-generated)
     - name          (text, not null) — visitor's full name
     - email         (text, not null) — visitor's email address
     - phone         (text, nullable) — optional phone number
     - interest      (text, nullable) — which service/topic they're interested in
     - message       (text, not null) — the inquiry body
     - created_at    (timestamptz, default now()) — submission timestamp

3. Security
   - Enable RLS on contact_submissions.
   - Allow anon + authenticated to INSERT (the public form needs to write).
   - No SELECT/UPDATE/DELETE for anon or authenticated — only the project owner
     can read submissions directly in the database. This keeps visitor
     inquiries private while still letting the public form submit them.

4. Notes
   - Single-tenant, no-auth app: no user_id column, no auth.uid() checks.
   - The INSERT policy uses WITH CHECK (true) because any visitor may submit.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  interest text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
