
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string'
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'companyLink',
            title: 'Company Link',
            type: 'string'
        }),
        defineField({
            name: 'dateStarted',
            title: 'date Started',
            type: 'date'
        }),
        defineField({
            name: 'dateEnded',
            title: 'date Ended',
            type: 'date'
        }),
        defineField({
            name: 'isCurrentlyWorkingHere',
            title: 'is Currently Working Here',
            type: 'boolean'
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string'
        }),
        defineField({
            name: 'work',
            title: 'Work',
            type: 'string'
        }),
        // defineField({
        //     name: 'image',
        //     title: 'Image',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        // }),
    ]
})
