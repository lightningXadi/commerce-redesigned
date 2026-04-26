"use client";

import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function FooterMenuItem({ item }: { item: Menu }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className="block py-1.5 text-sm transition-opacity hover:opacity-70"
        style={{ color: active ? 'var(--cream)' : 'var(--sand)' }}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav className="grid grid-cols-2 gap-x-8 gap-y-1">
      <div>
        <p className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: 'var(--cream)' }}>Shop</p>
        <ul className="space-y-1">
          {menu.slice(0, Math.ceil(menu.length / 2)).map((item: Menu) => (
            <FooterMenuItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: 'var(--cream)' }}>Help</p>
        <ul className="space-y-1">
          {menu.slice(Math.ceil(menu.length / 2)).map((item: Menu) => (
            <FooterMenuItem key={item.title} item={item} />
          ))}
          <li>
            <a href="#" className="block py-1.5 text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--sand)' }}>
              Returns
            </a>
          </li>
          <li>
            <a href="#" className="block py-1.5 text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--sand)' }}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
