// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiURL: "https://portal-data.tradingviet.com/public/",
  apiURL: 'http://localhost:8081/public',
  getChartDatas: "/getchart",
  getFedWatch: "/fedwatch",
  getBankRate: "/bankrate",

  apiUrlG: 'http://localhost:8804/public',
  // apiUrlG: 'https://portal-content.tradingviet.com',

  apiGetListData: '/getlistdata',
  apiGetImage: '/image/',

  apiRobot :'ws://127.0.0.1:8802/ws',
  apiNews :'ws://127.0.0.1:8804/public/ws',
};
