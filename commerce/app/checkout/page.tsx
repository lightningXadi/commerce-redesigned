export default function CheckoutPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <div className="mb-6 text-6xl">🛒</div>
        <h1 className="mb-4 text-3xl font-bold">Demo Checkout</h1>
        <p className="mb-6 text-neutral-500 dark:text-neutral-400">
          This is a demo store. No real purchases can be made. In a real store,
          this would connect to a payment processor like Shopify Payments or Stripe.
        </p>
        <a
          href="/"
          className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Back to Shopping
        </a>
      </div>
    </div>
  );
}
