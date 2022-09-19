const getFloatingUrls = (url?: string): string[] => {
  if (!url) return [];
  const result: string[] = [];
  const match = url.match(/^<p>(https?:\/\/[\w!\?/\+\-_~=;\.,\*&@#\$%\(\)'\[\]]+)<\/p>/img);
  if (!match) return [];
  return match.map(urlRow => urlRow.replace('<p>', '').replace('</p>', ''));
};

export default getFloatingUrls;