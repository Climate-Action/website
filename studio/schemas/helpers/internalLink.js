import React from 'react'

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  description: 'Locate a document you want to link to',
  type: 'reference',
  to: [{ type: 'page' }, { type: 'route' }],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
}
