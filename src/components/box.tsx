import { ReactNode } from 'react'

interface BoxComponentProps {
  children?: ReactNode
  className?: string
}

export function BoxComponent({ children, className }: BoxComponentProps) {
  return (
    <>
      <div className={`${className} shadow-lg`}>{children}</div>
    </>
  )
}
