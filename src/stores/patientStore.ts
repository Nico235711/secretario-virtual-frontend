import { create } from 'zustand'

interface PatientStore {
  logged: boolean
}

export const patientStore = create<PatientStore>((set) => ({
  logged: false,
  setLogged: () => set((state) => ({ logged: !state.logged }))
}))