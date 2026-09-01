import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from "react";
import type { TDistributiveOmit } from "@/lib/types";
import { Slot } from "@radix-ui/react-slot";
import {
    buttonVariants,
    type TButtonSize,
    type TButtonVariant,
} from "@/components/Button/variants";
import { cn } from "@/lib/cn";

type TButtonOwnProps = {
    asChild?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    iconOnly?: boolean;
    leftIcon?: ReactNode;
    loading?: boolean;
    pill?: boolean;
    pressed?: boolean;
    rightIcon?: ReactNode;
    size?: TButtonSize;
    variant?: TButtonVariant;
};

type TButtonAsButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    children?: ReactNode;
    href?: undefined;
};

type TButtonAsAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    children?: ReactNode;
    href: string;
};

type TButtonIconOnlyConstraint =
    | {
          "aria-label"?: string;
          iconOnly?: false | undefined;
      }
    | {
          "aria-label": string;
          iconOnly: true;
      };

type TButtonAsChildConstraint =
    | {
          asChild?: false | undefined;
      }
    | {
          asChild: true;
          leftIcon?: undefined;
          loading?: false | undefined;
          rightIcon?: undefined;
      };

export type TButtonProps = TButtonOwnProps &
    (TButtonAsButtonProps | TButtonAsAnchorProps) &
    TButtonIconOnlyConstraint &
    TButtonAsChildConstraint & {
        ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
    };

const ButtonSpinner = () => (
    <svg aria-hidden="true" className="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-90"
            d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6V2z"
            fill="currentColor"
        />
    </svg>
);

interface IButtonRootComponent {
    (props: TButtonProps): ReactNode;
    displayName?: string;
}

const ButtonRoot: IButtonRootComponent = (props: TButtonProps): ReactNode => {
    const {
        asChild = false,
        children,
        className,
        disabled,
        fullWidth,
        href,
        iconOnly,
        leftIcon,
        loading = false,
        pill,
        pressed,
        ref,
        rightIcon,
        size,
        type,
        variant,
        ...rest
    } = props;

    const classes = cn(
        buttonVariants({ fullWidth, iconOnly, loading, pill, pressed, size, variant }),
        className
    );

    const content = iconOnly ? (
        loading ? (
            <ButtonSpinner />
        ) : (
            children
        )
    ) : (
        <>
            {loading ? <ButtonSpinner /> : leftIcon}
            {children}
            {rightIcon}
        </>
    );

    if (asChild) {
        return (
            <Slot
                aria-busy={loading || undefined}
                className={classes}
                data-loading={loading || undefined}
                ref={ref}
                {...rest}
            >
                {children}
            </Slot>
        );
    }

    if (href !== undefined) {
        return (
            <a
                aria-busy={loading || undefined}
                aria-disabled={disabled || loading || undefined}
                className={classes}
                data-loading={loading || undefined}
                href={href}
                ref={ref as Ref<HTMLAnchorElement>}
                {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            aria-busy={loading || undefined}
            aria-pressed={pressed}
            className={classes}
            data-loading={loading || undefined}
            data-pressed={pressed || undefined}
            disabled={disabled || loading}
            ref={ref as Ref<HTMLButtonElement>}
            type={type ?? "button"}
            {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {content}
        </button>
    );
};

ButtonRoot.displayName = "Button";

export type TButtonVariantProps = TDistributiveOmit<TButtonProps, "variant">;

interface IButtonVariantComponent {
    (props: TButtonVariantProps): ReactNode;
    displayName: string;
}

const createButtonVariant = (variant: TButtonVariant): IButtonVariantComponent => {
    const label = variant.charAt(0).toUpperCase() + variant.slice(1);

    const Component = (props: TButtonVariantProps): ReactNode => (
        <ButtonRoot {...props} variant={variant} />
    );

    Component.displayName = `Button.${label}`;

    return Component;
};

interface IButtonComponent extends IButtonRootComponent {
    Accent: IButtonVariantComponent;
    Attention: IButtonVariantComponent;
    Default: IButtonVariantComponent;
    Negative: IButtonVariantComponent;
    Positive: IButtonVariantComponent;
    Primary: IButtonVariantComponent;
}

export const Button: IButtonComponent = Object.assign(ButtonRoot, {
    Accent: createButtonVariant("accent"),
    Attention: createButtonVariant("attention"),
    Default: createButtonVariant("default"),
    Negative: createButtonVariant("negative"),
    Positive: createButtonVariant("positive"),
    Primary: createButtonVariant("primary"),
});
