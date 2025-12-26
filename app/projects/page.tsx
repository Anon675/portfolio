import Section from '@/components/Section'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <Section title="Projects">

      <div className="space-y-10">

        <div>
          <h2 className="text-lg font-medium">Real-Time MERN Chat Application</h2>
          <p className="mt-2 max-w-3xl">
            A full-stack real-time chat application with authentication,
            WebSocket-based messaging, and scalable backend design.
          </p>
          <Link href="/projects/mern-chat" className="underline mt-2 inline-block">
            View project →
          </Link>
        </div>

        <div>
          <h2 className="text-lg font-medium">
            Multimodal MCQ Extraction Pipeline
          </h2>
          <p className="mt-2 max-w-3xl">
            An ML pipeline for extracting structured MCQs from classroom
            teaching videos under real-world noise conditions.
          </p>
          <Link href="/projects/mcq-extraction" className="underline mt-2 inline-block">
            View project →
          </Link>
        </div>

      </div>

    </Section>
  )
}
