import type { AIMessage } from '../types';
import { openai } from './ai';
import { zodFunction } from 'openai/helpers/zod';

export const runLLM = async ({
  messages,
  tools,
}: {
  messages: AIMessage[];
  tools: any[];
}) => {
  const formattedTools = tools.map(zodFunction);
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages,
    tools,
    tool_choice: 'auto', // AI will choose the best tool
    parallel_tool_calls: false,
  });

  return response.choices[0].message;
};
