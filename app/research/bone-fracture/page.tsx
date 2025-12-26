import Image from 'next/image'

export default function BoneFractureResearchPage() {
  return (
    <section className="space-y-12 max-w-prose">

      <h1 className="text-3xl font-semibold">
        Bone Fracture Detection from X-ray Images
      </h1>

      <p className="text-sm leading-relaxed text-gray-300">
        This research project was developed collaboratively as a deep learning–based
        fracture detection system using X-ray images. The focus was not on building a
        single high-accuracy model, but on systematic model comparison, evaluation
        rigor, and understanding reliability constraints in medical AI systems.
      </p>

      {/* Problem Statement */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Problem Statement
        </h2>
        <p className="text-sm leading-relaxed text-gray-300">
          Detecting bone fractures from X-rays is challenging due to subtle fracture
          patterns, imaging noise, variability across patients, and the high cost of
          false negatives in clinical settings. Many models achieve strong accuracy
          metrics while still failing under real-world medical constraints.
        </p>
        <p className="text-sm leading-relaxed text-gray-300">
          The objective of this work was to evaluate whether different CNN
          architectures are genuinely dependable for medical decision support rather
          than simply numerically impressive.
        </p>
      </section>

      {/* Role */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          My Role & Contributions
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-gray-300">
          <li>Designed a controlled training and evaluation pipeline to ensure fair model comparison</li>
          <li>Implemented and fine-tuned multiple CNN architectures</li>
          <li>Worked on data preprocessing, augmentation strategy, and metric selection</li>
          <li>Analyzed model behavior beyond accuracy, with focus on false negatives</li>
          <li>Collaborated on result interpretation and systematic error analysis</li>
        </ul>
      </section>

      {/* Technical Approach */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Technical Approach
        </h2>
        <p className="text-sm leading-relaxed text-gray-300">
          A balanced dataset of fractured and non-fractured X-ray images was used to
          avoid skewed results. Image preprocessing and augmentation were applied to
          simulate real-world variability commonly seen in clinical imaging.
        </p>
        <p className="text-sm leading-relaxed text-gray-300">
          Multiple architectures were evaluated under identical training conditions,
          including a custom CNN baseline and several transfer-learning models such as
          ResNet, Inception, and EfficientNet variants. This ensured that performance
          differences reflected architectural behavior rather than training bias.
        </p>
      </section>

      {/* Evaluation Philosophy */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Evaluation Philosophy
        </h2>
        <p className="text-sm leading-relaxed text-gray-300">
          Instead of relying solely on accuracy, evaluation emphasized precision,
          recall, F1-score, confusion matrices, and especially false-negative behavior.
          In medical AI systems, a model that misses fractures can be far more dangerous
          than one that produces false positives.
        </p>
      </section>

      {/* Image */}
      <div className="w-full overflow-hidden">
        <Image
          src="/images/research/confusion-matrix-comparison.png"
          alt="Confusion matrix comparison showing failure modes"
          width={1200}
          height={700}
          className="w-full h-auto rounded border"
        />
      </div>

      {/* Outcomes */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Key Outcomes
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-gray-300">
          <li>Transfer learning models consistently outperformed models trained from scratch</li>
          <li>Some architectures showed strong accuracy but poor real-world reliability</li>
          <li>Simpler architectures, when tuned correctly, approached deeper models in performance</li>
          <li>Model selection proved more critical than raw model complexity</li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Challenges Faced
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-gray-300">
          <li>Detecting hairline and low-contrast fractures</li>
          <li>Preventing overfitting despite high model capacity</li>
          <li>Avoiding misleading conclusions based solely on accuracy</li>
          <li>Balancing sensitivity and specificity for medical relevance</li>
        </ul>
      </section>

      {/* What This Demonstrates */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          What This Project Demonstrates
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-gray-300">
          <li>Strong understanding of CNNs and transfer learning</li>
          <li>Ability to design fair and reproducible ML experiments</li>
          <li>Awareness of domain-specific risks in medical AI</li>
          <li>Experience working in collaborative research-driven ML projects</li>
        </ul>
      </section>

      {/* Future Work */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Future Improvements
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-gray-300">
          <li>Fracture localization using object detection or segmentation</li>
          <li>Integration of explainability tools such as Grad-CAM</li>
          <li>Validation on multi-source clinical datasets</li>
        </ul>
      </section>

    </section>
  )
}
