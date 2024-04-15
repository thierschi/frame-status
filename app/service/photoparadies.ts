import { photoparadiesOrderStatusValidator } from '../model/photoparadies';
import { sleep } from '../utils/sleep';

export default class PhotoparadiesAPI {
    static async fetchOrderStatus(
        storeId: string | number,
        orderId: string | number
    ) {
        let dmResponse: Response;

        for (
            let i = 0;
            (dmResponse = await fetch(
                `https://spot.photoprintit.com/spotapi/orderInfo/forShop?config=1320&shop=${storeId}&order=${orderId}`
            )).status === 429;
            i++
        ) {
            if (i > 10) {
                throw new Error(
                    'DM API is still rate limiting after 10 retries. Aborting.'
                );
            }
            await sleep(10 * 1000);
        }

        const dmOrderStatus = await dmResponse.json();

        return await photoparadiesOrderStatusValidator.parseAsync(
            dmOrderStatus
        );
    }
}
