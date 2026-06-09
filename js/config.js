var aliasLanguage = {
  frmPrintbtn: ["frmPrintCaption"],
  frmPrintall: ["frmPrintPrintAll"],
  frmPrintcurrent: ["frmPrintPrintCurrentPage"],
  frmPrintRange: ["frmPrintPrintRange"],
  frmPrintexample: ["frmPrintExampleCaption"],
  btnLanguage: ["btnSwicthLanguage"],
  btnTableOfContent: ["btnBookMark"],
  btnExitFullscreen: ["btnDisableFullScreen"],
  btnFullscreen: ["btnFullScreen"],
  btnHome: ["homebtnHelp"],
  btnMore: ["btnMoreOptionsLeft"],
  frmToc: ["btnBookMark"],
  frmSearch: ["btnSearch"],
  frmLinkLabel: ["lblLink"]
};

var bookConfig = {
  bookPageStretch: true,
  maxHeightToSmallMode: 360,
  appName: '显隐之间 · 设计的设计',
  totalPageCount: 0,
  largePageWidth: 2239,
  largePageHeight: 1579,
  normalPath: "",
  largePath: "",
  thumbPath: "",
  ToolBarsSettings: "",
  TitleBar: "",
  appLogoLinkURL: "",
  bookTitle: "显隐之间 · 设计的设计",
  bookDescription: "唐纳德 × 原研哉 设计手册合辑",
  ButtonsBar: "",
  ShareButton: "",

  ThumbnailsButton: "",
  ThumbnailsButtonVisible: "Show",
  ZoomButton: "",
  ZoomButtonVisible: "YES",
  FlashDisplaySettings: "",
  MainBgConfig: "",
  bgBeginColor: "#e8ddd0",
  bgEndColor: "#d8c8b8",
  bgMRotation: 45,
  pageBackgroundColor: "#e8ddd0",
  flipshortcutbutton: "Show",
  BookMargins: "",
  topMargin: 0,
  bottomMargin: 0,
  leftMargin: 0,
  rightMargin: 0,
  HTMLControlSettings: "",
  linkconfig: "",
  LinkDownColor: "#808080",
  LinkAlpha: 0.5,
  OpenWindow: "_Blank",

  BookMarkButtonVisible: 'true',
  productName: '显隐之间 · 设计的设计',
  homePage: '',
  isFlipPdf: "true",
  TableOfContentButtonVisible: "true",
  searchTextJS: 'javascript/search_config.js',
  searchPositionJS: "javascript/text_position[%d].js"
};

shareObj = [{
  "name": "QQ空间",
  "url": "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}",
  "logo": "./pdfReader/images/qzone.ico",
  "title": "QQ空间"
},
{
  "name": "新浪微博",
  "url": "http://v.t.sina.com.cn/share/share.php?url=${url}&title=${title}",
  "logo": "./pdfReader/images/sina_weibo.ico",
  "title": "新浪微博"
}];

bookConfig.loadingCaptionColor = "#ffffff";
bookConfig.loadingPicture = "";
bookConfig.loadingBackground = "#1a1a1a";
bookConfig.appLogoIcon = "";
bookConfig.appLogoLinkURL = "";
bookConfig.appLogoOpenWindow = "Blank";
bookConfig.logoHeight = "40";
bookConfig.logoPadding = "0";
bookConfig.logoTop = "0";
bookConfig.toolbarColor = "#f0ece4";
bookConfig.iconColor = "#8b7355";
bookConfig.pageNumColor = "#8b7355";
bookConfig.iconFontColor = "#ffffff";
bookConfig.toolbarAlwaysShow = "No";
bookConfig.formFontColor = "#ffffff";
bookConfig.formBackgroundColor = "#27181a";
bookConfig.buttonsSortXML = [];
bookConfig.InstructionsButtonVisible = "Show";
bookConfig.showBookInstructionOnStart = "False";
bookConfig.showInstructionOnStart = "No";
bookConfig.showGotoButtonsAtFirst = "No";
bookConfig.QRCode = "Hide";
bookConfig.HomeButtonVisible = "Hide";
bookConfig.HomeURL = "%first page%";
bookConfig.aboutButtonVisible = "Hide";
bookConfig.aboutContactInfoTxt = "";
bookConfig.enablePageBack = "Hide";
bookConfig.ShareButtonVisible = "Hide";
bookConfig.socialShareSetting = "";
bookConfig.isInsertFrameLinkEnable = "Show";
bookConfig.addCurrentPage = "No";
bookConfig.EmailButtonVisible = "Hide";
bookConfig.btnShareWithEmailSubject = "";
bookConfig.btnShareWithEmailBody = "{link}";
bookConfig.ThumbnailsButtonVisible = "Show";
bookConfig.thumbnailColor = "#333333";
bookConfig.thumbnailAlpha = "70";
bookConfig.BookMarkButtonVisible = "Hide";
bookConfig.TableOfContentButtonVisible = "Show";
bookConfig.isHideTabelOfContentNodes = "Yes";
bookConfig.SearchButtonVisible = "Show";
bookConfig.leastSearchChar = "2";
bookConfig.searchFontColor = "#ffffff";
bookConfig.searchKeywordFontColor = "#ffb000";
bookConfig.searchHightlightColor = "#fdc606";
bookConfig.SelectTextButtonVisible = "Hide";
bookConfig.SelectTextButtonIcon = "";
bookConfig.PrintButtonVisible = "Hide";
bookConfig.printWatermarkFile = "";
bookConfig.BackgroundSoundButtonVisible = "Hide";
bookConfig.FlipSound = "No";
bookConfig.BackgroundSoundURL = "";
bookConfig.BackgroundSoundLoop = "-1";
bookConfig.AutoPlayButtonVisible = "Show";
bookConfig.autoPlayAutoStart = "No";
bookConfig.autoPlayDuration = "3";
bookConfig.autoPlayLoopCount = "1";
bookConfig.ZoomButtonVisible = "Show";
bookConfig.maxZoomWidth = "0";
bookConfig.defaultZoomWidth = "0";
bookConfig.mouseWheelFlip = "Yes";
bookConfig.DownloadButtonVisible = "Hide";
bookConfig.DownloadURL = "";
bookConfig.downloadConfig = "";
bookConfig.PhoneButtonVisible = "Hide";
bookConfig.PhoneButtonIcon = "";
bookConfig.PhoneNumbers = [];
bookConfig.AnnotationButtonVisible = "Hide";
bookConfig.FullscreenButtonVisible = "Hide";
bookConfig.WeChatShareButtonVisible = "Hide";
bookConfig.WeChatShareButtonIcon = "";
bookConfig.textClarityEnhancement = "0";
bookConfig.bgBeginColor = "#e8ddd0";
bookConfig.bgEndColor = "#d8c8b8";
bookConfig.bgMRotation = "90";
bookConfig.backGroundImgURL = "";
bookConfig.backgroundPosition = "Stretch";
bookConfig.backgroundOpacity = "100";
bookConfig.backgroundScene = "None";
bookConfig.LeftShadowWidth = "100";
bookConfig.LeftShadowAlpha = "1";
bookConfig.RightShadowWidth = "40";
bookConfig.RightShadowAlpha = "1";
bookConfig.ShowTopLeftShadow = "Yes";
bookConfig.HardPageEnable = "No";
bookConfig.hardCoverBorderWidth = "0";
bookConfig.borderColor = "#e8ddd0";
bookConfig.outerCoverBorder = "No";
bookConfig.cornerRound = "0";
bookConfig.leftMarginOnMobile = "0";
bookConfig.topMarginOnMobile = "0";
bookConfig.rightMarginOnMobile = "0";
bookConfig.bottomMarginOnMobile = "0";
bookConfig.pageBackgroundColor = "#e8ddd0";
bookConfig.flipshortcutbutton = "Show";
bookConfig.BindingType = "side";
bookConfig.RightToLeft = "No";
bookConfig.FlipDirection = "0";
bookConfig.flippingTime = "0.3";
bookConfig.retainBookCenter = "Yes";
bookConfig.FlipStyle = "Flip";
bookConfig.autoDoublePage = "Yes";
bookConfig.isTheBookOpen = "No";
bookConfig.thicknessWidthType = "Thin";
bookConfig.thicknessColor = "#e8ddd0";
bookConfig.SingleModeBanFlipToLastPage = "No";
bookConfig.showThicknessOnMobile = "No";
bookConfig.isSingleBookFullWindowOnMobile = "No";
bookConfig.isStopMouseMenu = "Yes";
bookConfig.restorePageVisible = "No";
bookConfig.useTheAliCloudChart = "True";
bookConfig.totalPagesCaption = "";
bookConfig.pageNumberCaption = "";
bookConfig.topMargin = "0";
bookConfig.bottomMargin = "0";
bookConfig.leftMargin = "0";
bookConfig.rightMargin = "0";
bookConfig.hideMiniFullscreen = "No";
bookConfig.maxWidthToSmallMode = "0";
bookConfig.maxHeightToSmallMode = "0";
bookConfig.leftRightPnlShowOption = "None";
bookConfig.highDefinitionConversion = "No";
bookConfig.appLargeLogoIcon = "";
bookConfig.appLargeLogoURL = "";
bookConfig.LargeLogoPosition = "top-left";
bookConfig.LargeLogoTarget = "Blank";
bookConfig.isFixLogoSize = "No";
bookConfig.logoFixWidth = "0";
bookConfig.logoFixHeight = "0";
bookConfig.updateURLForPage = "No";
bookConfig.LinkDownColor = "#0000ff";
bookConfig.LinkAlpha = "0.4";
bookConfig.OpenWindow = "Blank";
bookConfig.showLinkHint = "No";
bookConfig.googleAnalyticsID = "";
bookConfig.languageSetting = "Chinese";
bookConfig.UIBaseURL = "./";
bookConfig.EnableReportButton = "show";
bookConfig.reportUrl = "";
bookConfig.largePageWidth = "2239";
bookConfig.largePageHeight = "1579";

var language = [{
  "language": "Chinese",
  "btnFirstPage": "\u7b2c\u4e00\u9875",
  "btnNextPage": "\u4e0b\u4e00\u9875",
  "btnLastPage": "\u6700\u540e\u4e00\u9875",
  "btnPrePage": "\u524d\u4e00\u9875",
  "btnDownload": "\u4e0b\u8f7d",
  "btnPrint": "\u6253\u5370",
  "btnSearch": "\u641c\u7d22",
  "btnClearSearch": "\u6e05\u9664",
  "frmSearchPrompt": "\u6e05\u9664",
  "btnBookMark": "\u76ee\u5f55",
  "btnHelp": "\u5e2e\u52a9",
  "btnHome": "\u4e3b\u9875",
  "btnFullScreen": "\u5168\u5c4f",
  "btnDisableFullScreen": "\u666e\u5c4f",
  "btnSoundOn": "\u6253\u5f00\u58f0\u97f3",
  "btnSoundOff": "\u5173\u95ed\u58f0\u97f3",
  "btnShareEmail": "\u90ae\u4ef6\u5206\u4eab",
  "btnSocialShare": "\u670b\u53cb\u5206\u4eab",
  "btnZoomIn": "\u653e\u5927",
  "btnZoomOut": "\u7f29\u5c0f",
  "btnDragToMove": "\u62d6\u52a8\/\u79fb\u52a8",
  "btnAutoFlip": "\u81ea\u52a8\u7ffb\u9875",
  "btnStopAutoFlip": "\u505c\u6b62\u7ffb\u9875",
  "btnGoToHome": "\u8fd4\u56de\u4e3b\u9875",
  "frmHelpCaption": "\u5e2e\u52a9",
  "frmHelpTip1": "\u53ef\u4ee5\u53cc\u51fb\u8fdb\u884c\u653e\u5927\u6216\u7f29\u5c0f",
  "frmHelpTip2": "\u62d6\u52a8\u9875\u9762\u7684\u4e2a\u89d2\u53ef\u4ee5\u8fdb\u884c\u7ffb\u9875",
  "frmPrintCaption": "\u6253\u5370\u7a97\u53e3",
  "frmPrintBtnCaption": "\u6253\u5370",
  "frmPrintPrintAll": "\u6253\u5370\u6240\u6709\u9875\u9762",
  "frmPrintPrintCurrentPage": "\u6253\u5370\u5f53\u524d\u9875",
  "frmPrintPrintRange": "\u6253\u5370\u8303\u56f4\uff1a",
  "frmPrintexampleCaption": "\u4f8b\u5982\uff1a2,5,8-26",
  "frmPrintPreparePage": "\u6b63\u5728\u51c6\u5907\u9875\uff1a",
  "frmPrintPrintFailed": "\u6253\u5370\u5931\u8d25\uff1a",
  "pnlSearchInputInvalid": "\uff08\u6700\u5c11\u9700\u8981\u8f93\u51653\u4e2a\u5b57\u7b26\uff09",
  "loginCaption": "\u767b\u5f55",
  "loginUsername": "\u7528\u6237\u540d",
  "loginPassword": "\u5bc6\u7801",
  "loginSubmit": "\u63d0\u4ea4",
  "loginPrompt": "\u8bf7\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801",
  "loginFailed": "\u767b\u5f55\u5931\u8d25",
  "downloadConfirm": "\u786e\u5b9a\u4e0b\u8f7d",
  "downloadCancel": "\u53d6\u6d88",
  "downloadTitle": "\u4e0b\u8f7d\u63d0\u793a",
  "downloadMessage": "\u786e\u5b9a\u8981\u4e0b\u8f7d\u672c\u6587\u4ef6\u5417\uff1f",
  "annotationTitle": "\u6dfb\u52a0\u5907\u6ce8",
  "annotationPlaceholder": "\u8bf7\u8f93\u5165\u5907\u6ce8\u5185\u5bb9",
  "annotationSubmit": "\u4fdd\u5b58",
  "annotationCancel": "\u53d6\u6d88",
  "annotationDelete": "\u5220\u9664",
  "pageJumpInput": "\u8f93\u5165\u9875\u7801",
  "pageJumpButton": "\u8df3\u8f6c",
  "btnZoomReset": "\u6062\u590d\u5927\u5c0f"
}];
