import React, { ReactElement } from 'react'

function BoxChild({ children, className }: {
  children?: ReactElement | ReactElement[], className?: string
}) {
  return (
    <div className={`h-max  sm:h-[500px] px-4 sm:px-0 sm:w-1/2  ${className}`}>{children}</div>
  )
}

export default BoxChild