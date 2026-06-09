// 书本目录（唐纳德 1-13 + 原研哉 14-29）
var ols = [
  {"caption": "唐纳德设计手册 · 封面", "page": "1"},
  {"caption": "衬页", "page": "2"},
  {"caption": "扉页 · 显隐之间", "page": "3"},
  {"caption": "第一章 · 设计的本质", "page": "4"},
  {"caption": "第二章 · 简洁的力量", "page": "5"},
  {"caption": "第三章 · 形式与功能", "page": "6"},
  {"caption": "第四章 · 色彩与感知", "page": "7"},
  {"caption": "第五章 · 留白的艺术", "page": "8"},
  {"caption": "第六章 · 对比与平衡", "page": "9"},
  {"caption": "第七章 · 网格系统", "page": "10"},
  {"caption": "第八章 · 版式构成", "page": "11"},
  {"caption": "封底 · 唐纳德", "page": "12"},
  {"caption": "结束页", "page": "13"},
  {"caption": "原研哉设计手册 · 封面", "page": "14"},
  {"caption": "衬页", "page": "15"},
  {"caption": "扉页 · 设计的设计", "page": "16"},
  {"caption": "第一章 · 设计原点", "page": "17"},
  {"caption": "第二章 · 白之美学", "page": "18"},
  {"caption": "第三章 · 空与间", "page": "19"},
  {"caption": "第四章 · 感官设计", "page": "20"},
  {"caption": "第五章 · 材料对话", "page": "21"},
  {"caption": "第六章 · 信息建筑", "page": "22"},
  {"caption": "第七章 · 无形之形", "page": "23"},
  {"caption": "第八章 · 文化符号", "page": "24"},
  {"caption": "第九章 · 自然启示", "page": "25"},
  {"caption": "第十章 · 未来设计", "page": "26"},
  {"caption": "第十一章 · 设计之心", "page": "27"},
  {"caption": "封底 · 原研哉", "page": "28"},
  {"caption": "结束页", "page": "29"},
];

var loadImgpath = "./files/thumb/"
bookConfig.largePath = loadImgpath
bookConfig.normalPath = loadImgpath
bookConfig.thumbPath = loadImgpath
bookConfig.totalPageCount = ols.length
