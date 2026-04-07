export interface VoiceMessage {
  role: "user" | "assistant";
  content: string;
}

export interface VoiceToolCall {
  name: string;
  arguments: Record<string, string>;
}
