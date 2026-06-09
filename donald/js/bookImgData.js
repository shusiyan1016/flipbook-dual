// 书本目录
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
];

// 路径配置
var loadImgpath = "./files/thumb/"

bookConfig.largePath = loadImgpath
bookConfig.normalPath = loadImgpath
bookConfig.thumbPath = loadImgpath
bookConfig.totalPageCount = ols.length