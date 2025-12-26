import Section from '@/components/Section'
import Image from 'next/image'
import { about } from '@/content/about'

export default function Home() {
  return (
    <Section title="About">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* About Text */}
        <div className="md:col-span-2">
          <p className="text-base leading-relaxed max-w-3xl">
            {about}
          </p>
        </div>

        {/* Profile Image */}
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <Image
            src="/images/profile/aman-shukla.jpg"
            alt="Aman Shukla"
            width={360}
            height={360}
            className="rounded-full border object-cover"
          />
        </div>

      </div>
    </Section>
  )
}
