import { Search } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <header className="w-full  bg-cyber-deep flex items-center justify-start px-4 py-4 gap-8 ">
        <h1 className="text-xl font-bold italic font-michroma text-cyber-neon">
          FreePlay
        </h1>
        {/* search bar */}
        <div className="h-12 flex items-center bg-cyber-border px-4 gap-4">
          <Search size={18} color="gray" />
          <input className="h-full py-2 outline-none" placeholder="Search" />
        </div>
      </header>
      <div className="w-full bg-linear-to-r from-ransparent via-cyber-border to-transparent h-[1px]"></div>
    </>
  );
}
