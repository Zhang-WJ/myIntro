import { createRouter, defineRoute } from "type-route";
import { makeThisModuleAnExecutableRouteLister } from "github-pages-plugin-for-type-route";

export const routeDefs = {
    /*
        If you are using a custom domain name,
        set the home route definition to <defineRoute("/")>
    */
    "home": defineRoute("/home"),
    "pearls-algorithm": defineRoute("/pearls-algorithm"),
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const { RouteProvider, routes, useRoute } = createRouter(routeDefs);