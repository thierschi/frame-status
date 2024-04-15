import { z } from 'zod';

export const photoparadiesFormSchema = z.object({
    storeId: z.string().regex(/^\d+$/),
    orderId: z.string().regex(/^\d+$/),
});
