import { useState, useCallback } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { createAIHooks } from "@aws-amplify/ui-react-ai";


const client = generateClient<Schema>({ authMode: "iam" });
const { useAIGeneration } = createAIHooks(client);

const AITesting = () => {

    const [{ data, isLoading, hasError }, sentenceCompletion] = useAIGeneration("SentenceCompletion");

    // const [loading, setLoading] = useState(false);
    // const [response, setResponse] = useState("");
    const [prompt, setPrompt] = useState("");

    const handlePromptTest = useCallback(async () => {
        if (!prompt.trim()) return;

        sentenceCompletion({
            input: prompt
            // input: [
            //     `Help find a good completion for following sentence:`,
            //     prompt
            // ].join("\n")
        })

        // setLoading(true);
        // try {
        //     const result = await client.generations.SentenceCompletion({
        //         input: prompt,
        //     });
        //     setResponse(result.data || "No response received");
        // } catch (error) {
        //     setResponse(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
        // } finally {
        //     setLoading(false);
        // }
    }, [prompt])

    console.log("data:", data)

    const response = data || "No response received"

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">AI Prompt Testing</h2>
                        <p className="text-gray-600">Test the Claude 3.5 Sonnet on our backend on AWS Bedrock</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                            Enter any sentence to let's AI complete it:
                        </label>
                        <textarea
                            id="prompt"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            rows={4}
                            placeholder="Enter a sentence or phrase to complete..."
                        />
                    </div>

                    <button
                        onClick={handlePromptTest}
                        disabled={isLoading || !prompt.trim()}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Generating...</span>
                            </div>
                        ) : (
                            "Generate Completion"
                        )}
                    </button>

                    {response && (
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                AI Response
                            </label>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <pre className="whitespace-pre-wrap text-gray-800 text-sm">{response}</pre>
                            </div>
                        </div>
                    )}

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900 mb-2">💡 Example Prompts</h4>
                        <div className="space-y-2">
                            {[
                                "Decentralized finance (DeFi) enables",
                                "NFTs and digital ownership represent",
                                "The capital of Japan is",
                                "The creator of Bitcoin is",
                            ].map((examplePrompt, index) => (
                                <button
                                    key={index}
                                    onClick={() => setPrompt(examplePrompt)}
                                    className="block w-full text-left px-3 py-2 text-sm text-blue-700 hover:bg-blue-100 rounded-md transition-colors"
                                >
                                    "{examplePrompt}"
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AITesting