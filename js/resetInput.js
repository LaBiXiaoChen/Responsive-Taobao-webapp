/*
 * @Date: 2021-06-06 17:41:29
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-06-06 20:58:08
 * @FilePath: \响应式仿淘宝webapp\js\resetInput.js
 */

const searchAppend = document.getElementById('search-append');
const searchInput = document.getElementById('search-input');


// 实现清除搜索框中内容的功能
searchAppend.addEventListener('click', () => {
    searchInput.value = '';
}, false)