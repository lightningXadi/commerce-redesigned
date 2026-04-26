import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-3 pb-3 @container/label",
        {
          "lg:px-16 lg:pb-[30%]": position === "center",
        },
      )}
    >
      <div
        className="flex items-center w-full px-3 py-2 text-xs font-medium backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(247, 244, 239, 0.88)',
          color: 'var(--espresso)',
          border: '1px solid rgba(201, 191, 176, 0.4)',
        }}
      >
        <h3 className="mr-auto line-clamp-1 grow leading-none tracking-wide text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {title}
        </h3>
        <Price
          className="flex-none text-xs font-semibold pl-3"
          style={{ color: 'var(--bark)' }}
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
