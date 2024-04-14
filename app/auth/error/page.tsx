import AuthWrapper from '@/app/components/auth-wrapper';
import { NavButton } from '@/app/components/nav-components';
import _ from 'lodash';
import { LogIn } from 'lucide-react';
import { useMemo } from 'react';

interface Props {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}
export default async function SignInRoute({ params, searchParams }: Props) {
    const errorMessage = useMemo(() => {
        if (!_.isUndefined(searchParams) && !_.isUndefined(searchParams.error))
            return `An authentication related error occured. Try signing in again. (${searchParams.error})`;
        return `An unkown error occured. Try signing in again.`;
    }, [searchParams]);

    return (
        <AuthWrapper>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Error
            </h2>
            <p className="text-sm text-muted-foreground text-center">
                {errorMessage}
            </p>
            <div className="h-6"></div>
            <NavButton path="/auth/signin">
                <LogIn className="w-4 mr-5" /> Sign in
            </NavButton>
        </AuthWrapper>
    );
}
