import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function SectionLabel({ children, light, className }: SectionLabelProps) {
  return (
    <span
      className={cn('eyebrow', light && 'eyebrow--light', className)}
    >
      — {children}
    </span>
  )
}
