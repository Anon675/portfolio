import Section from '@/components/Section'
import Link from 'next/link'

export default function ResearchPage() {
  return (
    <Section title="Research">

      <div className="space-y-10">

        <div>
          <h2 className="text-lg font-medium">
            Bone Fracture Detection from X-ray Images
          </h2>
          <p className="mt-2 max-w-3xl">
            A comparative deep learning study on CNN architectures for
            fracture detection, with emphasis on reliability and evaluation.
          </p>
          <Link href="/research/bone-fracture" className="underline mt-2 inline-block">
            Read research →
          </Link>
        </div>

        <div>
          <h2 className="text-lg font-medium">
            Limits of Automatic MCQ Reconstruction
          </h2>
          <p className="mt-2 max-w-3xl">
            A case study analyzing why OCR-centric pipelines fail under
            classroom board video ambiguity.
          </p>
          <Link href="/research/mcq-extraction" className="underline mt-2 inline-block">
            Read case study →
          </Link>
        </div>

      </div>

    </Section>
  )
}
