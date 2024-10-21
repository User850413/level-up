'use client'

import { useState } from 'react'

interface ProblemCheckProps {
  id: number
  content: string
  solved: boolean
}

export default function ProblemCheck({
  id,
  content,
  solved,
}: ProblemCheckProps) {
  const [problemSolved, setProblemSolved] = useState(solved)

  const labelId = `P${id}`

  return (
    <>
      <input
        type="checkbox"
        id={labelId}
        checked={problemSolved}
        onChange={() => setProblemSolved((prev) => !prev)}
      />
      <label htmlFor={labelId}>{content}</label>
    </>
  )
}
