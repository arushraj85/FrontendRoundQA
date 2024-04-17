import { useEffect, useState } from "react";

function FetchUser() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let d = await response.json();
      console.log(d);
      setData(d);
      setLoading(false);
    }
    getData();
  });

  return (
    <div className="App">
      {loading && <h1>Welcome to User Dashboard</h1>}
      {data.length > 0 && (
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
}

export default FetchUser;
