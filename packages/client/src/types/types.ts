// src/types.ts
import type { GetUsersQuery } from '../graphql/generated';

export type User = GetUsersQuery['users'][0];

export type Kit = {
  id: number;
  name: string;
  sounds: {
    id: number;
    name: string;
    src: string;
    keyCode: number;
    keyChar: string;
    onClick?: () => void;
  }[];
};

export interface Sound {
  id: number;
  name: string;
  src: string;
  keyCode: number;
  keyChar: string;
}

export type Sounds = {
  sounds: Sound[];
};

export interface Users {
  users: [User];
}

export interface AuthPayload {
  token: string;
  user: [User];
  error: Error;
}

export interface Logo {
  light: string;
  dark: string;
}
