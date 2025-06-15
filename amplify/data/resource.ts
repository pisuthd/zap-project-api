import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { sentenceCompletion } from "../functions/sentenceCompletion/resource"

const schema = a.schema({
  // AI Generation Services
  SentenceCompletion: a.generation({
    aiModel: a.ai.model("Claude 3.5 Sonnet"),
    systemPrompt: 'You are a helpful assistant that completes sentences naturally and contextually.',
  })
    .arguments({ input: a.string() })
    .returns(a.string())
    .authorization((allow) => allow.guest()),

  // CoinDescriptionGenerator: a.generation({
  //   aiModel: a.ai.model("Claude 3.5 Sonnet"),
  //   systemPrompt: `You are an expert copywriter for cryptocurrency and NFT projects. Generate compelling, professional descriptions for content coins that highlight their unique value proposition, use cases, and potential for creators and collectors. Keep descriptions concise (2-3 sentences), engaging, and focused on utility and community benefits.`,
  // })
  //   .arguments({ 
  //     coinName: a.string(),
  //     coinSymbol: a.string(),
  //     creatorInfo: a.string().optional(),
  //     category: a.string().optional()
  //   })
  //   .returns(a.string())
  //   .authorization((allow) => allow.guest()),

  // MarketAnalysis: a.generation({
  //   aiModel: a.ai.model("Claude 3.5 Sonnet"),
  //   systemPrompt: `You are a blockchain and DeFi market analyst. Provide concise, data-driven analysis of cryptocurrency trends, token performance, and market insights. Focus on actionable information for traders and creators in the Zora ecosystem.`,
  // })
  //   .arguments({ 
  //     query: a.string(),
  //     marketData: a.string().optional(),
  //     timeframe: a.string().optional()
  //   })
  //   .returns(a.string())
  //   .authorization((allow) => allow.guest()),

  // ContentStrategy: a.generation({
  //   aiModel: a.ai.model("Claude 3.5 Sonnet"),
  //   systemPrompt: `You are a digital marketing and content strategy expert specializing in Web3, NFTs, and creator economy. Provide actionable strategies for content creators to maximize their reach, engagement, and monetization through content coins and blockchain platforms.`,
  // })
  //   .arguments({ 
  //     creatorType: a.string(),
  //     goals: a.string(),
  //     currentStrategy: a.string().optional()
  //   })
  //   .returns(a.string())
  //   .authorization((allow) => allow.guest()),

  // SmartContractExplainer: a.generation({
  //   aiModel: a.ai.model("Claude 3.5 Sonnet"),
  //   systemPrompt: `You are a blockchain technology educator. Explain smart contracts, DeFi protocols, and blockchain concepts in simple, accessible language. Focus on practical applications and benefits for everyday users, avoiding technical jargon.`,
  // })
  //   .arguments({ 
  //     topic: a.string(),
  //     userLevel: a.string().optional(), // beginner, intermediate, advanced
  //     context: a.string().optional()
  //   })
  //   .returns(a.string())
  //   .authorization((allow) => allow.guest()),
  // CoinProject: a
  //   .model({
  //     name: a.string().required(),
  //     symbol: a.string().required(),
  //     description: a.string(),
  //     creatorAddress: a.string(),
  //     contractAddress: a.string().optional(),
  //     imageUrl: a.string().optional(),
  //     websiteUrl: a.string().optional(),
  //     socialLinks: a.json().optional(),
  //     marketCap: a.float().optional(),
  //     totalSupply: a.float().optional(),
  //     currentPrice: a.float().optional(),
  //     volume24h: a.float().optional(),
  //     priceChange24h: a.float().optional(),
  //     category: a.enum(["art", "music", "video", "writing", "gaming", "other"]).default("other"),
  //     status: a.enum(["active", "paused", "completed"]).default("active"),
  //     tags: a.string().array().optional(),
  //     launchDate: a.datetime().optional(),
  //     createdAt: a.datetime().default("now"),
  //     updatedAt: a.datetime().default("now"),
  //   })
  //   .authorization((allow) => [allow.guest()])
}).authorization((allow) => [
  allow.resource(sentenceCompletion)
])

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam"
  },
});
