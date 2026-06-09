// 书本目录（唐纳德 1-13 + 原研哉 14-29）
var ols = [
  {"caption": "封面 · 唐纳德", "page": "1"},
  {"caption": "白页", "page": "2"},
  {"caption": "扉页", "page": "3"},
  {"caption": "第 1 节", "page": "4"},
  {"caption": "第 2 节", "page": "5"},
  {"caption": "第 3 节", "page": "6"},
  {"caption": "第 4 节", "page": "7"},
  {"caption": "第 5 节", "page": "8"},
  {"caption": "第 6 节", "page": "9"},
  {"caption": "第 7 节", "page": "10"},
  {"caption": "第 8 节", "page": "11"},
  {"caption": "封底 · 唐纳德", "page": "12"},
  {"caption": "白页", "page": "13"},
  {"caption": "封面 · 原研哉", "page": "14"},
  {"caption": "灰页", "page": "15"},
  {"caption": "扉页", "page": "16"},
  {"caption": "第 1 节", "page": "17"},
  {"caption": "第 2 节", "page": "18"},
  {"caption": "第 3 节", "page": "19"},
  {"caption": "第 4 节", "page": "20"},
  {"caption": "第 5 节", "page": "21"},
  {"caption": "第 6 节", "page": "22"},
  {"caption": "第 7 节", "page": "23"},
  {"caption": "第 8 节", "page": "24"},
  {"caption": "第 9 节", "page": "25"},
  {"caption": "第 10 节", "page": "26"},
  {"caption": "第 11 节", "page": "27"},
  {"caption": "封底 · 原研哉", "page": "28"},
  {"caption": "灰页", "page": "29"},
];

// 路径配置
var loadImgpath = "./files/thumb/"

bookConfig.largePath = loadImgpath
bookConfig.normalPath = loadImgpath
bookConfig.thumbPath = loadImgpath
bookConfig.totalPageCount = ols.length
