
# 单例模式

页面模态框，全局唯一
```ts
const single = function(fn: Function){
    let res: unknown

    return function(this: any){
        return res || (res = fn.apply(this, arguments))
    }
}

const createLoginLayer = function(){
  let div = document.createElement( 'div' );
  div.innerHTML = '我是浮窗';
  div.style.display = 'none';
  document.body.appendChild( div );
  return div;
}; 

const createSingleLoginLayer = getSingle( createLoginLayer ); 

document.getElementById( 'loginBtn' ).onclick = function(){
  let loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
};
```
