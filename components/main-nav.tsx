"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { Icons } from "@/components/icons"

export function MainNav({ items, children }) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className=" items-center space-x-2 md:flex">
        <Icons.logo />
      </Link>

      <nav className="gap-6 md:flex">
        <Link
          key=""
          href="/blog"
          className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
        >
          Articulos
        </Link>
      </nav>
    </div>
  )
}
