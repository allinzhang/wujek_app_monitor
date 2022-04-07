/*
 * @Author: allin.zhang
 * @Date: 2022-04-06 17:39:35
 * @LastEditTime: 2022-04-06 17:48:38
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/config/configuration.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
export default () => ({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: JSON.parse(process.env.DB_LOGGING), //生产模式关闭
  sync: JSON.parse(process.env.DB_SYNC), //生产模式必须关闭
});
