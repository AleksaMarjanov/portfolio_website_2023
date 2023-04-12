import sanityClient, { createClient } from "@sanity/client";

export const projectId = process.env.projectId;
export const dataset = process.env.NEXT_APP_SANITY_DATASET || "production";
const apiVersion = process.env.apiVersion

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

