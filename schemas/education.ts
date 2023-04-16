
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string'
        }),
        defineField({
            name: 'time',
            title: 'Time',
            type: 'string',
        }),
        defineField({
            name: 'place',
            title: 'Place',
            type: 'string'
        }),
        defineField({
            name: 'info',
            title: 'Info',
            type: 'string'
        }),
    ]
})
