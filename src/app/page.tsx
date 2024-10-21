import ProblemLabel from './components/ProblemLabel'
import PROBLEMS from './constants/problem'

export default function Home() {
  return (
    <>
      <div>풀어야 할 문제</div>
      <ul>
        {PROBLEMS.map((problem) => (
          <li key={problem.id}>
            <ProblemLabel tag={problem.tag} />
          </li>
        ))}
      </ul>
    </>
  )
}
