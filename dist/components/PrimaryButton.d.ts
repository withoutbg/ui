import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface PrimaryButtonLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    "aria-current"?: "page" | undefined;
    onClick?: never;
    disabled?: never;
}
export interface PrimaryButtonClickProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    href?: never;
    "aria-current"?: never;
}
export type PrimaryButtonProps = PrimaryButtonLinkProps | PrimaryButtonClickProps;
export declare const PrimaryButton: (props: PrimaryButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PrimaryButton.d.ts.map