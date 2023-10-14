import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","style.css","background.jpg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.e0998e4b.js","app":"_app/immutable/entry/app.c32e5112.js","imports":["_app/immutable/entry/start.e0998e4b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.62a5c533.js","_app/immutable/entry/app.c32e5112.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.e159bb4a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
