import Section from '@/components/Section'

export default function ContactPage() {
  return (
    <Section title="Contact">
      <div className="mt-8 space-y-6 text-sm">

        {/* Email */}
        <div className="flex items-start gap-4">
          <svg
            className="mt-1 shrink-0"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>

          <a
            href="mailto:amanshukla0704@gmail.com"
            className="break-all underline"
          >
            amanshukla0704@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-4">
          <svg
            className="mt-1 shrink-0"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.5 7H12v2.3h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.9V24h-5v-8.3c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V7z" />
          </svg>

          <a
            href="https://linkedin.com/in/aman-shukla-948414201"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all underline"
          >
            linkedin.com/in/aman-shukla-948414201
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <svg
            className="mt-1 shrink-0"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.52 3.48A11.91 11.91 0 0 0 12.02 0C5.4 0 .04 5.37.04 11.99c0 2.12.55 4.2 1.6 6.04L0 24l6.16-1.6a11.96 11.96 0 0 0 5.86 1.49h.01c6.62 0 12-5.37 12-11.99a11.9 11.9 0 0 0-3.51-8.42zm-8.5 18.4a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.65.95.98-3.56-.24-.37a9.93 9.93 0 0 1-1.52-5.31c0-5.49 4.47-9.96 9.97-9.96a9.9 9.9 0 0 1 7.04 2.92 9.89 9.89 0 0 1 2.93 7.04c0 5.49-4.47 9.96-9.97 9.96z" />
          </svg>

          <a
            href="https://wa.me/+917408563978"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WhatsApp
          </a>
        </div>

        {/* Resume */}
        <div className="flex items-start gap-4">
          <svg
            className="mt-1 shrink-0"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 3v12" />
            <path d="M8 11l4 4 4-4" />
            <path d="M4 21h16" />
          </svg>

          <a
            href="/Aman_Shukla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Download Resume (PDF)
          </a>
        </div>

      </div>
    </Section>
  )
}
