function newLine(token) {
  return new Line(token);
}

class Line {
  constructor(token) {
    this.token = token;
  }

  postMessage(text, to) {
    return jsonFetch({
      url: `https://api.line.me/v2/bot/message/push`,
      payload: JSON.stringify({
        to       : to,
        messages : [{ type : 'text', text }],
      }),
      headers: {
        Authorization  : `Bearer ${this.token}`,
      },
    }, true);
  }
}