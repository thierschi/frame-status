import ContentWrapper from '@/app/components/content-wrapper';
import PhotoparadiesForm from '@/app/forms/photoparadies';
import { PageProps } from '@/app/model/next';

import { notFound } from 'next/navigation';

const trackerTypes = ['photoparadies'];

type Props = PageProps;
export default function Page({ params }: Props) {
    if (trackerTypes.indexOf(params.slug) === -1) {
        notFound();
    }

    return (
        <ContentWrapper>
            <PhotoparadiesForm />
        </ContentWrapper>
    );
}
