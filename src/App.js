import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearchData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const setSearch = (event) => {
    setSearchData(event.target.value);
    const filterData = users.filter((item) => {
      return (
        item.name.includes(event.target.value) ||
        item.email.includes(event.target.value) ||
        item.username.includes(event.target.value)
      );
    });
    console.log(filterData);
    setUsers(filterData);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={search}
        name="search"
        onChange={(event) => setSearch(event)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
