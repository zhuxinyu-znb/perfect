declare module 'koa-swig' {
  // function renderer(opts: renderer.defaultSettings): any;
  // function renderer(id: string, data?: object): any;
  function renderer<T>(value: T | renderer.DefaultSettings): any;
  namespace renderer {
    interface DefaultSettings {
      autoescape: boolean;
      root: string;
      cache: string | boolean;
      ext: string;
      writeBody: boolean;
      memory?: string | boolean;
    }
  }
  export default renderer;
}
