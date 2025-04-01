function postNote() {
  const x = newTwitterV2((url) => {
    const line = newLine(PropertiesService.getScriptProperties().getProperty("LINE_TOKEN"));
    line.postMessage(url, PropertiesService.getScriptProperties().getProperty("LINE_ID_1"));
  });
  const articles = Note.getArticles(PropertiesService.getScriptProperties().getProperty("NOTE_ID"));
  const article = randChoice(articles);
  x.postMessage(`${article.title}
  ${article.link}
#駆け出しエンジニア
#駆け出しエンジニアと繋がりたい
#プログラミング
#プログラミング初心者
#プログラミング初学者
#プログラミングできない
  `);
}

