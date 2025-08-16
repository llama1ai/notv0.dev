import { XAIProviderOptions } from "@ai-sdk/xai";
import { JSONValue } from "ai";

export type SharedV2ProviderOptions = Record<string, Record<string, JSONValue>>;

export interface Model {
  id: XAIModelId;
  provider: string;
  model: string;
  providerOptions?: SharedV2ProviderOptions;
}

type XAIModelId = "grok-3";

const xaiProviderOptions = {
  xai: {
    // Basic configuration for grok-3
  } satisfies XAIProviderOptions,
};

export const AI_MODELS: Model[] = [
  {
    id: "grok-3",
    provider: "XAI",
    model: "Grok 3",
    providerOptions: xaiProviderOptions,
  },
];
