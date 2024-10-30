// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAiContext.js";
import { create } from "../../../api/chat/completions/index.js";
import { ChatCompletionsCreateOptionalParams } from "../../../api/options.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";

/** Interface representing a ChatCompletions operations. */
export interface ChatCompletionsOperations {
  create: (
    body: CreateChatCompletionRequest,
    options?: ChatCompletionsCreateOptionalParams,
  ) => Promise<CreateChatCompletionResponse>;
}

export function getChatCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateChatCompletionRequest,
      options?: ChatCompletionsCreateOptionalParams,
    ) => create(context, body, options),
  };
}

export function getChatCompletionsOperations(
  context: OpenAIContext,
): ChatCompletionsOperations {
  return {
    ...getChatCompletions(context),
  };
}
