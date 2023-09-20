import { useState } from "react";

export function MainPage() {
  const [users, setUsers] = useState(["Anna", "John", "Joe"]);
  function addUsers() {
    setUsers([...users, "Frank", "Mila"]);
  }
  function reset() {
    setUsers([]);
  }
  return (
    <>
      <button onClick={addUsers}>Get Users</button>
      <button onClick={reset}>Reset</button>
      {users.length > 0 ? (
        users.map((user, index) => <li key={index}>{user}</li>)
      ) : (
        <h3>Список пуст</h3>
      )}
    </>
  );
}
