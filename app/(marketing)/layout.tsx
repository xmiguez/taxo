import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex flex-col">
      <header className="px-7 lg:px-32 z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <ModeToggle />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
