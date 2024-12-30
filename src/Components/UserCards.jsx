import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function UserCards({ users }) {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center rounded-lg bg-gray-100/50 py-4 md:p-4 border transition-shadow border-blue-500 card"
          >
            <div className="flex items-center gap-8">
              <img
                src={user.avatar}
                alt={user.name}
                className="mb-4 h-20 w-20 rounded-full object-cover"
                style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.25)" }}
              />
              <div>
                <h2 className="mb-1 text-[1.2rem] font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="mb-3 text-gray-500 text-sm font-medium">
                  {user.session}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {Object.keys(user.social).map((platform, index) => {
                // Decide which icon to show
                let IconComponent;
                switch (platform) {
                  case "facebook":
                    IconComponent = <FaFacebook className="inline mr-1" />;
                    break;
                  case "github":
                    IconComponent = <FaGithub className="inline mr-1" />;
                    break;
                  case "linkedin":
                    IconComponent = <FaLinkedin className="inline mr-1" />;
                    break;
                  case "codeforces":
                    IconComponent = <FaCode className="inline mr-1" />;
                    break;
                  default:
                    IconComponent = null;
                    break;
                }

                return (
                  <a
                    key={index}
                    href={user.social[platform]}
                    target="__blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-50 font-bold px-3 py-1 text-blue-600 flex items-center"
                  >
                    {IconComponent}
                    {platform}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
