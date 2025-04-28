import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// Define each dropdown item with optional icon component
interface NavDropdownItem {
  name: string
  href: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// Props for NavDropdown: label text, optional leading icon, optional link href, and items array
interface NavDropdownProps {
  label: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  href?: string
  items?: NavDropdownItem[]
}

export default function NavDropdown({ label, icon: Icon, href, items = [] }: NavDropdownProps) {
  // If there are no sub-items, render the label as a Link if href provided
  if (!items || items.length === 0) {
    if (href) {
      return (
        <Link
          href={href}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-truistpurple-700 hover:text-white rounded-md"
        >
          {Icon && <Icon className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />}
          {label}
        </Link>
      );
    }
    // Fallback: render static label
    return (
      <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md">
        {Icon && <Icon className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />}
        {label}
      </span>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-truistpurple-700 hover:text-white">
          {Icon && <Icon className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />}
          {label}
          <ChevronDownIcon aria-hidden="true" className="ml-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="py-1">
          {items.map((item) => (
            <MenuItem key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.icon && <item.icon className="h-5 w-5 mr-2 flex-shrink-0 text-gray-500" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}