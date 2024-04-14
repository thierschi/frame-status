'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type Props = {
    path: string;
    children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof Button>, 'onClick'>;
export default function NavButton({
    path,
    children,
    ...buttonProps
}: Props): JSX.Element {
    const router = useRouter();
    return (
        <Button onClick={() => router.replace(path)} {...buttonProps}>
            {children}
        </Button>
    );
}
