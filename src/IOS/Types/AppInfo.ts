export interface AppInfo {
  id: string;
  name: string;
  icon?: string;
  type: "system" | "user";
  entrypoint: string;
}