import { Problem } from '../constants/problem'
import ProblemCheck from './ProblemCheck'

interface ProblemCheckListProps {
  problemList: Problem[]
}

export default function ProblemCheckList({
  problemList,
}: ProblemCheckListProps) {
  return (
    <>
      <ul>
        {problemList.map((problem) => (
          <li key={problem.id}>
            <ProblemCheck
              id={problem.id}
              content={problem.content}
              solved={problem.solved}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
