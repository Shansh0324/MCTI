import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { children, className, ...otherprops } = props;
    return (
        <div
            className={twMerge(
                "size-14 bg-secondary inline-flex items-center justify-center rounded-2xl text-xl text-secondary-foreground font-medium",
                className
            )}
            {...otherprops}
        >
            {children}
        </div>
    );
}
