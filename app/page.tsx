import { getServerSession } from 'next-auth';
import { NavButton } from './components/nav-components';
import { authOptions } from './utils/auth';

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
        <div className="p-10">
            <h1>Hello index public</h1>
            {session ? (
                <>
                    <h3>You&apos;re logged in</h3>
                    <NavButton path="/auth/signout">Sign out</NavButton>
                </>
            ) : (
                <>
                    <h3>Not logged in</h3>

                    <NavButton path="/auth/signin">Sign in</NavButton>
                </>
            )}
        </div>
    );
}
