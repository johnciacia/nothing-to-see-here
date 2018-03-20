/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = __WEBPACK_IMPORTED_MODULE_1_wp___default.a.i18n.__;
var _wp$blocks = __WEBPACK_IMPORTED_MODULE_1_wp___default.a.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    Editable = _wp$blocks.Editable,
    MediaUpload = _wp$blocks.MediaUpload,
    _wp$blocks$source = _wp$blocks.source,
    attr = _wp$blocks$source.attr,
    children = _wp$blocks$source.children,
    InspectorControls = _wp$blocks.InspectorControls,
    InnerBlocks = _wp$blocks.InnerBlocks;
var _wp$components = __WEBPACK_IMPORTED_MODULE_1_wp___default.a.components,
    Button = _wp$components.Button,
    withAPIData = _wp$components.withAPIData;
var ToggleControl = InspectorControls.ToggleControl,
    TextControl = InspectorControls.TextControl;
var _window$hm$components = window.hm.components,
    PostSelectButton = _window$hm$components.PostSelectButton,
    PostSelectModal = _window$hm$components.PostSelectModal;






var Article = function (_React$Component) {
    _inherits(Article, _React$Component);

    function Article() {
        _classCallCheck(this, Article);

        var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));

        _this.state = {
            mediaURL: false,
            title: ''
        };
        _this.postSelected = _this.postSelected.bind(_this);
        return _this;
    }

    _createClass(Article, [{
        key: 'postSelected',
        value: function postSelected(data) {
            this.setState({
                mediaURL: data[0].featured_media_src,
                title: data[0].title.rendered
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                attributes = _props.attributes,
                isSelected = _props.isSelected,
                setAttributes = _props.setAttributes;


            if (this.state.mediaURL) {
                return __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                    'div',
                    { className: 'article-container' },
                    __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement('div', { 'class': 'hero-image foo', style: { backgroundImage: "url('" + this.state.mediaURL + "')" } }),
                    __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                            'div',
                            { 'class': 'category' },
                            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                                'span',
                                null,
                                'Uncategorized'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                            'div',
                            { 'class': 'title' },
                            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                                'span',
                                null,
                                this.state.title
                            )
                        )
                    )
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                    'div',
                    { className: 'article-container' },
                    __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                        'div',
                        { 'class': 'hero-image' },
                        __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                            'div',
                            { 'class': 'info-caption' },
                            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                                PostSelectButton,
                                { btnProps: { isLarge: true }, onSelect: this.postSelected },
                                'Select Article'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                            'div',
                            { 'class': 'category' },
                            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                                'span',
                                { 'class': 'redacted' },
                                'Uncategorized'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                            'div',
                            { 'class': 'title' },
                            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                                'span',
                                {
                                    'class': 'redacted' },
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                            'div',
                            { 'class': 'summary' },
                            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                                'span',
                                { 'class': 'redacted' },
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum nulla. Duis fringilla eros mi, et dictum lacus consectetur ut. Phasellus commodo augue quis mauris imperdiet consequat.'
                            )
                        )
                    )
                );
            }
        }
    }]);

    return Article;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

registerBlockType('tempo-layouts/standard', {
    title: __('Standard Bucket'),
    icon: 'index-card',
    category: 'layout',
    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: 'h2'
        },
        mediaID: {
            type: 'number'
        },
        mediaURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src'
        }
    },
    getEditWrapperProps: function getEditWrapperProps(attributes) {
        return { 'data-align': 'wide' };
    },
    edit: function edit(props) {

        return [__WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
            'div',
            { 'class': 'container' },
            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                'article',
                { 'class': 'tile' },
                __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(Article, null)
            ),
            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                'article',
                { 'class': 'tile' },
                __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(Article, null)
            ),
            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                'aside',
                { 'class': 'tile' },
                __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                    'article',
                    null,
                    __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(Article, null)
                ),
                __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                    'article',
                    null,
                    __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(Article, null)
                ),
                __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                    'article',
                    null,
                    __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(Article, null)
                )
            ),
            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement('div', { className: 'clearfix' })
        )];
    },
    save: function save(props) {
        debugger;
        var className = props.className,
            _props$attributes = props.attributes,
            title = _props$attributes.title,
            mediaURL = _props$attributes.mediaURL;

        return __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
            'div',
            { className: className },
            __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement(
                'h2',
                null,
                title
            ),
            mediaURL && __WEBPACK_IMPORTED_MODULE_1_wp___default.a.element.createElement('img', { className: 'recipe-image', src: mediaURL })
        );
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = wp;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })
/******/ ]);