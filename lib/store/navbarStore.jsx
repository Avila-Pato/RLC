
import { create } from 'zustand';

export const useNavbarStore = create((set) => ({
  activeLink: '', // Guarda el ID de la sección activa
  setActiveLink: (sectionId) => set({ activeLink: sectionId }), // actualizar el estado
}));
