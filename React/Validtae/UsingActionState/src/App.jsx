import { useActionState } from 'react'
import './App.css'

function App() {

  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let pass = formData.get("Pass");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return { error: "Name Should not be greater than 5 Character" };
    }
    else if (!regex.test(pass)) {
      return { error: "Password Should Only contain Aplhabets and numbers" };
    }
    else {
      return { message: "Login Done" }
    }
  }

  const [data, action, pending] = useActionState(handleLogin)
  return (
    <>
      <h1>Validation Using useActionState in React</h1>
      {
        data?.message && <span style={{ color: "green" }}>{data?.message}</span>
      }
      {
        data?.error && <span style={{ color: "red" }}>{data?.error}</span>
      }
      <form action={action}>
        <label htmlFor="name">Name : </label>
        <input
          name='name'
          type="text"
          id="name"
          placeholder="Enter Name"
        />
        <br /><br />

        <label htmlFor="Pass">Password : </label>
        <input
          name='Pass'
          type="text"
          id="Pass"
          placeholder="Enter Password"
        />
        <br /><br />

        <button >Submit</button>
      </form>

    </>
  )
}

export default App
