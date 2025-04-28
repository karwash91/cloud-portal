import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  BookOpenIcon,
  UserCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline'

import { Logo } from '@/components/Logo'
import ProfileDropdown from '@/components/ProfileDropdown'
import NavDropdown from '@/components/NavDropdown'

// Primary navigation items matching your app routes with updated icons
const navMenuItems = [
  {
    name: 'Quickstart', href: '/quickstart', icon: RocketLaunchIcon, current: false, subItems: []},
  { name: 'Deploy', href: '/deploy', icon: CloudArrowUpIcon, current: false, subItems: [{ name: 'Resources', href: '/somethingelse' }, { name: 'Accounts', href: '/somethingelse' },] },
  { name: 'API', href: '/api', icon: CodeBracketIcon, current: false, subItems: [] },
  { name: 'Resources', href: '/resources', icon: BookOpenIcon, current: false, subItems: [    { name: 'Documentation', href: '/somethingelse' },
  ] },
  { name: 'Support', href: '/support', icon: ChatBubbleOvalLeftEllipsisIcon, current: false, subItems: [] },
];

// User menu items
const profileMenuItems = [
  { name: 'Account settings', href: '/account-settings' },
  { name: 'Sign out', href: '/sign-out' },
]

// User
const userDetails = {
  firstName: 'Kareem',
  lastName: 'Washington',
  email: 'Kareem.Washington@truist.com',
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-truistpurple-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center px-2 lg:px-0">
            <div className="shrink-0">
              < Logo />
            </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">

                {/* Profile dropdown */}



                {navMenuItems.map((item) => (

                  <NavDropdown
                    key={item.name}
                    icon={item.icon}
                    label={item.name}
                    items={item.subItems}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
              <input
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="col-start-1 row-start-1 block w-full rounded-md bg-truistpurple-700 py-1.5 pr-3 pl-10 text-base text-white outline-hidden placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
              />
            </div>
          </div>
          <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-truistpurple-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="hidden lg:ml-4 lg:block">
            <div className="flex items-center">

              {/* Profile dropdown */}
              <ProfileDropdown
                label={`Welcome, ${userDetails.firstName}`}
                items={profileMenuItems}
              />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navMenuItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={`flex items-center rounded-md px-3 py-2 text-base font-medium ${item.current
                ? 'bg-truistpurple-900 text-white'
                : 'text-gray-300 hover:bg-truistpurple-700 hover:text-white'
                }`}
            >
              <item.icon className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          {/* Stack welcome message and email vertically */}
          <div className="flex flex-col px-5 space-y-1">
            <div className="text-base font-medium text-white">
              {`Welcome, ${userDetails.firstName}`}
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {profileMenuItems.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-truistpurple-700 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
