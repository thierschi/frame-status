import { photoparadiesFormSchema } from '@/app/model/formsSchemas';
import { photoparadiesOrderStatusValidator } from '@/app/model/photoparadies';
import { authOptions } from '@/app/utils/auth';
import prisma from '@/app/utils/db';
import _ from 'lodash';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const dataValidator = z.object({
    data: photoparadiesFormSchema,
    order: photoparadiesOrderStatusValidator,
});

export async function POST(req: Request): Promise<Response | void> {
    const session = await getServerSession(authOptions);

    if (
        _.isNull(session) ||
        _.isUndefined(session.user) ||
        _.isUndefined(session.user.email)
    ) {
        return new NextResponse(null, {
            status: 401,
        });
    }

    const body = await req.json();
    const parseResult = dataValidator.safeParse(body);
    if (!parseResult.success) {
        console.log(parseResult.error);
        return new NextResponse(null, {
            status: 400,
        });
    }
    const data = parseResult.data;

    const tracker = await prisma.tracker.create({
        data: {
            ownerId: session.user.id!,
        },
    });
    const order = await prisma.photoparadiesOrder.create({
        data: {
            trackerId: tracker.id,
            storeId: data.data.storeId,
            orderId: data.data.orderId,
            store: data.order.deliveryText,
            status: data.order.summaryStateCode,
            statusInfo: data.order.summaryStateText,
            orderDate: !!data.order.orderDate
                ? new Date(data.order.orderDate).toISOString()
                : undefined,
            price: data.order.summaryPrice,
            lastRefresh: !!data.order.resultDateTime
                ? new Date(data.order.resultDateTime).toISOString()
                : undefined,
            statusDate: !!data.order.summaryDate
                ? new Date(data.order.summaryDate).toISOString()
                : undefined,
            positions: JSON.stringify(data.order.subOrders),
        },
    });

    return Response.json({
        msg: `Hello ${session?.user?.name}`,
    });
}
