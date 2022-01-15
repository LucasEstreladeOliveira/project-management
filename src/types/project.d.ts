import { User } from './user.d.ts'

export type Project = {
  id?: number | string;
  name: string;
  description: string;
  owner: User
}