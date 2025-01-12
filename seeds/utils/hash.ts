import crypto from 'node:crypto';

export function hash(value: string): string {
  return crypto.createHash('sha256').update(value).digest().toString('hex');
}
