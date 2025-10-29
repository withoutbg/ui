import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

// Link-based button props
export interface PrimaryButtonLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    "aria-current"?: "page" | undefined;
    onClick?: never;
    disabled?: never;
}

// Click-based button props  
export interface PrimaryButtonClickProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    href?: never;
    "aria-current"?: never;
}

export type PrimaryButtonProps = PrimaryButtonLinkProps | PrimaryButtonClickProps;

export const PrimaryButton = (props: PrimaryButtonProps) => {
    const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-primary-text dark:bg-primary-light dark:hover:bg-primary-light-hover dark:text-primary-text-dark text-center";

    if ('href' in props && props.href) {
        const { href, children, className = "", "aria-current": ariaCurrent } = props;
        return (
            <Link
                href={href}
                className={`${baseClasses} ${className}`}
                aria-current={ariaCurrent}
            >
                {children}
            </Link>
        );
    }

    const { onClick, children, className = "", disabled, ...buttonProps } = props;
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${className}`}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

