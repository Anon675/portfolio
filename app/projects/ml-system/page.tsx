import Section from '@/components/Section'

export default function FailureAwareMLSystemPage() {
  return (
    <Section title="Failure-Aware Multimodal ML System (OCR · Medical · Video)">
      <div className="mt-6 space-y-10">

        <p className="max-w-prose text-sm leading-relaxed">
          This project focuses on designing a failure-aware machine learning
          inference system that prioritizes reliability, uncertainty handling,
          and human oversight over blind trust in model predictions. The system
          operates across multiple domains—OCR, medical imaging, and video
          understanding—using a unified, production-style pipeline.
        </p>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Project Overview
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            In real-world deployments, machine learning models frequently produce
            high-confidence outputs that are unstable, inconsistent, or unsafe.
            This project addresses that gap by shifting the focus from raw model
            accuracy to system-level decision reliability. The core idea is to
            detect uncertainty and failure signals early and route risky cases to
            human review instead of silently accepting incorrect predictions.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            System Architecture
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>Unified inference pipeline shared across OCR, medical, and video domains</li>
            <li>Multi-run model inference to capture prediction instability</li>
            <li>Uncertainty estimation using confidence variance</li>
            <li>Prediction stability checks to detect model disagreement</li>
            <li>Domain-specific safety signals (text quality, image quality, frame sufficiency)</li>
            <li>Failure fusion logic combining uncertainty, stability, and domain rules</li>
            <li>Human-in-the-loop routing for unsafe or unreliable predictions</li>
            <li>Structured logging for auditability and debugging</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            My Role & Contributions
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>Designed the end-to-end failure-aware ML system architecture</li>
            <li>Implemented multi-run inference and uncertainty estimation logic</li>
            <li>Built prediction stability and disagreement detection mechanisms</li>
            <li>Developed domain-specific failure signals for OCR, medical, and video inputs</li>
            <li>Integrated human-in-the-loop decision routing with structured review queues</li>
            <li>Designed automated tests for routing correctness, failure detection, and audit logs</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Outcome & Key Learnings
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            The final system demonstrates that model confidence alone is not a
            reliable indicator of correctness. By introducing multi-run inference,
            uncertainty estimation, and prediction stability checks, the system
            significantly reduces unsafe auto-accept decisions. The project
            highlights the importance of treating machine learning as a
            decision-making system rather than a standalone prediction task,
            especially in high-risk domains such as medical imaging and long-form
            video understanding.
          </p>
        </div>

      </div>
    </Section>
  )
}
