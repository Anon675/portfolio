import Image from 'next/image'

export default function BoneFractureResearchPage() {
  return (
    <section className="space-y-12 max-w-prose">

      <h1 className="text-3xl font-semibold">
        Bone Fracture Detection from X-ray Images
      </h1>

      <p className="text-sm leading-relaxed text-gray-300">
        This research project was developed collaboratively as a deep learning–based
        fracture detection system using X-ray images. The emphasis was on evaluation
        rigor, failure analysis, and real-world medical constraints rather than
        headline accuracy.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Problem Statement
        </h2>
        <p className="text-sm leading-relaxed text-gray-300">
          Detecting fractures from X-rays is challenging due to subtle patterns,
          imaging noise, and the high cost of false negatives in medical settings.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Evaluation & Failure Analysis
        </h2>

        <div className="w-full overflow-hidden">
          <Image
            src="/images/research/confusion-matrix-comparison.png"
            alt="Confusion matrix comparison showing failure modes"
            width={1200}
            height={700}
            className="w-full h-auto rounded border"
          />
        </div>

        <p className="text-sm leading-relaxed text-gray-300">
          Confusion-matrix analysis revealed that some models with strong accuracy
          suffered from unacceptable false-negative behavior, making them unreliable
          for clinical use.
        </p>
      </section>

    </section>
  )
}
