import React from "react";

export default function UserCards({ users }) {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center rounded-lg bg-gray-100/50 py-4 md:p-4 hover:shadow-lg hover:border hover:border-blue-500 transition-shadow"
          >
            <div className="flex items-center gap-8">
              <img
                src={user.avatar}
                alt={user.name}
                className="mb-4 h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h2 className="mb-1 text-xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="mb-3 text-gray-500">{user.session}</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {Object.keys(user.social).map((val, ind) => (
                <a
                  key={ind}
                  href={user.social[val]}
                  target="__blank"
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                >
                  {val}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
