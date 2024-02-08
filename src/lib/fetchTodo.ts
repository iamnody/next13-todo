export default async function fetchTodo(id: string) {
  const res = await fetch(`http://10.0.0.107:3501/todos/${id}`)

  if (!res.ok) return undefined

  const todo: Todo = await res.json()

  return todo
}
