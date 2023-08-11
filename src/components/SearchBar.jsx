import {
  BellIcon,
  DownArrowIcon,
  MsgIcon,
  SearchIcon,
  SettingIcon,
} from "../Icons/Icons";
import userImg from "../UserImage/userImg.png";

export default function SearchBar() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1">
        <div className="flex justify-between h-20 bg-white border-b shadow-md p-2 items-center">
          <div>
            <span className="flex items-center gap-2 lg:ml-10">
              <span className="text-gray-400 p-2">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Type to search..."
                className=" p-2 bg-white"
              />
            </span>
          </div>
          <div className="lg:mr-2 flex items-center gap-6">
            <div>
              <ul className="flex gap-4 text-gray-400">
                <li>
                  <SettingIcon />
                </li>
                <li>
                  <MsgIcon />
                </li>
                <li>
                  <BellIcon />
                </li>
              </ul>
            </div>
            <div className="flex gap-2 items-center text-xs">
              <div className="flex flex-col items-center">
                <span className="font-semibold">Thomas Brown</span>
                <span className="text-gray-500">Developer</span>
              </div>
              <div>
                <img
                  src={userImg}
                  className="h-10 rounded-full"
                  alt="userImg"
                />
              </div>
              <div className="text-gray-500 text-xs">
                <DownArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
