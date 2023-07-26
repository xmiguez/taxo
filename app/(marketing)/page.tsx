export default async function IndexPage() {
  return (
    <>
      <section className=" pt-48">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            My Personal Blog
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Todo lo que buscas en un solo lugar.
          </p>
        </div>
      </section>
    </>
  )
}
