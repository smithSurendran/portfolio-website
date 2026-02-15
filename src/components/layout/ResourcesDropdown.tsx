'use client'

import {Fragment}  from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const resources = [
  { name: 'Guides & Articles', href: '/resources/guides' },
  { name: 'Market Updates', href: '/resources/market-updates' },
  { name: 'FAQ', href: '/resources/faq' },
  { name: 'Downloads', href: '/resources/downloads' },
]

export default function ResourcesDropdown() {
    return (
        <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                Resources
                <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {resources.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                            <Link
                                href={item.href}
                                className={`${
                                active ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                                } block px-4 py-3 text-sm transition-colors duration-150`}
                            >
                                {item.name}
                            </Link>
                            )}
                        </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
  )
}