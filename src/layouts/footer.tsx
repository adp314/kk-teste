export function FooterLayout() {
  return (
    <>
      <footer className="mt-8">
        <div className="h-0.5 w-full bg-gradient-to-l from-[#5a5a5a0e] via-[#9c9c9c2c] to-[#5a5a5a0e] rounded-full" />
        <div className="flex justify-center items-center py-6">
          <div className="flex justify-start items-center gap-4 text-lg font-light text-[#7272728c] uppercase">
            <a
              className="hover:text-black cursor-pointer hover:duration-300"
              href="https://github.com/adp314"
            >
              André Da Costa Pinto
            </a>
            <span>///</span>
            <a
              className="hover:text-black cursor-pointer hover:duration-300"
              href="mailto:andredp314@gmail.com"
            >
              andredp314@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
