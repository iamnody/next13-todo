export default async function fetchTodos() {
  const res = await fetch(`http://10.0.0.107:3501/todos`)
  const todos: Todo[] = await res.json()
  return todos
}
