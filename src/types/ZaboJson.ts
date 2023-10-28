import type { ZaboState } from "./ZaboState";

export type ZaboJson = {
  id: string;
  title: string;
  owner: string;
  description: string;
  scheduleType: string | null;
  scheduleDate: string | null;
  qrUrl: string;
  imageUrl: string;
  state: ZaboState;
  score: number;
  views: number;
  effectiveViews: number;
  likes: number;
};
