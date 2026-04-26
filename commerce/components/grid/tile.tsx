import clsx from "clsx";
import Image from "next/image";
import Label from "../label";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "group flex h-full w-full items-center justify-center overflow-hidden",
        {
          relative: label,
          "outline outline-2 outline-offset-[-2px]": active,
        },
      )}
      style={{
        backgroundColor: 'var(--stone)',
        outlineColor: active ? 'var(--espresso)' : 'transparent',
      }}
    >
      {props.src ? (
        <Image
          className={clsx("relative h-full w-full object-cover", {
            "transition duration-500 ease-in-out group-hover:scale-103":
              isInteractive,
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
