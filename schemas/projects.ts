import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'string'
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url'
        }),
        defineField({
            name: 'github',
            title: 'Github',
            type: 'url'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
})
