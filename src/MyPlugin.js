// 插件体
// es6模块化导出动作，固定要求
export default {
  // install是插件固定成员名字，不要改
  // Obj是形式参数(名字自定义的)，固定代表是"Vue构造函数"，同时不要做import导入
  install (Obj) {
    // 现在可以通过Obj给Vue创建全局成员
    // 全局组件(也可以创建其他)
    Obj.component('it-page', {
      template: `
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      `
    })
    // 全局过滤器
    Obj.filter('prefix', function (origin) {
      return 'okok-' + origin
    })
    // 全局成员方法
    Obj.prototype.$abc = function () {
      return 'abc 字符串信息'
    }
    // ……
  }
}
