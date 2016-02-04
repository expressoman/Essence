'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _essenceCore = require('essence-core');

require('./button.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//require('!css!less!./button.less');

var Btn = (function (_React$Component) {
    _inherits(Btn, _React$Component);

    function Btn(props) {
        _classCallCheck(this, Btn);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Btn).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)({ 'e-ripple': _this.props.ripple === false ? false : true }, _this.props.className, _this.props.classes),
            color: '',
            position: {
                x: 0,
                y: 0
            }
        };
        return _this;
    }

    _createClass(Btn, [{
        key: 'renderRipple',
        value: function renderRipple() {
            if (this.props.ripple === false) {
                return;
            }

            return _react2.default.createElement(_essenceCore.RippleInk, {
                color: this.state.color,
                position: this.state.position });
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            if (this.props.type === 'touchpad') {
                return _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'i',
                        { key: 'touchpad-icon', className: 'e-icon-' + this.props.icon },
                        _react2.default.createElement(
                            'span',
                            { key: 'touchpad-label', className: 'label' },
                            this.props.label
                        )
                    )
                );
            }

            if (this.props.icon) {
                return _react2.default.createElement('i', { className: 'e-icon-' + this.props.icon });
            }

            return this.props.label || '';
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            var boundingClient = this.currentButton.getBoundingClientRect();

            this.setState({
                color: _essenceCore.Utils.BackgroundColor(event),
                position: _essenceCore.Utils.ClickPosition(event, boundingClient)
            });

            return this.props.onClick ? this.props.onClick(event) : true;
        }
    }, {
        key: 'renderBtn',
        value: function renderBtn() {
            var _this2 = this;

            var buttonType = this.props.type === 'touchpad' ? 'default flat' : this.props.type || 'default flat';
            var buttonClasses = (0, _classnames2.default)(this.state.classes, 'e-btn-' + buttonType);
            return _react2.default.createElement(
                'button',
                _extends({}, this.props, {
                    className: buttonClasses,
                    onClick: this.handleClick.bind(this),
                    onTouch: this.handleClick.bind(this),
                    ref: function ref(_ref) {
                        return _this2.currentButton = _ref;
                    },
                    'data-tooltip': this.props.tooltipText,
                    'data-position': this.props.tooltipPosition || 'top',
                    type: this.props.submit ? 'submit' : 'button'
                }),
                this.renderRipple(),
                this.renderContent()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderBtn();
        }
    }]);

    return Btn;
})(_react2.default.Component);

exports.default = Btn;