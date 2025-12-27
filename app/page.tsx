import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Aman Shukla
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Machine Learning practitioner with experience in applied ML systems,
          research-oriented experimentation, and real-world pipeline design.
          My work focuses on evaluation rigor, system reliability, and knowing
          where automation breaks down.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am an MCA graduate from Banaras Hindu University with a strong
          foundation in machine learning, deep learning, and data-driven
          application development. My work spans applied ML projects,
          independent research in computer vision, and collaborative
          development in production environments.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/profile/a.jpg"
          alt="Aman Shukla"
          width={260}
          height={260}
          className="rounded-full"
          priority
        />
      </div>
    </section>
  )
}
