import type { Metadata } from "next"
import Image from "next/image"
import { Card } from "@/app/components/ui/card"
import { formatDate } from "@/utils/date"

interface BlogPostParams {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  // This would typically fetch the blog post data from your API
  const post = {
    title: "Top 10 Road Trip Destinations for 2024",
    excerpt: "Discover the most exciting road trip destinations that you need to explore this year.",
  }

  return {
    title: `${post.title} | VehicleRent Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | VehicleRent Blog`,
      description: post.excerpt,
      images: ["/blog/road-trip.jpg"],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  // This would typically fetch the blog post data from your API
  const post = {
    title: "Top 10 Road Trip Destinations for 2024",
    content: `
      <p>Planning your next road trip? Here are our top picks for 2024...</p>
      <h2>1. Pacific Coast Highway, California</h2>
      <p>The iconic Pacific Coast Highway offers breathtaking views...</p>
      <!-- More content -->
    `,
    image: "/blog/road-trip.jpg",
    author: "Sarah Johnson",
    date: "2024-02-01",
    category: "Travel",
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <div className="relative h-[400px] w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-t-lg" />
        </div>
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-muted-foreground">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>
          </div>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Card>
    </div>
  )
}

