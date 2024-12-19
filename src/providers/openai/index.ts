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
                default: 'https://api-inference.modelscope.cn/',
            },
            {
                key: 'model',
                name: 'OpenAI model',
                description: 'Custom gpt model for OpenAI API.',
                type: 'select',
                options: [
                    { value: 'Qwen/Qwen2.5-7B-Instruct', label: 'Qwen2.5-7B-Instruct' },
                    { value: 'Qwen/Qwen2.5-32B-Instruct', label: 'Qwen2.5-32B-Instruct' },
                    { value: 'Qwen/QwQ-32B-Preview', label: 'QwQ-32B-Preview' },
                    { value: 'Qwen/Qwen2.5-Coder-32B-Instruct', label: 'Qwen2.5-Coder-32B-Instruct' },
                    { value: 'Qwen/Qwen2.5-Coder-7B-Instruct', label: 'Qwen2.5-Coder-7B-Instruct' },
                    { value: 'deepseek-ai/DeepSeek-V2.5-1210', label: 'DeepSeek-V2.5' },
                    { value: 'InfiniAI/Megrez-3B-Omni', label: 'Megrez-3B-Omni' },
                ],
                default: 'Qwen/Qwen2.5-7B-Instruct',
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
