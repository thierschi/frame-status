'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';

interface Props {
    callbackUrl: string;
}
export default function SignInWithGithub({ callbackUrl }: Props) {
    return (
        <Button
            onClick={() =>
                signIn('github', {
                    callbackUrl: callbackUrl,
                })
            }
        >
            <Github className="w-4 mr-5" />
            Login with GitHub
        </Button>
    );
}
