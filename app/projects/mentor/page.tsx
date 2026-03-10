import Section from '@/components/Section'

export default function MathMentorPage() {
  return (
    <Section title="Math Mentor – AI-Powered Mathematics Learning Assistant">
      <div className="mt-6 space-y-10">

        <p className="max-w-prose text-sm leading-relaxed">
          Math Mentor is an AI-powered learning assistant designed to help
          students understand mathematics concepts through guided explanations,
          step-by-step solutions, and interactive problem solving. The system
          focuses on building conceptual clarity rather than simply giving final
          answers, making it useful for exam preparation and self-learning.
        </p>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Project Overview
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            Many students struggle with mathematics because traditional learning
            methods often focus on memorization instead of understanding. Math
            Mentor addresses this problem by providing structured explanations,
            guided problem solving, and instant feedback. The system allows
            students to input mathematical questions and receive clear
            step-by-step reasoning that explains how the solution is derived.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            System Architecture
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>Interactive question input system for math problems</li>
            <li>AI-powered reasoning engine for step-by-step explanations</li>
            <li>Support for algebra, probability, calculus, and linear algebra basics</li>
            <li>Structured solution generation designed for conceptual clarity</li>
            <li>Difficulty control to simulate exam-level questions</li>
            <li>Real-time feedback to help students identify mistakes</li>
            <li>Modular design allowing expansion to additional topics</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            My Role & Contributions
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>Designed the overall system structure for an AI-based math learning assistant</li>
            <li>Implemented problem generation and structured solution explanation logic</li>
            <li>Developed topic-wise learning modules covering core mathematics concepts</li>
            <li>Built an interface for students to practice and review solutions interactively</li>
            <li>Structured explanations to focus on conceptual understanding rather than memorization</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Outcome & Key Learnings
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            Math Mentor demonstrates how AI can be used to support personalized
            learning by providing clear explanations and guided practice.
            Instead of replacing traditional education, the system acts as a
            supplementary mentor that helps students understand difficult
            concepts at their own pace. The project highlights the potential of
            AI-assisted learning systems to improve accessibility and learning
            efficiency for students preparing for competitive exams and
            academic assessments.
          </p>
        </div>

      </div>
    </Section>
  )
}