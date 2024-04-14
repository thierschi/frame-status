import AuthWrapper from '@/app/components/auth-wrapper';
import SignOutButton from '@/app/components/signout-button';
import _ from 'lodash';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface Props {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}
export default async function SignOutRoute({ searchParams }: Props) {
    const session = await getServerSession();
    if (_.isNull(session)) {
        redirect(_.toString(process.env.FRAME_STATUS_URL));
    }

    const error =
        !_.isUndefined(searchParams) && !_.isUndefined(searchParams.error)
            ? {
                  title: "Couldn't sign in",
                  description: `An error occured while signing in. Please try again. (${searchParams.error})`,
              }
            : undefined;

    return (
        <AuthWrapper error={error}>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Sign out
            </h2>
            <p className="text-sm text-muted-foreground text-center">
                Are you sure you want to leave already?
            </p>
            <div className="h-6"></div>
            <SignOutButton />
            <div className="h-3"></div>
            <p className="text-sm text-muted-foreground text-center">
                {session.user?.name}
                <br />({session.user?.email})
            </p>
        </AuthWrapper>
    );
}
