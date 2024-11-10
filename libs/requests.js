( () => {
    "use strict";
    var e = {
        65334: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.WatcherHandler = void 0,
            function(e) {
                e.onLoad = "onLoad",
                e.onClick = "onClick",
                e.onInputChange = "onInputChange",
                e.onIframeLoaded = "onIframeLoaded",
                e.onUrlChanged = "onUrlChanged",
                e.onPostMessage = "onPostMessage",
                e.onWindowLoad = "onWindowLoad",
                e.onDomLoad = "onDomLoad",
                e.onDomChanged = "onDomChanged",
                e.onHttpRequest = "onHttpRequest",
                e.onHttpResponse = "onHttpResponse",
                e.onKeyDown = "onKeyDown"
            }(t.WatcherHandler || (t.WatcherHandler = {}))
        }
        ,
        24769: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getRegex = void 0;
            t.getRegex = e => {
                const t = "object" == typeof e;
                try {
                    return t ? new RegExp(e.regex,e.flags) : new RegExp(e,"i")
                } catch {
                    return t ? new RegExp(e.regex,"i") : new RegExp(e,"i")
                }
            }
        }
        ,
        57309: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.InterceptorAdapter = t.RequestValidator = void 0;
            t.RequestValidator = class {
            }
            ;
            t.InterceptorAdapter = class {
            }
        }
        ,
        35263: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MessageScriptType = t.MessageContentType = void 0,
            function(e) {
                e.ECOMMERCE_INIT = "ECOMMERCE_INIT",
                e.ECOMMERCE_RE_INIT = "ECOMMERCE_RE_INIT",
                e.ECOMMERCE_TRACK = "ECOMMERCE_TRACK",
                e.ECOMMERCE_RUNTIME_STORAGE_SAVE = "ECOMMERCE_RUNTIME_STORAGE_SAVE",
                e.ECOMMERCE_RUNTIME_STORAGE_REMOVE = "ECOMMERCE_RUNTIME_STORAGE_REMOVE",
                e.ERROR_TRACE = "ERROR_TRACE",
                e.ECOMMERCE_INIT_SHOPIFY = "ECOMMERCE_INIT_SHOPIFY"
            }(t.MessageContentType || (t.MessageContentType = {})),
            function(e) {
                e.INIT_HTTP_CONFIG = "INIT_HTTP_CONFIG",
                e.HTTP_CONFIG_INJECTED = "HTTP_CONFIG_INJECTED",
                e.SAVE_HTTP_DATA = "SAVE_HTTP_DATA",
                e.CUSTOM_ON_URL_CHANGED = "CUSTOM_ON_URL_CHANGED",
                e.SHOPIFY_DETECTED = "SHOPIFY_DETECTED"
            }(t.MessageScriptType || (t.MessageScriptType = {}))
        }
    }
      , t = {};
    function s(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, s),
        a.exports
    }
    ( () => {
        const e = s(35263)
          , t = s(57309)
          , n = s(65334)
          , o = s(24769);
        (s => {
            const a = t => {
                const n = {
                    _custom_type_: e.MessageScriptType.SAVE_HTTP_DATA,
                    payload: t
                };
                s.postMessage(n)
            }
            ;
            class r extends t.RequestValidator {
                validateRequest(e, t="GET") {
                    return !!this.onHttpRequest?.length && (this.onHttpRequest.find(this.httpMatherPredicate(e, t)) ?? !1)
                }
                validateResponse(e, t="GET") {
                    return !!this.onHttpResponse?.length && (this.onHttpResponse.find(this.httpMatherPredicate(e, t)) ?? !1)
                }
                setConfig(e, t) {
                    this.onHttpRequest = e,
                    this.onHttpResponse = t
                }
                httpMatherPredicate(e, t) {
                    return ({regex: s, methods: n}) => {
                        const a = (0,
                        o.getRegex)(s);
                        return n.includes(t) && a.test(e)
                    }
                }
            }
            class p extends t.InterceptorAdapter {
                constructor(e) {
                    super(),
                    this.validator = e,
                    this.initInterceptor()
                }
                static init(e) {
                    this.instance || (this.instance = new p(e))
                }
                async interceptRequest(e, t) {
                    const s = t?.method
                      , o = this.validator.validateRequest(e, s);
                    o && a({
                        payload: {
                            url: e,
                            params: t
                        },
                        handler: o,
                        watcher: n.WatcherHandler.onHttpRequest
                    })
                }
                async interceptResponse(e, [t,s]) {
                    const n = s?.method
                      , o = this.validator.validateResponse(t, n);
                    o && await this.proceedResponse(e, o)
                }
                async proceedResponse(e, t) {
                    const s = await e.clone()
                      , o = e.headers.get("content-type");
                    o && (o.includes("json") ? a({
                        payload: await s.json(),
                        handler: t,
                        watcher: n.WatcherHandler.onHttpResponse
                    }) : o.includes("text") && a({
                        payload: await s.text(),
                        handler: t,
                        watcher: n.WatcherHandler.onHttpResponse
                    }))
                }
                initInterceptor() {
                    const e = s.fetch;
                    s.fetch = async (...t) => {
                        this.interceptRequest(...t);
                        const s = await e(...t);
                        return this.interceptResponse(s, t),
                        s
                    }
                }
            }
            class i extends t.InterceptorAdapter {
                constructor(e) {
                    super(),
                    this.validator = e,
                    this.initInterceptor()
                }
                static init(e) {
                    this.instance || (this.instance = new i(e))
                }
                async interceptRequest({method: e, url: t, body: s}) {
                    const o = this.validator.validateRequest(t, e);
                    o && a({
                        payload: {
                            url: t,
                            params: {
                                method: e,
                                body: s
                            }
                        },
                        handler: o,
                        watcher: n.WatcherHandler.onHttpRequest
                    })
                }
                async interceptResponse({status: e, response: t, responseType: s, method: n, url: o}) {
                    const a = this.validator.validateResponse(o, n);
                    `${e}`.startsWith("20") && a && this.proceedResponse(t, s, a)
                }
                proceedResponse(e, t, s) {
                    if ("json" === t)
                        a({
                            payload: e,
                            handler: s,
                            watcher: n.WatcherHandler.onHttpResponse
                        });
                    else if ("text" === t || "" === t)
                        try {
                            a({
                                payload: JSON.parse(e),
                                handler: s,
                                watcher: n.WatcherHandler.onHttpResponse
                            })
                        } catch {
                            a({
                                payload: e,
                                handler: s,
                                watcher: n.WatcherHandler.onHttpResponse
                            })
                        }
                }
                initInterceptor() {
                    const e = XMLHttpRequest.prototype.open
                      , t = XMLHttpRequest.prototype.send
                      , n = this;
                    s.XMLHttpRequest.prototype.open = function(...t) {
                        return this.__METHOD__ = t[0],
                        this.__URL__ = t[1],
                        this.addEventListener("load", (function({target: e}) {
                            n.interceptResponse({
                                status: e.status,
                                response: e.response,
                                responseType: e.responseType,
                                method: t[0],
                                url: t[1]
                            })
                        }
                        )),
                        e.apply(this, t)
                    }
                    ,
                    s.XMLHttpRequest.prototype.send = function(...e) {
                        return n.interceptRequest({
                            method: this.__METHOD__,
                            url: this.__URL__,
                            body: e[0]
                        }),
                        t.apply(this, e)
                    }
                }
            }
            const c = new r;
            p.init(c),
            i.init(c),
            s.addEventListener("message", (t => {
                if (t.data?._custom_type_ !== e.MessageScriptType.INIT_HTTP_CONFIG)
                    return;
                const {onHttpRequest: s, onHttpResponse: n} = t.data.payload;
                c.setConfig(s, n)
            }
            )),
            s.postMessage({
                _custom_type_: e.MessageScriptType.HTTP_CONFIG_INJECTED
            })
        }
        )(window || globalThis)
    }
    )()
}
)();
