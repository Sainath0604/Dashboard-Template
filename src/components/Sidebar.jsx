import {
  ApplicationIcon,
  DashboardIcon,
  DiscoverIcon,
  DocIcon,
  DownArrowIcon,
  FilesIcon,
  HamburgerIcon,
  InboxIcon,
  ListIcon,
  LogOutIcon,
  PageIcon,
  QueIcon,
  SettingIcon,
  UsersIcon,
} from "../Icons/Icons";
import HeadLogo from "../Logos/React_Assigment_Amber_icon.png";

export default function Sidebar() {
  return (
    <div className="">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <span>
          <HamburgerIcon />
        </span>
      </button>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-6 overflow-y-auto bg-gray-50">
          <a href="#" className="flex items-center pl-2.5 mb-5 border-b pb-6">
            <img src={HeadLogo} className="mr-3 sm:h-7" alt="HeadLogo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Artemis
            </span>
          </a>
          <div className="mt-2">
            <ul className="text-sm font-base ">
              <span className="text-gray-500 text-xs font-extralight py-2">
                MAIN
              </span>
              <li className="">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-500 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="text-xl">
                    <DashboardIcon />
                  </span>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-500 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="text-xl">
                    <DiscoverIcon />
                  </span>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Discover
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    4
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100  dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-drawer-toggle="dropdown-example"
                >
                  <span className="text-xl">
                    <UsersIcon />
                  </span>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Users
                  </span>
                  <span className="mr-2">
                    <DownArrowIcon />
                  </span>
                </button>
                <ul id="dropdown" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100  dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-drawer-toggle="dropdown-example"
                >
                  <span className="text-xl">
                    <DocIcon />
                  </span>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Documents
                  </span>
                  <span className="mr-2">
                    <DownArrowIcon />
                  </span>
                </button>
                <ul id="dropdown" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100  dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-drawer-toggle="dropdown-example"
                >
                  <span className="text-xl">
                    <ApplicationIcon />
                  </span>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Applications
                  </span>
                  <span className="mr-2">
                    <DownArrowIcon />
                  </span>
                </button>
                <ul id="dropdown" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-100  dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-drawer-toggle="dropdown-example"
                >
                  <span className="text-xl text-gray-500">
                    <PageIcon />
                  </span>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-700">
                    Pages
                  </span>
                  <span className="mr-2">
                    <DownArrowIcon />
                  </span>
                </button>
                <ul id="dropdown" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="pt-2 mt-2 font-base text-sm">
              <span className="text-gray-500 text-xs font-extralight py-2">
                SECONDARY
              </span>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group"
                >
                  <span className="text-xl">
                    <QueIcon />
                  </span>
                  <span className="ml-4">Support</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group"
                >
                  <span className="text-xl">
                    <InboxIcon />
                  </span>
                  <span className="ml-3">Inbox</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group"
                >
                  <span className="text-xl">
                    <FilesIcon />
                  </span>
                  <span className="ml-3">File Manager</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group"
                >
                  <span className="text-xl">
                    <ListIcon />
                  </span>
                  <span className="ml-3">Data List</span>
                </a>
              </li>
            </ul>
          </div>
          <ul className="pt-2 mt-2 font-base text-sm">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group"
              >
                <span className="text-xl">
                  <SettingIcon />
                </span>
                <span className="ml-4">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group"
              >
                <span className="text-xl">
                  <LogOutIcon />
                </span>
                <span className="ml-3">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
