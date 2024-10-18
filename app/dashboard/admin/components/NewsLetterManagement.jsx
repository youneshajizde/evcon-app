import DemoPage from "@/components/adminTable/MyTable";
import { TicketX, UsersRound } from "lucide-react";
import React from "react";

function NewsLetterManagement() {
  return (
    <main className="flex-1 p-6 ">
      <h2 className="text-3xl font-semibold">Manage the NewsLetter Users</h2>

      <div className="flex flex-col  md:flex-row  gap-9  mt-5">
        <div className="relative w-full md:w-[280px] min-h-[140px] bg-white rounded-xl border-[1px] flex items-center justify-center gap-5">
          <UsersRound size={50} />
          <span className="text-5xl font-semibold">4</span>
          <span className="absolute top-3 left-3 text-sm font-medium">
            Users
          </span>
        </div>
        <div className="relative w-full md:w-[280px] min-h-[140px] bg-white rounded-xl border-[1px] flex items-center justify-center gap-5">
          <TicketX size={50} />
          <span className="text-5xl font-semibold">1</span>
          <span className="absolute top-3 left-3 text-sm font-medium">
            Deleted
          </span>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-lg font-medium">Users state</h1>
        <DemoPage />
      </div>
    </main>
  );
}

export default NewsLetterManagement;