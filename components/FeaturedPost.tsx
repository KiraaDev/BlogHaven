import Link from "next/link"

export default function FeaturedPost() {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <img src="/placeholder.svg?height=400&width=800" alt="Featured post" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white text-center px-4">
                        Featured Post: The Future of Web Development
                    </h2>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-600 mb-4">
                    Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new
                    frameworks, stay ahead of the curve.
                </p>
                <Link
                    href="/posts/featured"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}
