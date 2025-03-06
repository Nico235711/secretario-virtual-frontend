export interface User {
  id: number;
  name: string;
  lastname: string
  email: string
  password: string
  phone: string
  dateOfBirth: string
}

export type DraftUser = Omit<User, "id">