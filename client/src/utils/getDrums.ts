import { drums } from "../data/drums";

export function getDrums(): Kit[] {
  return drums;
}

export function getDrumKitByName(kitName: string): Kit | undefined {
  return drums.find((kit) => kit.name === kitName);
}
