var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StopWatch = function (_React$Component) {
    _inherits(StopWatch, _React$Component);

    function StopWatch(props) {
        _classCallCheck(this, StopWatch);

        var _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

        _this.state = {
            miliseconds: 0
        };
        _this.timer = null;
        _this.start = _this.start.bind(_this);
        _this.stop = _this.stop.bind(_this);
        _this.reset = _this.reset.bind(_this);
        return _this;
    }

    _createClass(StopWatch, [{
        key: "start",
        value: function start() {
            var _this2 = this;

            // ensures user can only click start once. 
            if (!this.timer) {
                var startTime = Date.now();
                this.timer = setInterval(function () {
                    var timeEveryTik = Date.now();
                    var miliseconds = timeEveryTik - startTime + _this2.state.miliseconds;
                    _this2.setState({ miliseconds: miliseconds });
                    startTime = timeEveryTik;
                }, 100);
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            // global is safer? Timer is set to null so it can be started again. 
            window.clearInterval(this.timer);
            this.timer = null;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.stop();
            this.setState({ miliseconds: 0 });
        }
    }, {
        key: "render",
        value: function render() {
            var convertedTimer = function convertedTimer(miliseconds) {
                var minutes = Math.floor(miliseconds / 60000);
                var seconds = Math.floor(miliseconds / 1000) % 60;
                var tenthSeconds = Math.floor(miliseconds / 100) % 10;
                return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + "." + tenthSeconds;
            };

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h1",
                    { className: "text-center" },
                    "Stop Watch"
                ),
                React.createElement(
                    "div",
                    { className: "display text-center my-3" },
                    React.createElement(
                        "h2",
                        null,
                        convertedTimer(this.state.miliseconds)
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row justify-content-center" },
                    React.createElement(
                        "button",
                        { className: "btn col-1 mx-3 btn-outline-success", onClick: this.start },
                        "Start"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn col-1 mx-3 btn-outline-danger", onClick: this.stop },
                        "Stop"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn col-1 mx-3 btn-outline-warning", onClick: this.reset },
                        "Reset"
                    )
                )
            );
        }
    }]);

    return StopWatch;
}(React.Component);

ReactDOM.render(React.createElement(StopWatch, null), document.getElementById('root'));