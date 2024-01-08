import { useState } from "react";
import Navbar from "./Navbar";
import { HiMenuAlt2 } from "react-icons/hi";

interface Props {
  children?: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <div className="bg-zinc-100 min-h-screen flex flex-col items-center">
      <main className="flex-1 flex flex-row justify-center items-start w-full max-w-5xl gap-8 relative">
        <div className="hidden sm:flex sticky top-0">
          <Navbar />
        </div>
        <section className="flex-1 py-20 px-6 flex flex-col">
          {children}
        </section>
      </main>

      <button
        type="button"
        onClick={toggleDrawer}
        className="fixed left-8 top-8 bg-white w-12 h-12 z-50 shadow-md rounded-full flex sm:hidden items-center justify-center"
      >
        <HiMenuAlt2 />
      </button>
      <div
        data-drawer={isDrawerOpen}
        className="sm:hidden transition-all duration-300 ease-in-out flex fixed shadow-xl left-0 top-0 bg-white h-screen items-start w-full justify-end data-[drawer=true]:translate-x-0 data-[drawer=false]:translate-x-[120rem]"
      >
        <Navbar />
      </div>

      <footer className="px-6 py-4 text-center">
        <p>
          Inspired by mentor Atif Aiman @atifaiman.dev 😍 • &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Default;
