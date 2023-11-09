import React, { useState } from "react";
import Button from "./Button";

const NavToken = ({ signOut }) => {
  const [dropMenu, setDropMenu] = useState(false);
  return (
    <div className="relative">
      <Button
        onClick={() => setDropMenu((prev) => !prev)}
        type="button"
        name={"Nazwa użytkownika"}
      >
        <svg
          class="ml-2.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Button>

      <div
        className={`${
          dropMenu ? "flex flex-col" : "hidden"
        } absolute left-5 z-50 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700`}
      >
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="truncate font-medium">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <button
            onClick={signOut}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavToken;
