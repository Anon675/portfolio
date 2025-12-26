import Image from "next/image"

export default function BoneFractureResearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">
        Bone Fracture Detection from X-ray Images
      </h1>

      {/* Intro */}
      <p className="text-base leading-relaxed mb-10 text-gray-300">
        This research project was developed collaboratively as a deep learning–based
        fracture detection system using X-ray images. The focus was not on producing
        a single high-accuracy model, but on evaluating reliability, failure modes,
        and real-world medical constraints.
      </p>

      {/* Problem Statement */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Problem Statement</h2>
        <p className="leading-relaxed text-gray-300">
          Detecting bone fractures from X-rays is challenging due to subtle fracture
          patterns, imaging noise, and the high cost of false negatives in medical
          decision support systems. The goal was to compare CNN architectures fairly
          and determine which approaches are dependable in practice.
        </p>
      </section>

      {/* Role */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">My Role & Contributions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Designed a controlled training and evaluation pipeline</li>
          <li>Implemented custom CNN and transfer-learning models</li>
          <li>Handled preprocessing, augmentation, and metric selection</li>
          <li>Analyzed false positives vs false negatives</li>
          <li>Collaborated on result interpretation and error analysis</li>
        </ul>
      </section>

      {/* Technical Approach */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Technical Approach</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Balanced dataset (fractured vs non-fractured)</li>
          <li>Image normalization and augmentation</li>
          <li>Custom CNN baseline</li>
          <li>Transfer learning using ResNet and VGG variants</li>
          <li>Identical training conditions for fair comparison</li>
        </ul>
      </section>

      {/* Image Section */}
      <section className="mb-14">
        <h2 className="text-xl font-medium mb-4">Evaluation & Failure Analysis</h2>

        <Image
          src="/images/research/confusion-matrix-comparison.png"
          alt="Confusion matrix comparison showing failure modes"
          width={1200}
          height={700}
          className="rounded border mb-10"
        />

        <p className="leading-relaxed text-gray-300">
          Evaluation emphasized precision, recall, F1-score, and confusion matrices
          rather than accuracy alone. This revealed that some architectures with strong
          headline metrics exhibited poor real-world reliability due to false-negative
          behavior, which is unacceptable in medical contexts.
        </p>
      </section>

      {/* Outcomes */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Key Outcomes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Transfer learning models consistently outperformed training from scratch</li>
          <li>High accuracy did not always imply dependable predictions</li>
          <li>Simpler architectures performed competitively when tuned correctly</li>
          <li>Evaluation design proved more important than model complexity</li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Challenges Faced</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Hairline and low-contrast fracture detection</li>
          <li>Preventing overfitting with limited medical data</li>
          <li>Avoiding misleading “perfect accuracy” conclusions</li>
          <li>Balancing sensitivity and specificity</li>
        </ul>
      </section>

      {/* Interview Relevance */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">What This Demonstrates</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Strong understanding of CNNs and transfer learning</li>
          <li>Ability to design fair ML experiments</li>
          <li>Awareness of medical AI risks and constraints</li>
          <li>Experience in collaborative ML research</li>
        </ul>
      </section>

      {/* Future Work */}
      <section>
        <h2 className="text-xl font-medium mb-4">Future Improvements</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Fracture localization via detection or segmentation</li>
          <li>Explainability using Grad-CAM</li>
          <li>Validation on multi-source clinical datasets</li>
        </ul>
      </section>

    </main>
  )
}
