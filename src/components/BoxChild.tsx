import React, { ReactElement } from 'react'

function BoxChild({ children, className }: {
  children?: ReactElement | ReactElement[], className?: string
}) {
  return (
    <div className={`h-[500px] w-1/2  ${className}`}>{children}</div>
  )
}

export default BoxChild