import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'place',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required().min(rule.valueOfField('startDate')),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brief',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'registrationLink',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventpriceTagline',
      title: 'Pricing Page Tagline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'Price',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'actionText',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'actionLink',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
            defineField({
              name: 'currency',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'features',
              type: 'array',
              of: [{type: 'string'}],
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})
