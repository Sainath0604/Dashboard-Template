import { ThreeDotsIcon } from "../Icons/Icons";
import SearchBar from "./SearchBar";
import UserGraph from "./UserGraph";
import BalanceGraph from "./BalanceGraph";
import Table from "./Table";

export default function C2() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="flex gap-4 justify-center min-h-[50vh] w-4/5 p-2">
          <div className="w-1/2 min-h-[45vh] p-2 flex flex-col gap-4">
            <div className="h-2/5 px-6 py-4 flex flex-col gap-2 bg-white rounded-md shadow-lg">
              <div className="flex justify-between w-full">
                <span className="text-gray-500 text-sm font-semibold">
                  Total Income
                </span>
                <span className="text-gray-500/75">
                  <ThreeDotsIcon />
                </span>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold text-3xl">$124,563.00</h1>
                  <span className="p-1 rounded-3xl bg-emerald-600 text-white text-xs">
                    +6.9%
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-purple-600 h-1 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <span className="text-gray-500/25 text-xs font-medium">
                  Yearly Goal
                </span>
              </div>
            </div>
            <div className="h-3/5">
              <UserGraph />
            </div>
          </div>
          <div className="w-1/2 min-h-[45vh] shadow-lg">
            <BalanceGraph />
          </div>
        </div>
      </div>
      <div className="mt-5 pb-5">
        <Table />
      </div>
    </div>
  );
}
