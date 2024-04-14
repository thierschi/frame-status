import ContentWrapper from '@/app/components/content-wrapper';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Page() {
    const ids: number[] = [];
    for (let i = 0; i < 100; i++) {
        ids.push(i);
    }

    return (
        <ContentWrapper>
            <Card className="p-4">
                <CardTitle className="text-xl">
                    New Photoparadies Order
                </CardTitle>
                <CardDescription>
                    Create a new tracker for a photoparadies order.
                </CardDescription>
                <CardContent className="p-0 pt-4">
                    <form>
                        <Label>Store ID</Label>
                        <Input />
                        <label>Order ID</label>
                        <Input />
                    </form>
                </CardContent>
            </Card>
        </ContentWrapper>
    );
}
