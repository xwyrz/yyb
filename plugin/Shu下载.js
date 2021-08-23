// 作者：Final Fantasy
// 日期：2019-05-16
// 功能描述：添加下载任务到Shu并立即下载，支持批量添加，支持视频、音频文件链接。
//
// 使用方法一：① Thor中打开一个抓包记录-->点右上角"编辑"-->导出Shu链接-->勾选一个或多个请求-->点右下角"完成"；
//             ② 在弹出的share菜单中选择灰色的JSBox图标(或XTeko图标)--->找到本脚本并运行。
//
// 使用方法二：① 同方法一①；
//             ② 在弹出的share菜单中选择"拷贝"-->切换到JSBox应用(Pin应用)中-->运行本脚本。
//
// 使用方法三：① 复制一个或多个需要下载的链接地址(多个链接间用换行符或空格分开)；
//             ② 同方法二②。
//
// 使用方法四：自己触类旁通吧。。。

var text
var env = $app.env
if (env != $env.action) {
  text = $clipboard.text
} else {
  text = $context.data.string
}
var urls = text.match(/https?:\/\/\S+/g)
if (urls != null) {
  var str = ""
  for (var i = 0; i < urls.length; i++) {
    var url = urls[i]
    var header = '{}'
    if (url.indexOf('#') > 0) {
      var array = url.split("#")
      url = array[0]
      header = $text.base64Decode(array[1])
    }
    console.warn(url)
    console.warn(header)
    str += '{"url": "' + url + '", "header": ' + header + ', "suspend": false},'
  }
  var url_scheme = 'shu://data.download.http?urls=' + encodeURIComponent('[' + str + ']')
  console.warn(url_scheme)
  console.warn(str)
  $app.openURL(url_scheme)
} else {
  $ui.alert("未发现有效链接！")
}
if (env == $env.action) {
  $delay(2, function () {
    $context.close();
  })
} 
