import Section from '@/components/Section'

export default function MCQExtractionProjectPage() {
  return (
    <Section title="Multimodal MCQ Extraction Pipeline from Classroom Videos">

      <p className="mb-8 max-w-4xl">
        This project involved building an end-to-end machine learning pipeline
        to extract structured multiple-choice questions (MCQs) from long
        classroom teaching videos. The system was designed to operate under
        real-world noise such as handwritten boards, erasing, camera motion,
        and mixed Hindi–English text.
      </p>

      <h2 className="text-lg font-medium mb-3">
        Project Overview
      </h2>
      <p className="mb-8 max-w-4xl">
        Unlike static documents, classroom videos contain information that
        appears gradually, overlaps with solution steps, and often never exists
        cleanly in a single frame. The goal of this project was to design a
        robust ML pipeline capable of handling these constraints while
        remaining fully automatic.
      </p>

      <h2 className="text-lg font-medium mb-3">
        System Architecture
      </h2>
      <ul className="mb-10 list-disc pl-5 max-w-4xl space-y-2">
        <li>Frame sampling from long-duration lecture videos</li>
        <li>OCR with Hindi–English character normalization</li>
        <li>Temporal aggregation of repeated textual fragments</li>
        <li>MCQ candidate line generation using frequency stabilization</li>
        <li>Weakly supervised dataset construction</li>
        <li>Binary classification for MCQ line filtering</li>
        <li>Rule-based reconstruction and PDF generation</li>
      </ul>

      <h2 className="text-lg font-medium mb-3">
        My Role & Contributions
      </h2>
      <ul className="mb-10 list-disc pl-5 max-w-4xl space-y-2">
        <li>Designed the end-to-end ML pipeline architecture</li>
        <li>Implemented OCR normalization and temporal stabilization logic</li>
        <li>Built weak supervision strategies for noisy candidate labeling</li>
        <li>Trained and evaluated classifiers for MCQ filtering</li>
        <li>Performed system-level debugging and reliability analysis</li>
      </ul>

      <h2 className="text-lg font-medium mb-3">
        Outcome
      </h2>
      <p className="max-w-4xl">
        The pipeline achieved high recall in generating MCQ candidates, but
        end-to-end reconstruction accuracy consistently plateaued around
        20–30%. This behavior prompted deeper investigation rather than
        further blind optimization.
      </p>

    </Section>
  )
}
