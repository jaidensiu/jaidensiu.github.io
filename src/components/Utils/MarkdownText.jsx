const MarkdownText = ({ children }) => {
  // eslint-disable-next-line no-use-before-define
  const parts = parseMarkdownLinks(children);

  return (
    <>
      {parts.map((part) => {
        if (part.type === 'link') {
          return (
            <a
              key={`${part.url}-${part.text}`}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {part.text}
            </a>
          );
        }
        return <span key={part.content}>{part.content}</span>;
      })}
    </>
  );
};

function parseMarkdownLinks(text) {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  match = regex.exec(text);
  while (match !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex, match.index)
      });
    }

    parts.push({
      type: 'link',
      text: match[1],
      url: match[2]
    });

    lastIndex = regex.lastIndex;
    match = regex.exec(text);
  }

  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.slice(lastIndex)
    });
  }

  return parts.length > 0 ? parts : [{ type: 'text', content: text }];
}

export default MarkdownText;
