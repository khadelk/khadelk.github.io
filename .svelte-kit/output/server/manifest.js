export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","favicon.svg","images/bechdel-test.png","images/headshot.png","images/ppc-clearinghouse.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-17b9a946.js","js":["start-17b9a946.js","chunks/index-b5b9e693.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
