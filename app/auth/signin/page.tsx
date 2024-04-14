import AuthWrapper from '@/app/components/auth-wrapper';
import { authOptions } from '@/app/utils/auth';
import _ from 'lodash';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SignInWithGithub from '../../components/sign-in-with-github';

interface Props {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}
export default async function SignInRoute({ params, searchParams }: Props) {
    const error =
        !_.isUndefined(searchParams) && !_.isUndefined(searchParams.error)
            ? {
                  title: "Couldn't sign in",
                  description: `An error occured while signing in. Please try again. (${searchParams.error})`,
              }
            : undefined;

    const callbackUrl =
        !_.isUndefined(searchParams) &&
        !_.isUndefined(searchParams.callbackUrl) &&
        _.isString(searchParams.callbackUrl)
            ? searchParams.callbackUrl
            : `${_.toString(process.env.FRAME_STATUS_URL)}/dashboard`;

    const session = await getServerSession(authOptions);
    if (!_.isNull(session)) {
        redirect(callbackUrl);
    }

    return (
        <AuthWrapper error={error}>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Sign In
            </h2>
            <p className="text-sm text-muted-foreground text-center">
                To continue sign in with
                <br />
                one of the following options
            </p>
            <div className="h-6"></div>
            <SignInWithGithub callbackUrl={callbackUrl} />
        </AuthWrapper>
    );
}
