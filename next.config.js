/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        projectId: process.env.NEXT_APP_SANITY_PROJECT_ID,
        apiVersion: process.env.NEXT_APP_SANITY_API_VERSION,
        sanity_dataset: process.env.NEXT_APP_SANITY_DATASET,
        emailJs_service: process.env.NEXT_APP_EMAILJS_SERVICE,
        emailJs_template: process.env.NEXT_APP_EMAILJS_TEMPLATE,
        emailJs_API: process.env.NEXT_APP_EMAILJS_API_KEY,
        leafletApi: process.env.NEXT_APP_LEAFLET_API_KEY,
    },
}


module.exports = nextConfig
