export default {
  name: 'resim',
  title: 'Resim',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation : (Rule) => Rule.max(300) 
    },
    {
      title: 'Image Date',
      name: 'imagedate',
      type: 'date'
    }
  ],
  preview: {
    select: {
      media: 'image',
      subtitle: 'description',
      date: 'imagedate'
    },
  },
}
