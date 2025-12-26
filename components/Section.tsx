export default function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-20">
      <h1 className="mb-6 text-2xl font-semibold">
        {title}
      </h1>
      <div className="text-base leading-relaxed max-w-4xl">
        {children}
      </div>
    </section>
  )
}
