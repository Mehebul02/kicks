'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { menuItems } from './menuData'

export default function DesktopNav() {
  return (
    <nav className="flex items-center gap-8">
      {menuItems.map((item, index) =>
        item.children ? (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger asChild>
              <button className="font-semibold hover:text-orange-500 transition-colors flex items-center gap-1 cursor-pointer">
                {item.label}
                <span className="text-xs">▼</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
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
            className="font-semibold hover:text-orange-500 transition-colors cursor-pointer"
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  )
}