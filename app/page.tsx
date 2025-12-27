import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="space-y-32">

      {/* Hero / About */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* Text */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Aman Shukla
          </h1>

          <p className="text-base leading-relaxed text-gray-300 max-w-2xl">
            Machine Learning practitioner with experience in applied ML systems,
            research-oriented experimentation, and real-world pipeline design.
            My work focuses on evaluation rigor, system reliability, and knowing
            where automation breaks down.
          </p>

          <p className="text-base leading-relaxed text-gray-300 max-w-2xl">
            I am an MCA graduate from Banaras Hindu University with a strong
            foundation in machine learning, deep learning, and data-driven
            application development. My work spans applied ML projects,
            independent research in computer vision, and collaborative
            development in production environments.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/profile/a.jpg"
            alt="Aman Shukla"
            width={260}
            height={260}
            className="rounded-full"
            priority
          />
        </div>
      </div>

    </section>
  )
}
