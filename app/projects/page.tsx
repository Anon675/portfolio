import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <section className="space-y-12 max-w-prose">

      <h1 className="text-3xl font-semibold">
        Projects
      </h1>

      <div className="space-y-8">

       <div className="space-y-2">
  <h2 className="text-lg font-medium">
    Failure Aware Multimodal ML System
  </h2>

  <p className="text-sm leading-relaxed text-gray-300">
    Multimodal ML system that evaluates uncertainty.
  </p>

  <Link
    href="/projects/ml-system"
    className="underline inline-block text-sm"
  >
    View project →
  </Link>
</div>


       <div className="space-y-2">
  <h2 className="text-lg font-medium">
    Multimodal MCQ Extraction Pipeline
  </h2>

  <p className="text-sm leading-relaxed text-gray-300">
    OCR-centric ML pipeline for extracting MCQs from classroom videos.
  </p>

  <Link
    href="/projects/mcq-extraction"
    className="underline inline-block text-sm"
  >
    View project →
  </Link>
</div>

        
        <div className="space-y-2">
         <h2 className="text-lg font-medium">
                Real-Time MERN Chat Application
         </h2>

         <p className="text-sm leading-relaxed text-gray-300">
           Scalable chat system with authentication and real-time messaging.
           </p>

           <Link
              href="/projects/mern-chat"
              className="underline inline-block text-sm"
            >
               View project →
                </Link>
        </div>


      </div>

    </section>
  )
}
