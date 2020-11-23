
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/launch/launch","pages/novels/novels","pages/authors/authors","pages/search/search","pages/search_novels/search_novels","pages/novel_detail/novel_detail","pages/novels_fav/novels_fav","pages/novels_local/novels_local","pages/user/user","pages/novels_recently/novels_recently"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"","navigationBarBackgroundColor":"#e0a34d","navigationStyle":"custom"},"tabBar":{"color":"#888","fontSize":"16px","selectedColor":"#e0a34d","borderStyle":"black","backgroundColor":"#ffffff","height":"60px","iconWidth":"30px","list":[{"pagePath":"pages/search/search","iconPath":"static/tabBar/se_idle.png","selectedIconPath":"static/tabBar/se_hover.png"},{"pagePath":"pages/novels_fav/novels_fav","iconPath":"static/tabBar/st_idle.png","selectedIconPath":"static/tabBar/st_hover.png"},{"pagePath":"pages/novels_local/novels_local","iconPath":"static/tabBar/sa_idle.png","selectedIconPath":"static/tabBar/sa_hover.png"},{"pagePath":"pages/user/user","iconPath":"static/tabBar/pe_idle.png","selectedIconPath":"static/tabBar/pe_hover.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Linpx","compilerVersion":"2.9.8","entryPagePath":"pages/launch/launch","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/launch/launch","meta":{"isQuit":true},"window":{"navigationStyle":"custom","disableScroll":true}},{"path":"/pages/novels/novels","meta":{},"window":{"navigationBarTitleText":"本地"}},{"path":"/pages/authors/authors","meta":{},"window":{}},{"path":"/pages/search/search","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/search_novels/search_novels","meta":{},"window":{}},{"path":"/pages/novel_detail/novel_detail","meta":{},"window":{}},{"path":"/pages/novels_fav/novels_fav","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"收藏"}},{"path":"/pages/novels_local/novels_local","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"本地"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"用户","enablePullDownRefresh":false}},{"path":"/pages/novels_recently/novels_recently","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
