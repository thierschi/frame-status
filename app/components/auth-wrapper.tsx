import ShowToast from '@/app/components/show-toast';
import { Card } from '@/components/ui/card';
import _ from 'lodash';

interface Props {
    error?: {
        title: string;
        description: string;
    };
    children: React.ReactNode;
}
export default async function AuthWrapper({ error, children }: Props) {
    const img = await fetch(
        `https://api.unsplash.com/photos/random?topics=hmenvQhUmxM&orientation=landscape&content_filter=low&client_id=${process.env.UNSPLASH_SECRET}`,
        { next: { revalidate: 120 } }
    );
    const res = await img.json();

    return (
        <div
            className="w-screen h-screen flex items-center justify-center"
            style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${res.urls.regular}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <Card
                style={{ width: '15vw', maxWidth: '400px', minWidth: '300px' }}
            >
                <div className="flex flex-col items-center p-6 pt-10">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        ft
                    </h2>
                    <div className="h-12"></div>
                    {children}
                    <div className="h-12"></div>
                    <p className="text-sm text-muted-foreground text-center">
                        Background by{' '}
                        <a
                            href={`${res.user.links.html}?utm_src=frame-status&utm_medium=referral`}
                            className="underline"
                        >
                            {res.user.name}
                        </a>{' '}
                        on{' '}
                        <a
                            href={`https://unsplash.com?utm_src=frame-status&utm_medium=referral`}
                            className="underline"
                        >
                            Unsplash
                        </a>
                    </p>
                </div>
            </Card>
            {!_.isUndefined(error) && (
                <ShowToast
                    toast={{
                        variant: 'destructive',
                        title: error.title,
                        description: error.description,
                        duration: 8000,
                    }}
                />
            )}
        </div>
    );
}
