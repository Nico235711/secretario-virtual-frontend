export interface User {
  id: number;
  username: string;
  password: string;
  phonenumber: string;
  birthdate: string;
  email: string;
}

export type DraftUser = Omit<User, "id" | "email">