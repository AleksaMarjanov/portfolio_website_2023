
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'paragraph1',
            title: 'Paragraph 1',
            type: 'string'
        }),
        defineField({
            name: 'paragraph2',
            title: 'Paragraph 2',
            type: 'string',
        }),
        defineField({
            name: 'paragraph3',
            title: 'Paragraph3',
            type: 'string'
        }),
    ]
})

