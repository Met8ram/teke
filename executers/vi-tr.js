({
    9358: function() {
        function t(r) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            t(r)
        }
        function r(t, r) {
            var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!i) {
                if (Array.isArray(t) || (i = function(t, r) {
                    if (t) {
                        if ("string" == typeof t)
                            return e(t, r);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name),
                        "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? e(t, r) : void 0
                    }
                }(t)) || r && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, a = !0, p = !1;
            return {
                s: function() {
                    i = i.call(t)
                },
                n: function() {
                    var t = i.next();
                    return a = t.done,
                    t
                },
                e: function(t) {
                    p = !0,
                    s = t
                },
                f: function() {
                    try {
                        a || null == i.return || i.return()
                    } finally {
                        if (p)
                            throw s
                    }
                }
            }
        }
        function e(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var e = 0, i = new Array(r); e < r; e++)
                i[e] = t[e];
            return i
        }
        var i, n = null !== (i = sessionStorage.getItem("bis_data")) ? JSON.parse(i) : null, o = n ? n.config.twitterConfig.TRAFFIC_DETECTOR : null, s = n ? n.id + "_w" : null;
        if (null !== o) {
            var a = function(t) {
                return p(t).length > 0
            }
              , p = function(t) {
                return (o.parsers || []).filter((function(r) {
                    return new RegExp(r.watch).test(t)
                }
                ))
            }
              , u = this && this.__extends || function(t, r) {
                for (var e in r)
                    r.hasOwnProperty(e) && (t[e] = r[e]);
                function i() {
                    this.constructor = t
                }
                i.prototype = r.prototype,
                t.prototype = new i
            }
              , _ = function() {
                function t() {}
                return t.isWhiteSpace = function(t) {
                    return /\s/g.test(t)
                }
                ,
                t.isLetter = function(t) {
                    return t.match(/[a-z]/i)
                }
                ,
                t.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && !isNaN(t - 0)
                }
                ,
                t.capitalizeFirst = function(t) {
                    return "string" != typeof t ? "" : t.charAt(0).toUpperCase() + t.slice(1)
                }
                ,
                t.isLookLikeLogicalOperator = function(t) {
                    return [">", "<", "=", "!"].includes(t)
                }
                ,
                t
            }()
              , h = function() {
                function t() {
                    this.reset()
                }
                return t.prototype.reset = function() {
                    this._prop = "",
                    this._alias = null
                }
                ,
                t.prototype.hasProp = function() {
                    return this._prop.length > 0
                }
                ,
                t.prototype.build = function() {
                    if (!this.hasProp())
                        return [];
                    var t = {
                        prop: this._prop,
                        alias: this._alias
                    };
                    return this.reset(),
                    t
                }
                ,
                t.prototype.addCharToAlias = function(t) {
                    this._alias = this._alias ? this._alias + t : t
                }
                ,
                t.prototype.addCharToProp = function(t) {
                    this._prop = this._prop ? this._prop + t : t
                }
                ,
                t
            }()
              , c = {
                OPERATOR: "OPERATOR",
                OPERAND_CONST_STRING_VALUE: "OPERAND_CONST_STRING_VALUE",
                OPERAND_CONST_NUMBER_VALUE: "OPERAND_CONST_NUMBER_VALUE",
                OPERAND_PROPERTY: "OPERAND_PROPERTY"
            }
              , l = function() {
                function t() {
                    this.reset()
                }
                return t.prototype.reset = function() {
                    this._value = null,
                    this._type = null
                }
                ,
                t.prototype.build = function() {
                    if (!this._type)
                        return [];
                    var t = this._type === c.OPERAND_CONST_NUMBER_VALUE ? parseFloat(this._value) : this._value
                      , r = {
                        type: {
                            OPERATOR: "OPERATOR",
                            OPERAND_CONST_STRING_VALUE: "CONST_VALUE",
                            OPERAND_CONST_NUMBER_VALUE: "CONST_VALUE",
                            OPERAND_PROPERTY: "PROPERTY"
                        }[this._type],
                        value: t
                    };
                    return this.reset(),
                    r
                }
                ,
                t.prototype.markAsOperator = function() {
                    return this._type = c.OPERATOR,
                    this
                }
                ,
                t.prototype.markAsConstStringValueOperand = function() {
                    return this._type = c.OPERAND_CONST_STRING_VALUE,
                    this
                }
                ,
                t.prototype.markAsConstNumberValueOperand = function() {
                    return this._type = c.OPERAND_CONST_NUMBER_VALUE,
                    this
                }
                ,
                t.prototype.markAsPropertyOperand = function() {
                    return this._type = c.OPERAND_PROPERTY,
                    this
                }
                ,
                t.prototype.addCharToValue = function(t) {
                    return this._value = this._value ? this._value + t : t,
                    this
                }
                ,
                t.prototype.withValue = function(t) {
                    return this._value = t,
                    this
                }
                ,
                t
            }()
              , E = new (function() {
                function t() {
                    this._selectBuilder = new h,
                    this._filterBuilder = new l,
                    this.reset()
                }
                return t.prototype.reset = function() {
                    return this.filterBuilder().reset(),
                    this.selectBuilder().reset(),
                    this._element = "",
                    this._select = [],
                    this._filter = [],
                    this._limit = null,
                    this
                }
                ,
                t.prototype.filterBuilder = function() {
                    return this._filterBuilder
                }
                ,
                t.prototype.selectBuilder = function() {
                    return this._selectBuilder
                }
                ,
                t.prototype.build = function() {
                    var t = {
                        element: this._element,
                        select: this._select,
                        filter: this._filter,
                        limit: this._limit
                    };
                    return this.reset(),
                    t
                }
                ,
                t.prototype.addCharToElementName = function(t) {
                    return this._element += t,
                    this
                }
                ,
                t.prototype.hasElementName = function() {
                    return this._element.length > 0
                }
                ,
                t.prototype.addConditionToFilter = function(t) {
                    return this._filter.push(t),
                    this
                }
                ,
                t.prototype.addPropertyToSelect = function(t) {
                    return this._select.push(t),
                    this
                }
                ,
                t.prototype.hasPropertiesInSelect = function() {
                    return this._select.length > 0
                }
                ,
                t
            }())
              , f = function() {
                function t() {}
                return t.query = function(t, e) {
                    for (var i = new T(t).parse(0), n = [{
                        data: e,
                        parents: []
                    }], o = 0, s = [], a = 0; a < i.length; a++) {
                        for (var p = i[a], u = [], _ = 0; _ < n.length; _++) {
                            var h = n[_];
                            if (h.data.hasOwnProperty(p.element)) {
                                var c = {
                                    data: h.data[p.element],
                                    parents: h.parents.slice()
                                };
                                if ("*" === p.limit) {
                                    var l = c.data;
                                    c.data.length || (l = Object.keys(c.data));
                                    var E, f = r(l);
                                    try {
                                        var R = function() {
                                            var t = E.value
                                              , r = "string" == typeof t ? t : c.data.indexOf(t)
                                              , e = c.data[r]
                                              , i = {
                                                data: e,
                                                parents: h.parents.slice()
                                            };
                                            if (p.select.length > 0) {
                                                var n = {
                                                    element: p.element,
                                                    data: {}
                                                };
                                                p.select.forEach((function(t) {
                                                    if (t.prop.includes(".")) {
                                                        var r, i = t.prop.split("."), o = i.length - 1;
                                                        i.forEach((function(i, s) {
                                                            if (r || (r = e[i]),
                                                            r && r.hasOwnProperty(i) && s !== o && r[i] && (r = r[i]),
                                                            r && r.hasOwnProperty(i) && s === o && r[i]) {
                                                                var a = t.alias ? t.alias : i;
                                                                n.data[a] = r[i]
                                                            }
                                                        }
                                                        ))
                                                    }
                                                    if (e.hasOwnProperty(t.prop) && !n.data[column]) {
                                                        var s = t.alias ? t.alias : t.prop;
                                                        n.data[s] = e[t.prop]
                                                    }
                                                }
                                                )),
                                                s.push(n),
                                                i.parents.push(o),
                                                o += 1
                                            }
                                            u.push(i)
                                        };
                                        for (f.s(); !(E = f.n()).done; )
                                            R()
                                    } catch (t) {
                                        f.e(t)
                                    } finally {
                                        f.f()
                                    }
                                } else
                                    u.push(c)
                            }
                        }
                        n = u,
                        p.filter.length > 0 && function() {
                            var t = p.filter[0]
                              , r = p.filter[1]
                              , e = p.filter[2]
                              , i = function(t, r) {
                                return "CONST_VALUE" === r.type ? r.value : t.data[r.value]
                            };
                            n = n.filter((function(n) {
                                var o = i(n, t)
                                  , s = i(n, e);
                                return "==" === r.value ? o == s : "===" === r.value ? o === s : "!=" === r.value ? o != s : "!==" === r.value ? o !== s : ">=" === r.value ? o >= s : "<=" === r.value ? o <= s : ">" === r.value ? o > s : "<" === r.value ? o < s : void 0
                            }
                            ))
                        }()
                    }
                    var O = i[i.length - 1]
                      , P = [];
                    return n.forEach((function(t) {
                        t.parents.length && t.parents.forEach((function(r) {
                            var e = s[r];
                            P.hasOwnProperty(r) || (P[r] = {},
                            P[r][e.element] = e.data),
                            P[r][O.element] = P[r][O.element] ? P[r][O.element].concat(t.data) : [t.data]
                        }
                        ))
                    }
                    )),
                    P.filter((function(t) {
                        return t
                    }
                    ))
                }
                ,
                t
            }()
              , R = {
                FILTER: "filter",
                SELECT: "select"
            }
              , O = function() {
                function t(t) {
                    if ("string" != typeof t)
                        throw new TypeError('Param "query" must be string type');
                    if (0 === t.trim().length)
                        throw new TypeError('Param "query" must be not empty type');
                    this._query = t,
                    this._process = null,
                    this._pos = null
                }
                return t.prototype.switchProcess = function(t) {
                    this._process = t
                }
                ,
                t.prototype.isRunningProcess = function(t) {
                    return this._process === t
                }
                ,
                t.prototype.parse = function(t) {
                    throw new Error("A child must implement this method")
                }
                ,
                t.prototype.name = function() {
                    throw new Error("A child must implement this method")
                }
                ,
                t.prototype.throwSyntaxError = function(t) {
                    throw new SyntaxError("JsonQuery: " + t)
                }
                ,
                t.prototype.throwSyntaxErrorWithTrace = function(t) {
                    var r = this._query.substr(0, this._pos + 1);
                    this.throwSyntaxError(t + ' "' + r + '"')
                }
                ,
                t.prototype.throwSyntaxErrorUnexpectedChar = function() {
                    var t = this._query[this._pos];
                    this.throwSyntaxErrorWithTrace('Unexpected symbol "' + t + '" in')
                }
                ,
                t
            }()
              , P = {
                LOOKING_FOR_PROPERTY: "LOOKING_FOR_PROPERTY",
                LOOKING_FOR_SEPARATOR_OR_ALIAS: "LOOKING_FOR_SEPARATOR_OR_ALIAS",
                LOOKING_FOR_ALIAS_NAME: "LOOKING_FOR_ALIAS_NAME",
                SELECT_OPERATION_SUCCESS: "SELECT_OPERATION_SUCCESS",
                SELECT_OPERATION_BEFORE_FINISH: "SELECT_OPERATION_BEFORE_FINISH",
                SELECT_RECORDING_PROPERTY_NAME: "SELECT_RECORDING_PROPERTY_NAME",
                SELECT_PARSING_ALIAS_KEYWORD: "SELECT_PARSING_ALIAS_KEYWORD",
                SELECT_RECORDING_ALIAS_NAME: "SELECT_RECORDING_ALIAS_NAME"
            }
              , y = function(t) {
                function r() {
                    t.apply(this, arguments)
                }
                return u(r, t),
                r.prototype.parse = function(t) {
                    var r = E.selectBuilder();
                    for (this._runLookingForPropertyProcess(),
                    this._pos = t; this._pos < this._query.length; this._pos++) {
                        var e = this._query[this._pos];
                        if (this._isLookingForProperty()) {
                            if (" " === e)
                                continue;
                            ")" === e ? (this._pos = this._pos - 1,
                            this._finishParsing()) : (this._pos = this._pos - 1,
                            this._runRecordingPropertyNameProcess())
                        } else if (this._isRecordingPropertyName())
                            if (" " === e)
                                this._runLookingForSeparatorOrAlias();
                            else if ("," === e) {
                                var i = r.build();
                                E.addPropertyToSelect(i),
                                this._runLookingForPropertyProcess()
                            } else
                                ")" === e ? (this._pos = this._pos - 1,
                                this._finishParsing()) : r.addCharToProp(e);
                        else if (this._isLookingForSeparatorOrAlias()) {
                            if (" " === e)
                                continue;
                            ")" === e ? (this._pos = this._pos - 1,
                            this._finishParsing()) : "," === e ? (i = r.build(),
                            E.addPropertyToSelect(i),
                            this._runLookingForPropertyProcess()) : "a" === e ? (this._pos = this._pos - 1,
                            this._runParsingAlias()) : this.throwSyntaxErrorUnexpectedChar()
                        } else if (this._isParsingAliasKeyword()) {
                            if (this._query.substr(this._pos).toLowerCase().startsWith("as ")) {
                                this._pos = this._pos + "as ".length - 1,
                                this._runLookingForAliasName();
                                continue
                            }
                            this.throwSyntaxErrorUnexpectedChar()
                        } else if (this._isLookingForAliasName()) {
                            if (" " === e)
                                continue;
                            this._pos = this._pos - 1,
                            this._runRecordingAliasName()
                        } else if (this._isRecordingAliasName())
                            " " === e || "," === e ? (i = r.build(),
                            E.addPropertyToSelect(i),
                            this._runLookingForPropertyProcess()) : ")" === e ? (this._pos = this._pos - 1,
                            this._finishParsing()) : r.addCharToAlias(e);
                        else if (this._isFinishOperation()) {
                            r.hasProp() && (i = r.build(),
                            E.addPropertyToSelect(i)),
                            this._markAsSuccessParsing();
                            break
                        }
                    }
                    return this._isSuccessParsed() ? E.hasPropertiesInSelect() || this.throwSyntaxErrorWithTrace("select operation requires at least one property") : this.throwSyntaxErrorWithTrace("unexpected end of select operation"),
                    this._pos
                }
                ,
                r.prototype.name = function() {
                    return R.SELECT
                }
                ,
                r.prototype._runLookingForPropertyProcess = function() {
                    this.switchProcess(P.LOOKING_FOR_PROPERTY)
                }
                ,
                r.prototype._runRecordingPropertyNameProcess = function() {
                    this.switchProcess(P.SELECT_RECORDING_PROPERTY_NAME)
                }
                ,
                r.prototype._runLookingForSeparatorOrAlias = function() {
                    this.switchProcess(P.LOOKING_FOR_SEPARATOR_OR_ALIAS)
                }
                ,
                r.prototype._runParsingAlias = function() {
                    this.switchProcess(P.SELECT_PARSING_ALIAS_KEYWORD)
                }
                ,
                r.prototype._runLookingForAliasName = function() {
                    this.switchProcess(P.LOOKING_FOR_ALIAS_NAME)
                }
                ,
                r.prototype._runRecordingAliasName = function() {
                    this.switchProcess(P.SELECT_RECORDING_ALIAS_NAME)
                }
                ,
                r.prototype._finishParsing = function() {
                    this.switchProcess(P.SELECT_OPERATION_BEFORE_FINISH)
                }
                ,
                r.prototype._markAsSuccessParsing = function() {
                    this.switchProcess(P.SELECT_OPERATION_SUCCESS)
                }
                ,
                r.prototype._isLookingForProperty = function() {
                    return this.isRunningProcess(P.LOOKING_FOR_PROPERTY)
                }
                ,
                r.prototype._isLookingForAliasName = function() {
                    return this.isRunningProcess(P.LOOKING_FOR_ALIAS_NAME)
                }
                ,
                r.prototype._isRecordingPropertyName = function() {
                    return this.isRunningProcess(P.SELECT_RECORDING_PROPERTY_NAME)
                }
                ,
                r.prototype._isSuccessParsed = function() {
                    return this.isRunningProcess(P.SELECT_OPERATION_SUCCESS)
                }
                ,
                r.prototype._isLookingForSeparatorOrAlias = function() {
                    return this.isRunningProcess(P.LOOKING_FOR_SEPARATOR_OR_ALIAS)
                }
                ,
                r.prototype._isParsingAliasKeyword = function() {
                    return this.isRunningProcess(P.SELECT_PARSING_ALIAS_KEYWORD)
                }
                ,
                r.prototype._isRecordingAliasName = function() {
                    return this.isRunningProcess(P.SELECT_RECORDING_ALIAS_NAME)
                }
                ,
                r.prototype._isFinishOperation = function() {
                    return this.isRunningProcess(P.SELECT_OPERATION_BEFORE_FINISH)
                }
                ,
                r
            }(O)
              , N = {
                FILTER_LOOKING_FOR_OPERAND: "FILTER_LOOKING_FOR_OPERAND",
                FILTER_LOOKING_FOR_OPERATOR: "FILTER_LOOKING_FOR_OPERATOR",
                FILTER_RECORDING_PROPERTY_NAME: "FILTER_RECORDING_PROPERTY_NAME",
                FILTER_RECORDING_STRING_VALUE: "FILTER_RECORDING_STRING_VALUE",
                FILTER_RECORDING_NUMBER_VALUE: "FILTER_RECORDING_NUMBER_VALUE",
                FILTER_PARSING_OPERATOR: "FILTER_PARSING_OPERATOR",
                FILTER_FINISH_PROCESS: "FILTER_FINISH_PROCESS",
                FILTER_SUCCESS: "FILTER_SUCCESS"
            }
              , d = function(t) {
                function r() {
                    t.apply(this, arguments)
                }
                return u(r, t),
                r.prototype.parse = function(t) {
                    var r = E.filterBuilder();
                    for (this.switchProcess(N.FILTER_LOOKING_FOR_OPERAND),
                    this._pos = t; this._pos < this._query.length; this._pos++) {
                        var e = this._query[this._pos];
                        if (this.isRunningProcess(N.FILTER_LOOKING_FOR_OPERAND)) {
                            if (" " === e)
                                continue;
                            "@" === e ? (r.markAsPropertyOperand(),
                            this.switchProcess(N.FILTER_RECORDING_PROPERTY_NAME)) : "'" === e ? (r.markAsConstStringValueOperand(),
                            this.switchProcess(N.FILTER_RECORDING_STRING_VALUE)) : _.isNumber(e) ? (this._pos = this._pos - 1,
                            r.markAsConstNumberValueOperand(),
                            this.switchProcess(N.FILTER_RECORDING_NUMBER_VALUE)) : ")" === e ? (this._pos = this._pos - 1,
                            this.switchProcess(N.FILTER_FINISH_PROCESS)) : this.throwSyntaxErrorUnexpectedChar()
                        } else if (this.isRunningProcess(N.FILTER_RECORDING_PROPERTY_NAME))
                            if (" " === e) {
                                var i = r.build();
                                E.addConditionToFilter(i),
                                this.switchProcess(N.FILTER_LOOKING_FOR_OPERATOR)
                            } else
                                ")" === e ? (this._pos = this._pos - 1,
                                i = r.build(),
                                E.addConditionToFilter(i),
                                this.switchProcess(N.FILTER_FINISH_PROCESS)) : _.isLookLikeLogicalOperator(e) ? (this._pos = this._pos - 1,
                                i = r.build(),
                                E.addConditionToFilter(i),
                                this.switchProcess(N.FILTER_LOOKING_FOR_OPERATOR)) : r.addCharToValue(e);
                        else if (this.isRunningProcess(N.FILTER_LOOKING_FOR_OPERATOR)) {
                            if (" " === e)
                                continue;
                            ")" === e ? (this._pos = this._pos - 1,
                            this.switchProcess(N.FILTER_FINISH_PROCESS)) : _.isLookLikeLogicalOperator(e) && (this._pos = this._pos - 1,
                            this.switchProcess(N.FILTER_PARSING_OPERATOR))
                        } else if (this.isRunningProcess(N.FILTER_RECORDING_STRING_VALUE))
                            "'" === e ? (i = r.build(),
                            E.addConditionToFilter(i),
                            this.switchProcess(N.FILTER_LOOKING_FOR_OPERATOR)) : r.addCharToValue(e);
                        else if (this.isRunningProcess(N.FILTER_RECORDING_NUMBER_VALUE))
                            " " === e ? (i = r.build(),
                            E.addConditionToFilter(i),
                            this.switchProcess(N.FILTER_LOOKING_FOR_OPERATOR)) : _.isLookLikeLogicalOperator(e) ? (this._pos = this._pos - 1,
                            this.switchProcess(N.FILTER_PARSING_OPERATOR)) : ")" === e ? (this._pos = this._pos - 1,
                            i = r.build(),
                            E.addConditionToFilter(i),
                            this.switchProcess(N.FILTER_FINISH_PROCESS)) : _.isNumber(e) || "." === e ? r.addCharToValue(e) : this.throwSyntaxErrorUnexpectedChar();
                        else if (this.isRunningProcess(N.FILTER_PARSING_OPERATOR)) {
                            var n = this.parseLogicalOperation(this._query.substr(this._pos));
                            r.markAsOperator().withValue(n),
                            i = r.build(),
                            E.addConditionToFilter(i),
                            this._pos = this._pos + n.length - 1,
                            this.switchProcess(N.FILTER_LOOKING_FOR_OPERAND)
                        } else if (this.isRunningProcess(N.FILTER_FINISH_PROCESS)) {
                            this.switchProcess(N.FILTER_SUCCESS);
                            break
                        }
                    }
                    return this.isRunningProcess(N.FILTER_SUCCESS) || this.throwSyntaxErrorWithTrace("unexpected end of filter operation"),
                    this._pos
                }
                ,
                r.prototype.name = function() {
                    return R.FILTER
                }
                ,
                r.prototype.parseLogicalOperation = function(t) {
                    for (var r = t.substr(0, 3), e = [["!==", "==="], ["!=", "==", "<=", ">="], ["<", ">"]], i = 0; i < e.length; i++) {
                        var n = e[i].find((function(t) {
                            return r.startsWith(t)
                        }
                        ));
                        if (n)
                            return n
                    }
                    throw new Error("JsonQuery: could not find operator")
                }
                ,
                r
            }(O)
              , A = {
                LOOKING_FOR_ELEMENT_NAME: "LOOKING_FOR_ELEMENT_NAME",
                RECORDING_ELEMENT_NAME: "RECORDING_ELEMENT_NAME",
                BLOCK_PARSING: "BLOCK_PARSING",
                LIMIT_PARSING: "LIMIT_PARSING",
                LOOKING_FOR_OPERATION: "LOOKING_FOR_OPERATION",
                RECORDING_OPERATION_NAME: "RECORDING_OPERATION_NAME"
            }
              , T = function(t) {
                function r(r) {
                    t.call(this, r),
                    this._operations = [new d(r), new y(r)]
                }
                return u(r, t),
                r.prototype.parse = function(t) {
                    E.reset();
                    var r = ""
                      , e = [];
                    for (this._runLookingForElementNameProcess(),
                    this._pos = t; this._pos < this._query.length; this._pos++) {
                        var i = this._query[this._pos];
                        if (this._isLookingForElementNameProcess()) {
                            if (" " === i)
                                continue;
                            "." === i || (this._pos = this._pos - 1),
                            this._runRecordingElementNameProcess()
                        } else if (this.isRunningProcess(A.RECORDING_ELEMENT_NAME))
                            if (this._isElementSeparator(i)) {
                                var n = E.build();
                                e.push(n)
                            } else
                                this._needStartParseBlock(i) ? this._runParsingBlockProcess() : this._isNotAllowedCharForElementName(i) ? this.throwSyntaxErrorWithTrace('symbol "' + i + '" is not allowed as part of element name') : E.addCharToElementName(i);
                        else if (this._isRunningBlockParsingProcess()) {
                            if (" " === i)
                                continue;
                            this._isLooksLikeLimitOperation(i) ? (E._limit = "*",
                            this._runLookingForOperation()) : "#" === i ? this._runRecordingOperationName() : this.throwSyntaxErrorUnexpectedChar()
                        } else if (this._isRunningLookingForOperation()) {
                            if (" " === i)
                                continue;
                            "#" === i ? this._runRecordingOperationName() : "]" === i ? (n = E.build(),
                            e.push(n),
                            this._runLookingForElementNameProcess()) : this.throwSyntaxErrorUnexpectedChar()
                        } else if (this._isRunningRecordingOperationName())
                            if ("(" === i) {
                                var o = this._findParserForOperatorOrThrowException(r);
                                r = "",
                                this._pos = this._pos + 1,
                                this._pos = o.parse(this._pos),
                                this._runLookingForOperation()
                            } else
                                this._isNotAllowedCharForOperationName(i) ? this.throwSyntaxErrorUnexpectedChar() : r += i
                    }
                    return E.hasElementName() && (n = E.build(),
                    e.push(n)),
                    e
                }
                ,
                r.prototype._runLookingForElementNameProcess = function() {
                    this.switchProcess(A.LOOKING_FOR_ELEMENT_NAME)
                }
                ,
                r.prototype._runRecordingElementNameProcess = function() {
                    this.switchProcess(A.RECORDING_ELEMENT_NAME)
                }
                ,
                r.prototype._runParsingBlockProcess = function() {
                    this.switchProcess(A.BLOCK_PARSING)
                }
                ,
                r.prototype._runLookingForOperation = function() {
                    this.switchProcess(A.LOOKING_FOR_OPERATION)
                }
                ,
                r.prototype._runRecordingOperationName = function() {
                    this.switchProcess(A.RECORDING_OPERATION_NAME)
                }
                ,
                r.prototype._isLookingForElementNameProcess = function() {
                    return this.isRunningProcess(A.LOOKING_FOR_ELEMENT_NAME)
                }
                ,
                r.prototype._isRunningBlockParsingProcess = function() {
                    return this.isRunningProcess(A.BLOCK_PARSING)
                }
                ,
                r.prototype._isRunningLookingForOperation = function() {
                    return this.isRunningProcess(A.LOOKING_FOR_OPERATION)
                }
                ,
                r.prototype._isRunningRecordingOperationName = function() {
                    return this.isRunningProcess(A.RECORDING_OPERATION_NAME)
                }
                ,
                r.prototype._isElementSeparator = function(t) {
                    return "." === t
                }
                ,
                r.prototype._isNotAllowedCharForElementName = function(t) {
                    return _.isWhiteSpace(t) || ["#", "@", "!", "[", "]", "%", "-", "+", "^", "*", "(", ")", "?", ":", "{", "}"].includes(t)
                }
                ,
                r.prototype._isNotAllowedCharForOperationName = function(t) {
                    return _.isWhiteSpace(t) || ["#", "@", "!", "[", "]", "%", "-", "+", "^", "*", "(", ")", "?", ":", "{", "}"].includes(t)
                }
                ,
                r.prototype._isLooksLikeLimitOperation = function(t) {
                    return "*" === t
                }
                ,
                r.prototype._needStartParseBlock = function(t) {
                    return "[" === t
                }
                ,
                r.prototype._findParserForOperatorOrThrowException = function(t) {
                    var r = this._operations.find((function(r) {
                        return r.name() === t
                    }
                    ));
                    return r || this.throwSyntaxErrorWithTrace('unknown operation "' + t + '"'),
                    r
                }
                ,
                r
            }(O)
              , L = {
                parseJSON: function(t) {
                    try {
                        if (t && "string" == typeof t)
                            return JSON.parse(t)
                    } catch (t) {}
                },
                jsonQuery: function(t, e) {
                    var i = []
                      , n = e.queries.map((function(n, o) {
                        var s = Object.assign({}, t);
                        return i.push(s),
                        f.query(n, i[o]).map((function(t) {
                            if (e.props) {
                                var i, n = r(e.props);
                                try {
                                    var o = function() {
                                        var r = i.value
                                          , e = r[0]
                                          , n = r[1];
                                        t[e] && (t[e] = t[e][0].map((function(t) {
                                            var r = {};
                                            return t.key && n.includes(t.key) ? t.value : t.key ? void 0 : (n.forEach((function(e) {
                                                t[e] && !r[e] && (t[e].length && "string" != typeof t[e] ? r[e] = t[e][0] : r[e] = t[e])
                                            }
                                            )),
                                            Object.keys(r).length ? r : void 0)
                                        }
                                        )).filter((function(t) {
                                            return t
                                        }
                                        )))
                                    };
                                    for (n.s(); !(i = n.n()).done; )
                                        o()
                                } catch (t) {
                                    n.e(t)
                                } finally {
                                    n.f()
                                }
                            } else
                                !t.hasOwnProperty(e.prop) && t.media && (t[e.prop] = [JSON.stringify(t.media[0])],
                                delete t.media);
                            return t
                        }
                        ))
                    }
                    ))
                      , o = [];
                    return n.forEach((function(t) {
                        o = o.concat(t)
                    }
                    )),
                    o
                },
                forEach: function(t, r) {
                    var e = [];
                    return t.forEach((function(t) {
                        var i = r.prop ? t[r.prop] : t
                          , n = L[r.pipe](i);
                        e.push(n)
                    }
                    )),
                    e
                },
                filterContains: function(t, e) {
                    return t.filter((function(t) {
                        var i = !1;
                        return e.props && e.props.length && (i = e.props.some((function(r) {
                            return t.hasOwnProperty(r)
                        }
                        ))),
                        !(!t.hasOwnProperty(e.prop) && !i) && e.types.some((function(n) {
                            var o = !1;
                            if (t[e.prop] && (o = t[e.prop].includes('"'.concat(n, '"'))),
                            i) {
                                var s, a = r(e.props);
                                try {
                                    for (a.s(); !(s = a.n()).done; ) {
                                        var p = s.value;
                                        if ("string" == typeof t[p] && t[p].includes('"'.concat(n, '"'))) {
                                            o = !0;
                                            break
                                        }
                                        if (t.hasOwnProperty("type") && t.type === n) {
                                            o = !0;
                                            break
                                        }
                                    }
                                } catch (t) {
                                    a.e(t)
                                } finally {
                                    a.f()
                                }
                            }
                            return o
                        }
                        ))
                    }
                    ))
                },
                arrToVal: function(t, r) {
                    return t.map((function(t) {
                        var e = {};
                        return r.prop && t[r.prop] && !r.props && (t[r.prop] = t[r.prop][0],
                        e = t),
                        r.props && r.props.forEach((function(r) {
                            var i = r[0];
                            r[1].forEach((function(r) {
                                t[i] && (t[i].length && (t[i] = t[i][0]),
                                t[i][r] && (e[r] = t[i][r]))
                            }
                            ))
                        }
                        )),
                        e
                    }
                    ))
                },
                sendVideoData: function(t) {
                    !function(t) {
                        t.detectionTime = Date.now() / 1e3 | 0;
                        var r = {
                            posdMessageId: "PANELOS_MESSAGE",
                            posdHash: (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).substring(0, 22),
                            type: "TWITTER_VIDEO_DATA",
                            from: s,
                            to: s.substring(0, s.length - 2),
                            content: t
                        };
                        try {
                            window.postMessage(r)
                        } catch (t) {}
                    }(t)
                },
                sendCarouselData: function(t) {
                    !function(t) {
                        t.detectionTime = Date.now() / 1e3 | 0;
                        var r = {
                            posdMessageId: "PANELOS_MESSAGE",
                            posdHash: (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).substring(0, 22),
                            type: "TWITTER_CAROUSEL_DATA",
                            from: s,
                            to: s.substring(0, s.length - 2),
                            content: t
                        };
                        try {
                            window.postMessage(r)
                        } catch (t) {}
                    }(t)
                },
                mapParseJsonToObj: function(t, r) {
                    return t.map((function(t) {
                        return t[r.prop] && "string" == typeof t[r.prop] && (t[r.prop] = JSON.parse(t[r.prop])),
                        t[r.prop] && 1 === t[r.prop].length && (t[r.prop] = t[r.prop][0]),
                        t
                    }
                    ))
                },
                mapVideoData: function(r, e) {
                    return r.map((function(r) {
                        var i = r.tweets ? r.tweets : {};
                        e && e.props && e.props.forEach((function(e) {
                            if ("string" == typeof e)
                                r[e] && (i[e] = r[e]);
                            else if ("object" === t(e) && e.length) {
                                var n = r;
                                e.forEach((function(t, r, e) {
                                    n[t] && r !== e.length - 1 ? n = n[t] : r === e.length - 1 && (i[t] = n[t])
                                }
                                ))
                            }
                        }
                        ));
                        var n = {
                            tweets: i
                        };
                        if (r.string_value) {
                            if (r.string_value.media_entities) {
                                var o = Object.keys(r.string_value.media_entities);
                                return n.variants = r.string_value.media_entities[o[0]].video_info.variants,
                                n
                            }
                            if (r.string_value.video_info && r.string_value.video_info.variants)
                                return n.variants = r.string_value.video_info.variants,
                                n
                        } else if (r.video_info && r.video_info.variants)
                            return n.variants = r.video_info.variants,
                            n
                    }
                    )).filter((function(t) {
                        return void 0 !== t
                    }
                    ))
                },
                mapCarouselData: function(e, i) {
                    return e.map((function(e) {
                        var n = e.tweets ? e.tweets : {};
                        i && i.props && i.props.forEach((function(i) {
                            if ("string" == typeof i)
                                e[i] && (n[i] = e[i]);
                            else if ("object" === t(i) && i.length) {
                                var o, s = r(i);
                                try {
                                    for (s.s(); !(o = s.n()).done; )
                                        for (var a = o.value, p = e, u = 0; u < a.length; u++) {
                                            var _ = a[u];
                                            if ("*" === _) {
                                                for (var h = Object.keys(p), c = a.slice(u + 1, a.length), l = [], E = 0, f = h; E < f.length; E++) {
                                                    var R = p[f[E]];
                                                    if (!R)
                                                        break;
                                                    for (var O = 0; O < c.length; O++) {
                                                        var P = c[O];
                                                        R[P] && O !== c.length - 1 ? R = R[P] : O === c.length - 1 && l.push(R[P])
                                                    }
                                                }
                                                n.slides = l;
                                                break
                                            }
                                            p[_] && u !== a.length - 1 ? p = p[_] : u === a.length - 1 && (n[_] = p[_])
                                        }
                                } catch (t) {
                                    s.e(t)
                                } finally {
                                    s.f()
                                }
                            }
                        }
                        ));
                        var o = {
                            tweets: n
                        };
                        if (e.string_value && e.string_value.type && i.types && i.types.includes(e.string_value.type))
                            return o
                    }
                    )).filter((function(t) {
                        return void 0 !== t
                    }
                    ))
                }
            }
              , S = "WATCH_EVENT"
              , I = new (function() {
                function t() {
                    this.listeners = {}
                }
                return t.prototype.on = function(t, r) {
                    this.listeners[t] = r
                }
                ,
                t.prototype.emit = function(t, r) {
                    var e = this;
                    setTimeout((function() {
                        return e.listeners[t](r)
                    }
                    ), 0)
                }
                ,
                t
            }());
            I.on(S, (function(t) {
                p(t.url).forEach((function(e) {
                    return setTimeout((function() {
                        return function(t, e) {
                            var i, n = r(t.pipes);
                            try {
                                for (n.s(); !(i = n.n()).done; ) {
                                    var o = i.value
                                      , s = L[o.name];
                                    s && (e = s(e, o.arguments))
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }(e, t.content)
                    }
                    ), 0)
                }
                ))
            }
            ));
            var g = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function() {
                this.requestMethod = arguments[0],
                this.url = arguments[1],
                g.apply(this, arguments)
            }
            ;
            var m = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = function() {
                var t, e = this.onreadystatechange, i = this, n = !1, s = r(o.parsers);
                try {
                    for (s.s(); !(t = s.n()).done; ) {
                        var p = t.value
                          , u = new RegExp(p.watch,"i");
                        if (n = u.test(i.url))
                            break
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                return n ? (this.onreadystatechange = function() {
                    if (4 === this.readyState && a(this.url)) {
                        var t = {
                            url: this.url,
                            content: "" === i.responseType || "text" === i.responseType ? i.responseText : ""
                        };
                        I.emit(S, t)
                    }
                    if (e)
                        return e.apply(this, arguments)
                }
                ,
                m.apply(this, arguments)) : m.apply(this, arguments)
            }
        }
    }
})[9358]();
