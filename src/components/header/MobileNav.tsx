'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { menuItems } from './menuData'

interface Props {
  isOpen: boolean
}

export default function MobileNav({ isOpen }: Props) {
  if (!isOpen) return null

  return (
    <div className="md:hidden px-4 py-3 border-t border-gray-200 bg-gray-50">
      <nav className="space-y-3">
        {menuItems.map((item, index) =>
          item.children ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <button className="w-full text-left py-2 font-medium hover:text-orange-500 transition-colors flex justify-between">
                  {item.label}
                  <span className="text-xs">▼</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {item.children.map((child, i) => (
                  <DropdownMenuItem key={i}>
                    {child}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <a
              key={index}
              href={item.href}
              className="block py-2 font-medium hover:text-orange-500 transition-colors"
            >
              {item.label}
            </a>
          )
        )}
      </nav>
    </div>
  )
}