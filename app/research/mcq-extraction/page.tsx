import Section from '@/components/Section'
import Image from 'next/image'

export default function MCQExtractionResearchPage() {
  return (
    <Section title="Why Full Automation Failed: An Empirical Study">

      <h2 className="text-lg font-medium mb-3">
        Abstract
      </h2>
      <p className="mb-10 max-w-4xl">
        This section documents an empirical investigation into the feasibility
        investigates the feasibility of extracting multiple-choice
        questions (MCQs) from classroom teaching videos using OCR-centric methods.
        Despite extensive system engineering, the approach exhibits a hard
        accuracy ceiling due to inherent visual and semantic ambiguity. The study
        documents both the pipeline and its failure modes.
      </p>

      <h2 className="text-lg font-medium mb-3">
        Problem Statement
      </h2>
      <p className="mb-10 max-w-4xl">
        Classroom board videos differ fundamentally from static documents.
        Content is written incrementally, erased, overwritten, and intermixed
        with explanations. Multiple languages and symbols coexist, and spoken
        context is not visually encoded.The initial objective was to design a
        fully automatic system; subsequent results motivated a deeper analysis of feasibility.
      </p>

      <h2 className="text-lg font-medium mb-3">
        Dataset
      </h2>
      <ul className="mb-10 list-disc pl-5 max-w-4xl space-y-2">
        <li>39+ annotated classroom videos</li>
        <li>Durations ranging from 30 minutes to 3 hours</li>
        <li>Handwritten and printed board text</li>
        <li>Partial ground truth via manual annotation</li>
        <li>Automatically generated candidate lines (1,000+ per video)</li>
      </ul>

      <h2 className="text-lg font-medium mb-3">
        Methods
      </h2>
      <ul className="mb-10 list-disc pl-5 max-w-4xl space-y-2">
        <li>Character-level OCR noise normalization</li>
        <li>Frequency-based temporal stabilization</li>
        <li>Weak supervision for noisy candidate labeling</li>
        <li>Logistic regression classifier trained on ~10k samples</li>
        <li>Similarity-based reconstruction and option confidence scoring</li>
      </ul>

      <h2 className="text-lg font-medium mb-3">
        Results
      </h2>
      <table className="mb-10 text-left border-collapse">
        <thead>
          <tr>
            <th className="pr-6 pb-2 font-medium">Metric</th>
            <th className="pb-2 font-medium">Observation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pr-6 py-1">OCR accuracy</td>
            <td>Acceptable at character level</td>
          </tr>
          <tr>
            <td className="pr-6 py-1">MCQ candidate recall</td>
            <td>High</td>
          </tr>
          <tr>
            <td className="pr-6 py-1">MCQ reconstruction accuracy</td>
            <td>~20–30%</td>
          </tr>
          <tr>
            <td className="pr-6 py-1">Primary failure mode</td>
            <td>Visual and semantic ambiguity</td>
          </tr>
        </tbody>
      </table>

      <Image
        src="/images/research/recall_vs_length.png"
        alt="Recall Vs Length"
        width={1200}
        height={700}
        className="rounded border mb-10"
      />

      <h2 className="text-lg font-medium mb-3">
        Failure Analysis
      </h2>
      <ul className="mb-10 list-disc pl-5 max-w-4xl space-y-2">
        <li>No single frame contains the full question</li>
        <li>Erased text remains semantically relevant</li>
        <li>Solutions overwrite question text</li>
        <li>Spoken context is not visually represented</li>
      </ul>

      <h2 className="text-lg font-medium mb-3">
        Conclusion
      </h2>
      <p className="mb-10 max-w-4xl">
        The study shows that automatic MCQ extraction from classroom board videos
        is appears to be information-limited rather than compute-limited in practice. Accuracy plateaus
        despite increased model complexity, indicating a fundamental constraint
        in the input modality.
      </p>

      <h2 className="text-lg font-medium mb-3">
        Lessons Learned
      </h2>
      <ul className="mb-10 list-disc pl-5 max-w-4xl space-y-2">
        <li>Some real-world problems are not solvable end-to-end automatically</li>
        <li>Weak supervision is powerful but bounded by input clarity</li>
        <li>Knowing when to stop optimizing is an engineering skill</li>
        <li>Honest failure analysis is more valuable than inflated metrics</li>
      </ul>

      <h2 className="text-lg font-medium mb-3">
        Future Directions
      </h2>
      <ul className="list-disc pl-5 max-w-4xl space-y-2">
        <li>Slide or PDF-based extraction with stable semantics</li>
        <li>Instructor-audio–guided segmentation</li>
        <li>Handwriting OCR fine-tuned per instructor</li>
        <li>Semi-automatic systems with minimal human feedback</li>
      </ul>

    </Section>
  )
}
