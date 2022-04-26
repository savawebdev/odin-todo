/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #313638;\n  --secondary-color: #e0dfd5;\n  --card-border-color: #e4b363;\n  --danger-color: #e71d36;\n  --success-color: #adf6b1;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n/* HEADER */\n.header {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  background: var(--primary-color);\n}\n\n.header h1 {\n  margin-left: 50px;\n  color: var(--secondary-color);\n  font-size: 3rem;\n}\n\n/* MAIN */\n.main {\n  width: 100%;\n  height: calc(100vh - 100px);\n  display: flex;\n}\n\n.sidebar {\n  width: 300px;\n  height: 100%;\n  background: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n.projects {\n  margin: 15px;\n}\n\n.projects-list {\n  margin-left: 15px;\n  list-style-type: none;\n}\n\n.projects-list-item {\n  cursor: pointer;\n}\n\n/* CONTENT */\n.content {\n  width: 100%;\n  padding: 15px;\n}\n\n.tasks {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.card {\n  width: 90%;\n  margin-block: 15px;\n  padding: 15px;\n  border: 1px solid var(--card-border-color);\n  border-left-width: 10px;\n  border-radius: 10px;\n}\n\n.card-title {\n  font-size: 1.2rem;\n}\n\n.card-description {\n  margin-block: 5px;\n  font-size: 1rem;\n}\n\n.card-due-date,\n.card-priority {\n  font-weight: bold;\n}\n\n.form {\n  margin: 15px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--card-border-color);\n  border-radius: 10px;\n}\n\n.form-control {\n  width: 400px;\n  margin-block: 10px;\n}\n\n.form-header {\n  text-align: center;\n}\n\n.form-control label {\n  display: block;\n  font-weight: bold;\n}\n\n.form-control input,\n.form-control textarea,\n.form-control select {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--primary-color);\n  border-radius: 5px;\n}\n\n.form-control input:focus,\n.form-control textarea:focus,\n.form-control select:focus {\n  outline: none;\n  box-shadow: 10px 5px 10px var(--primary-color);\n}\n\n.form-control textarea {\n  resize: none;\n}\n\n.form-actions {\n  margin-block: 15px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n/* BUTTONS */\n.btn {\n  width: 100px;\n  height: 30px;\n  border: none;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 10px 5px 10px var(--primary-color);\n  transition: all 0.2s ease-out;\n}\n\n.btn:hover {\n  opacity: 0.7;\n}\n\n.btn-dark {\n  background: var(--primary-color);\n  color: var(--secondary-color);\n}\n\n.btn-danger {\n  background: var(--danger-color);\n  color: var(--secondary-color);\n}\n\n.btn-success {\n  background: var(--success-color);\n  color: var(--primary-color);\n}\n\n#new-project-btn {\n  display: block;\n  margin: 20px auto;\n}\n\n/* MODAL */\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(5px);\n  z-index: 10;\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 20;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,4BAA4B;EAC5B,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA,WAAW;AACX;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,WAAW;EACX,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,0CAA0C;EAC1C,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;;;EAGE,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;EACb,8CAA8C;AAChD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA,YAAY;AACZ;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,8CAA8C;EAC9C,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;EAC/B,6BAA6B;AAC/B;;AAEA;EACE,gCAAgC;EAChC,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,+BAA+B;EAC/B,0BAA0B;EAC1B,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap\");\n\n:root {\n  --primary-color: #313638;\n  --secondary-color: #e0dfd5;\n  --card-border-color: #e4b363;\n  --danger-color: #e71d36;\n  --success-color: #adf6b1;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n/* HEADER */\n.header {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  background: var(--primary-color);\n}\n\n.header h1 {\n  margin-left: 50px;\n  color: var(--secondary-color);\n  font-size: 3rem;\n}\n\n/* MAIN */\n.main {\n  width: 100%;\n  height: calc(100vh - 100px);\n  display: flex;\n}\n\n.sidebar {\n  width: 300px;\n  height: 100%;\n  background: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n.projects {\n  margin: 15px;\n}\n\n.projects-list {\n  margin-left: 15px;\n  list-style-type: none;\n}\n\n.projects-list-item {\n  cursor: pointer;\n}\n\n/* CONTENT */\n.content {\n  width: 100%;\n  padding: 15px;\n}\n\n.tasks {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.card {\n  width: 90%;\n  margin-block: 15px;\n  padding: 15px;\n  border: 1px solid var(--card-border-color);\n  border-left-width: 10px;\n  border-radius: 10px;\n}\n\n.card-title {\n  font-size: 1.2rem;\n}\n\n.card-description {\n  margin-block: 5px;\n  font-size: 1rem;\n}\n\n.card-due-date,\n.card-priority {\n  font-weight: bold;\n}\n\n.form {\n  margin: 15px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--card-border-color);\n  border-radius: 10px;\n}\n\n.form-control {\n  width: 400px;\n  margin-block: 10px;\n}\n\n.form-header {\n  text-align: center;\n}\n\n.form-control label {\n  display: block;\n  font-weight: bold;\n}\n\n.form-control input,\n.form-control textarea,\n.form-control select {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--primary-color);\n  border-radius: 5px;\n}\n\n.form-control input:focus,\n.form-control textarea:focus,\n.form-control select:focus {\n  outline: none;\n  box-shadow: 10px 5px 10px var(--primary-color);\n}\n\n.form-control textarea {\n  resize: none;\n}\n\n.form-actions {\n  margin-block: 15px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n/* BUTTONS */\n.btn {\n  width: 100px;\n  height: 30px;\n  border: none;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 10px 5px 10px var(--primary-color);\n  transition: all 0.2s ease-out;\n}\n\n.btn:hover {\n  opacity: 0.7;\n}\n\n.btn-dark {\n  background: var(--primary-color);\n  color: var(--secondary-color);\n}\n\n.btn-danger {\n  background: var(--danger-color);\n  color: var(--secondary-color);\n}\n\n.btn-success {\n  background: var(--success-color);\n  color: var(--primary-color);\n}\n\n#new-project-btn {\n  display: block;\n  margin: 20px auto;\n}\n\n/* MODAL */\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(5px);\n  z-index: 10;\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 20;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI/modal.js":
/*!*************************!*\
  !*** ./src/UI/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = (() => {
  const overlay = document.querySelector(".overlay");
  const newTaskModal = document.getElementById("new-task-modal");
  const newProjectModal = document.getElementById("new-project-modal");

  const open = (modalElement) => {
    overlay.classList.remove("hidden");
    modalElement.classList.remove("hidden");
  };

  const close = (modalElement) => {
    overlay.classList.add("hidden");
    modalElement.classList.add("hidden");
  };

  const closeAll = () => {
    [overlay, newTaskModal, newProjectModal].forEach((element) => {
      element.classList.add("hidden");
    });
  };

  const setupModals = () => {
    const newTaskBtn = document.getElementById("new-task-btn");
    const cancelTaskBtn = document.getElementById("cancel-task-btn");
    const newTaskModal = document.getElementById("new-task-modal");

    const newProjectBtn = document.getElementById("new-project-btn");
    const cancelProjectBtn = document.getElementById("cancel-project-btn");
    const newProjectModal = document.getElementById("new-project-modal");

    const overlay = document.querySelector(".overlay");

    newTaskBtn.addEventListener("click", () => {
      open(newTaskModal);
    });

    cancelTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      close(newTaskModal);
    });

    newProjectBtn.addEventListener("click", () => {
      open(newProjectModal);
    });

    cancelProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      close(newProjectModal);
    });

    overlay.addEventListener("click", () => {
      close(newTaskModal);
      close(newProjectModal);
    });
  };

  return { open, close, closeAll, setupModals };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/UI/ui.js":
/*!**********************!*\
  !*** ./src/UI/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/tasks */ "./src/data/tasks.js");


const UI = (() => {
  const contentHeader = document.querySelector(".content-header");

  const firstLoad = () => {
    contentHeader.setAttribute("data-project-id", "1");
  };
  // Create a new task card
  const createTaskCard = (title, description, dueDate, priority) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

    const taskCardTitle = document.createElement("h4");
    taskCardTitle.classList.add("card-title");
    taskCardTitle.textContent = title;

    const taskCardDescription = document.createElement("p");
    taskCardDescription.classList.add("card-description");
    taskCardDescription.textContent = description;

    const taskCardDueDate = document.createElement("p");
    taskCardDueDate.classList.add("card-due-date");
    taskCardDueDate.textContent = `Due Date: ${dueDate}`;

    const taskCardPriority = document.createElement("p");
    taskCardPriority.classList.add("card-priority");
    taskCardPriority.textContent = `Priority: ${priority}`;

    taskCard.append(
      taskCardTitle,
      taskCardDescription,
      taskCardDueDate,
      taskCardPriority
    );

    return taskCard;
  };

  const displayProjects = (projects) => {
    const projectsList = document.querySelector(".projects-list");
    projectsList.innerHTML = "";

    projects.forEach((project) => {
      const newListItem = document.createElement("li");
      newListItem.classList.add("projects-list-item");
      newListItem.textContent = project.title;
      newListItem.setAttribute("data-project-id", project.id);
      projectsList.appendChild(newListItem);
    });

    const projectsListItems = document.querySelectorAll(".projects-list-item");
    projectsListItems.forEach((item) => {
      item.addEventListener("click", () => {
        const projectId = item.getAttribute("data-project-id");
        const project = projects.find((element) => element.id == projectId);
        contentHeader.textContent = project.title;
        contentHeader.setAttribute("data-project-id", projectId);
        displayTasks();
      });
    });
  };

  const displayTasks = () => {
    const tasksElement = document.querySelector(".tasks");
    const taskCards = document.querySelectorAll(".card");
    taskCards.forEach((card) => {
      card.remove();
    });

    const projectId = contentHeader.getAttribute("data-project-id");

    _data_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].data.forEach((task) => {
      if (task.projectId == projectId) {
        const taskCard = createTaskCard(
          task.title,
          task.description,
          task.dueDate,
          task.priority
        );

        tasksElement.appendChild(taskCard);
      }
    });
  };

  return { firstLoad, createTaskCard, displayProjects, displayTasks };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/controllers/projectsController.js":
/*!***********************************************!*\
  !*** ./src/controllers/projectsController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/projects */ "./src/data/projects.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.js");



const saveProjectHandler = (e) => {
  e.preventDefault();

  const projectTitle = document.getElementById("project-title");
  const newProject = {
    id: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
    title: projectTitle.value,
  };

  _data_projects__WEBPACK_IMPORTED_MODULE_0__["default"].add(newProject);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveProjectHandler);


/***/ }),

/***/ "./src/controllers/tasksController.js":
/*!********************************************!*\
  !*** ./src/controllers/tasksController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/tasks */ "./src/data/tasks.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.js");



const saveTaskHandler = (e) => {
  e.preventDefault();

  const contentHeader = document.querySelector(".content-header");
  const projectId = contentHeader.getAttribute("data-project-id");

  const taskTitle = document.getElementById("task-title");
  const taskDescription = document.getElementById("task-description");
  const taskDueDate = document.getElementById("task-due-date");
  const taskPriority = document.getElementById("task-priority");

  const newTask = {
    id: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
    title: taskTitle.value,
    description: taskDescription.value,
    dueDate: taskDueDate.value,
    priority: taskPriority.value,
    projectId,
  };

  _data_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].add(newTask);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTaskHandler);


/***/ }),

/***/ "./src/data/projects.js":
/*!******************************!*\
  !*** ./src/data/projects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projects = (() => {
  const data = [
    {
      id: 1,
      title: "Default Project",
    },
  ];

  const add = (project) => {
    data.push(project);
  };

  const remove = (project) => {
    const newData = data.filter((ele) => ele.id !== project.id);
    data = newData;
  };

  return { data, add, remove };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/data/tasks.js":
/*!***************************!*\
  !*** ./src/data/tasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tasks = (() => {
  const data = [
    {
      id: 1,
      title: "Test",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, quos.",
      dueDate: "18/06/2022",
      priority: "high",
      projectId: 1,
    },
  ];

  const add = (task) => {
    data.push(task);
  };

  const remove = (task) => {
    const newData = data.filter((ele) => ele.id !== task.id);
    data = newData;
  };

  return { data, add, remove };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);


/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueID": () => (/* binding */ uniqueID)
/* harmony export */ });
const uniqueID = () => {
  const g4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return g4() + g4() + g4() + g4();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UI_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/ui */ "./src/UI/ui.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/projects */ "./src/data/projects.js");
/* harmony import */ var _UI_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/modal */ "./src/UI/modal.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/projectsController */ "./src/controllers/projectsController.js");
/* harmony import */ var _controllers_tasksController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/tasksController */ "./src/controllers/tasksController.js");







_UI_modal__WEBPACK_IMPORTED_MODULE_3__["default"].setupModals();
_UI_ui__WEBPACK_IMPORTED_MODULE_1__["default"].firstLoad();
_UI_ui__WEBPACK_IMPORTED_MODULE_1__["default"].displayProjects(_data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].data);
_UI_ui__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks();

const saveProjectBtn = document.getElementById("save-project-btn");
saveProjectBtn.addEventListener("click", (e) => {
  (0,_controllers_projectsController__WEBPACK_IMPORTED_MODULE_4__["default"])(e);
  _UI_ui__WEBPACK_IMPORTED_MODULE_1__["default"].displayProjects(_data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].data);
  _UI_modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeAll();
});

const saveTaskBtn = document.getElementById("save-task-btn");
saveTaskBtn.addEventListener("click", (e) => {
  (0,_controllers_tasksController__WEBPACK_IMPORTED_MODULE_5__["default"])(e);
  _UI_ui__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks(_data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].data);
  _UI_modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeAll();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNJO0FBQ2M7QUFDUjtBQUNtQztBQUNOOztBQUU1RCw2REFBaUI7QUFDakIsd0RBQVk7QUFDWiw4REFBa0IsQ0FBQywyREFBYTtBQUNoQywyREFBZTs7QUFFZjtBQUNBO0FBQ0EsRUFBRSwyRUFBa0I7QUFDcEIsRUFBRSw4REFBa0IsQ0FBQywyREFBYTtBQUNsQyxFQUFFLDBEQUFjO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsd0VBQWU7QUFDakIsRUFBRSwyREFBZSxDQUFDLDJEQUFhO0FBQy9CLEVBQUUsMERBQWM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVUkvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1VJL3VpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbnRyb2xsZXJzL3Rhc2tzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZGF0YS9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZGF0YS90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzMxMzYzODtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZTBkZmQ1O1xcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogI2U0YjM2MztcXG4gIC0tZGFuZ2VyLWNvbG9yOiAjZTcxZDM2O1xcbiAgLS1zdWNjZXNzLWNvbG9yOiAjYWRmNmIxO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW46IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdC1pdGVtIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQ09OVEVOVCAqL1xcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW4tYmxvY2s6IDE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJsb2NrOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jYXJkLWR1ZS1kYXRlLFxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBtYXJnaW46IDE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW4tYmxvY2s6IDEwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCBpbnB1dCxcXG4uZm9ybS1jb250cm9sIHRleHRhcmVhLFxcbi5mb3JtLWNvbnRyb2wgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgaW5wdXQ6Zm9jdXMsXFxuLmZvcm0tY29udHJvbCB0ZXh0YXJlYTpmb2N1cyxcXG4uZm9ybS1jb250cm9sIHNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogMTBweCA1cHggMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWFjdGlvbnMge1xcbiAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG4uYnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMTBweCA1cHggMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi1kYXJrIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5idG4tZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJ0bi1zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbi8qIE1PREFMICovXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw4Q0FBOEM7RUFDOUMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzMxMzYzODtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZTBkZmQ1O1xcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogI2U0YjM2MztcXG4gIC0tZGFuZ2VyLWNvbG9yOiAjZTcxZDM2O1xcbiAgLS1zdWNjZXNzLWNvbG9yOiAjYWRmNmIxO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW46IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdC1pdGVtIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQ09OVEVOVCAqL1xcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW4tYmxvY2s6IDE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJsb2NrOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jYXJkLWR1ZS1kYXRlLFxcbi5jYXJkLXByaW9yaXR5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBtYXJnaW46IDE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW4tYmxvY2s6IDEwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCBpbnB1dCxcXG4uZm9ybS1jb250cm9sIHRleHRhcmVhLFxcbi5mb3JtLWNvbnRyb2wgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgaW5wdXQ6Zm9jdXMsXFxuLmZvcm0tY29udHJvbCB0ZXh0YXJlYTpmb2N1cyxcXG4uZm9ybS1jb250cm9sIHNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogMTBweCA1cHggMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWFjdGlvbnMge1xcbiAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG4uYnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMTBweCA1cHggMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi1kYXJrIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5idG4tZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJ0bi1zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbi8qIE1PREFMICovXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IG1vZGFsID0gKCgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgY29uc3QgbmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1tb2RhbFwiKTtcbiAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1tb2RhbFwiKTtcblxuICBjb25zdCBvcGVuID0gKG1vZGFsRWxlbWVudCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZSA9IChtb2RhbEVsZW1lbnQpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgW292ZXJsYXksIG5ld1Rhc2tNb2RhbCwgbmV3UHJvamVjdE1vZGFsXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBNb2RhbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stYnRuXCIpO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC10YXNrLWJ0blwiKTtcbiAgICBjb25zdCBuZXdUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLW1vZGFsXCIpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtYnRuXCIpO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1wcm9qZWN0LWJ0blwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LW1vZGFsXCIpO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW4obmV3VGFza01vZGFsKTtcbiAgICB9KTtcblxuICAgIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbG9zZShuZXdUYXNrTW9kYWwpO1xuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb3BlbihuZXdQcm9qZWN0TW9kYWwpO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsb3NlKG5ld1Byb2plY3RNb2RhbCk7XG4gICAgfSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZShuZXdUYXNrTW9kYWwpO1xuICAgICAgY2xvc2UobmV3UHJvamVjdE1vZGFsKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBvcGVuLCBjbG9zZSwgY2xvc2VBbGwsIHNldHVwTW9kYWxzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcbiIsImltcG9ydCB0YXNrcyBmcm9tIFwiLi4vZGF0YS90YXNrc1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGZpcnN0TG9hZCA9ICgpID0+IHtcbiAgICBjb250ZW50SGVhZGVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBcIjFcIik7XG4gIH07XG4gIC8vIENyZWF0ZSBhIG5ldyB0YXNrIGNhcmRcbiAgY29uc3QgY3JlYXRlVGFza0NhcmQgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICAgIGNvbnN0IHRhc2tDYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgdGFza0NhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgICB0YXNrQ2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCB0YXNrQ2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0NhcmREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1kZXNjcmlwdGlvblwiKTtcbiAgICB0YXNrQ2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCB0YXNrQ2FyZER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrQ2FyZER1ZURhdGUuY2xhc3NMaXN0LmFkZChcImNhcmQtZHVlLWRhdGVcIik7XG4gICAgdGFza0NhcmREdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke2R1ZURhdGV9YDtcblxuICAgIGNvbnN0IHRhc2tDYXJkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrQ2FyZFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJjYXJkLXByaW9yaXR5XCIpO1xuICAgIHRhc2tDYXJkUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHl9YDtcblxuICAgIHRhc2tDYXJkLmFwcGVuZChcbiAgICAgIHRhc2tDYXJkVGl0bGUsXG4gICAgICB0YXNrQ2FyZERlc2NyaXB0aW9uLFxuICAgICAgdGFza0NhcmREdWVEYXRlLFxuICAgICAgdGFza0NhcmRQcmlvcml0eVxuICAgICk7XG5cbiAgICByZXR1cm4gdGFza0NhcmQ7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtbGlzdC1pdGVtXCIpO1xuICAgICAgbmV3TGlzdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgbmV3TGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuaWQpO1xuICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cy1saXN0LWl0ZW1cIik7XG4gICAgcHJvamVjdHNMaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT0gcHJvamVjdElkKTtcbiAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIGNvbnRlbnRIZWFkZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3RJZCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gICAgY29uc3QgdGFza0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpO1xuICAgIHRhc2tDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjYXJkLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdElkID0gY29udGVudEhlYWRlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG5cbiAgICB0YXNrcy5kYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBjcmVhdGVUYXNrQ2FyZChcbiAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgIHRhc2sucHJpb3JpdHlcbiAgICAgICAgKTtcblxuICAgICAgICB0YXNrc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGZpcnN0TG9hZCwgY3JlYXRlVGFza0NhcmQsIGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRhc2tzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdW5pcXVlSUQgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbmNvbnN0IHNhdmVQcm9qZWN0SGFuZGxlciA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIik7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4gICAgaWQ6IHVuaXF1ZUlEKCksXG4gICAgdGl0bGU6IHByb2plY3RUaXRsZS52YWx1ZSxcbiAgfTtcblxuICBwcm9qZWN0cy5hZGQobmV3UHJvamVjdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlUHJvamVjdEhhbmRsZXI7XG4iLCJpbXBvcnQgdGFza3MgZnJvbSBcIi4uL2RhdGEvdGFza3NcIjtcbmltcG9ydCB7IHVuaXF1ZUlEIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5jb25zdCBzYXZlVGFza0hhbmRsZXIgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1oZWFkZXJcIik7XG4gIGNvbnN0IHByb2plY3RJZCA9IGNvbnRlbnRIZWFkZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWUtZGF0ZVwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpO1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHVuaXF1ZUlEKCksXG4gICAgdGl0bGU6IHRhc2tUaXRsZS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgIGR1ZURhdGU6IHRhc2tEdWVEYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHkudmFsdWUsXG4gICAgcHJvamVjdElkLFxuICB9O1xuXG4gIHRhc2tzLmFkZChuZXdUYXNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNhdmVUYXNrSGFuZGxlcjtcbiIsImNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIkRlZmF1bHQgUHJvamVjdFwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgYWRkID0gKHByb2plY3QpID0+IHtcbiAgICBkYXRhLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGVsZSkgPT4gZWxlLmlkICE9PSBwcm9qZWN0LmlkKTtcbiAgICBkYXRhID0gbmV3RGF0YTtcbiAgfTtcblxuICByZXR1cm4geyBkYXRhLCBhZGQsIHJlbW92ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCJjb25zdCB0YXNrcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogXCJUZXN0XCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSwgcXVvcy5cIixcbiAgICAgIGR1ZURhdGU6IFwiMTgvMDYvMjAyMlwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgcHJvamVjdElkOiAxLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgYWRkID0gKHRhc2spID0+IHtcbiAgICBkYXRhLnB1c2godGFzayk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGVsZSkgPT4gZWxlLmlkICE9PSB0YXNrLmlkKTtcbiAgICBkYXRhID0gbmV3RGF0YTtcbiAgfTtcblxuICByZXR1cm4geyBkYXRhLCBhZGQsIHJlbW92ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza3M7XG4iLCJjb25zdCB1bmlxdWVJRCA9ICgpID0+IHtcbiAgY29uc3QgZzQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3Vic3RyaW5nKDEpO1xuICB9O1xuXG4gIHJldHVybiBnNCgpICsgZzQoKSArIGc0KCkgKyBnNCgpO1xufTtcblxuZXhwb3J0IHsgdW5pcXVlSUQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL1VJL3VpXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuL1VJL21vZGFsXCI7XG5pbXBvcnQgc2F2ZVByb2plY3RIYW5kbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlclwiO1xuaW1wb3J0IHNhdmVUYXNrSGFuZGxlciBmcm9tIFwiLi9jb250cm9sbGVycy90YXNrc0NvbnRyb2xsZXJcIjtcblxubW9kYWwuc2V0dXBNb2RhbHMoKTtcblVJLmZpcnN0TG9hZCgpO1xuVUkuZGlzcGxheVByb2plY3RzKHByb2plY3RzLmRhdGEpO1xuVUkuZGlzcGxheVRhc2tzKCk7XG5cbmNvbnN0IHNhdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLXByb2plY3QtYnRuXCIpO1xuc2F2ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNhdmVQcm9qZWN0SGFuZGxlcihlKTtcbiAgVUkuZGlzcGxheVByb2plY3RzKHByb2plY3RzLmRhdGEpO1xuICBtb2RhbC5jbG9zZUFsbCgpO1xufSk7XG5cbmNvbnN0IHNhdmVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLXRhc2stYnRuXCIpO1xuc2F2ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNhdmVUYXNrSGFuZGxlcihlKTtcbiAgVUkuZGlzcGxheVRhc2tzKHByb2plY3RzLmRhdGEpO1xuICBtb2RhbC5jbG9zZUFsbCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=