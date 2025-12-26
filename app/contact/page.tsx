import Section from '@/components/Section'

export default function ContactPage() {
  return (
    <Section title="Contact">
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-6
          text-sm
          sm:max-w-md
        "
      >
        {/* Email */}
        <div className="flex items-start gap-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="shrink-0 mt-0.5"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          <a
            href="mailto:amanshukla0704@gmail.com"
            className="break-all"
          >
            amanshukla0704@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0 mt-0.5"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.5 7H12v2.3h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.9V24h-5v-8.3c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V7z" />
          </svg>
          <a
            href="https://linkedin.com/in/aman-shukla-948414201"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all"
          >
            linkedin.com/in/aman-shukla-948414201
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0 mt-0.5"
          >
            <path d="M20.52 3.48A11.91 11.91 0 0 0 12.02 0C5.4 0 .04 5.37.04 11.99c0 2.12.55 4.2 1.6 6.04L0 24l6.16-1.6a11.96 11.96 0 0 0 5.86 1.49h.01c6.62 0 12-5.37 12-11.99a11.9 11.9 0 0 0-3.51-8.42zm-8.5 18.4a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.65.95.98-3.56-.24-.37a9.93 9.93 0 0 1-1.52-5.31c0-5.49 4.47-9.96 9.97-9.96a9.9 9.9 0 0 1 7.04 2.92 9.89 9.89 0 0 1 2.93 7.04c0 5.49-4.47 9.96-9.97 9.96zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
          <a
            href="https://wa.me/+917408563978"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        {/* Resume */}
        <div className="flex items-start gap-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="shrink-0 mt-0.5"
          >
            <path d="M12 3v12" />
            <path d="M8 11l4 4 4-4" />
            <path d="M4 21h16" />
          </svg>
          <a
            href="/Aman_Shukla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </Section>
  )
}
