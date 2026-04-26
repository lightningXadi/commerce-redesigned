"use client";

import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LoadingDots from "components/loading-dots";
import Price from "components/price";
import { DEFAULT_OPTION } from "lib/constants";
import { createUrl } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { createCartAndSetCookie, redirectToCheckout } from "./actions";
import { useCart } from "./cart-context";
import { DeleteItemButton } from "./delete-item-button";
import { EditItemQuantityButton } from "./edit-item-quantity-button";
import OpenCart from "./open-cart";

type MerchandiseSearchParams = { [key: string]: string };

export default function CartModal() {
  const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (!cart) createCartAndSetCookie();
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpen) setIsOpen(true);
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col p-6 md:w-[380px]"
              style={{ backgroundColor: 'var(--cream)', color: 'var(--espresso)' }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <ShoppingBagIcon className="h-5 w-5" style={{ color: 'var(--bark)' }} />
                  <p className="font-serif-display text-lg" style={{ color: 'var(--espresso)' }}>Your Bag</p>
                  {cart?.totalQuantity ? (
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--espresso)', color: 'var(--cream)' }}>
                      {cart.totalQuantity}
                    </span>
                  ) : null}
                </div>
                <button aria-label="Close cart" onClick={closeCart} style={{ color: 'var(--bark)' }}>
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="flex flex-col flex-1 items-center justify-center gap-4">
                  <ShoppingBagIcon className="h-12 w-12" style={{ color: 'var(--stone)' }} />
                  <p className="font-serif-display text-xl italic" style={{ color: 'var(--sand)' }}>Your bag is empty</p>
                  <a
                    href="/search"
                    onClick={closeCart}
                    className="text-xs uppercase tracking-widest px-6 py-3 mt-2 font-medium transition-colors"
                    style={{ backgroundColor: 'var(--espresso)', color: 'var(--cream)' }}
                  >
                    Continue Shopping
                  </a>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden">
                  <ul className="grow overflow-auto">
                    {cart.lines
                      .sort((a, b) =>
                        a.merchandise.product.title.localeCompare(b.merchandise.product.title),
                      )
                      .map((item, i) => {
                        const merchandiseSearchParams = {} as MerchandiseSearchParams;
                        item.merchandise.selectedOptions.forEach(({ name, value }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        });
                        const merchandiseUrl = createUrl(
                          `/product/${item.merchandise.product.handle}`,
                          new URLSearchParams(merchandiseSearchParams),
                        );

                        return (
                          <li
                            key={i}
                            className="flex w-full flex-col border-b py-4"
                            style={{ borderColor: 'var(--stone)' }}
                          >
                            <div className="relative flex w-full flex-row justify-between">
                              <div className="absolute z-40 -ml-1 -mt-2">
                                <DeleteItemButton item={item} optimisticUpdate={updateCartItem} />
                              </div>
                              <div className="flex flex-row pl-4">
                                <div className="relative h-16 w-16 overflow-hidden" style={{ backgroundColor: 'var(--stone)' }}>
                                  <Image
                                    className="h-full w-full object-cover"
                                    width={64}
                                    height={64}
                                    alt={item.merchandise.product.featuredImage.altText || item.merchandise.product.title}
                                    src={item.merchandise.product.featuredImage.url}
                                  />
                                </div>
                                <Link href={merchandiseUrl} onClick={closeCart} className="ml-3 flex flex-col justify-center">
                                  <span className="text-sm font-medium" style={{ color: 'var(--espresso)' }}>
                                    {item.merchandise.product.title}
                                  </span>
                                  {item.merchandise.title !== DEFAULT_OPTION && (
                                    <p className="text-xs mt-1" style={{ color: 'var(--sand)' }}>
                                      {item.merchandise.title}
                                    </p>
                                  )}
                                </Link>
                              </div>
                              <div className="flex flex-col items-end justify-between">
                                <Price
                                  className="text-sm font-medium"
                                  style={{ color: 'var(--bark)' }}
                                  amount={item.cost.totalAmount.amount}
                                  currencyCode={item.cost.totalAmount.currencyCode}
                                />
                                <div className="flex h-8 flex-row items-center gap-1 border" style={{ borderColor: 'var(--stone)' }}>
                                  <EditItemQuantityButton item={item} type="minus" optimisticUpdate={updateCartItem} />
                                  <p className="w-6 text-center text-xs">{item.quantity}</p>
                                  <EditItemQuantityButton item={item} type="plus" optimisticUpdate={updateCartItem} />
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>

                  <div className="pt-4 border-t" style={{ borderColor: 'var(--stone)' }}>
                    <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--bark)' }}>
                      <span>Subtotal</span>
                      <Price
                        className="font-medium"
                        style={{ color: 'var(--espresso)' }}
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                    <div className="flex justify-between text-xs mb-4" style={{ color: 'var(--sand)' }}>
                      <span>Shipping calculated at checkout</span>
                    </div>
                    <form action={redirectToCheckout}>
                      <CheckoutButton />
                    </form>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function CheckoutButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="block w-full py-4 text-center text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-85"
      type="submit"
      disabled={pending}
      style={{ backgroundColor: 'var(--espresso)', color: 'var(--cream)' }}
    >
      {pending ? <LoadingDots className="bg-white" /> : "Proceed to Checkout"}
    </button>
  );
}
