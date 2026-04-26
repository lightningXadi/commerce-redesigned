"use client";

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, Suspense, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "lib/shopify/types";
import Search, { SearchSkeleton } from "./search";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-10 w-10 items-center justify-center md:hidden"
        style={{ color: 'var(--espresso)' }}
      >
        <Bars3Icon className="h-5 w-5" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel
              className="fixed bottom-0 left-0 top-0 flex h-full w-72 flex-col p-8"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-serif-display text-lg" style={{ color: 'var(--espresso)' }}>Menu</span>
                <button
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                  style={{ color: 'var(--bark)' }}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-8">
                <Suspense fallback={<SearchSkeleton />}>
                  <Search />
                </Suspense>
              </div>

              {menu.length ? (
                <ul className="flex w-full flex-col gap-6">
                  {menu.map((item: Menu) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        prefetch={true}
                        onClick={closeMobileMenu}
                        className="text-sm uppercase tracking-widest font-medium transition-colors"
                        style={{ color: 'var(--bark)' }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-auto pt-8 border-t" style={{ borderColor: 'var(--stone)' }}>
                <p className="text-xs" style={{ color: 'var(--sand)' }}>
                  Free shipping over $100
                </p>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
