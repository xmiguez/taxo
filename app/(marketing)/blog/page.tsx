import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container max-w-4xl pt-4 pb-16">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Articulos
          </h1>
          <p className="text-xl text-muted-foreground">
            Coleccion de articulos utiles para ....
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">Ver articulo</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>Sin articulos publicados.</p>
      )}
    </div>
  )
}