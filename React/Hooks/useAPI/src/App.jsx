import React, { Suspense, use } from "react";

const fetchUsers = () =>
  fetch("http://localhost:3000/users").then((res) => res.json());

const App = () => {
  return (
    <div>
      <h1>Use API in React JS</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users />
      </Suspense>
    </div>
  );
};

export default App;

const Users = () => {
  // use() works with a promise (experimental React feature)
  const userData = use(fetchUsers());

  return (
    <>
      <h2>User list</h2>
      {userData.users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </>
  );
};
