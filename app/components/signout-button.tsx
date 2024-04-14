'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
    return (
        <Button
            variant="destructive"
            onClick={() =>
                signOut({
                    callbackUrl: `${window.location.origin}`,
                })
            }
        >
            <LogOut className="w-4 mr-5" />
            Sign Out
        </Button>
    );
}
