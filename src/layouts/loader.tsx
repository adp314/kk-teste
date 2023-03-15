import { AiOutlineLoading } from "react-icons/ai";

export function LoaderLayout() {
  return (
    <>
      <div className="h-screen">
        <div className="h-full w-full flex justify-center">
          <AiOutlineLoading className="text-7xl animate-spin mt-32" />
        </div>
      </div>
    </>
  );
}
