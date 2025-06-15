import { defineFunction } from '@aws-amplify/backend';

export const sentenceCompletion = defineFunction({
    name: 'sentenceCompletion',
    entry: './handler.ts',
    timeoutSeconds: 30,
    environment: {
        // Add any environment variables needed
    }
});
