'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { MenubarItem } from '@/components/ui/menubar';
import { useRouter } from 'next/navigation';

type NavButtonProps = {
    path: string;
    children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof Button>, 'onClick'>;
export function NavButton({
    path,
    children,
    ...buttonProps
}: NavButtonProps): JSX.Element {
    const router = useRouter();
    return (
        <Button onClick={() => router.replace(path)} {...buttonProps}>
            {children}
        </Button>
    );
}

type NavDropdownMenuItemProps = {
    path: string;
    children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof DropdownMenuItem>, 'onClick'>;
export function NavDropdownMenuItem({
    path,
    children,
    ...dropdownMenuItemProps
}: NavDropdownMenuItemProps): JSX.Element {
    const router = useRouter();
    return (
        <DropdownMenuItem
            onClick={() => router.push(path)}
            {...dropdownMenuItemProps}
        >
            {children}
        </DropdownMenuItem>
    );
}

type NavMenubarItemProps = {
    path: string;
    children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof MenubarItem>, 'onClick'>;
export function NavMenubarItem({
    path,
    children,
    ...menubarItemProps
}: NavMenubarItemProps): JSX.Element {
    const router = useRouter();
    return (
        <MenubarItem onClick={() => router.push(path)} {...menubarItemProps}>
            {children}
        </MenubarItem>
    );
}
