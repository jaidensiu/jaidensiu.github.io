declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const frontmatter: {
    title: string
    date: string
    subtitle?: string
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
