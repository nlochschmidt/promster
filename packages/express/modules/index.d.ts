declare module "modules/middleware/middleware" {
    function _default({ app, options }?: {
        app: any;
        options: any;
    }): (request: any, response: any, next: any) => any;
    export default _default;
    export function exposeOnLocals(app: any, { key, value }: {
        key: any;
        value: any;
    }): void;
    export function extractPath(req: any): any;
    export function getRequestRecorder(): any;
    export function signalIsUp(): any;
    export function signalIsNotUp(): any;
}
declare module "modules/middleware/index" {
    export var createMiddleware: ({ app, options }?: {
        app: any;
        options: any;
    }) => (request: any, response: any, next: any) => any;
    export var signalIsUp: () => any;
    export var signalIsNotUp: () => any;
    export var getRequestRecorder: () => any;
}
declare module "modules/index" {
    export var version: string;
    export var createMiddleware: ({ app, options }?: {
        app: any;
        options: any;
    }) => (request: any, response: any, next: any) => any;
    export var getRequestRecorder: () => any;
    export var signalIsUp: () => any;
    export var signalIsNotUp: () => any;
    export var getSummary: any;
    export var getContentType: any;
    export var Prometheus: any;
    export var defaultRegister: any;
    export var defaultNormalizers: any;
}
