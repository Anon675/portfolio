import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-semibold">Aman Shukla</h1>
          <p className="leading-relaxed text-gray-300">
            Machine Learning practitioner with experience in applied ML systems,
            research-oriented experimentation, and real-world pipeline design.
            My work focuses on evaluation rigor, system reliability, and knowing
            where automation breaks down.
          </p>
        </div>

        <Image
          src="/images/profile/aman.jpg"
          alt="Aman Shukla"
          width={240}
          height={240}
          className="rounded-full mx-auto"
        />
      </div>
    </div>
  )
}
