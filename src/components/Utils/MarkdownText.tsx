type MarkdownPart =
  | { type: 'link'; text: string; url: string }
  | { type: 'text'; content: string }

function parseMarkdownLinks(text: string): MarkdownPart[] {
  const parts: MarkdownPart[] = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match = regex.exec(text)

  while (match !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex, match.index),
      })
    }

    parts.push({
      type: 'link',
      text: match[1],
      url: match[2],
    })

    lastIndex = regex.lastIndex
    match = regex.exec(text)
  }

  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.slice(lastIndex),
    })
  }

  return parts.length > 0 ? parts : [{ type: 'text', content: text }]
}

const MarkdownText = ({ children }: { children: string }) => {
  const parts = parseMarkdownLinks(children)

  return (
    <>
      {parts.map((part, index) => {
        if (part.type === 'link') {
          return (
            <a
              key={`${part.url}-${part.text}-${index}`}
              href={part.url}
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              {part.text}
            </a>
          )
        }
        return <span key={`text-${index}`}>{part.content}</span>
      })}
    </>
  )
}

export default MarkdownText
