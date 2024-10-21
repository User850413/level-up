import PROBLEMS from '../constants/problem'
import ProblemCheckList from './ProblemCheckList'

interface ProblemLabelProps {
  tag: string
}

export default function ProblemLabel({ tag }: ProblemLabelProps) {
  const problemsList = PROBLEMS.filter((problem) => problem.tag === tag)

  return (
    <>
      <h2>{tag}</h2>
      <ProblemCheckList problemList={problemsList} />
    </>
  )
}
