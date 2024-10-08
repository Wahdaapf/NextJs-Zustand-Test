import { create } from 'zustand';

export const userStore = create((set) => ({
  user: {
    full_name: "wahda adella"
  },
  updateUser: (newUser: any) => set((state: any) => ({
    user: { ...state.user, ...newUser }
  }))
}));
