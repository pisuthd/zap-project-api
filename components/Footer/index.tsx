

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-600 text-sm">
                        © 2025 Zap Project
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-600">
                        <a href="https://docs.base.org/base-minikit/overview" className="hover:text-gray-900">Base MiniKit</a>
                        <a href="https://zora.co" className="hover:text-gray-900">Zora Protocol</a>
                        <a href="https://www.farcaster.xyz/" className="hover:text-gray-900">Farcaster</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer