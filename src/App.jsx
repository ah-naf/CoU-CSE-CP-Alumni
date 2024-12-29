import React, { useState, useMemo } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { SearchIcon } from "./Components/SearchIcon";
import UserCards from "./Components/UserCards";
import userData from "./user";

function App() {
  // Store the entire user data
  const [data, setData] = useState(userData);

  // Search/Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  // 1. Get unique sessions dynamically from your user data
  // useMemo is optional for performance optimization (so we don't re-calc on every render).
  const sessions = useMemo(() => {
    const allSessions = data.map((user) => user.session);
    return Array.from(new Set(allSessions)); // remove duplicates
  }, [data]);

  // 2. Filter the data by both name and session
  const filteredData = data.filter((user) => {
    const matchesName = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSession = selectedSession
      ? user.session === selectedSession
      : true;

    return matchesName && matchesSession;
  });

  // Handler: update search text
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handler: dropdown item selection
  const handleSessionSelection = (key) => {
    setSelectedSession(key);
  };

  // Reset both filters
  const handleReset = () => {
    setSearchQuery("");
    setSelectedSession("");
  };

  return (
    <div className="relative min-h-screen">
      {/* <img src="logo.png" alt="" className="absolute w-32" /> */}
      <div className="bg-[#050D19] p-8 pb-0">
        <div className="max-w-4xl mx-auto">
          <img
            src="logo.png"
            alt=""
            className="max-w-full  md:max-w-xl lg:max-w-2xl mx-auto rounded-full"
            style={{ boxShadow: "0px 3px 60px 35px rgba(255,255,255,.1)" }}
          />
          <div className="text-center text-white mt-6">
            <h1
              style={{ fontFamily: `"Noto Serif", serif` }}
              className="text-2xl sm:text-4xl tracking-wide font-bold mb-4"
            >
              CoU CSE Competitive Programming Alumni
            </h1>
            <p
              style={{ fontFamily: `"Montserrat", serif` }}
              className="text-gray-200 text-sm sm:text-lg"
            >
              A directory of competitive programmers from Comilla University,
              CSE Department, featuring their names, sessions, and social
              profiles like Facebook, LinkedIn, GitHub, and Codeforces.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-4 sm:py-6 relative top-12 shadow-lg mx-auto bg-white rounded-md max-w-xl">
          <div className="relative flex flex-col sm:flex-row gap-4 sm:items-center">
            {/* Name Input */}
            <Input
              label="Name"
              size="md"
              startContent={<SearchIcon />}
              variant="bordered"
              color="primary"
              placeholder="Enter user's name"
              value={searchQuery}
              onChange={handleSearchChange}
              classNames={{
                base: "w-full sm:w-full",
                label: "text-lg",
              }}
            />

            {/* Dropdown for sessions: use the derived `sessions` */}
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" size="md">
                  {selectedSession ? selectedSession : "Select Session"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Session Dropdown"
                onAction={handleSessionSelection}
              >
                {sessions.map((session) => (
                  <DropdownItem key={session}>{session}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* Reset button */}
            {(searchQuery || selectedSession) && (
              <span
                className="text-xs absolute underline font-black translate-y-full cursor-pointer -bottom-1 right-0 text-warning-500 "
                onClick={handleReset}
              >
                Reset
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-24 pb-8">
        {/* Pass the filtered data to UserCards */}
        <UserCards users={filteredData} />
      </div>
    </div>
  );
}

export default App;
