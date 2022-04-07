/*
 * @Author: your name
 * @Date: 2021-11-17 19:23:43
 * @LastEditTime: 2022-04-06 17:58:46
 * @LastEditors: allin.zhang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /app_monitor/src/utils/util.ts
 */
export const dto2entity = (dto: any, entity: any) => {
  for (const key in entity) {
    if (dto.hasOwnProperty(key)) {
      entity[key] = dto[key];
    }
  }
};

// export interface ApiCallbackModel {
//   code: string;
//   data: any;
//   msg: string;
// }
// export function apiCallback (code, msg = '', data = {}): ApiCallbackModel {
//   return {
//     code,
//     data,
//     msg
//   }
// }