import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import BlogPost from './components/Blogposts/BlogPost'
import Coop, { frontmatter as coopMeta } from './components/Blogposts/Coop.mdx'
import ResumeGuide, { frontmatter as resumeGuideMeta } from './components/Blogposts/ResumeGuide.mdx'
import BmegElectivesGuide, { frontmatter as bmegMeta } from './components/Blogposts/BmegElectivesGuide.mdx'

const posts = [
  { name: 'Coop', Content: Coop, meta: coopMeta },
  { name: 'ResumeGuide', Content: ResumeGuide, meta: resumeGuideMeta },
  { name: 'BmegElectivesGuide', Content: BmegElectivesGuide, meta: bmegMeta },
]

test.each(posts)('$name renders its frontmatter title', ({ Content, meta }) => {
  const { container } = render(
    <BlogPost meta={meta}>
      <Content />
    </BlogPost>,
  )
  expect(meta.title.length).toBeGreaterThan(0)
  expect(container.textContent).toContain(meta.title)
})

test.each(posts)('$name: every in-page TOC anchor resolves to a heading id', ({ Content, meta }) => {
  const { container } = render(
    <BlogPost meta={meta}>
      <Content />
    </BlogPost>,
  )
  const anchors = Array.from(container.querySelectorAll('a[href^="#"]'))
  expect(anchors.length).toBeGreaterThan(0)
  for (const anchor of anchors) {
    const id = anchor.getAttribute('href')!.slice(1)
    expect(
      container.querySelector(`#${CSS.escape(id)}`),
      `"${anchor.textContent}" links to #${id}, but no element has that id`,
    ).not.toBeNull()
  }
})
