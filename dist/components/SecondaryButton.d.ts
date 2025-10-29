import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface SecondaryButtonLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    "aria-current"?: "page" | undefined;
    onClick?: never;
    disabled?: never;
}
export interface SecondaryButtonClickProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    href?: never;
    "aria-current"?: never;
}
export type SecondaryButtonProps = SecondaryButtonLinkProps | SecondaryButtonClickProps;
export declare const SecondaryButton: (props: SecondaryButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SecondaryButton.d.ts.map