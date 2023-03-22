/**
 * @module umdName
 * @description JavaScript库 - umdName
 * @see https://github.com/qianweikhm/peaceful-mu
 * @example
 * // 浏览器内使用
 * // 引入文件：<script src="path/to/index.aio.min.js"><script>
 * window.umdName.add(1, 2)
 *
 * // es6模块规范内使用
 * import umdName from 'peaceful-mu'
 * umdName.add(1, 2)
 *
 * // Node内使用
 * const umdName = require('peaceful-mu')
 * umdName.add(1, 2)
 */

/**
 * 
 * @param {*} URL 
 * @returns 
 * 获取url参数 getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1");
  {q: 'js+md', newwindow: '1'}
 */
export const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)

/**
 * 
 * @param {*} obj 
 * @returns 
 *  isEmpty({}) // true
    isEmpty({a:"not empty"}) //false
 */
export const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

/**
 * 生成随机数相信你能信手拈来，那随机生成十六进制，例如生成十六进制颜色值。
 * @returns 
 * console.log(randomHexColor());
// #a2ce5b
 */
export const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`

/**
 * 
 * @returns 检查设备类型
 * 使用navigator.userAgent 判断是移动设备还是电脑设备：
 * judgeDeviceType()  // PC | Mobile
 */
export const judgeDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC';

/**
 * 文字复制到剪贴板
 * Clipboard API 它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。
 * @param {*} text 
 * @returns 
 */
export const copyText = async (text) => await navigator.clipboard.writeText(text)

/**
 * 两日期之间相差的天数
 * @param {*} date1 
 * @param {*} date2 
 * @returns 
 * dayDiff(new Date("2021-10-21"), new Date("2022-02-12"))
 * // Result: 114
 */
export const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

/**
 * 查找日期位于一年中的第几天
 * @param {*} date 
 * @returns 
 * dayOfYear(new Date());   // 307
 */
export const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

/**
 * 从数组中移除重复项
 * @param {*} arr 
 * @returns 
 * console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));
 */
export const removeDuplicates = (arr) => [...new Set(arr)];

/**
 * 判断数组是否为空
 * 该方法用于判断一个数组是否为空数组，它将返回一个布尔值：
 * @param {*} arr 
 * @returns 
 * isNotEmptyArray([1, 2, 3]);  // true
 */
export const isNotEmptyArray = arr => Array.isArray(arr) && arr.length > 0;

/**
 * 滚动到页面顶部
 */
export const goToTop = () => window.scrollTo(0, 0);