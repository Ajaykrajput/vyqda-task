const Navbar = () => {
  return (
    <div className="flex w-full bg-black h-20 text-white gap-4">
      <div className="flex px-4 gap-4 py-4">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <div className="font-semibold text-3xl">Notes</div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
