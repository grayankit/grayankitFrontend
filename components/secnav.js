import React from "react";

function Secnav(){
    return(
        <nav className="mx-2 px-3 tabs flex sm:flex-row overflow-x-scroll lg:overflow-x-hidden">
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b  font-medium border-purple-700">Overview</button>
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b  font-medium border-purple-700">	Q&amp;A</button>
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b  font-medium border-purple-700">Downloads</button>
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b font-medium border-purple-700">Announcements</button> 
        </nav>
    );
}
export default Secnav;