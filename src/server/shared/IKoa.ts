import * as Koa from 'koa';
import renderer from 'koa-swig';

export interface Context extends Koa.Context {
        render: typeof renderer;
}
