import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { APP_SECRET } from '../constants';

const { verify } = jwt;

export function getTokenPayload(token: string): string | any {
  return verify(token, APP_SECRET);
}

export function getUserId(req: Request, authToken?: string): string {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }
  throw new Error('Not authenticated');
}
