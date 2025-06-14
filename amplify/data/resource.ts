import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  SentenceCompletion: a.generation({
    aiModel: a.ai.model("Claude 3.5 Sonnet"),
    systemPrompt: 'You are a helpful assistant that completes sentence',
  })
    .arguments({ input: a.string() })
    .returns(a.string())
    .authorization((allow) => allow.guest()),
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam"
  },
});