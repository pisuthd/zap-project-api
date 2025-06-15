


const OverviewTab = () => {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Zap Project API</h2>
                <p className="text-lg text-gray-600 mb-6">
                    A powerful API for discovering, trading, and creating Zora content coins on Base blockchain with integrated AI services.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>AI-powered sentence completion using Claude 3.5 Sonnet</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Coin description generation for content creators</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Market analysis and content strategy tools</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Smart contract explanations for beginners</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["AWS Amplify", "Claude 3.5 Sonnet", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6">Integration</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Base MiniKit for wallet integration</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Zora Protocol SDK for content coins</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Farcaster MiniApp support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Quick Links</h4>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://zora-coin-zap.vercel.app/" className="text-blue-600 hover:text-blue-800 font-medium">Live Dapp</a>
                        <a href="https://warpcast.com/miniapps/36FzHji8AWjr/zoracoinzap" className="text-blue-600 hover:text-blue-800 font-medium">Farcaster</a>
                        <a href="https://youtu.be/nu55M73QGF" className="text-blue-600 hover:text-blue-800 font-medium">YouTube Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewTab