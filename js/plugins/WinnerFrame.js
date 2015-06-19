function WinnerFrame(){
};

// 引入客户端标题栏，且可以设置标题
WinnerFrame.prototype.setTitle = function(title) 
{
	window.cordova.exec(null,null,"WinnerFrame", "setTitle", [title]);
};
// 引入客户端底部菜单栏
WinnerFrame.prototype.showBottomMenu = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","showBottomMenu",[]);
};
// 引入客户端跑马灯
WinnerFrame.prototype.showMarquee = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","showMarquee",[]);
};
// 隐藏客户端底部菜单栏
WinnerFrame.prototype.hideBottomMenu = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","hideBottomMenu",[]);
};
// 隐藏客户端跑马灯
WinnerFrame.prototype.hideMarquee = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","hideMarquee",[]);
};
// 获取自选股
WinnerFrame.prototype.getStockList = function() 
{
	window.cordova.exec(myStockListener,null,"WinnerFrame","getStockList",[]);
};
// 引入客户端等待页面效果
WinnerFrame.prototype.showProgressDialog = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","showProgressDialog",[]);
};
// 隐藏客户端等待页面效果
WinnerFrame.prototype.hideProgressDialog = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","hideProgressDialog",[]);
};
// 获取客户端配置信息
WinnerFrame.prototype.getConfigParam = function(paramNames) 
{
	window.cordova.exec(getConfig,null,"WinnerFrame","getConfigParam",[paramNames]);
};
// 获取客户端相关信息
WinnerFrame.prototype.getClientInfo = function(paramNames) 
{
	window.cordova.exec(getClientInfo,null,"WinnerFrame","getClientInfo",[paramNames]);
};
// 设置客户端配置信息
WinnerFrame.prototype.setConfigParam = function(configs) 
{
	window.cordova.exec(null,null,"WinnerFrame","setConfigParam",[configs]);
};
// 打开html页面
WinnerFrame.prototype.openHtmlPage = function(urlInfo) 
{
	window.cordova.exec(null,null,"WinnerFrame","openHtmlPage",[urlInfo]);
};
// 打开html页面
WinnerFrame.prototype.queryStockInfo = function(searchKey) 
{
	window.cordova.exec(getSearchStockInfo,null,"WinnerFrame","queryStockInfo",[searchKey]);
};
// 获取账号信息
WinnerFrame.prototype.getAccountInfo = function(){
     window.cordova.exec(responseAccountInfo,null,"WinnerFrame", "getAccountInfo", []);
};
// 打开跳转到指定交易页面
WinnerFrame.prototype.openFundTrade = function(json) 
{
	window.cordova.exec(null,null,"WinnerFrame","openFundTrade",[json]);
};
//获取客户端登陆信息
WinnerFrame.prototype.getClientID = function(callBack) 
{
	window.cordova.exec(callBack,null,"WinnerFrame","getWebClientID",[]);
};
//登陆交易并返回
WinnerFrame.prototype.loginAndReturn = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","loginAndReturn",[]);
};
//获取客户端登陆账号
WinnerFrame.prototype.getAccountContent = function(callBack) 
{
	window.cordova.exec(callBack,null,"WinnerFrame","getAccountContent",[]);
};
//切换客户端登陆账号
WinnerFrame.prototype.switchAccount = function() 
{
	
	window.cordova.exec(null,null,"WinnerFrame","switchAccount",[]);
};

//持仓查询
WinnerFrame.prototype.stockPosition = function(callBack) 
{
	
	window.cordova.exec(callBack,null,"WinnerFrame","stockPosition",[]);
};

// 按照指定的通道进行发送数据,json格式"函数名:参数1,参数2,...#native参数
//channelName为TCP，或者SSL
WinnerFrame.prototype.sendDataByChannel = function() 
{
	window.cordova.exec(null,null,"WinnerFrame",channelName,[json]);
};


//转到交易界面
WinnerFrame.prototype.redirectTrade = function() 
{
	window.cordova.exec(null,null,"WinnerFrame","redirectTrade",[]);
};

//转到资金界面
WinnerFrame.prototype.redirectZijin = function(callback,json,channelName) 
{
	window.cordova.exec(callback,null,"WinnerFrame","redirectZijin",[]);
};

window.plugins.winnerFrame = new WinnerFrame();

