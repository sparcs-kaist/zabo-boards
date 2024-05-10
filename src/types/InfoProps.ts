import type { ZaboState } from "./ZaboState";

export type InfoProps = {
  title: string;
  owner: string;
  scheduleType: string | null;
  scheduleDate: string | null;
  state: ZaboState;
};
