export type Problem = {
  id: number
  content: string
  solved: boolean
  tag: string
}

const PROBLEMS: Problem[] = [
  { id: 1, content: '첫 번째 문제', solved: false, tag: '첫 번째 리스트' },
  { id: 2, content: '두 번째 문제', solved: false, tag: '첫 번째 리스트' },
  { id: 3, content: '세 번째 문제', solved: false, tag: '두 번째 리스트' },
  { id: 4, content: '네 번째 문제', solved: false, tag: '두 번째 리스트' },
  { id: 5, content: '다섯 번째 문제', solved: false, tag: '세 번째 리스트' },
]

export default PROBLEMS
