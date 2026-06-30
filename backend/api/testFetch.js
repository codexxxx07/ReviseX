import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

async function testInsert() {
  const { data, error } = await supabase
    .from('notes')
    .insert({
      title: 'Test Note',
      content: 'This is my first note from backend',
      subject: 'Testing'
    })
    .select()

  if (error) {
    console.log('❌ Insert Error:', error.message)
  } else {
    console.log('✅ Inserted:', data)
  }
}

testInsert()