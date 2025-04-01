class Note {
  static getArticles(id) {
    const data = doFetch({ url: `https://note.com/${id}/rss` });
    const xml = XmlService.parse(data.getContentText());
    const entries = xml.getRootElement().getChildren('channel')[0].getChildren('item');
    return entries.map(entry => ({
      title : entry.getChildText("title"),
      link  : entry.getChildText("link"),
    }));
  }
}
