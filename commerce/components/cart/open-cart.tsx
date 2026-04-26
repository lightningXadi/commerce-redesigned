import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center h-10 w-10 transition-opacity hover:opacity-70">
      <ShoppingBagIcon
        className="h-5 w-5 transition-all ease-in-out"
        style={{ color: 'var(--espresso)' }}
      />
      {quantity ? (
        <div
          className="absolute -right-1 -top-1 h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-medium"
          style={{ backgroundColor: 'var(--espresso)', color: 'var(--cream)' }}
        >
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
