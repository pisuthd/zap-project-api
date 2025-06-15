

const API = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
                <p className="text-gray-600 mb-8">Comprehensive API documentation for all available AI services.</p>

                <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-8">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">POST</span>
                            <code className="text-lg font-mono text-gray-900">/api/generations/SentenceCompletion</code>
                        </div>
                        <p className="text-gray-600 mb-4">Complete sentences using Claude 3.5 Sonnet AI model</p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h5 className="font-medium text-gray-900 mb-2">Request Example</h5>
                                <pre className="bg-gray-50 border rounded-lg p-4 text-sm overflow-x-auto">
                                    <code>{`{
"input": "The future of blockchain technology is"
}`}</code>
                                </pre>
                            </div>
                            <div>
                                <h5 className="font-medium text-gray-900 mb-2">Response Example</h5>
                                <pre className="bg-gray-50 border rounded-lg p-4 text-sm overflow-x-auto">
                                    <code>{`{
"data": "The future of blockchain technology is incredibly promising...",
"status": "success"
}`}</code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900 mb-2">📚 Additional AI Services</h4>
                        <p className="text-sm text-blue-700">
                            This API includes additional AI services: CoinDescriptionGenerator, MarketAnalysis, ContentStrategy, and SmartContractExplainer.
                            Test them all in the AI Testing tab!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default API