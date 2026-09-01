import { routeTree } from "@explorer/route-tree";
import { createRouter } from "@tanstack/react-router";

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    // eslint-disable-next-line @typescript-eslint/naming-convention -- имя интерфейса фиксировано контрактом TanStack Router
    interface Register {
        router: typeof router;
    }
}
