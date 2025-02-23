import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../lib/supabase';

export function AuthForm() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: 'rgb(var(--primary))',
                brandAccent: 'rgb(var(--primary) / 0.8)',
              },
            },
          },
        }}
        providers={[]}
        redirectTo={window.location.origin}
      />
    </div>
  );
}