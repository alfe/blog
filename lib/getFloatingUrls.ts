const getFloatingUrls = (url?: string): string[] => {
  if (!url) return [];
  const match = url.match(/^<p><a href="(https?:\/\/[\w!\?/\+\-_~=;\.,\*&@#\$%\(\)'\[\]]+)">(.*)<\/a>/img);
  if (!match) return [];
  const singleLineUrls = match
    .map((line) => {
      // line: '<p><a href="https://github.com/alfe/blog">https://github.com/alfe/blog</a>'
      const result = line.replace('<p><a href="', '').replace('</a>', '').split('">')
      return result; // result: ['https://github.com/alfe/blog', 'https://github.com/alfe/blog']
    })
    .filter(([href, children]) => href === children)
    .map(([href, children]) => href)
  return singleLineUrls;
};

export default getFloatingUrls;