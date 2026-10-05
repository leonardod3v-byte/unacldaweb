import type { SVGProps } from 'react'
import type { SimpleIcon } from 'simple-icons'

interface BrandIconProps extends SVGProps<SVGSVGElement> {
  icon: SimpleIcon
  size?: number
}

export function BrandIcon({ icon, size = 20, className, ...props }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}