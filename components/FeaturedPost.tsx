import Link from "next/link"

export default function FeaturedPost() {
    return (
        <div className=" overflow-hidden">
            <div className=" flex flex-col gap-3">
                <h1 className=" font-bold text-4xl">The Fascinating World of Cats: Why We Love Them So Much</h1>
                <p className="text-gray-600 mb-4">
                    Cats have captured the hearts of humans for centuries, earning their place as one of the most beloved pets worldwide. Their mysterious behavior, playful antics, and undeniable charm make them fascinating companions. But what is it about cats that makes us so enamored with them? Let’s explore the captivating world of our feline friends.
                </p>
            </div>
            <div className="relative">
                <img src="/placeholder.svg?height=400&width=800" alt="" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                   
                </div>
            </div>
            <div>
                <Link href={''}>Read now</Link>
            </div>
        </div>
    )
}
