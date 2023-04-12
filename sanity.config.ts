import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
//
const projectId = process.env.projectId!;
const dataset = process.env.sanity_dataset!;

// const projectId = process.env.NEXT_APP_SANITY_PROJECT_ID!;
// const dataset = process.env.NEXT_APP_SANITY_DATASET!;

export default defineConfig({
    basePath: "/studio",
    name: 'Marjanov_Portfolio_Content_Studio',
    title: 'Marjanov Portfolio Content Studio',
    projectId,
    dataset,
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
})
