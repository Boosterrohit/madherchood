import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { formatDate } from "@/utils/date"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  category: string
}

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
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
  )
}

