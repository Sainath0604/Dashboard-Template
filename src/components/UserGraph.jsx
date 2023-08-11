import { ThreeDotsIcon } from "../Icons/Icons";

function UserGraph() {
  return (
    <div>
      <div className="h-2/5 px-6 py-4 flex flex-col gap-2 bg-white rounded-md shadow-lg">
        <div className="flex justify-between w-full">
          <span className="text-gray-500 text-sm font-semibold">New Users</span>
          <span className="text-gray-500/75">
            <ThreeDotsIcon />
          </span>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-3xl">94.2%</h1>
            <span className="p-1 rounded-3xl bg-emerald-600 text-white text-xs">
              +6.9%
            </span>
          </div>
        </div>
        <div className="flex gap-3 lg:mt-4 justify-center">
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "40%" }}></div>
          </div>
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "100%" }}></div>
          </div>
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "40%" }}></div>
          </div>
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "65%" }}></div>
          </div>
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "70%" }}></div>
          </div>
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "80%" }}></div>
          </div>
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "70%" }}></div>
          </div>
          <div className="w-8 h-16 bg-gray-200 rounded-t-md flex flex-col justify-end">
            <div className="bg-blue-600 h-1" style={{ height: "80%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserGraph;
