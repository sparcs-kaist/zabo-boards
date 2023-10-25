import type { ZaboState } from "./ZaboState";

export type ZaboJson = {
  title: string;
  description: string;
  date: string;
  qrUrl: string;
  imageUrl: string;
  // css animation starts if trigger is set to true
  state: ZaboState;
};
