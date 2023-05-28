/**
 * @description: 解析串口数据
 * @params 数据源data
 * @return:  targetNumber
 * @methodAuthor: hezhixing
 * @sate: 2023-02-08 17:44:51
*/
function uartDataFormat (data,start) {
   // 传入"B7D4", 翻转去除空格"4D7B", 结果19835
   let str = data.slice(start, start+4)
   let decimalism = str.replace(/\s/g,"");
   let res = parseInt(decimalism, 16)
   return (res /10)
};

module.exports = uartDataFormat
