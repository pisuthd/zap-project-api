"use client";

import { useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import OverviewTab from "@/components/Tabs/Overview"
import APITab from "@/components/Tabs/API"
import AITestingTab from "@/components/Tabs/AITesting"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const client = generateClient<Schema>();

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  const handlePromptTest = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const result = await client.generations.SentenceCompletion({
        input: prompt,
      });
      setResponse(result.data || "No response received");
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "endpoints", label: "API Endpoints" },
            { id: "testing", label: "AI Testing" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <OverviewTab />
        )}

        {/* API Endpoints Tab */}
        {activeTab === "endpoints" && (
          <APITab />
        )}

        {/* AI Testing Tab */}
        {activeTab === "testing" && (
          <AITestingTab/>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
