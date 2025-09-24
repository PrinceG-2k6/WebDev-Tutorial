import { useState, useId } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  return (
    <div>
      <UserForm />
      <hr />
      <UserForm2 />
    </div>
  );
}

function UserForm() {
  const nameId = useId();
  const passwordId = useId();
  const termsId = useId();
  const skillsId = useId();

  return (
    <form>
      <label htmlFor={nameId}>Name :</label>
      <input type="text" id={nameId} name="name" /><br /><br />

      <label htmlFor={passwordId}>Password :</label>
      <input type="password" id={passwordId} name="password" /><br /><br />

      <label htmlFor={skillsId}>Skills :</label>
      <input type="text" id={skillsId} name="skills" /><br /><br />

      <input type="checkbox" id={termsId} name="terms" />
      <label htmlFor={termsId}>Terms and Conditions</label>
    </form>
  );
}

  function UserForm2() {
  const user= useId();

  return (
    <form>
      <label htmlFor={user+"name"}>Name :</label>
      <input type="text" id={user+"name"} name="name" /><br /><br />

      <label htmlFor={user+"password"}>Password :</label>
      <input type="password" id={user+"password"} name="password" /><br /><br />

      <label htmlFor={user+"Skills"}>Skills :</label>
      <input type="text" id={user+"skills"} name="skills" /><br /><br />

      <input type="checkbox" id={user+"check"} name="terms" />
      <label htmlFor={user+"check"}>Terms and Conditions</label>
    </form>
  );

}
