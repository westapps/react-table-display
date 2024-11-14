import { create } from 'zustand';


interface Employee {
  EmployeeID: number;
  Name: string;
  City: string;
  Gender: string;
  Birthdate: string;
}

interface EmployeeState {
  employees: Employee[];
  setEmployees: (employees: Employee[]) => void;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],
  setEmployees: (employees) => set({ employees }),
}));
