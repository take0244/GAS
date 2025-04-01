/**
   * @typedef {Object} RequestOptions - HTTPリクエストのオプション
   * @property {string} [url] - url
   * @property {string} [method=get] - HTTPメソッド（デフォルトは"get"）
   * @property {object} [payload] - HTTPリクエストのペイロード
   * @property {object} [headers] - HTTPリクエストのヘッダー
   * @property {object} [body=options.payload] - HTTPリクエストのボディ
   * @param   {RequestOptions} options - HTTPリクエストのオプション
   * @returns {HTTPResponse} - HTTPレスポンスオブジェクト
   * @throws  {Error} - エラーが発生した場合は、エラーメッセージを投げます。
   */
const doFetch = (options, debug=false) => {
  const { url, method = 'get', payload } = options;

  if (debug) {
     Logger.log(
      `Request -> Path: ${url}\nMethod: ${method}\nPayload: ${JSON.stringify(payload)}\nHeaders ${JSON.stringify(options.headers)}`
    );
  }

  const response = UrlFetchApp.fetch(
    url,
    {
      muteHttpExceptions: true,
      ...options,
      method,
      payload,
    },
  );

  if (debug) {
     Logger.log(
      `Response -> Path: ${url}\nMethod: ${method}\nCode: ${response.getResponseCode()}\nHeader: ${JSON.stringify(response.getHeaders())}`
    );
  }

  return response;
}

/** 
  * @param   {RequestOptions} options - HTTPリクエストのオプション
  * @returns {HTTPResponse} - HTTPレスポンスオブジェクト
  * @throws  {Error} - エラーが発生した場合は、エラーメッセージを投げます。
  */
const jsonFetch = (options, debug) => JSON.parse(doFetch({
  ...options,
  headers: {
    ...options.headers,
    'Content-Type': 'application/json',
  },
}, debug).getContentText());


/** 
  * @param   {Array<any>} arr - 配列
  */
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
