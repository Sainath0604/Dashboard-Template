import { DownArrowIcon } from "../Icons/Icons";
import { Disclosure } from "@headlessui/react";
import graphImg from "../Image/graph.png";

function BalanceGraph() {
  return (
    <div className="bg-white flex flex-col">
      <div className="p-4 flex justify-between border-b">
        <span className="font-bold text-xl">Balance</span>
        <button>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex gap-2 border justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xs">Monthly</span>
                  <span className="text-xs font-thin text-gray-400/75">
                    <DownArrowIcon className={open} />
                  </span>
                </Disclosure.Button>
              </>
            )}
          </Disclosure>
        </button>
      </div>
      <div className="p-4 flex gap-4 justify-center ">
        <div className="flex flex-col">
          <div className="flex flex-col gap-1 border rounded-md py-2 px-4">
            <span className="text-xs text-gray-500/75">Earnings</span>
            <div className="flex items-center gap-1">
              <h1 className="font-bold text-xl">43.41%</h1>
              <span className="p-1 rounded-3xl bg-emerald-600 text-white text-xs">
                +13.5%
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-1 border rounded-md py-2 px-4">
            <span className="text-xs text-gray-500/75">Sales values</span>
            <div className="flex items-center gap-1">
              <h1 className="font-bold text-xl">$95,422</h1>
              <span className="p-1 rounded-3xl bg-emerald-600 text-white text-xs">
                +13.5%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={graphImg} alt="" />
      </div>
    </div>
  );
}

export default BalanceGraph;
