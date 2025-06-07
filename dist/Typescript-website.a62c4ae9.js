// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"36Eiz":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3f51f52aa62c4ae9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6HMqo":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const router_1 = require("7d3e2227953488da");
document.addEventListener("DOMContentLoaded", ()=>{
    (0, router_1.initRouter)();
});

},{"7d3e2227953488da":"kC76y"}],"kC76y":[function(require,module,exports,__globalThis) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initRouter = initRouter;
const Home_1 = require("63562866b71c9146");
const Product_1 = __importDefault(require("dca075e57454ba67"));
const About_me_1 = __importDefault(require("71962aa574575ad2"));
const layout_1 = require("efab0b22979a783b");
const Product_detail_1 = __importDefault(require("ef6f8a19a611a76e"));
function initRouter() {
    window.addEventListener('popstate', renderRoute);
    document.addEventListener('click', (e)=>{
        const target = e.target.closest('a[data-link]');
        if (target) {
            e.preventDefault();
            const href = target.getAttribute('href');
            history.pushState(null, '', href);
            renderRoute();
        }
    });
    renderRoute();
}
function renderRoute() {
    const path = window.location.pathname;
    let contentFn;
    switch(path){
        case '/':
            contentFn = Home_1.Home;
            break;
        case '/products':
            contentFn = Product_1.default;
            break;
        case '/about':
            contentFn = About_me_1.default;
            break;
        case '/products-detail':
            contentFn = Product_detail_1.default;
            break;
        default:
            contentFn = Home_1.Home;
    }
    (0, layout_1.createLayout)(contentFn);
}

},{"63562866b71c9146":"2vbax","dca075e57454ba67":"h6DSp","71962aa574575ad2":"23bmk","efab0b22979a783b":"3BhUp","ef6f8a19a611a76e":"ltaef"}],"2vbax":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Home = Home;
function Home() {
    const div = document.createElement('div');
    div.innerHTML = `
  <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">EAT MORE GAIN MORE. NEVER STOP EATING</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-grey-700 hover:bg-grey-800 focus:ring-4 focus:ring-grey-300 dark:focus:ring-primary-900">
                FOODIE HERE
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               ENJOY FOOD
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://pngimg.com/d/burger_sandwich_PNG4135.png" alt="mockup">
        </div>                
    </div>
</section>


<div class="w-full h-full bg-gray-100 dark:bg-[#1a1a1a]">

    <div class="w-full h-full flex flex-col justify-center items-center py-10">
        <!-- Title -->
        <p class="pb-2 text-lg lg:text-2xl text-rose-600 font-semibold">Category</p>
        <h2 class="text-3xl lg:text-5xl text-center font-serif font-semibold mb-10 dark:text-white">Choose Your Best Food</h2>

        <div class="flex gap-6 flex-wrap lg:flex-nowrap justify-center items-center">
        <!-- 1 -->
        <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>

        <!-- 2 -->
        <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/chicken.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">4.6</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Chicken Paradise</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>

        <!-- 3 -->
        <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/burger.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Cheese Burger</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>
         <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
            <!-- Card Image -->
            <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <!--  -->
                <div class="flex items-center justify-between my-4">
                    <!-- Rater -->
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <!-- Rate -->
                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>

                <!-- Description -->

                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>
</div>
    </div>
</div>


<section class="text-white body-font">
  <div class="flex justify-center mt-10 text-4xl font-regular">
    Why Us?
  </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap text-center justify-center">
      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/5235/5235253.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Latest FOOD INFORMATION</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/10366/10366416.png     " class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Reasonable Price</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3703/3703377.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3570/3570168.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
</section>



<div class="w-full min-h-screen flex items-center">
    <div class="max-w-full py-5 mt-10 mb-20 mx-auto overflow-hidden">
        <div class="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
            <p class="text-sm sm:text-lg font-semibold text-red-700">Words That Matter</p>
            <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">See Why Clients Keep Coming
                Back</h3>
        </div>
        <div class="flex flex-col gap-3">
            <!-- Top -->
            <div style="mask-image:linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"
                class="relative flex justify-around gap-5 overflow-hidden shrink-0">
                <div class="max-w-full mx-auto">
                    <div class="px-4 md:px-10 mx-auto w-full">
                        <div
                            class="animate-scrollReverse flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                            <!-- 1 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-lg font-extralight md:text-lg">
                                    "Working with Samuel was a game-changer! His Tailwind CSS skills brought our
                                    UI to life with a clean, modern, and fully responsive design."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1665686307516-1915b9616526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmZW1hbGV8ZW58MHwwfHx8MTc0MzU5Njc5OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Sarah M</h5>
                                            <p class="text-sm md:text-base mt-[-4px] text-white/50 dark:text-black/30">
                                                Startup Founder</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 2 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Finding a great Laravel developer is tough, but Samuel exceeded all my
                                    expectations. His code is clean, efficient, and highly scalable.
                                    "
                                </p>
                                <div
                                    class="flex overflow-hidden md:h-[28%] h-[30%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Daniel S</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Business Owner</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "A rare talent who excels in Tailwind, Nuxt.js, and Laravel! He built a full-stack
                                    web app that is both powerful and beautiful."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">John M</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Startup CEO</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 4 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "I struggled with bloated CSS files until Samuel revamped our frontend using
                                    Tailwind. The result? A lightweight, maintainable, and stunning interface!"
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1473830394358-91588751b241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">James L</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Frontend Engineer</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 5 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "I can\u{2019}t recommend Samuel enough! He transformed our Vue.js project into a
                                    high-performance Nuxt.js app with seamless API integration."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8cGVyc29ufGVufDB8MHx8fDE3NDMzMjcxMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Laura P</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Marketing Manager</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 6 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "If you\u{2019}re looking for a top-tier Laravel developer, look no further. Samuel
                                    delivers quality code and always meets deadlines."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8d29tYW58ZW58MHwwfHx8MTc0MzM5ODE0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Lisa T</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Tech Founder
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 7 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Thanks to Samuel, our Nuxt.js app now loads in a fraction of the time and ranks
                                    higher on search engines!"
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8bWVufGVufDB8MHx8fDE3NDMzOTgxOTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md"> Kevin H</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Digital Marketer
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- Bottom -->
            <div style="mask-image:linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"
                class="relative flex justify-around gap-5 overflow-hidden shrink-0">
                <div class="max-w-full mx-auto">
                    <div class="px-4 md:px-10 mx-auto w-full">
                        <div
                            class="animate-scroll flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                            <!-- 1 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Nuxt.js can be tricky, but Samuel made everything look effortless. From state
                                    management to routing, they nailed it."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxwZXJzb258ZW58MHwwfHx8MTc0MzU5NTUxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Marry J.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Startup Founder</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 2 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "The Laravel API Samuel built for us was robust, secure, and well-documented. Our
                                    mobile app team loved working with it!
                                    "
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZXJzb258ZW58MHwwfHx8MTc0MzU5NTUxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md"> Jason K.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Mobile App Developer</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "We had a messy PHP codebase, and Samuel expertly migrated it to Laravel. The new
                                    system is modern, scalable, and easy to maintain."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxtZW58ZW58MHwwfHx8MTc0MzU5NTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Mark E.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Software Architect</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 4 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "The way Samuel implements Tailwind is incredible. Our website now looks amazing and
                                    performs better than ever!"
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1450133064473-71024230f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8bWVufGVufDB8MHx8fDE3NDM1OTU5OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">David T.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                E-commerce Manager
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 darK:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 5 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "A complete package! Samuel crafted a sleek UI with Tailwind, built a
                                    high-performance Nuxt.js frontend, and powered it with a rock-solid Laravel
                                    backend."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxtZW58ZW58MHwwfHx8MTc0MzU5NTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Steve J.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Project Manager</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 6 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "From the frontend to the backend, Samuel handled everything flawlessly. Their
                                    attention to detail and problem-solving skills are unmatched."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxtZW58ZW58MHwwfHx8MTc0MzU5NTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Ethan F.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                Lead Developer</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <!-- 7 -->
                            <div
                                class="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                <p class="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                    "Our team was new to Tailwind, but Samuel guided us through the transition
                                    effortlessly, making our development process faster and more efficient."
                                </p>
                                <div
                                    class="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                                    <div class="flex items-center w-3/4 gap-3 px-4 py-3">
                                        <img class="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8cHJvZ3JhbW1lcnxlbnwwfDB8fHwxNzQzNTk2NDUxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="avatar">
                                        <div class="flex flex-col items-start justify-start flex-1 gap-0">
                                            <h5 class="text-base font-medium md:text-md">Melissa K.</h5>
                                            <p class="text-sm md:text-base text-white/50 dark:text-black/30 mt-[-4px]">
                                                SaaS Founder</p>
                                        </div>
                                    </div>
                                    <div class="w-[1px] bg-white/10 dark:bg-black/20"></div>
                                    <div class="flex items-center justify-center max-w-full mx-auto">
                                        <a target="_blank" href="">
                                            <svg width="30" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-full">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</div>


<section class="w-full flex">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center space-y-5">
            <h2 class="text-base font-semibold text-red-800 tracking-wide uppercase">SEE WHO YOU'RE HERE WITH</h2>
            <div class="inline-flex items-end justify-center w-full text-center mx-auto">
                <img src="https://randomuser.me/api/portraits/men/47.jpg"
                    class="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/men/49.jpg"
                    class="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/women/46.jpg"
                    class="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/men/48.jpg"
                    class="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/women/43.jpg"
                    class="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative">
            </div>
            <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Discover
                your
                FOODIE
                <span class="px-2 py-1 relative inline-block">
                    <svg class="stroke-current bottom-0 absolute text-rose-300 -translate-x-2" viewBox="0 0 410 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="12" fill="none"
                            fill-rule="evenodd" stroke-linecap="round"></path>
                    </svg>
                    <span class="relative">with us</span>
                </span>
            </p>

            <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-100">
                NO NEED TO SIGN UP, JUST START EXPLORING! CONNECT US WITH YOUR FAVORITE FOOD PLACES AND
            </p>

            <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-2.5 items-center justify-center">
                <!-- Sign up with Email -->
                <a href="#" class="w-full sm:w-auto">
                    <button type="button"
                        class="flex items-center justify-center px-4 py-3 w-full  shadow-sm font-medium rounded-full border border-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200 transition duration-250 ease-in-out">
                        <span class="text-base"> Email</span>
                    </button>
                </a>

                <!-- Sign up with Google -->
                <a href="#" class="w-full sm:w-auto sm:mt-0 mt-2 sm:ml-0 ml-2">
                    <button type="button"
                        class="flex items-center justify-center gap-4 px-4 py-3 w-full border border-rose-400 shadow-sm font-medium rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200 transition duration-250 ease-in-out">
                        <!-- Google Logo -->
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                        <path
                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                            id="Fill-1" fill="#FBBC05">

                                        </path>
                                        <path
                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                            id="Fill-2" fill="#EB4335">

                                        </path>
                                        <path
                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                            id="Fill-3" fill="#34A853">

                                        </path>
                                        <path
                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                            id="Fill-4" fill="#4285F4">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="text-base"> Google</span>
                    </button>
                </a>
            </div>

        </div>
    </div>
</section>





<!-- Icons -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

   
  `;
    return div;
}

},{}],"h6DSp":[function(require,module,exports,__globalThis) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = product;
function product() {
    const div = document.createElement("div");
    function fetchProducts() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield fetch("https://dummyjson.com/recipes");
                if (!response.ok) throw new Error("Network response was not ok");
                const data = yield response.json();
                console.log("Fetched service data:", data);
                return data.recipes;
            } catch (error) {
                console.error("Fetch error:", error);
                return [];
            }
        });
    }
    function renderSkeletonCards(count) {
        div.innerHTML = "";
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto max-w-7xl";
        for(let i = 0; i < count; i++){
            const skeleton = document.createElement("div");
            skeleton.innerHTML = `
      <div class="group w-72 h-[28rem] mt-10 bg-gray-200 dark:bg-[#333] rounded-2xl overflow-hidden shadow-lg animate-pulse flex flex-col" style="min-width: 18rem; max-width: 18rem;">
        <div class="w-full h-44 bg-gray-300 dark:bg-[#444]"></div>
        <div class="p-5 flex flex-col flex-1">
          <div class="h-6 bg-gray-300 dark:bg-[#444] rounded mb-2 w-3/4"></div>
          <div class="h-4 bg-gray-300 dark:bg-[#444] rounded mb-2 w-full"></div>
          <div class="h-3 bg-gray-300 dark:bg-[#444] rounded mb-3 w-5/6"></div>
          <div class="flex justify-between items-center mb-3 mt-auto">
            <div class="h-5 w-16 bg-gray-300 dark:bg-[#444] rounded"></div>
            <div class="h-4 w-10 bg-gray-300 dark:bg-[#444] rounded"></div>
          </div>
          <div class="w-full h-9 bg-gray-300 dark:bg-[#444] rounded-full"></div>
        </div>
      </div>
      `;
            grid.appendChild(skeleton);
        }
        div.appendChild(grid);
    }
    renderSkeletonCards(8);
    function renderCards(products) {
        console.log("Rendering products:", products);
        div.innerHTML = "";
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto max-w-7xl";
        products.forEach((product)=>{
            console.log(product.id);
            const card = document.createElement("div");
            card.innerHTML = `
      <div
        class="group w-72 h-[28rem] mt-10 bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col"
        style="min-width: 18rem; max-width: 18rem;"
      >
        <a href="/products-detail"><img
          class="w-full h-44 object-cover"
          src="${product.image}"
          alt="${product.name}"
        /></a>
        <div class="p-5 flex flex-col flex-1">
          <h2 class="text-xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white line-clamp-1">${product.name}</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-2 text-sm line-clamp-2">${product.ingredients.join(", ")}</p>
          <p class="text-gray-500 dark:text-gray-400 mb-3 text-xs line-clamp-2">${product.instructions}</p>
          <div class="flex justify-between items-center mb-3 mt-auto">
        <div class="flex items-center text-yellow-500 text-lg font-bold">
          <ion-icon name="star"></ion-icon>
          <span class="text-black dark:text-white ml-1">${product.rating}</span>
        </div>
        <span class="text-xs text-gray-500 dark:text-gray-400">${product.difficulty}</span>
          </div>
          <a href="products-detail"><button
        class="w-full py-2 border border-rose-600 dark:border-gray-500 text-rose-700 dark:text-white rounded-full uppercase font-bold transition duration-300 hover:bg-rose-600 hover:text-white dark:hover:bg-white hover:cursor-pointer dark:hover:text-black text-sm"
          >
       Read More
          </button></a>
        </div>
      </div>
      `;
            grid.appendChild(card);
        });
        div.appendChild(grid);
    }
    (()=>__awaiter(this, void 0, void 0, function*() {
            try {
                const products = yield fetchProducts();
                renderCards(products);
            } catch (error) {
                console.error("Error:", error);
            }
        }))();
    return div;
}

},{}],"23bmk":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Product;
function Product() {
    const div = document.createElement('div');
    div.innerHTML = `
    <<!-- ABOUT Section -->
<div class="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20  ">
    <div class="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
        <!--  -->
        <div class="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div class="relative">
                <!-- Side Img 1 -->
                <img class="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1496483648148-47c686dc86a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxmbG93ZXJ8ZW58MHwwfHx8MTcyMDk0OTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Side Image" />

                <!-- Side Img 2 -->
                <img class="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1558281033-19cead6981dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Zmxvd2VyfGVufDB8MHx8fDE3MjA5NDk0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Side Image 2" />

                <!-- Side Img 3 -->
                <img class="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmbG93ZXJ8ZW58MHwwfHx8MTcyMDk0OTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Side Image 3" />

                <!-- Main Img -->
                <img
            class="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
            src="https://scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-6/484652988_122144684090560693_2172052087771136430_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG-o-gCTIovA-k1WayVwrWdKczg-wZTKKkpzOD7BlMoqa9Nd2ES6Uj7zFIDHUGiH18qj4ll4WxKQA27d_yzBQ-F&_nc_ohc=BIZBaxDRCuUQ7kNvwFdURGA&_nc_oc=AdktoU9cVv175IQgz_-ZVuv6aRqfZsWgld001cYet4wvvpSinwzQ3ik2g0y1ZE_9y7U&_nc_zt=23&_nc_ht=scontent.fpnh18-3.fna&_nc_gid=fTH9toD7RUO5JFkw-12GyQ&oh=00_AfMOhRZ6Rsm2J2qoG3c_kAi27vQrKrnvk1W4V7i8nu3Hhw&oe=68498FCF" alt="About RECTOR" />
            </div>
            <!--  -->
            <div
                class="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                <h2 class="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                    About Rector
                </h2>
                <p class="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">RECTOR FROM CAMBODIA
                </p>
                <p class="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">Rector is a computer science major with a strong passion for financial management and personal growth. He\u{2019}s disciplined, ambitious, and constantly striving to improve in both academics and life.Much more than that is he always look at thing in a positive way and always looking to create a new dent in the society. This is a journet i wish i could see years from now when i get older let's hope thing will work out the prefected way and moving toward greatness
                </p>

                <!-- button -->
                <button class="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-lg text-white font-semibold">Read More</button>

            </div>

        </div>
    </div>
</div>

<section class="text-white body-font">
  <div class="flex justify-center mt-10 text-4xl font-regular">
    TRYING TO BECOME A FULLSTACK DEVELOPER
  </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap text-center justify-center">
      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/desenvolvedor-front-end-7464456-6109659.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">FRONT-END</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/back-end-developer-illustration-download-in-svg-png-gif-file-formats--front-web-development-programming-internet-of-things-pack-people-illustrations-3611968.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">BACK-END</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.freepik.com/256/18254/18254843.png?semt=ais_hybrid" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">DISCIPLINE</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/4371/4371468.png" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">CONSISTENTCY</h2>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="CallMe" class="relative py-14 mt-[100px]">
  <div class="z-10 absolute opacity-90 rounded-full blur-[200px] w-[40%] h-[40%] bg-white top-black ml-[20%]">
  </div>
  <div id="GET IN TOUCH"
    class="flex  select-auto mx-auto items-center justify-center gap-3 sm:pb-1 w-[210px] sm:w-[410px] border-b-4 sm:border-b-8 border-[#38B7FF] border-primary font-black">
    <svg aria-hidden="true" class="icon" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 53" id="call_us">
      <path
        d="M21.4286 0C15.5134 0 10.7143 4.74792 10.7143 10.6C10.7143 16.4521 15.5134 21.2 21.4286 21.2C27.3437 21.2 32.1429 16.4521 32.1429 10.6C32.1429 4.74792 27.3437 0 21.4286 0ZM16.0714 24.7333C7.17076 24.7333 0 31.8276 0 40.6333V42.4C0 46.3198 3.1808 49.4667 7.14286 49.4667H28.5714V45.9333H17.8571V31.8H28.5714V24.8299C27.9855 24.7609 27.3856 24.7333 26.7857 24.7333H16.0714ZM32.1429 24.7333V35.3333H21.4286V42.4H32.1429V53H39.2857V42.4H50V35.3333H39.2857V24.7333H32.1429Z"
        fill="#38B7FF"></path>
    </svg>
    <h2 class="text-white text-2xl sm:text-[48px]">CONNECTION </h2>
  </div>
  <div class="z-20 relative px-5 mt-20 md:mt-24 flex flex-wrap gap-7 justify-center lg:max-w-[800px] mx-auto ">
    <div
      class="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white  bg-opacity-30 rounded-[25px]">
      <svg aria-hidden="true" class="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]" fill="none"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="whatsapp">
        <path
          d="M10.1416 90.2147L15.7541 69.7251C12.2916 63.7292 10.4708 56.9251 10.4729 49.9563C10.4833 28.1542 28.2249 10.4167 50.0291 10.4167C60.6103 10.4209 70.5395 14.5397 78.0083 22.0126C85.4749 29.4876 89.5874 39.4209 89.5833 49.9876C89.5749 71.7897 71.8291 89.5292 50.0291 89.5292H50.0124C43.3937 89.5272 36.8874 87.8667 31.1103 84.7147L10.1416 90.2147Z"
          fill="white"></path>
        <path
          d="M10.1418 91.2562C9.86683 91.2562 9.60016 91.1479 9.40225 90.9479C9.14183 90.6833 9.03975 90.2979 9.13766 89.9417L14.6356 69.8667C11.2272 63.8125 9.42933 56.9375 9.4335 49.9583C9.44183 27.5792 27.6522 9.375 50.0293 9.375C60.8835 9.37917 71.0814 13.6063 78.746 21.2771C86.4106 28.95 90.6293 39.1458 90.6252 49.9875C90.6168 72.3646 72.4043 90.5708 50.0293 90.5708C43.3856 90.5687 36.8127 88.9292 30.9793 85.8271L10.4064 91.2208C10.3189 91.2458 10.2314 91.2562 10.1418 91.2562Z"
          fill="white"></path>
        <path
          d="M50.0293 10.4166C60.6106 10.4208 70.5397 14.5395 78.0085 22.0124C85.4751 29.4874 89.5876 39.4207 89.5835 49.9874C89.5751 71.7895 71.8293 89.5291 50.0293 89.5291H50.0126C43.3939 89.527 36.8876 87.8666 31.1106 84.7145L10.1418 90.2145L15.7543 69.7249C12.2918 63.7291 10.471 56.9249 10.4731 49.9562C10.4835 28.1541 28.2251 10.4166 50.0293 10.4166ZM50.0293 8.33325C27.0793 8.33325 8.40014 27.0041 8.38972 49.9562C8.38764 56.9708 10.1585 63.8833 13.5168 70.002L8.13139 89.6666C7.93556 90.3853 8.13556 91.152 8.66056 91.6812C9.05639 92.0812 9.59181 92.2999 10.1418 92.2999C10.3189 92.2999 10.496 92.277 10.671 92.2312L30.8522 86.9395C36.7439 89.9978 43.3481 91.6124 50.0126 91.6145C72.9793 91.6145 91.6585 72.9416 91.6689 49.9895C91.6731 38.8666 87.346 28.4083 79.4856 20.5416C71.621 12.6728 61.1606 8.33742 50.0293 8.33325Z"
          fill="#CFD8DC"></path>
        <path
          d="M73.1333 27.1375C66.925 20.925 58.6729 17.5021 49.8896 17.5C31.7562 17.5 17.0083 32.2417 17 50.3625C16.9979 56.5729 18.7354 62.6187 22.0271 67.8542L22.8104 69.0979L19.4875 81.225L31.9313 77.9625L33.1333 78.675C38.1792 81.6708 43.9667 83.2542 49.8667 83.2562H49.8792C68 83.2562 82.7479 68.5125 82.7542 50.3896C82.7562 41.6083 79.3417 33.35 73.1333 27.1375Z"
          fill="#38B7FF"></path>
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M40.1418 33.4271C39.4022 31.7813 38.6231 31.7479 37.9168 31.7188C37.3397 31.6938 36.6814 31.6958 36.0231 31.6958C35.3647 31.6958 34.2939 31.9438 33.3877 32.9333C32.4814 33.9229 29.9272 36.3125 29.9272 41.175C29.9272 46.0375 33.4689 50.7375 33.9627 51.3958C34.4564 52.0542 40.8002 62.3521 50.846 66.3146C59.1939 69.6063 60.8939 68.9521 62.7064 68.7875C64.5189 68.6229 68.5543 66.3979 69.3772 64.0896C70.2002 61.7813 70.2002 59.8042 69.9543 59.3917C69.7064 58.9792 69.0481 58.7333 68.0606 58.2375C67.0731 57.7417 62.2127 55.3521 61.3064 55.0229C60.4002 54.6938 59.7418 54.5292 59.0814 55.5188C58.4231 56.5063 56.5293 58.7333 55.9522 59.3917C55.3752 60.0521 54.7981 60.1354 53.8106 59.6396C52.8231 59.1438 49.6397 58.1021 45.8627 54.7354C42.9252 52.1167 40.9418 48.8813 40.3647 47.8917C39.7877 46.9042 40.3022 46.3688 40.7981 45.875C41.2418 45.4313 41.7856 44.7208 42.2814 44.1438C42.7752 43.5667 42.9397 43.1542 43.2689 42.4958C43.5981 41.8354 43.4335 41.2583 43.1856 40.7646C42.9418 40.2688 41.021 35.3813 40.1418 33.4271Z"
          fill="white"></path>
      </svg>
      <h3 class="text-base capitalize  font-black text-white sm:text-[28px]">whatsapp</h3>
      <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-xl  "><a target="_blank"
          href="https://wa.me/123456789">+85512559997</a></p>
    </div>
    <div
      class="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white  bg-opacity-30 rounded-[25px]">
      <svg aria-hidden="true" class="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]" fill="none"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="telegram">
        <path
          d="M50.0002 8.33325C38.9495 8.33325 28.3514 12.7231 20.5374 20.5371C12.7234 28.3512 8.3335 38.9492 8.3335 49.9999C8.3335 61.0506 12.7234 71.6487 20.5374 79.4627C28.3514 87.2767 38.9495 91.6666 50.0002 91.6666C61.0508 91.6666 71.6489 87.2767 79.4629 79.4627C87.277 71.6487 91.6668 61.0506 91.6668 49.9999C91.6668 38.9492 87.277 28.3512 79.4629 20.5371C71.6489 12.7231 61.0508 8.33325 50.0002 8.33325Z"
          fill="#38B7FF"></path>
        <path
          d="M70.7293 31.2501L62.9252 71.0959C62.9252 71.0959 62.5897 72.9168 60.3314 72.9168C59.1314 72.9168 58.5127 72.3459 58.5127 72.3459L41.6085 58.3188L33.3377 54.1501L22.7231 51.3272C22.7231 51.3272 20.8335 50.7813 20.8335 49.2188C20.8335 47.9168 22.7772 47.2959 22.7772 47.2959L67.1856 29.6543C67.1856 29.6543 68.5418 29.1647 69.5314 29.1668C70.1397 29.1668 70.8335 29.4272 70.8335 30.2084C70.8335 30.7293 70.7293 31.2501 70.7293 31.2501Z"
          fill="white"></path>
        <path
          d="M47.9169 63.5522L40.7794 70.5814C40.7794 70.5814 40.469 70.8209 40.0544 70.8314C39.9106 70.8355 39.7565 70.8126 39.5981 70.7418L41.6065 58.3147L47.9169 63.5522Z"
          fill="#B0BEC5"></path>
        <path
          d="M62.2856 37.9084C61.9335 37.45 61.2835 37.3667 60.8252 37.7146L33.3335 54.1667C33.3335 54.1667 37.721 66.4417 38.3897 68.5667C39.0606 70.6938 39.5981 70.7438 39.5981 70.7438L41.6064 58.3167L62.0897 39.3667C62.5481 39.0188 62.6335 38.3667 62.2856 37.9084Z"
          fill="#CFD8DC"></path>
      </svg>
      <h3 class="text-base capitalize  font-black text-white sm:text-[28px]">telegram</h3>
      <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-xl  "><a target="_blank"
          href="https://t.me/username">Dita Rector</a></p>
    </div>
    <div
      class="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white  bg-opacity-30 rounded-[25px]">
      <svg aria-hidden="true" class="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]" fill="none"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="location">
        <path
          d="M78.75 28.7656C78.75 21.1407 75.721 13.828 70.3293 8.4363C64.9376 3.04463 57.625 0.015625 50 0.015625C42.375 0.015625 35.0623 3.04463 29.6707 8.4363C24.279 13.828 21.25 21.1407 21.25 28.7656C21.25 44.6406 50 84.7812 50 84.7812C50 84.7812 78.75 44.6406 78.75 28.7656ZM31.25 28.7656C31.25 25.0572 32.3497 21.4321 34.4099 18.3487C36.4702 15.2653 39.3986 12.862 42.8247 11.4429C46.2508 10.0237 50.0208 9.65243 53.6579 10.3759C57.2951 11.0994 60.636 12.8851 63.2583 15.5074C65.8805 18.1296 67.6663 21.4705 68.3897 25.1077C69.1132 28.7448 68.7419 32.5148 67.3227 35.9409C65.9036 39.3671 63.5004 42.2954 60.4169 44.3557C57.3335 46.416 53.7084 47.5156 50 47.5156C45.0272 47.5156 40.2581 45.5402 36.7417 42.0239C33.2254 38.5076 31.25 33.7384 31.25 28.7656Z"
          fill="#38B7FF"></path>
        <path
          d="M64.4687 67.1875C62.3125 70.7031 60.2188 73.9531 58.375 76.7344C66.1875 77.7969 71.6563 80.2969 71.6563 83.2344C71.6563 87.1094 61.9688 90.2656 50 90.2656C38.0313 90.2656 28.3437 87.1406 28.3437 83.2344C28.3437 80.2812 33.8438 77.7812 41.6406 76.7344C39.7969 73.9531 37.7031 70.6875 35.5469 67.1719C16.6406 69.3125 2.98438 75.6562 2.98438 83.1719C2.98438 92.4687 24.0312 100 50 100C75.9688 100 97.0156 92.4687 97.0156 83.1719C97.0156 75.6562 83.3594 69.3125 64.4687 67.1875Z"
          fill="#38B7FF"></path>
      </svg>
      <h3 class="text-base capitalize  font-black text-white sm:text-[28px]">location</h3>
      <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-xl  "><a target="_blank" href="location">PLACES
          </a></p>
    </div>
    <div
      class="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white  bg-opacity-30 rounded-[25px]">
      <svg aria-hidden="true" class="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]" fill="none"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="linkedin">
        <path
          d="M87.5 77.0833C87.5 82.8375 82.8375 87.5 77.0833 87.5H22.9167C17.1646 87.5 12.5 82.8375 12.5 77.0833V22.9167C12.5 17.1625 17.1646 12.5 22.9167 12.5H77.0833C82.8375 12.5 87.5 17.1625 87.5 22.9167V77.0833Z"
          fill="#38B7FF"></path>
        <path opacity="0.05"
          d="M62.4998 77.0834V56.0438C62.4998 52.5251 60.7936 50.423 57.9332 50.423C56.2353 50.423 54.9873 51.3792 54.2269 53.2647C54.1915 53.398 54.1415 53.9417 54.1623 55.5855L54.1665 77.0834H39.5832V37.5001H54.1665V39.7105C56.2957 38.2417 58.9061 37.5001 61.954 37.5001C71.4269 37.5001 77.0811 43.9438 77.0811 54.7376L77.0832 77.0834H62.4998ZM22.9165 77.0834V37.5001H30.1186C25.9457 37.5001 22.9165 34.4334 22.9165 30.2063C22.9165 25.9834 25.9957 22.9167 30.2373 22.9167C34.429 22.9167 37.4144 25.898 37.4998 30.1647C37.4998 34.423 34.4186 37.5001 30.1769 37.5001H37.4998V77.0834H22.9165Z"
          fill="black"></path>
        <path opacity="0.07"
          d="M63.5418 76.0416V56.0437C63.5418 51.9332 61.3939 49.3812 57.9335 49.3812C55.2356 49.3812 53.9022 51.2812 53.2606 52.8749C53.0897 53.2895 53.1127 54.9353 53.121 55.6374L53.1252 76.0416H40.6252V38.5416H53.1252V41.9541C54.7814 40.2395 57.4481 38.5416 61.9543 38.5416C70.7731 38.5416 76.0397 44.5958 76.0397 54.7374L76.0418 76.0416H63.5418ZM23.9585 76.0416V38.5416H36.4585V76.0416H23.9585ZM30.1189 36.4583C26.5502 36.4583 23.9585 33.8291 23.9585 30.2062C23.9585 26.5853 26.6002 23.9583 30.2377 23.9583C33.8293 23.9583 36.3856 26.5187 36.4585 30.1853C36.4585 33.8291 33.8168 36.4583 30.1772 36.4583H30.1189Z"
          fill="black"></path>
        <path
          d="M25 39.5833H35.4167V75H25V39.5833ZM30.1771 35.4167H30.1187C27.0104 35.4167 25 33.1 25 30.2062C25 27.25 27.0729 25 30.2375 25C33.4062 25 35.3583 27.25 35.4167 30.2062C35.4167 33.0979 33.4062 35.4167 30.1771 35.4167ZM75 75H64.5833V56.0437C64.5833 51.4646 62.0312 48.3396 57.9333 48.3396C54.8062 48.3396 53.1146 50.4479 52.2937 52.4854C51.9937 53.2146 52.0833 55.2312 52.0833 56.25V75H41.6667V39.5833H52.0833V45.0333C53.5854 42.7083 55.9375 39.5833 61.9542 39.5833C69.4083 39.5833 74.9979 44.2708 74.9979 54.7375L75 75Z"
          fill="white"></path>
      </svg>
      <h3 class="text-base capitalize  font-black text-white sm:text-[28px]">linkedin</h3>
      <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-xl  "><a target="_blank"
          href="https://www.linkedin.com/in/abdulbasit-abdulgani">Dita Rector</a></p>
    </div>
    <div
      class="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white  bg-opacity-30 rounded-[25px]">
      <svg aria-hidden="true" class="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]" fill="none"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="github">
        <path
          d="M35.582 93.672C37.004 93.06 38 91.646 38 90V79.2C38 78.806 38.032 78.396 38.082 77.98C38.054 77.988 38.028 77.994 38 78C38 78 32 78 30.8 78C27.8 78 25.2 76.8 24 74.4C22.6 71.8 22 67.4 18.4 65C17.8 64.6 18.2 64 19.4 64C20.6 64.2 23.2 65.8 24.8 68C26.6 70.2 28.4 72 31.6 72C36.574 72 39.24 71.75 40.844 70.89C42.712 68.112 45.298 66 48 66V65.95C36.664 65.586 29.422 61.818 26.05 56C18.72 56.084 12.338 56.81 8.696 57.414C8.58 56.76 8.48 56.102 8.394 55.44C11.988 54.848 18.08 54.146 25.084 54.012C24.86 53.46 24.666 52.894 24.502 52.314C17.48 51.958 11.42 52.236 8.128 52.508C8.088 51.844 8.034 51.182 8.026 50.51C11.324 50.24 17.22 49.97 24.062 50.288C23.904 49.288 23.802 48.266 23.802 47.202C23.802 43.802 25.002 40.202 27.202 37.202C26.202 33.802 24.802 26.602 27.602 24.002C33.002 24.002 36.802 26.602 38.602 28.202C42 26.8 45.8 26 50 26C54.2 26 58 26.8 61.2 28.2C63 26.6 66.8 24 72.2 24C75.2 26.8 73.6 34 72.6 37.2C74.8 40.2 76 43.6 75.8 47.2C75.8 48.168 75.71 49.102 75.58 50.018C82.578 49.674 88.634 49.95 91.988 50.222C91.984 50.896 91.922 51.554 91.886 52.22C88.544 51.944 82.336 51.66 75.168 52.042C74.99 52.714 74.774 53.368 74.518 54.002C81.61 54.094 87.848 54.78 91.614 55.38C91.528 56.044 91.428 56.702 91.312 57.354C87.488 56.742 80.97 56.026 73.554 55.99C70.224 61.746 63.114 65.5 52 65.938V66C57.2 66 62 73.8 62 79.2V90C62 91.646 62.996 93.06 64.418 93.672C82.74 87.608 96 70.328 96 50C96 24.636 75.366 4 50 4C24.634 4 4 24.636 4 50C4 70.328 17.26 87.608 35.582 93.672Z"
          fill="#38B7FF"></path>
      </svg>
      <h3 class="text-base capitalize  font-black text-white sm:text-[28px]">github</h3>
      <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-xl  "><a target="_blank"
          href="https://github.com/3bd0sy">@cod-itor</a></p>
    </div>
    <div
      class="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white  bg-opacity-30 rounded-[25px]">
      <svg aria-hidden="true" class="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]" fill="none"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="email">
        <path
          d="M83.2187 83.125H16.2812C12.7601 83.1209 9.38438 81.7203 6.89456 79.2304C4.40473 76.7406 3.00414 73.3649 3 69.8437V29.7812C3.00414 26.2601 4.40473 22.8844 6.89456 20.3946C9.38438 17.9047 12.7601 16.5041 16.2812 16.5H83.2187C86.7399 16.5041 90.1156 17.9047 92.6055 20.3946C95.0953 22.8844 96.4959 26.2601 96.5 29.7812V69.8437C96.4959 73.3649 95.0953 76.7406 92.6055 79.2304C90.1156 81.7203 86.7399 83.1209 83.2187 83.125ZM16.2812 21.1875C14.002 21.1875 11.8162 22.0929 10.2046 23.7046C8.59291 25.3162 7.6875 27.502 7.6875 29.7812V69.8437C7.6875 72.123 8.59291 74.3088 10.2046 75.9204C11.8162 77.5321 14.002 78.4375 16.2812 78.4375H83.2187C85.4979 78.4375 87.6838 77.5321 89.2954 75.9204C90.9071 74.3088 91.8125 72.123 91.8125 69.8437V29.7812C91.8125 27.502 90.9071 25.3162 89.2954 23.7046C87.6838 22.0929 85.4979 21.1875 83.2187 21.1875H16.2812Z"
          fill="#38B7FF"></path>
        <path
          d="M49.9998 59.5C47.1085 59.5045 44.2945 58.5665 41.9842 56.8281L5.49978 29.2343C5.242 29.0534 5.02333 28.8224 4.85682 28.5551C4.69031 28.2878 4.57938 27.9897 4.53066 27.6785C4.48194 27.3674 4.49642 27.0496 4.57324 26.7442C4.65006 26.4388 4.78765 26.152 4.97778 25.9009C5.16791 25.6499 5.40669 25.4397 5.67985 25.283C5.95302 25.1263 6.25497 25.0262 6.56767 24.9888C6.88036 24.9514 7.1974 24.9773 7.49983 25.0652C7.80227 25.153 8.0839 25.3009 8.32791 25.5L44.8123 53.125C46.3105 54.2434 48.1301 54.8476 49.9998 54.8476C51.8694 54.8476 53.689 54.2434 55.1873 53.125L91.6716 25.5C91.9157 25.3009 92.1973 25.153 92.4997 25.0652C92.8022 24.9773 93.1192 24.9514 93.4319 24.9888C93.7446 25.0262 94.0465 25.1263 94.3197 25.283C94.5929 25.4397 94.8316 25.6499 95.0218 25.9009C95.2119 26.152 95.3495 26.4388 95.4263 26.7442C95.5031 27.0496 95.5176 27.3674 95.4689 27.6785C95.4202 27.9897 95.3092 28.2878 95.1427 28.5551C94.9762 28.8224 94.7576 29.0534 94.4998 29.2343L58.0154 56.8281C55.7051 58.5665 52.8911 59.5045 49.9998 59.5Z"
          fill="#38B7FF"></path>
        <path
          d="M6.51565 76.7813C6.0403 76.782 5.57597 76.6382 5.18427 76.3689C4.79258 76.0995 4.49204 75.7175 4.32253 75.2734C4.15303 74.8292 4.12257 74.3441 4.2352 73.8823C4.34783 73.4205 4.59822 73.0038 4.95315 72.6876L33.7032 47.047C34.1673 46.6326 34.777 46.4195 35.3982 46.4547C36.0194 46.4898 36.6013 46.7703 37.0157 47.2345C37.4301 47.6986 37.6431 48.3083 37.6079 48.9296C37.5728 49.5508 37.2923 50.1326 36.8282 50.547L8.07815 76.1876C7.6512 76.5761 7.09285 76.7882 6.51565 76.7813ZM93.4844 76.7813C92.9072 76.7882 92.3489 76.5761 91.9219 76.1876L63.1719 50.547C62.7078 50.1326 62.4273 49.5508 62.3921 48.9296C62.3569 48.3083 62.57 47.6986 62.9844 47.2345C63.3988 46.7703 63.9806 46.4898 64.6018 46.4547C65.223 46.4195 65.8328 46.6326 66.2969 47.047L95.0313 72.6876C95.3862 73.0038 95.6366 73.4205 95.7492 73.8823C95.8619 74.3441 95.8314 74.8292 95.6619 75.2734C95.4924 75.7175 95.1919 76.0995 94.8002 76.3689C94.4085 76.6382 93.9441 76.782 93.4688 76.7813H93.4844Z"
          fill="#38B7FF"></path>
      </svg>
      <h3 class="text-base capitalize  font-black text-white sm:text-[28px]">email</h3>
      <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-xl  "><a target="_blank"
          href="mailto:ax.abdo.syrain@gmail.com">Rectordita</a></p>
    </div>
  </div>
</section>  
`;
    return div;
}

},{}],"3BhUp":[function(require,module,exports,__globalThis) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createLayout = createLayout;
const navbar_1 = __importDefault(require("5dd05ef90396dbd0"));
const footer_1 = require("9ac67e6a77dd735c");
function createLayout(contentFn) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    const header = (0, navbar_1.default)();
    const content = contentFn();
    const footer = (0, footer_1.Footer)();
    app.append(header, content, footer);
}

},{"5dd05ef90396dbd0":"fkP7Q","9ac67e6a77dd735c":"3Dyug"}],"fkP7Q":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Navbar;
function Navbar() {
    const navbar = document.createElement("nav");
    navbar.className = "text-white";
    navbar.innerHTML = `
   <!-- Header Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <!-- Logo Section -->
                <div class="flex-shrink-0">
                    <a href="/" class="text-2xl font-bold">FOODIE </a>
                </div>

                <!-- Navigation Menu -->
                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="home" data-link class="hover:text-gray-300 transition-all">Home</a>
                    <a href="products" data-link class="hover:text-gray-300 transition-all">Product</a>
                    <a href="about" data-link class="hover:text-gray-300 transition-all">About</a>
                </nav>

                <!-- Call-to-Action Button & Dark Mode Toggle -->
                <div class="hidden md:flex items-center space-x-4">
                    <a href="#about" class="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all">
                        Get in Touch
                    </a>
                    <button id="dark-toggle" class="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors" title="Toggle dark mode">
                        <svg id="dark-toggle-icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu Button (for smaller screens) & Dark Toggle -->
                <div class="md:hidden flex items-center space-x-2">
                    <button id="dark-toggle-mobile" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors" title="Toggle dark mode">
                        <svg id="dark-toggle-icon-mobile" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                    <button id="menu-button" class="text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
  `;
    const menuButton = navbar.querySelector("#menu-button");
    const mobileMenu = navbar.querySelector("#mobile-menu");
    if (menuButton && mobileMenu) menuButton.addEventListener("click", ()=>{
        mobileMenu.classList.toggle("hidden");
    });
    function toggleDarkMode() {
        const html = document.documentElement;
        html.classList.toggle("dark");
        if (html.classList.contains("dark")) localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark");
    else if (localStorage.getItem("theme") === "light") document.documentElement.classList.remove("dark");
    const darkToggle = navbar.querySelector("#dark-toggle");
    if (darkToggle) darkToggle.addEventListener("click", toggleDarkMode);
    const darkToggleMobile = navbar.querySelector("#dark-toggle-mobile");
    if (darkToggleMobile) darkToggleMobile.addEventListener("click", toggleDarkMode);
    return navbar;
}

},{}],"3Dyug":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Footer = Footer;
function Footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="bg-[#b29f94] mt-10">
    <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div class="p-5">
            <h3 class="font-bold text-xl text-white}">FOODIE</h3>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase  font-bold">Resources</div>
            <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase  font-bold">Support</div>
            <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase  font-bold">Contact us</div>
            <a class="my-3 block" href="/#">NO WHERE NEAR XXX STREET, 12345
                <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">RectorDita@gmail.com
                <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
    </div>
</div>

<div class="bg-[#b29f94] pt-2">
    <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                    style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                    <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z"></path>
                </svg>
            </a>
            <a href="/#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                    style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                    <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
                </svg>
            </a>
            <a href="/#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                    style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                    <g id="Layer_1">
                        <circle id="Oval" cx="12" cy="12" r="12"></circle>
                        <path id="Shape" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z" style="fill: rgb(255, 255, 255);"></path>
                    </g>
                </svg>
            </a>
            <a href="/#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                    style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                    <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"></path>
                </svg>
            </a>
            <a href="/#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                    style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                    <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                  -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                  -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                  0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                  0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                  -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
                </svg>
            </a>
        </div>
        <div class="my-5">\xa9 Copyright 2025. All Rights Reserved.</div>
    </div>
</div>
    `;
    return footer;
}

},{}],"ltaef":[function(require,module,exports,__globalThis) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = productDetail;
function productDetail() {
    const div = document.createElement("div");
    function fetchProducts() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield fetch("https://dummyjson.com/recipes");
                if (!response.ok) throw new Error("Network response was not ok");
                const data = yield response.json();
                console.log("Fetched service data:", data);
                return data.recipes;
            } catch (error) {
                console.error("Fetch error:", error);
                return [];
            }
        });
    }
    function renderSkeletonDetail() {
        div.innerHTML = `
      <div class="flex flex-wrap animate-pulse">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <div class="h-10 bg-gray-200 dark:bg-gray-700 w-1/3 mb-4 rounded"></div>
            <div class="h-8 bg-gray-200 dark:bg-gray-700 w-1/4 mb-6 rounded"></div>
            <div class="h-16 bg-gray-200 dark:bg-gray-700 w-3/4 mb-4 rounded"></div>
            <div class="h-8 bg-gray-200 dark:bg-gray-700 w-1/2 mb-4 rounded"></div>
            <div class="h-12 bg-gray-200 dark:bg-gray-700 w-1/3 mb-4 rounded"></div>
            <div class="h-10 bg-gray-200 dark:bg-gray-700 w-1/4 mb-4 rounded"></div>
            <div class="h-12 bg-gray-200 dark:bg-gray-700 w-1/2 mb-4 rounded"></div>
            <div class="h-10 bg-gray-200 dark:bg-gray-700 w-1/3 mb-4 rounded"></div>
          </div>
        </div>
        <div class="w-full sm:w-4/12 flex items-center justify-center">
          <div class="w-full h-48 sm:h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    `;
    }
    function renderProductDetail(product) {
        div.innerHTML = `
      <div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
              <div class="text-4xl font-bold">
                ${product.name} <span class="text-green-700">.</span>
              </div>
              <div>
                <img src="${product.image}" alt="" class="w-8 rounded-full">
              </div>
            </nav>
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold">${product.name}</h1>
                <div class="w-20 h-2 bg-green-700 my-4"></div>
                <p class="text-xl mb-4"><strong>Ingredients:</strong> ${product.ingredients.join(", ")}</p>
                <p class="text-lg mb-10">${product.instructions}</p>
                <div class="flex items-center space-x-4 mb-6">
                  <span class="text-yellow-500 font-bold flex items-center"><ion-icon name="star"></ion-icon> ${product.rating}</span>
                  <span class="text-gray-500 dark:text-gray-400">${product.difficulty}</span>
                </div>
                <a href="products"><button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:shadow-2xl transition-all duration-300 transform hover:cursor-pointer">Order Now</button></a>
              </div>
            </header>
          </div>
        </div>
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover sm:h-screen sm:w-4/12 rounded">
      </div>
    `;
    }
    renderSkeletonDetail();
    (()=>__awaiter(this, void 0, void 0, function*() {
            try {
                const products = yield fetchProducts();
                if (products.length > 0) renderProductDetail(products[0]);
                else div.innerHTML = '<p class="text-center text-red-500">No product found.</p>';
            } catch (error) {
                div.innerHTML = '<p class="text-center text-red-500">Failed to load product details.</p>';
            }
        }))();
    return div;
}

},{}]},["36Eiz","6HMqo"], "6HMqo", "parcelRequire94c2", {})

//# sourceMappingURL=Typescript-website.a62c4ae9.js.map
