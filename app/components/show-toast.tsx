'use client';

import { toast } from '@/components/ui/use-toast';

interface Props {
    toast: Parameters<typeof toast>[0];
}
export default function ShowToast({ toast: toastParams }: Props): JSX.Element {
    toast(toastParams);

    return <></>;
}
