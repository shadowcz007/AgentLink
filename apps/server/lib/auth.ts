import bcrypt from 'bcryptjs';
import { db } from './db';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createAdminUser(username: string, password: string) {
  const passwordHash = await hashPassword(password);
  return db.adminUser.create({
    data: {
      username,
      passwordHash,
    },
  });
}

export async function verifyAdminUser(username: string, password: string) {
  const user = await db.adminUser.findUnique({
    where: { username },
  });

  if (!user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.passwordHash);
  if (!isValid) {
    return null;
  }

  return user;
}


