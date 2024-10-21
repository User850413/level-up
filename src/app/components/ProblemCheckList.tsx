import ProblemCheck from './ProblemCheck'

const PROBLEMS = [
  { id: 1, content: '첫 번째 문제', solved: false },
  { id: 2, content: '두 번째 문제', solved: false },
]

export default function ProblemCheckList() {
  return (
    <>
      <ul>
        {PROBLEMS.map((problem) => (
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
