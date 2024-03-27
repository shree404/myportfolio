import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function SkillsButton() {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80">
          Skills
          <ChevronDownIcon className="ml-2 h-5 w-5" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-layer-3 py-3 shadow-xl focus:outline-none">
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Languages
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    FrameWorks
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Other Skills
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Soft Skills
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}