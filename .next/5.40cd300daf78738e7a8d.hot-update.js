webpackHotUpdate(5,{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(400);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = __webpack_require__(416);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/var/www/learnNewJs/pages/post.js?entry';


var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.show.name), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;

            console.log('Fetched show: ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJQb3N0IiwicHJvcHMiLCJzaG93IiwibmFtZSIsInN1bW1hcnkiLCJyZXBsYWNlIiwiaW1hZ2UiLCJtZWRpdW0iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxPQUFRLFNBQVIsQUFBUSxLQUFBLEFBQUMsT0FBRDt5QkFDVixBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLGtCQUNHLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLFdBQUssQUFBTSxLQURkLEFBQ0csQUFBZ0IsQUFDaEIsdUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FBSSxBQUFNLEtBQU4sQUFBVyxRQUFYLEFBQW1CLFFBQW5CLEFBQTJCLFlBRmxDLEFBRUcsQUFBSSxBQUF1QyxBQUMzQyw2Q0FBSyxLQUFLLE1BQUEsQUFBTSxLQUFOLEFBQVcsTUFBckIsQUFBMkI7Z0JBQTNCO2tCQUpPLEFBQ1YsQUFHRztBQUFBOztBQUpQOztBQVFBLEtBQUEsQUFBSyw4QkFBTDtzRkFBdUIsaUJBQUEsQUFBZ0IsU0FBaEI7aUJBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFDYjtBQURhLGlCQUNOLFFBRE0sQUFDRSxNQURGLEFBQ2I7NEJBRGE7bUJBRUgsbUVBRkcsQUFFSCxBQUFzQzs7ZUFBbEQ7QUFGZSwyQkFBQTs0QkFBQTttQkFHRixJQUhFLEFBR0YsQUFBSTs7ZUFBakI7QUFIZSw0QkFLckI7O29CQUFBLEFBQVEsdUJBQXFCLEtBTFIsQUFLckIsQUFBa0M7OzZDQUUzQixFQUFFLE1BUFksQUFPZDs7ZUFQYztlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXZCOzt1QkFBQTs0QkFBQTtBQUFBO0FBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9sZWFybk5ld0pzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/learnNewJs/pages/post.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/learnNewJs/pages/post.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40MGNkMzAwZGFmNzg3MzhlN2E4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz8yYjY5ODE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IFBvc3QgPSAgKHByb3BzKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICA8aDE+e3Byb3BzLnNob3cubmFtZX08L2gxPlxuICAgICAgIDxwPntwcm9wcy5zaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9wPi9nLCAnJyl9PC9wPlxuICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0vPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKVxuICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXG5cbiAgcmV0dXJuIHsgc2hvdyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wb3N0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSkE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==