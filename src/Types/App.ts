export interface App {
  id: string;
  name: string;
  icon?: string;
  Component:  React.LazyExoticComponent<React.ComponentType<any>>;
  type: "system" | "user"
}