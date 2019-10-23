import React from 'react'

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      name: 'path',
      type: 'string',
      title: 'Path',
      description:
        'Locate a document you want to link to (For now, just write the path, eg. /tools or /participate)',
    },
  ],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
}
