/*
 * @Date: 2021-06-06 20:46:51
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-06-06 20:57:45
 * @FilePath: \响应式仿淘宝webapp\js\locationHref.js
 */


// 实现输入框链接到淘宝web版官网中搜索内容功能
const searchBoxPrepend = document.getElementById('searchBox-prepend');
// const searchInput = document.getElementById('search-input');

searchBoxPrepend.addEventListener('click', () => {
    let inputValue = searchInput.value.toString();
    if (inputValue.trim() == "") {
        inputValue = '';
    } else {
        window.location.href = `https://s.taobao.com/search?q=${inputValue}`;

    }
}, false)