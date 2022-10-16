"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "../node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment4 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment4;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // ../node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "../node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // ../node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // ../node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // ../node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "../node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // ../node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "../node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // ../node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // ../node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "../node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // ../node_modules/redux-devtools-extension/index.js
  var require_redux_devtools_extension = __commonJS({
    "../node_modules/redux-devtools-extension/index.js"(exports) {
      "use strict";
      var compose = __require("redux").compose;
      exports.__esModule = true;
      exports.composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length === 0)
          return void 0;
        if (typeof arguments[0] === "object")
          return compose;
        return compose.apply(null, arguments);
      };
      exports.devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
        return function(noop) {
          return noop;
        };
      };
    }
  });

  // src/index.tsx
  var import_react5 = __toESM(__require("react"), 1);

  // src/components/app/App.tsx
  var import_react_router_dom = __require("react-router-dom");

  // src/components/footer/Footer.tsx
  var import_react_fontawesome = __require("@fortawesome/react-fontawesome");
  var import_free_solid_svg_icons = __require("@fortawesome/free-solid-svg-icons");
  var import_styled_components = __toESM(__require("styled-components"), 1);
  var import_prop_types = __toESM(require_prop_types(), 1);
  var import_jsx_runtime = __require("react/jsx-runtime");
  var Footer = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledFooter, {
      children: [
        "Built with ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_fontawesome.FontAwesomeIcon, {
          icon: import_free_solid_svg_icons.faHeart
        }),
        " by",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          href: "https://mannuelferreira.com",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Mannuel Ferreira"
        }),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
          href: "https://github.com/mannuelf/react-drums",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_fontawesome.FontAwesomeIcon, {
              icon: import_free_solid_svg_icons.faCode
            }),
            " Fork it on github."
          ]
        })
      ]
    });
  };
  var StyledFooter = (0, import_styled_components.default)("footer")({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "#fff",
    lineHeight: "30px",
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: "12px",
    "& a:link, & a:visited ": {
      color: "#FFF",
      textDecoration: "none"
    },
    "& a:active, & a:hover": {
      color: "#fb00ff",
      textDecoration: "underline"
    }
  });
  Footer.propTypes = {
    bgColor: import_prop_types.default.oneOf(["red", "green", "blue"])
  };
  var Footer_default = Footer;

  // src/styles/global-styles.ts
  var import_styled_components2 = __require("styled-components");
  var GlobalStyle = import_styled_components2.createGlobalStyle`
 html, body {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

body#app {
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #583d29;
  background-image: url('https://res.cloudinary.com/mannuel/image/upload/v1633978128/images/desk2.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
}

.app {
  position: relative;
  width: 100%;
  max-width: 312px;
  margin: 5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
  background-color: #181818;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23404040' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  box-shadow: 3px 2px 3px rgb(0 0 0 / 80%);
  border-radius: 4px;
  border-bottom: 2px solid #000;
  border-left: 1px solid #333;
  border-top: 1px solid #555;
  color: #eee;
}

@media screen and (min-width: 767px) {
  .app {
    max-width: 680px;
  }
}

.app::before {
  display: block;
  content: "";
  position: absolute;
  z-index: 1;
  opacity: 0.6;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  background: rgb(22, 22, 22);
  background: -moz-linear-gradient(
    353deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(76, 76, 76, 1) 100%
  );
  background: -webkit-linear-gradient(
    353deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(76, 76, 76, 1) 100%
  );
  background: linear-gradient(
    353deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(76, 76, 76, 1) 100%
  );
  border-top: 1px solid rgba(255,255,255,0.6);
  border-left: 1px solid rgba(255,255,255,0.2);
}

.app-header {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #555;
  z-index: 5;
}

.app-header div {
  flex-grow: 1;
}

.app-header-lcd {
  background-color: #222;
  border: 1px solid #464646;
  margin: -10px 0;
  padding: 0.4em 1em;
  border-radius: 3px;
  box-shadow: inset 0 0 5px #111111;
  border-bottom: 1px solid #666;
}

.app-header .column:nth-child(2) {
  text-align: left;
}

.app-header .column:nth-child(2) div {
  color: yellow;
  @media screen and (min-width: 767px) {
    width: 336px;
    float: right;
  }
}

.app-header h1 {
  color: #ccc;
  font-family: "Press Start 2P", Arial, Helvetica, sans-serif;
  line-height: 1.4;
  font-size: 8px;
  font-weight: normal;
  text-transform: uppercase;
}

.app-header h2 {
  color: yellow;
  font-size: 12px;
}

#app .logo {
  width: 140px;
  height: auto;
}

#app h1[role="heading"] .logo {
  width: 220px;
}

.app-panel__controls > div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  grid-gap: 16px;
  padding: 1.5em 0 0 0;
  height: auto;
  width: 100%;
  border-top: 1px solid #222;
  z-index: 5;
}

.app-panel {
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 5;
}

.app-panel__controls {
  flex-grow: 1;
  color: #333;
  &:first-child {
    display: none;
    @media (min-width: 767px) {
      display: block;
    }
  }
}

.pad-button {
  position: relative;
  outline: none;
  color: #fff;
  transition: all 0.4s ease-in-out;
}

.pad-button::before {
  display: block;
  content: "";
  position: absolute;
  z-index: 2;
  opacity: 0.8;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 3px;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
}
.pad-button::after {
  display: block;
  content: "";
  position: absolute;
  z-index: 1;
  opacity: 0.3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

.pad-button:nth-child(1) {
  background-color: #4d94fc;
  order: 16;
}
.pad-button:nth-child(2) {
  background-color: #4d94fc;
  order: 15;
}
.pad-button:nth-child(3) {
  background-color: #ffdd2f;
  order: 14;
}
.pad-button:nth-child(4) {
  background-color: #ff423e;
  order: 13;
}
.pad-button:nth-child(5) {
  background-color: #4d94fc;
  order: 12;
}
.pad-button:nth-child(6) {
  background-color: #19eaa3;
  order: 11;
}
.pad-button:nth-child(7) {
  background-color: #ffdd2f;
  order: 10;
}
.pad-button:nth-child(8) {
  background-color: #ffdd2f;
  order: 9;
}
.pad-button:nth-child(9) {
  background-color: #fc9824;
  order: 8;
}
.pad-button:nth-child(10) {
  background-color: #fc9824;
  order: 7;
}
.pad-button:nth-child(11) {
  background-color: #fc9824;
  order: 6;
}
.pad-button:nth-child(12) {
  background-color: #fc9824;
  order: 5;
}
.pad-button:nth-child(13) {
  background-color: #19eaa3;
  order: 4;
}
.pad-button:nth-child(14) {
  background-color: #19eaa3;
  order: 3;
}
.pad-button:nth-child(15) {
  background-color: #19eaa3;
  order: 2;
}
.pad-button:nth-child(16) {
  background-color: #19eaa3;
  order: 1;
}

.pad-button-name {
  font-size: 12px;
}

.pad-button-char {
  font-size: 10px;
  position: absolute;
  top: 4px;
  right: 4px;
}

.pad-button-id {
  font-size: 10px;
  position: absolute;
  top: 4px;
  left: 4px;
}

`;
  var global_styles_default = GlobalStyle;

  // src/features/login/LoginForm.tsx
  var import_react = __require("react");
  var import_react_redux = __require("react-redux");
  var import_client = __require("@apollo/client");
  var import_react_router = __require("react-router");

  // src/constants.ts
  var import_meta = {};
  var { env } = import_meta;
  var AUTH_JWT = "AUTH";
  var API_URL = "http://localhost:4000";
  var LOGO = {
    light: "https://res.cloudinary.com/mannuel/image/upload/v1634885670/images/logo-light.svg",
    dark: "https://res.cloudinary.com/mannuel/image/upload/v1634885670/images/logo-dark.svg"
  };

  // src/components/common/Button.tsx
  var import_styled_components3 = __toESM(__require("styled-components"), 1);
  var Button = import_styled_components3.default.button`
  background-color: ${(props) => props.btnBgColor ? props.btnBgColor : "#10ace4"};
  border-radius: ${(props) => props.btnRadius ? `${props.btnRadius}px` : "4px"};
  border: none;
  box-shadow: ${(props) => props.btnBoxShadow ? "2px 2px 3px rgba(0, 0, 0, 0.6)" : "none"};
  color: #fff;
  cursor: pointer;
  float: ${(props) => props.btnAlign ? props.btnAlign : "none"};
  height: auto;
  margin-right: 0.5em;
  padding: ${(props) => props.btnPadding ? `${props.btnPadding}rem` : "0.5rem"};
  width: ${(props) => props.btnWidth ? `${props.btnWidth}px` : "auto"};
`;
  var Button_default = Button;

  // src/components/common/Input.tsx
  var import_styled_components4 = __toESM(__require("styled-components"), 1);
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var Input = ({ ...props }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StyledInput, {
      ...props
    });
  };
  var StyledInput = import_styled_components4.default.input`
  width: '100%';
  margin-bottom: '1em';
  padding: '.5em';
  border: '1px solid #FFF';
  font-size: '1rem';
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : "1.5rem"};
  outline: 'none';
`;
  var Input_default = Input;

  // src/components/common/Label.tsx
  var import_styled_components5 = __toESM(__require("styled-components"), 1);
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var Label = ({ ...props }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StyledLabel, {
      htmlFor: props.htmlFor,
      children: props.label
    });
  };
  var StyledLabel = (0, import_styled_components5.default)("label")({
    width: "100%",
    marginBottom: "1rem",
    fontSize: "1em",
    color: "#ccc"
  });
  var Label_default = Label;

  // src/features/login/LoginForm.tsx
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var LoginForm = () => {
    const user = (0, import_react_redux.useSelector)((state) => state.user);
    const error = (0, import_react_redux.useSelector)((state) => state.error);
    const dispatch = (0, import_react_redux.useDispatch)();
    const navigate = (0, import_react_router.useNavigate)();
    const [formState, setFormState] = (0, import_react.useState)({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loggedIn: false
    });
    const SIGNUP_MUTATION = import_client.gql`
    mutation SignupMutation(
      $email: String!
      $password: String!
      $firstName: String!
      $lastName: String!
    ) {
      signup(
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      ) {
        token
      }
    }
  `;
    const LOGIN_MUTATION = import_client.gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;
    const [login] = (0, import_client.useMutation)(LOGIN_MUTATION, {
      variables: {
        email: formState.email,
        password: formState.password
      },
      onCompleted: ({ login: login2 }) => {
        localStorage.setItem(AUTH_JWT, login2.token);
        dispatch({ type: "store/LOGIN" });
        formState.loggedIn = true;
        navigate("/machine");
      }
    });
    const [signup] = (0, import_client.useMutation)(SIGNUP_MUTATION, {
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password
      },
      onCompleted: ({ signup: signup2 }) => {
        localStorage.setItem(AUTH_JWT, signup2.token);
        navigate("/machine");
      }
    });
    if (error && !user) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
        children: error.message
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("form", {
        onSubmit: (e) => e.preventDefault(),
        className: "form",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", {
            children: formState.loggedIn ? "Login" : "Sign Up"
          }),
          !formState.loggedIn && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label_default, {
                    htmlFor: "firstName",
                    label: "First Name *"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Input_default, {
                    id: "firstName",
                    name: "firstName",
                    type: "text",
                    value: formState.firstName,
                    onChange: (e) => setFormState({
                      ...formState,
                      firstName: e.target.value
                    })
                  }),
                  error ? "First name required" : ""
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label_default, {
                    htmlFor: "lastName",
                    label: "Last Name"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Input_default, {
                    id: "lastName",
                    name: "lastName",
                    type: "text",
                    value: formState.lastName,
                    onChange: (e) => setFormState({ ...formState, lastName: e.target.value })
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label_default, {
                htmlFor: "email",
                label: "Email *"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Input_default, {
                id: "email",
                name: "email",
                type: "text",
                value: formState.email,
                onChange: (e) => setFormState({ ...formState, email: e.target.value })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label_default, {
                htmlFor: "password",
                label: "Password *"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Input_default, {
                id: "password",
                name: "password",
                type: "password",
                value: formState.password,
                onChange: (e) => setFormState({ ...formState, password: e.target.value })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, {
                btnAlign: "left",
                btnBgColor: "green",
                btnPadding: "0.8rem 1rem",
                btnWidth: "100px",
                btnRadius: "2rem",
                type: "submit",
                onClick: () => formState.loggedIn ? login() : signup(),
                children: formState.loggedIn ? "Login" : "Sign Up"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, {
                btnAlign: "left",
                btnBgColor: "teal",
                btnPadding: "0.8rem 1rem",
                btnWidth: "auto",
                btnRadius: "2rem",
                type: "submit",
                onClick: () => setFormState({
                  ...formState,
                  loggedIn: !formState.loggedIn
                }),
                children: formState.loggedIn ? "Create an account?" : "Already have an account?"
              })
            ]
          })
        ]
      })
    });
  };
  var LoginForm_default = LoginForm;

  // src/features/machine/Machine.tsx
  var import_react3 = __require("react");

  // src/data/drums.ts
  var drums = [
    {
      id: 1,
      name: "808",
      sounds: [
        {
          id: 1,
          name: "Rimshot",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114020/drums/808/E808_RS-01.wav",
          keyCode: 77,
          keyChar: "M"
        },
        {
          id: 2,
          name: "Cow bell",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114033/drums/808/E808_CB-01.wav",
          keyCode: 78,
          keyChar: "N"
        },
        {
          id: 3,
          name: "Bass drum II",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114674/drums/808/E808_BD_short_-02.wav",
          keyCode: 66,
          keyChar: "B"
        },
        {
          id: 4,
          name: "Bass drum I",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114683/drums/808/E808_BD_short_-01.wav",
          keyCode: 86,
          keyChar: "V"
        },
        {
          id: 5,
          name: "Snare drum I",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114696/drums/808/E808_SD-01.wav",
          keyCode: 70,
          keyChar: "F"
        },
        {
          id: 6,
          name: "Snare drum II",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114725/drums/808/E808_SD-02.wav",
          keyCode: 71,
          keyChar: "G"
        },
        {
          id: 7,
          name: "Snare drum III",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114753/drums/808/E808_SD-03.wav",
          keyCode: 72,
          keyChar: "H"
        },
        {
          id: 8,
          name: "Snare drum IV",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114753/drums/808/E808_SD-04.wav",
          keyCode: 74,
          keyChar: "J"
        },
        {
          id: 9,
          name: "Closed hi hat I",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114771/drums/808/E808_CH-01.wav",
          keyCode: 82,
          keyChar: "R"
        },
        {
          id: 10,
          name: "Closed hi hat II",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114787/drums/808/E808_CH-02.wav",
          keyCode: 84,
          keyChar: "T"
        },
        {
          id: 11,
          name: "Open hi hat I",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114803/drums/808/E808_OH-01.wav",
          keyCode: 89,
          keyChar: "Y"
        },
        {
          id: 12,
          name: "Open hi hat II",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114818/drums/808/E808_OH-02.wav",
          keyCode: 85,
          keyChar: "U"
        },
        {
          id: 13,
          name: "Clap I",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114833/drums/808/E808_CP-01.wav",
          keyCode: 52,
          keyChar: "4"
        },
        {
          id: 14,
          name: "Clap II",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114849/drums/808/E808_CP-02.wav",
          keyCode: 53,
          keyChar: "5"
        },
        {
          id: 15,
          name: "Clave I",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114866/drums/808/E808_CL-01.wav",
          keyCode: 54,
          keyChar: "6"
        },
        {
          id: 16,
          name: "Clave II",
          src: "https://res.cloudinary.com/mannuel/video/upload/v1594114884/drums/808/E808_CL-02.wav",
          keyCode: 55,
          keyChar: "7"
        }
      ]
    }
  ];

  // src/utils/getDrums.ts
  function getDrumKitByName(kitName) {
    return drums.find((kit) => kit.name === kitName);
  }

  // src/features/machine/MachineHeader.tsx
  var import_jsx_runtime5 = __require("react/jsx-runtime");
  var MachineHeader = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", {
        className: "app-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: "column",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", {
              src: LOGO.light,
              className: "logo",
              alt: "Machine Micro"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: "column",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
              className: "app-header-lcd",
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h1", {
                children: [
                  "Micro v1.0.0",
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                    children: "KIT: 808"
                  })
                ]
              })
            })
          })
        ]
      })
    });
  };
  var MachineHeader_default = MachineHeader;

  // src/features/machine/MachineCable.tsx
  var import_styled_components6 = __toESM(__require("styled-components"), 1);
  var import_jsx_runtime6 = __require("react/jsx-runtime");
  var MachineCable = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CordBase, {
        children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Cord, {})
        ]
      })
    });
  };
  var Cord = import_styled_components6.default.div`
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23616161' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  width: 15px;
  height: 120px;
  position: absolute;
  top: -120px;
  left: 8px;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
`;
  var CordBase = import_styled_components6.default.div`
  background-color: #2b2a2a;
  width: 30px;
  height: 20px;
  position: absolute;
  top: -23px;
  left: 20px;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  border-radius: 3px 3px 0 0;
  border-bottom: 2px solid #000;
`;
  var MachineCable_default = MachineCable;

  // src/features/machine/MachineDrumPad.tsx
  var import_react2 = __require("react");
  var import_styled_components7 = __toESM(__require("styled-components"), 1);

  // src/features/machine/MachineKey.tsx
  var import_jsx_runtime7 = __require("react/jsx-runtime");
  var MachineKey = ({ keyChar }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
      className: "pad-button-char",
      children: keyChar
    });
  };
  var MachineKey_default = MachineKey;

  // src/features/machine/MachineDrumPad.tsx
  var import_jsx_runtime8 = __require("react/jsx-runtime");
  var MachineDrumPad = (props) => {
    const audioRef = (0, import_react2.useRef)(null);
    (0, import_react2.useEffect)(() => {
      document.addEventListener("keydown", handleKeydown);
      window.focus();
      return () => document.removeEventListener("keydown", handleKeydown);
    }, []);
    const handleKeydown = (e) => {
      if (e.keyCode === props.keyCode) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    };
    const handlePlay = () => {
      var _a;
      if (audioRef) {
        (_a = audioRef == null ? void 0 : audioRef.current) == null ? void 0 : _a.play();
        audioRef.current.currentTime = 0;
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(StyledButton, {
      className: "pad-button",
      title: props.name,
      onClick: handlePlay,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MachineKey_default, {
          keyChar: props.keyChar
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("audio", {
          ref: audioRef,
          id: props.keyChar,
          src: props.src,
          title: props.name
        }, props.id)
      ]
    }, props.id);
  };
  var StyledButton = import_styled_components7.default.button`
  background: #444;
  border-radius: 3px;
  padding: 1rem;
  border: none;
  height: 68px;
  width: 100%;
  cursor: pointer;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
`;
  var MachineDrumPad_default = MachineDrumPad;

  // src/features/machine/MachineBody.tsx
  var import_jsx_runtime9 = __require("react/jsx-runtime");
  var MachineBody = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", {
      className: "app-panel",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
          className: "app-panel__controls",
          children: "."
        }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
          className: "app-panel__controls",
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
            children
          })
        })
      ]
    });
  };
  var MachineBody_default = MachineBody;

  // src/features/machine/Machine.tsx
  var import_jsx_runtime10 = __require("react/jsx-runtime");
  var import_react4 = __require("react");
  var Machine = () => {
    const kitName = "808";
    const [kit, setKit] = (0, import_react3.useState)({});
    (0, import_react3.useEffect)(() => {
      const drumKit = getDrumKitByName(kitName);
      setKit(drumKit);
    }, [setKit]);
    function handlePlaySound(keyChar) {
      console.log("handlePlaySound", keyChar);
    }
    if (!kit) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: "app",
        children: "Loading.."
      });
    }
    const { sounds } = kit;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: "app",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MachineCable_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MachineHeader_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MachineBody_default, {
          children: !sounds ? "Loading..." : sounds.map((sound) => /* @__PURE__ */ (0, import_react4.createElement)(MachineDrumPad_default, {
            ...sound,
            key: sound.id,
            onClick: () => handlePlaySound(sound.keyChar),
            handleKeyDown: () => handlePlaySound(sound.keyChar)
          }))
        })
      ]
    });
  };
  var Machine_default = Machine;

  // src/components/app/App.tsx
  var import_jsx_runtime11 = __require("react/jsx-runtime");
  var App = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_router_dom.BrowserRouter, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(global_styles_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_router_dom.Routes, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom.Route, {
              path: "/",
              element: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Machine_default, {})
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom.Route, {
              path: "/login",
              element: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LoginForm_default, {})
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Footer_default, {})
      ]
    });
  };
  var App_default = App;

  // src/index.tsx
  var dotenv = __toESM(__require("dotenv"), 1);
  var import_client2 = __require("react-dom/client");
  var import_client3 = __require("@apollo/client");
  var import_react_redux2 = __require("react-redux");
  var import_context = __require("@apollo/client/link/context");

  // src/store/store.ts
  var import_redux = __require("redux");
  var import_redux_devtools_extension = __toESM(require_redux_devtools_extension(), 1);

  // src/store/userReducer.ts
  var initialState = {
    firstName: "",
    email: "",
    loggedIn: false
  };
  function userReducer(state = initialState, action) {
    switch (action.type) {
      case "LOGIN":
        return { ...state, loggedIn: true };
      case "LOGOUT":
        return { ...state, loggedIn: false };
      default:
        return state;
    }
  }

  // src/store/store.ts
  var store = (0, import_redux.createStore)(
    (0, import_redux.combineReducers)({
      user: userReducer
    }),
    (0, import_redux_devtools_extension.composeWithDevTools)((0, import_redux.applyMiddleware)())
  );

  // src/index.tsx
  var import_jsx_runtime12 = __require("react/jsx-runtime");
  dotenv.config();
  var httpLink = (0, import_client3.createHttpLink)({
    uri: API_URL
  });
  var authLink = (0, import_context.setContext)((_, { headers }) => {
    try {
      const token = localStorage.getItem(AUTH_JWT);
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ""
        }
      };
    } catch (error) {
      console.log("\u{1F525}", error);
      throw new Error(`Oops, ${error}`);
    }
  });
  var client = new import_client3.ApolloClient({
    link: authLink.concat(httpLink),
    cache: new import_client3.InMemoryCache()
  });
  var container = document.getElementById("root");
  var root = (0, import_client2.createRoot)(container);
  root.render(
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.default.StrictMode, {
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_redux2.Provider, {
        store,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_client3.ApolloProvider, {
          client,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(App_default, {})
        })
      })
    })
  );
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=bundle.js.map
