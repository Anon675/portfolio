import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <section className="space-y-12 max-w-prose">

      <h1 className="text-3xl font-semibold">
        Projects
      </h1>

      <div className="space-y-8">

        <div className="space-y-2">
          <Link
            href="/projects/mcq-extraction"
            className="text-lg font-medium inline-block"
          >
            Multimodal MCQ Extraction Pipeline
          </Link>
          <p className="text-sm leading-relaxed text-gray-300">
            OCR-centric ML pipeline for extracting MCQs from classroom videos.
          </p>
        </div>

        <div className="space-y-2">
          <Link
            href="/projects/ml-system"
            className="text-lg font-medium inline-block"
          >
            Failure Aware Multimodal ML System
          </Link>
          <p className="text-sm leading-relaxed text-gray-300">
            Multimodal ML system that evaluates uncertainty.
          </p>
        </div>

        <div className="space-y-2">
          <Link
            href="/projects/mern-chat"
            className="text-lg font-medium inline-block"
          >
            Real-Time MERN Chat Application
          </Link>
          <p className="text-sm leading-relaxed text-gray-300">
            Scalable chat system with authentication and real-time messaging.
          </p>
        </div>

      </div>

    </section>
  )
}
