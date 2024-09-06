import React, { useState, useEffect } from "react";

const Abaut = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setUsers(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Users</h1>
      <div className="gap-8 flex flex-wrap">
        {users.map(user => (
          <article
            key={user.id}
            role="article"
            className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-full sm:w-1/2 lg:w-1/3"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
            <p className="text-gray-400">{user.address.street}, {user.address.city}</p>
          </article>
        ))}
      </div>
    </div>
  );
  
};

export default Abaut;
