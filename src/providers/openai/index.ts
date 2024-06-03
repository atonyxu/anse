import {
    handlePrompt,
    handleRapidPrompt,
} from './handler'
import type { Provider } from '@/types/provider'

const providerOpenAI = () => {
    const provider: Provider = {
        id: 'provider-openai',
        icon: 'i-simple-icons-openai', // @unocss-include
        name: 'OpenAI',
        globalSettings: [
            {
                key: 'apiKey',
                name: 'API Key',
                type: 'api-key',
            },
            {
                key: 'baseUrl',
                name: 'Base URL',
                description: 'Custom base url for OpenAI API.',
                type: 'input',
                default: 'https://cf.atony.cyou',
            },
            {
                key: 'model',
                name: 'OpenAI model',
                description: 'Custom gpt model for OpenAI API.',
                type: 'select',
                options: [
                    { value: 'gpt-3.5-turbo', label: 'gpt-3.5-turbo' },
                    { value: 'gpt-4', label: 'gpt-4' },
                    { value: 'gpt-4-32k', label: 'gpt-4-32k' },
                    { value: '@cf/qwen/qwen1.5-14b-chat-awq', label: 'qwen/qwen1.5-14b-chat-awq' },
                    { value: '@cf/meta/llama-3-8b-instruct', label: 'meta/llama-3-8b-instruct' },
                    { value: '@hf/meta-llama/meta-llama-3-8b-instruct', label: 'meta-llama/meta-llama-3-8b-instruct' },
                    { value: '@cf/meta/llama-2-7b-chat-fp16', label: 'meta/llama-2-7b-chat-fp16' },
                    { value: '@hf/thebloke/llamaguard-7b-awq', label: 'thebloke/llamaguard-7b-awq' },
                    { value: '@hf/thebloke/neural-chat-7b-v3-1-awq', label: 'thebloke/neural-chat-7b-v3-1-awq' },
                    { value: '@hf/mistral/mistral-7b-instruct-v0.2', label: 'mistral/mistral-7b-instruct-v0.2' },
                    { value: '@hf/thebloke/codellama-7b-instruct-awq', label: 'thebloke/codellama-7b-instruct-awq' },
                    { value: '@cf/thebloke/discolm-german-7b-v1-awq', label: 'thebloke/discolm-german-7b-v1-awq' },
                    { value: '@hf/thebloke/openchat_3.5-awq', label: 'thebloke/openchat_3.5-awq' },
                    { value: '@hf/thebloke/llama-2-13b-chat-awq', label: 'thebloke/llama-2-13b-chat-awq' },
                    { value: '@hf/thebloke/deepseek-coder-6.7b-base-awq', label: 'thebloke/deepseek-coder-6.7b-base-awq' },
                    { value: '@cf/meta-llama/llama-2-7b-chat-hf-lora', label: 'meta-llama/llama-2-7b-chat-hf-lora' },
                    { value: '@hf/thebloke/openhermes-2.5-mistral-7b-awq', label: 'thebloke/openhermes-2.5-mistral-7b-awq' },
                    { value: '@hf/thebloke/deepseek-coder-6.7b-instruct-awq', label: 'thebloke/deepseek-coder-6.7b-instruct-awq' },
                    { value: '@cf/deepseek-ai/deepseek-math-7b-instruct', label: 'deepseek-ai/deepseek-math-7b-instruct' },
                    { value: '@cf/tiiuae/falcon-7b-instruct', label: 'tiiuae/falcon-7b-instruct' },
                    { value: '@hf/nousresearch/hermes-2-pro-mistral-7b', label: 'nousresearch/hermes-2-pro-mistral-7b' },
                    { value: '@hf/thebloke/zephyr-7b-beta-awq', label: 'thebloke/zephyr-7b-beta-awq' },
                    { value: '@cf/google/gemma-7b-it-lora', label: 'google/gemma-7b-it-lora' },
                    { value: '@cf/defog/sqlcoder-7b-2', label: 'defog/sqlcoder-7b-2' },
                    { value: '@cf/microsoft/phi-2', label: 'microsoft/phi-2' },
                    { value: '@hf/google/gemma-7b-it', label: 'google/gemma-7b-it' },
                ],
                default: '@cf/qwen/qwen1.5-14b-chat-awq',
            },
            {
                key: 'maxTokens',
                name: 'Max Tokens',
                description: 'The maximum number of tokens to generate in the completion.',
                type: 'slider',
                min: 0,
                max: 32768,
                default: 2048,
                step: 1,
            },
            {
                key: 'messageHistorySize',
                name: 'Max History Message Size',
                description: 'The number of retained historical messages will be truncated if the length of the message exceeds the MaxToken parameter.',
                type: 'slider',
                min: 1,
                max: 24,
                default: 5,
                step: 1,
            },
            {
                key: 'temperature',
                name: 'Temperature',
                type: 'slider',
                description: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
                min: 0,
                max: 2,
                default: 0.7,
                step: 0.01,
            },
            {
                key: 'top_p',
                name: 'Top P',
                description: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
                type: 'slider',
                min: 0,
                max: 1,
                default: 1,
                step: 0.01,
            },
        ],
        bots: [
            {
                id: 'chat_continuous',
                type: 'chat_continuous',
                name: 'Continuous Chat',
                settings: [],
            },
            {
                id: 'chat_single',
                type: 'chat_single',
                name: 'Single Chat',
                settings: [],
            },
            {
                id: 'image_generation',
                type: 'image_generation',
                name: 'DALL·E',
                settings: [],
            },
        ],
        handlePrompt,
        handleRapidPrompt,
    }
    return provider
}

export default providerOpenAI
