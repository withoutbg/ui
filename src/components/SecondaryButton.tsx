import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

// Link-based button props
interface SecondaryButtonLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    "aria-current"?: "page" | undefined;
    onClick?: never;
    disabled?: never;
}

// Click-based button props  
interface SecondaryButtonClickProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    href?: never;
    "aria-current"?: never;
}

type SecondaryButtonProps = SecondaryButtonLinkProps | SecondaryButtonClickProps;

export const SecondaryButton = (props: SecondaryButtonProps) => {
    const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-75 transition-[border-color,background-color] duration-75 bg-white dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-800/30 dark:bg-gray-800 text-center";

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
