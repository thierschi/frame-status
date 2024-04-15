'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const photoparadiesFormShema = z.object({
    storeId: z.string().regex(/^\d+$/),
    orderId: z.string().regex(/^\d+$/),
});

export default function PhotoparadiesForm(): JSX.Element {
    const router = useRouter();
    const form = useForm<z.infer<typeof photoparadiesFormShema>>({
        resolver: zodResolver(photoparadiesFormShema),
        defaultValues: {
            storeId: '',
            orderId: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof photoparadiesFormShema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    // 2. Define a submit handler.
    function onCancel() {
        form.reset();
        router.back();
    }

    return (
        <Card className="p-6">
            <CardTitle className="text-xl">Add Photoparadies Order</CardTitle>
            <CardDescription>
                Create a new tracker for a photoparadies order.
            </CardDescription>
            <CardContent className="p-0 pt-4">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="storeId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Store ID</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0000"
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is the ID of the dm-store where you
                                        placed your order.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="orderId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Order ID</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="000000"
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is the ID of your order.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-row gap-2">
                            <Button type="submit">
                                <Plus className="w-4 mr-2" />
                                Add
                            </Button>
                            <Button
                                type="button"
                                onClick={onCancel}
                                variant="secondary"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
