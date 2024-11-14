import { ToolTracking as TToolTracking } from "../api/toolTracking/ToolTracking";

export const TOOLTRACKING_TITLE_FIELD = "toolName";

export const ToolTrackingTitle = (record: TToolTracking): string => {
  return record.toolName?.toString() || String(record.id);
};
