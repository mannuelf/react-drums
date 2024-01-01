import { drums } from '../data/drums';
import { Kit } from '../types/types';

export function getDrums(): Kit[] {
  return drums;
}

export function getDrumKitByName(kitName: string): Kit | undefined {
  return drums.find((kit) => kit.name === kitName);
}
