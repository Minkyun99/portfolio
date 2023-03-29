require("dotenv").config();
const { Server } = require("socket.io");
const express = require("express");
const history = require("connect-history-api-fallback");
const path = require("path");
const logger = require("morgan");
const http = require("http");
const cookieParser = require("cookie-parser");
// const VueCookies = require('vue-cookies')
const { createProxyMiddleware } = require("http-proxy-middleware");
const VSchema = require("./mdb.cjs");
const Counter_Schema = require("./mdb.cjs");
const Board_Schema = require("./board_db.js");
const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(history());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(VueCookies())
// app.$cookies.config('7d')

app.use(
  createProxyMiddleware("/v1", {
    target: "https://openapi.naver.com",
    changeOrigin: true,
  })
);

const port = 3000;
const _path = path.join(__dirname, "./dist");

app.use("/", express.static(_path));
app.use(logger("tiny"));

const sanitizeHtml = require("sanitize-html");

const sanitizeOption = {
  allowedTags: [
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    // We don't currently allow img itself by default, but
    // these attributes would make sense if we did.
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
  },
  // Lots of these won't come up by default because we don't allow them
  selfClosing: [
    "img",
    "br",
    "hr",
    "area",
    "base",
    "basefont",
    "input",
    "link",
    "meta",
  ],
  // URL schemes we permit
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: true,
  enforceHtmlBoundary: false,
};

exports.sanitizer = (req, res, next) => {
  const filtered = sanitizeHtml(req.body.content, sanitizeOption); // 게시글 내용 req.body.content를 sanitize하여 결과 문자열을 변수에 저장
  filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`; // 게시글 내용은 200자 제한이 있다면
  req.filtered = filtered; // 새로만든 req.filtered 객체에 소독한 문자열을 저장
  next(); // 다음 미들웨어로
};

app.listen(port, () => {
  console.log(port + "에서 서버동작 완료.");
});
