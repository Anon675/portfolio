type ProjectCardProps = {
  title: string
  description: string
}

export default function ProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="space-y-2 max-w-prose">
      <h3 className="font-medium">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}
