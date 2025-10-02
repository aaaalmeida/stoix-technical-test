import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState<string>("")

  useEffect(() => {
    fetch("/api/hello")
      .then(res => {
        console.log(res)
        return res.json()})
      .then(data => {
        // console.log(data)
        setMsg(data.message)
      })
      .catch(e => console.log(e))

  }, [])

  return (
    <>
      <h1>DEU CERTO</h1>
      <h1>{msg ?? "vazio"}</h1>
    </>
  )
}

export default App
