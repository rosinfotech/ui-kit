import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
    "inline-flex items-center justify-center font-medium rounded-md whitespace-nowrap select-none transition-colors " +
        "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
        "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 " +
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
        compoundVariants: [
            {
                // px-0 именно в compoundVariants: класс применяется после size (px-*),
                // чтобы tailwind-merge корректно разрешил конфликт в пользу отсутствия паддингов
                class: "px-0",
                iconOnly: true,
            },
        ],
        defaultVariants: {
            size: "md",
            variant: "default",
        },
        variants: {
            fullWidth: {
                true: "w-full",
            },
            iconOnly: {
                true: "aspect-square",
            },
            loading: {
                true: "pointer-events-none",
            },
            pill: {
                true: "rounded-full",
            },
            pressed: {
                true: "ring-2 ring-inset ring-fg/20",
            },
            size: {
                lg: "h-11 gap-2.5 px-5 text-base [&_svg]:size-5",
                md: "h-10 gap-2 px-4 text-sm [&_svg]:size-[1.125rem]",
                sm: "h-8 gap-2 px-3 text-sm [&_svg]:size-4",
                xl: "h-12 gap-2.5 px-6 text-lg [&_svg]:size-[1.375rem]",
                xs: "h-7 gap-1.5 px-2.5 text-xs [&_svg]:size-3.5",
            },
            variant: {
                accent: "bg-accent text-accent-fg hover:bg-accent/90",
                attention: "bg-attention text-attention-fg hover:bg-attention/90",
                default: "bg-default text-default-fg hover:bg-default/85",
                negative: "bg-negative text-negative-fg hover:bg-negative/90",
                positive: "bg-positive text-positive-fg hover:bg-positive/90",
                primary: "bg-primary text-primary-fg hover:bg-primary/90",
            },
        },
    }
);

type TButtonConfigVariants = NonNullable<VariantProps<typeof buttonVariants>>;

export type TButtonVariant = NonNullable<TButtonConfigVariants["variant"]>;
export type TButtonSize = NonNullable<TButtonConfigVariants["size"]>;
