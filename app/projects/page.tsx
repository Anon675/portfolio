import Section from '@/components/Section'

export default function MCQExtractionProjectPage() {
  return (
    <Section title="Multimodal MCQ Extraction Pipeline from Classroom Videos">
      <div className="mt-6 space-y-10">

        <p className="max-w-prose text-sm leading-relaxed">
          This project involved building an end-to-end machine learning pipeline
          to extract structured multiple-choice questions (MCQs) from long
          classroom teaching videos. The system was designed to operate under
          real-world noise such as handwritten boards, erasing, camera motion,
          and mixed Hindi–English text.
        </p>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Project Overview
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            Unlike static documents, classroom videos contain information that
            appears gradually, overlaps with solution steps, and often never exists
            cleanly in a single frame. The goal of this project was to design a
            robust ML pipeline capable of handling these constraints while
            remaining fully automatic.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            System Architecture
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>Frame sampling from long-duration lecture videos</li>
            <li>OCR with Hindi–English character normalization</li>
            <li>Temporal aggregation of repeated textual fragments</li>
            <li>MCQ candidate line generation using frequency stabilization</li>
            <li>Weakly supervised dataset construction</li>
            <li>Binary classification for MCQ line filtering</li>
            <li>Rule-based reconstruction and PDF generation</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            My Role & Contributions
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>Designed the end-to-end ML pipeline architecture</li>
            <li>Implemented OCR normalization and temporal stabilization logic</li>
            <li>Built weak supervision strategies for noisy candidate labeling</li>
            <li>Trained and evaluated classifiers for MCQ filtering</li>
            <li>Performed system-level debugging and reliability analysis</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Outcome
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            The pipeline achieved high recall in generating MCQ candidates, but
            end-to-end reconstruction accuracy consistently plateaued around
            20–30%. This behavior prompted deeper investigation rather than
            further blind optimization.
          </p>
        </div>

      </div>
    </Section>
  )
}
