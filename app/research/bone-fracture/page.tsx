export default function BoneFractureResearchPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      
      <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>
        Bone Fracture Detection from X-ray Images
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "2.5rem", opacity: 0.9 }}>
        This research project explores the reliability limits of deep learning models
        for automated bone fracture detection using X-ray images. The work focuses
        on evaluation rigor, failure analysis, and real-world medical constraints
        rather than headline accuracy numbers.
      </p>

      {/* Problem Statement */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Problem Statement</h2>
        <p>
          Detecting fractures in X-ray images is challenging due to subtle fracture
          patterns, imaging noise, and high clinical cost of false negatives.
          The goal was to fairly compare multiple CNN architectures and identify
          which approaches are dependable for medical decision support.
        </p>
      </section>

      {/* Role */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>My Role & Contributions</h2>
        <ul>
          <li>Designed a controlled training and evaluation pipeline</li>
          <li>Implemented and fine-tuned multiple CNN architectures</li>
          <li>Worked on data preprocessing and augmentation strategies</li>
          <li>Analyzed model behavior beyond raw accuracy</li>
          <li>Collaborated on error analysis and result interpretation</li>
        </ul>
      </section>

      {/* Technical Approach */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Technical Approach</h2>
        <ul>
          <li>Balanced X-ray dataset (fractured vs non-fractured)</li>
          <li>Image preprocessing and augmentation</li>
          <li>Custom CNN baseline model</li>
          <li>Transfer learning with ResNet, Inception, EfficientNet</li>
          <li>Identical training conditions for fair comparison</li>
        </ul>
      </section>

      {/* Evaluation */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Evaluation Philosophy</h2>
        <p>
          Instead of relying only on accuracy, evaluation focused on precision,
          recall, F1-score, confusion matrices, and false-negative behavior,
          which is critical in healthcare applications.
        </p>
      </section>

      {/* Outcomes */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Key Outcomes</h2>
        <ul>
          <li>Transfer learning consistently outperformed models trained from scratch</li>
          <li>Some high-accuracy models showed poor real-world reliability</li>
          <li>Simpler architectures performed competitively when tuned correctly</li>
          <li>Model selection mattered more than raw complexity</li>
        </ul>
      </section>

      {/* Challenges */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Challenges Faced</h2>
        <ul>
          <li>Detecting hairline and low-contrast fractures</li>
          <li>Preventing overfitting</li>
          <li>Avoiding misleading “perfect accuracy” conclusions</li>
          <li>Balancing sensitivity and specificity</li>
        </ul>
      </section>

      {/* Interview Relevance */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>What This Demonstrates</h2>
        <ul>
          <li>Strong understanding of CNNs and transfer learning</li>
          <li>Ability to design fair ML experiments</li>
          <li>Awareness of medical AI risks</li>
          <li>Experience with collaborative ML research</li>
        </ul>
      </section>

      {/* Future */}
      <section>
        <h2>Future Improvements</h2>
        <ul>
          <li>Fracture localization (detection or segmentation)</li>
          <li>Explainability using Grad-CAM</li>
          <li>Validation on multi-source clinical datasets</li>
        </ul>
      </section>

    </main>
  )
}
