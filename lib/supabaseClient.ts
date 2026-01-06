// Supabase client removed.
// This file is kept to avoid breaking imports during transition if any remain, 
// but it exports a dummy object or nothing.

export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithOtp: async () => ({ error: null }),
    signInWithOAuth: async () => ({ error: null }),
    verifyOtp: async () => ({ error: null }),
    signOut: async () => ({ error: null }),
  }
};
