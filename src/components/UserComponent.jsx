import React from 'react';
import { useFetch } from '../hook/useCalcculate';

const Users = () => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/users');

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="container mx-auto py-8 flex flex-wrap ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data && data.map(user => (
          <div 
            key={user.id} 
            className="user-card bg-white shadow-lg hover:shadow-xl p-6 rounded-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
