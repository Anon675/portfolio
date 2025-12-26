export default function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-16">
      <h1 className="mb-6 text-2xl font-semibold">
        {title}
      </h1>
      <div className="max-w-prose text-base leading-relaxed">
        {children}
      </div>
    </section>
  )
}
