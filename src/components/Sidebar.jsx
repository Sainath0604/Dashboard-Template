import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  ApplicationIcon,
  CrossIcon,
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
import MobileSidebar from "./MobileSidebar";

function AdminNav() {
  return (
    <>
      <div className="hidden md:block h-screen w-1/5 bg-white border-r min-h-screen">
        <div className="flex flex-col text-gray-800 ">
          <div className="flex items-center gap-4 border-b h-20 p-4 text-lg lg:ml-4">
            <div>
              <Link to="#">
                <img className="h-6" src={HeadLogo} alt="Logo" />
              </Link>
            </div>
            <div className="font-semibold cursor-pointer">
              <Link to="#">Artemis</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="mt-5 ">
              <div className="text-sm lg:text-xs flex flex-col gap-4">
                <div className="">
                  <span className="lg:pl-4 py-2 text-xs font-semibold text-gray-700/50">
                    MAIN
                  </span>
                  <div className="flex flex-col px-2 mt-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex bg-[#362bd2] text-white gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                            <div className="flex gap-2">
                              <span className="text-lg text-gray-400/75">
                                <DashboardIcon />
                              </span>
                              <span>Dashboard</span>
                            </div>
                            <span className="text-xs font-thin text-gray-400/75">
                              <DownArrowIcon className={open} />
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                            <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                              <li>Dashboard 1</li>
                              <li>Dashboard 2</li>
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <div className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                      <div className="flex gap-2">
                        <span className="text-lg text-gray-400/75">
                          <DiscoverIcon />
                        </span>
                        <button>Discover</button>
                      </div>

                      <span className="flex items-center border p-2 bg-[#362bd2] text-white justify-center h-4 w-4 text-xs rounded-full">
                        4
                      </span>
                    </div>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                            <div className="flex gap-2 items-center">
                              <span className="text-lg text-gray-400/75">
                                <UsersIcon />
                              </span>
                              <span>Users</span>
                            </div>
                            <span className="text-xs font-thin text-gray-400/75">
                              <DownArrowIcon className={open} />
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                            <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                              <li>Users 1</li>
                              <li>Users 2</li>
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                            <div className="flex gap-2 items-center">
                              <span className="text-lg text-gray-400/75">
                                <DocIcon />
                              </span>
                              <span>Documents</span>
                            </div>
                            <span className="text-xs font-thin text-gray-400/75">
                              <DownArrowIcon className={open} />
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                            <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                              <li>Documents 1</li>
                              <li>Documents 2</li>
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                            <div className="flex gap-2 items-center">
                              <span className="text-lg text-gray-400/75">
                                <ApplicationIcon />
                              </span>
                              <span>Applications</span>
                            </div>
                            <span className="text-xs font-thin text-gray-400/75">
                              <DownArrowIcon className={open} />
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                            <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                              <li>Applications 1</li>
                              <li>Applications 2</li>
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                            <div className="flex gap-2 items-center">
                              <span className="text-lg text-gray-400/75">
                                <PageIcon />
                              </span>
                              <span>Page</span>
                            </div>
                            <span className="text-xs font-thin text-gray-400/75">
                              <DownArrowIcon className={open} />
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 text-sm ">
                            <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                              <li>Page 1</li>
                              <li>Page 2</li>
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
                <div className="lg:mt-4 text-xs">
                  <span className="lg:pl-4 py-2 font-semibold text-gray-700/50">
                    SECONDARY
                  </span>
                  <div className="flex flex-col gap-2 px-2 mt-2">
                    <ul className="flex flex-col">
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl text-gray-400/75">
                          <QueIcon />
                        </span>
                        <span className="">Support</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl text-gray-400/75">
                          <InboxIcon />
                        </span>
                        <span className="">Inbox</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl text-gray-400/75">
                          <FilesIcon />
                        </span>
                        <span className="">File Manager</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl text-gray-400/75">
                          <ListIcon />
                        </span>
                        <span className="">Data List</span>
                      </li>
                    </ul>
                    <ul className="flex flex-col lg:mt-4">
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl text-gray-400/75">
                          <SettingIcon />
                        </span>
                        <span className="">Settings</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl text-gray-400/75">
                          <LogOutIcon />
                        </span>
                        <span>Log Out</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For mobile screen */}

      <Disclosure as="nav" className="bg-white block md:hidden h-1/5">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6">
                        <CrossIcon />
                      </div>
                    ) : (
                      <div className="block h-6 w-6">
                        <HamburgerIcon />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex items-center gap-4 h-20 p-4 text-lg">
                      <div>
                        <Link to="#">
                          <img className="h-6" src={HeadLogo} alt="Logo" />
                        </Link>
                      </div>
                      <div className="font-semibold cursor-pointer">
                        <Link to="#">Artemis</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
                  <button type="button">
                    <span className="text-xl text-gray-700h-6 w-6">
                      <SettingIcon />
                    </span>
                  </button>

                  <button type="button">
                    <span className="text-xl text-gray-700h-6 w-6">
                      <LogOutIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <MobileSidebar />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default AdminNav;
