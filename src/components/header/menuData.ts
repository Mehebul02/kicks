export interface MenuItem {
  label: string
  href?: string
  children?: string[]
}

export const menuItems: MenuItem[] = [
  {
    label: 'New Drops 🔥',
    href: '#',
  },
  {
    label: 'Men',
    children: ['Shoes', 'Apparel', 'Accessories'],
  },
  {
    label: 'Women',
    children: ['Shoes', 'Apparel', 'Accessories'],
  },
]