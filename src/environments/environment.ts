// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const webappUrl = 'http://localhost:2022';

export const environment = {
  appUrl: webappUrl,
  production: false,
  // v1AuthEndpoint: 'http://localhost:8085/api/',
    v1AuthEndpoint: 'http://192.168.68.145:8070/api/v1/',
    v1ApiEndPoint: 'http://192.168.68.145:8070/api/v1/',
    v1WsEndPoint: 'ws://192.168.68.145:8070/api/v1/',
/*
  v1AuthEndpoint: 'https://multicluster-gateway.console.klovercloud.com/api/',
  v1ApiEndPoint: 'https://multicluster-gateway.console.klovercloud.com/api/v1/',
  v1WsEndPoint: 'https://multicluster-gateway.console.klovercloud.com/clusterlog'*/
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
