webpackJsonp([1],{104:function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=o(1),l=o(450).version;s["default"]={components:{Cell:t.Cell,Group:t.Group,Badge:t.Badge},data:function(){return{version:l}}}},350:function(e,s,o){s=e.exports=o(75)(),s.i(o(351),""),s.push([e.id,".center{margin-top:15px;text-align:center}.vux-notice{color:#666;line-height:40px}.vux-title{vertical-align:middle;text-align:center;color:#04be02;display:inline-block;width:75px;height:75px;line-height:75px;border-radius:50%}body{font-family:Helvetica,sans-serif;background-color:#fbf9fe}",""])},397:function(e,s,o){var t=o(350);"string"==typeof t&&(t=[[e.id,t,""]]);o(778)(t,{});t.locals&&(e.exports=t.locals)},450:function(e,s){e.exports={name:"vux",version:"0.1.3-rc9",description:"Mobile web UI based on Vue and Weui",keywords:["vux","vue","weui","weex","vue-components","web-components","component","components","mobile ui","framework","frontend"],author:"airyland <airyland@qq.com>",repository:{type:"git",url:"https://github.com/airyland/vux"},license:"MIT",scripts:{dev:"node build/dev-server.js",build:"rimraf site && webpack --progress --hide-modules --colors --config build/webpack.prod.conf.js && cd site/static && mkdir vendors && cd ../../ && cp -r src/assets/* site/static/ && cp CNAME site/ && cp favicon.ico site/ && node build/common-nano-css.js site/static",test:"karma start build/karma.conf.js --single-run",deploy:"gh-pages -d site",xdeploy:"npm run build && gh-pages -d site",xbuild:"mkdirp dist/styles && webpack --progress --hide-modules --colors --config build/webpack.npm.conf.js && rimraf dist/components && node build/build-components && node build/build-styles && node build/nano-css",xpublish:"npm run xbuild && npm publish && npm run xdeploy"},main:"dist/vux.js",dependencies:{"array-filter":"^1.0.0","array-find":"^1.0.0","array-map":"^0.0.0","array-shuffle":"^1.0.0",countup:"^1.6.1",photoswipe:"^4.1.1","qr.js":"0.0.0","shake.js":"^1.2.2",validator:"^5.1.0","vux-blazy":"^1.6.4","vux-xscroll":"^3.1.8","webp-support":"^1.0.3","array-from":"^2.1.1","object-assign":"^4.1.0"},devDependencies:{autoprefixer:"^6.3.7","babel-core":"^6.9.1","babel-loader":"^6.0.0","babel-plugin-transform-runtime":"^6.9.0","babel-preset-es2015":"^6.9.0","babel-preset-stage-2":"^6.0.0","babel-runtime":"^6.0.0","china-area-data":"^1.0.0","cli-spinner":"^0.2.4",co:"^4.6.0","co-fs":"^1.2.0","co-request":"^1.0.0","connect-history-api-fallback":"^1.1.0","copy-webpack-plugin":"^1.1.1","css-loader":"^0.23.0",cssnano:"^3.7.1",eslint:"^2.5.1","eslint-config-standard":"^5.1.0","eslint-friendly-formatter":"^1.2.2","eslint-loader":"^1.2.0","eslint-plugin-html":"^1.4.0","eslint-plugin-promise":"^1.1.0","eslint-plugin-standard":"^1.3.2","eventsource-polyfill":"^0.9.6",express:"^4.13.3","extract-text-webpack-plugin":"^1.0.1",fastclick:"^1.0.6","file-loader":"^0.8.4","function-bind":"^1.0.2","gh-pages":"^0.10.0","html-webpack-plugin":"^2.14.0","inject-loader":"^2.0.1","jasmine-core":"^2.4.1","json-loader":"^0.5.4",karma:"^0.13.15","karma-jasmine":"^0.3.6","karma-phantomjs-launcher":"^0.2.1","karma-spec-reporter":"0.0.24","karma-webpack":"^1.7.0",less:"^2.7.1","less-loader":"^2.2.2",mkdirp:"^0.5.1",postcss:"^5.0.21","postcss-less":"^0.14.0",rimraf:"^2.5.0","url-loader":"^0.5.7",vue:"^1.0.17","vue-hot-reload-api":"^1.2.0","vue-html-loader":"^1.2.0","vue-loader":"^8.5.3","vue-router":"^0.7.11","vue-style-loader":"^1.0.0",vuex:"^0.8.2","vuex-router-sync":"^2.1.0",webpack:"^1.12.2","webpack-dev-middleware":"^1.4.0","webpack-hot-middleware":"^2.6.0",yargs:"^4.8.1"}}},467:function(e,s){e.exports=' <div> <div class=center> <svg style=width:60px;height:60px version=1.1 id=图形 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink x=0px y=0px width=1024px height=1024px viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space=preserve><path class=svgpath data-index=path_0 fill=#35495e d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36"/></svg> <h1 class=vux-title style=display:none> <span class=demo-icon slot=icon style="font-size:60px;color:#35495e;display: block">&#xe637;</span> </h1> <p class=vux-notice>v{{version}}</p> </div> <group> <cell title=Demo link=/demo value=演示> <span class=demo-icon slot=icon style=color:#F70968>&#xe633;</span> </cell> </group> <group> <cell title="Buy me a coffee" link=project/donate> <span class=demo-icon slot=icon style=color:red>&#xe630;</span> <div class=badge-value slot=value class=vux-center-v> <badge text=捐赠></badge> </div> </cell> <cell title=Github link=http://github.com/airyland/vux value="Star me"> <span class=demo-icon slot=icon style=color:#35495e>&#xe62f;</span> </cell> </group> </div> '},629:function(e,s,o){var t,l;o(397),t=o(104),l=o(467),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)}});