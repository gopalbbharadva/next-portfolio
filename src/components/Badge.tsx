import React from 'react'
import { twMerge } from 'tailwind-merge'

type BadgePropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string
}

export const Badge = ({ content, className }: BadgePropsType) => {
  const finalClassName = twMerge(`px-4 p-2 bg-white text-black ${className}`)
  return <span className={finalClassName}>{content}</span>
}
