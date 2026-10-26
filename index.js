import { createClient } from '@supabase/supabase-js';

// Tus credenciales de Supabase
const supabaseUrl = 'https://stpcqjckxzwgbxsnyjqo.supabase.co';
const supabaseKey = 'sb_publishable_YiyrTsbtNt416u9B6AFQQA_B0qt42_C';

const supabase = createClient(supabaseUrl, supabaseKey);

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('Estudiantes')
    .select('*');

  if (error) {
    console.log('Error al consultar:', error);
  } else {
    console.log('Datos de estudiantes:', data);
  }
}

obtenerEstudiantes();