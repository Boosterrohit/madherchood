import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { formatDate } from "@/utils/date"

export const metadata: Metadata = {
  title: "Blog | VehicleRent",
  description: "Latest news, tips, and updates from VehicleRent.",
  openGraph: {
    title: "Blog | VehicleRent",
    description: "Latest news, tips, and updates from VehicleRent.",
    images: ["/og-image.jpg"],
  },
}

// This would typically come from your CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Road Trip Destinations for 2024",
    excerpt: "Discover the most exciting road trip destinations that you need to explore this year.",
    image: "/blog/road-trip.jpg",
    author: "Sarah Johnson",
    date: "2024-02-01",
    category: "Travel",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Rental Car",
    excerpt: "A comprehensive guide to selecting the right rental car for your needs.",
    image: "/blog/rental-car.jpg",
    author: "Mike Thompson",
    date: "2024-01-28",
    category: "Tips",
  },
  // Add more blog posts...
]

export default function BlogPage() {
  return (
    <div className="container mx-auto pb-12 px-4 mt-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest news, travel tips, and insights from VehicleRent.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <CardTitle className="mb-2">{post.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>{formatDate(post.date)}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

