// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "llama-3.1-8b-instant",
    label: "Llama 3.1 8b Instant",
    apiIdentifier: "llama-3.1-8b-instant",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "llama-3.1-70b-versatile",
    label: "Llama 3.1 70b Versatile",
    apiIdentifier: "llama-3.1-70b-versatile",
    description: "For complex, multi-step tasks",
  },
] as const;

export const DEFAULT_MODEL_NAME: string = "llama-3.1-8b-instant";
