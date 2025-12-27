import Section from '@/components/Section'
import Link from 'next/link'

export default function ResearchPage() {
  return (
    <Section title="Research">
      <div className="mt-6 space-y-10 max-w-prose">

        <div className="space-y-2">
          <h2 className="text-lg font-medium">
            Bone Fracture Detection from X-ray Images
          </h2>
          <p className="text-sm leading-relaxed">
            A comparative deep learning study on CNN architectures for
            fracture detection, with emphasis on reliability and evaluation.
          </p>
          <Link
            href="/research/bone-fracture"
            className="underline inline-block text-sm"
          >
            Read research →
          </Link>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">
            Why Full Automation Failed: An Empirical Study
          </h2>
          <p className="text-sm leading-relaxed">
            A case study analyzing why OCR-centric pipelines fail under
            classroom board video ambiguity.
          </p>
          <Link
            href="/research/mcq-extraction"
            className="underline inline-block text-sm"
          >
            Read case study →
          </Link>
        </div>

      </div>
    </Section>
  )
}
