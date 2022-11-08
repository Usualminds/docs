// ==UserScript==
// @name         免密登录
// @namespace    配置URL
// @version      0.1
// @description  免密登录
// @author       Joe
// @match        配置URL
// @icon         
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const LS_KEY = 'god_bless_key'

  let addStyle = function() {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = '\
        *{\
          margin: 0;\
          padding: 0;\
      }\
      #main{\
          position: absolute;\
          right: 0;\
          top: 0;\
          width: 290px;\
          height: 42px;\
          z-index: 10000;\
      }\
      #content{\
          width: 290px;\
          height: 42px;\
          line-height: 42px;\
          padding-left: 10px;\
          background: rgb(255, 255, 255);\
          border-radius: 2px;\
          border: 1px solid rgb(221, 221, 221);\
          font-size: 16px;\
          font-family: MicrosoftYaHei;\
          color: rgb(51, 51, 51);\
          cursor: pointer;\
      }\
      #clean{\
          position: absolute;\
          cursor: pointer;\
          top: 10px;\
          right: 41px;\
          cursor: pointer;\
          height: 20px;\
          font-size: 13px;\
          color: royalblue;\
      }\
      #selectImg{\
          position: absolute;\
          cursor: pointer;\
          top: 10px;\
          right: 10px;\
          cursor: pointer;\
          width: 20px;\
          height: 20px;\
      }\
      #selectImg:before{\
          content: "\e6e1\";\
      }\
      #selectItem{\
          display: none;\
          border: 1px solid #eee;\
          width: 290px;\
          background-color: #fff;\
      }\
      #selectItem ul{\
          list-style: none;\
      }\
      #selectItem ul li{\
          height: 30px;\
          line-height: 30px;\
          padding-left: 10px;\
          cursor: pointer;\
      }\
      #selectItem ul input{\
          height: 30px;\
          line-height: 30px;\
          padding-left: 10px;\
          cursor: pointer;\
          font-size: 16px;\
          width: 100%;\
      }\
      #selectItem ul li:hover{\
          background-color:#f5f7fa;\
      }'
      
    let head = document.head;
    head.appendChild(style);
  }
  
  /**
   * 创建 html 元素
   */
  let createElement = function (){
    let main = document.createElement('div'), 
        content = document.createElement('div'),
        item = document.createElement('div'),
        clean = document.createElement('div'),
        selectImg = document.createElement('img')

    main.setAttribute("id", "main");

    content.setAttribute("id", "content");
    content.innerHTML = "请选择登录账号"

    clean.setAttribute("id", "clean");
    clean.innerHTML = "清除数据"
    
    // 下拉图标
    selectImg.setAttribute("id", "selectImg");
    selectImg.setAttribute("src", "selectImg");
    selectImg.src = "data:image/png;base64,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"
    
    // 下拉内容
    item.setAttribute("id", "selectItem");
   
    main.appendChild(content)
    main.appendChild(item)
    main.appendChild(clean)
    main.appendChild(selectImg)
    
    document.body.insertBefore(main, document.body.firstElementChild);
  }
 
  /**
   * 
   * @param {*} identifyID 账号
   * @param {*} password 密码
   * @param {*} appCode 验证码
   */
  function setLoginValue(identifyID, password, appCode){
     document.getElementById('identifyID').value = identifyID || '123456'
     document.getElementById('password').value =  password || '1'
     document.getElementById('appCode').value =  appCode || '1'
     document.getElementById('riskMind').checked = true

     document.getElementById('loginBtn').click()
  }


  function setData(){
      let values = getLocal()

      let data = [
          {name:'123456',value:'123456'},
      ]

      if(values && values.length)  data = data.concat(values)

      let content = document.getElementById('content');
      let selectImg = document.getElementById('selectImg');
      let selectItem = document.getElementById('selectItem');
      let clean = document.getElementById('clean');
      let ul = document.createElement('ul');
      let input = document.createElement('input');
      input.setAttribute('data-value','custom_add');
      input.setAttribute('id','custom_add');
      input.placeholder = '输入自定义账号,按Enter按键保存'
      
      selectItem.appendChild(ul);

      for(let i = 0; i < data.length; i++){
          let li = document.createElement('li');
          li.setAttribute('data-value',data[i].value);
          li.innerText = data[i].name;
          ul.appendChild(li);
      }

      ul.appendChild(input);

      /*****************  点击事件   **********************/
      clean.onclick = function () {
          removeData()
      }

      selectImg.onclick = function () {
          if(selectItem.style.display == 'none' || selectItem.style.display == ''){
              selectItem.style.display = 'block';
          }else{
              selectItem.style.display = 'none';
          }
      }

      content.onclick = function () {
          if(selectItem.style.display == 'none' || selectItem.style.display == ''){
              selectItem.style.display = 'block';
          }else{
              selectItem.style.display = 'none';
          }
      }
      /*****************  点击事件   **********************/

      let lis = selectItem.getElementsByTagName('li');

      for(let i = 0; i < lis.length; i++){
          lis[i].onclick = function () {
              let accountId = this.getAttribute('data-value')
              if(accountId !== 'custom_add') {
                  setLoginValue(accountId)
              }
              content.innerText = this.innerHTML;
              selectItem.style.display = 'none';
          }
      }

      // 默认展开下拉框
      selectItem.style.display = 'block';
  }

  /*****************  缓存设置   **********************/
  function setLocal(key = LS_KEY, value){
      let values = getLocal()

      values.push({
          name: value,
          value: value
      })

      localStorage.setItem(key, JSON.stringify(values))
  }

  function getLocal(key = LS_KEY){
      let values = JSON.parse(localStorage.getItem(key)) || []

      return values
  }

  function removeLocal(){
      localStorage.removeItem(LS_KEY)
  }
  /*****************  缓存设置   **********************/

  /**
   * 监听 enter 按键
   */
  function addListener(){
      document.getElementById('custom_add').addEventListener('keyup',function(e){
          if (e.key === 'Enter' || e.keyCode === 13) {
                  setLocal(LS_KEY,e.target.value)
                  removeDom()
              }
          })
  }

  /**
   * 更新dom
   */
  function removeDom(){
      document.body.removeChild(document.getElementById('main'))
      init()
  }

  function removeData(){
      removeLocal()
      removeDom()
  }

  /**
   * 初始化
   */
 function init() {
  addStyle()
  createElement()
  setData()
  addListener()
 }

 init()
})();
