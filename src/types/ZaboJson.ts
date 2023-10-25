import type { ZaboState } from "./ZaboState";

export type ZaboJson = {
  title: string;
  description: string;
  date: string;
  qrUrl: string;
  imageUrl: string;
  state: ZaboState;
};
