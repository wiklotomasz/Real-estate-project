webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.neighbourhoods = _this.neighbourhoods.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedroomsList = _this.bedroomsList.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'neighbourhoods',
    value: function neighbourhoods() {
      if (this.props.globalState.populateFormsData.neighbourhoods !== undefined) {
        var neighbourhoods = this.props.globalState.populateFormsData.neighbourhoods;

        return neighbourhoods.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes !== undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedroomsList',
    value: function bedroomsList() {
      if (this.props.globalState.populateFormsData.bedroomsList !== undefined) {
        var bedroomsList = this.props.globalState.populateFormsData.bedroomsList;

        return bedroomsList.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter', className: 'inside' },
        _react2.default.createElement(
          'h4',
          null,
          'Filter'
        ),
        _react2.default.createElement(
          'select',
          { name: 'neighbourhood', className: 'filters neighbourhood', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'all' },
            'All neighbourhoods'
          ),
          this.neighbourhoods()
        ),
        _react2.default.createElement(
          'select',
          { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'all' },
            'All types'
          ),
          this.homeTypes()
        ),
        _react2.default.createElement(
          'select',
          { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
          this.bedroomsList()
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters price' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Price'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'minPrice', onChange: this.props.change, value: this.props.globalState.minPrice }),
          _react2.default.createElement('input', { type: 'text', name: 'maxPrice', onChange: this.props.change, value: this.props.globalState.maxPrice })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters floor-space' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Floor space'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'minFloorSpace', onChange: this.props.change, value: this.props.globalState.minFloorSpace }),
          _react2.default.createElement('input', { type: 'text', name: 'maxFloorSpace', onChange: this.props.change, value: this.props.globalState.maxFloorSpace })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters extras' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Extras'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            _react2.default.createElement(
              'span',
              null,
              'Elevators'
            ),
            _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            _react2.default.createElement(
              'span',
              null,
              'Swimmingpool'
            ),
            _react2.default.createElement('input', { name: 'swimmingPool', value: 'swimmingPool', type: 'checkbox', onChange: this.props.change })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            _react2.default.createElement(
              'span',
              null,
              'Finished basement'
            ),
            _react2.default.createElement('input', { name: 'finishedBasement', value: 'finishedBasement', type: 'checkbox', onChange: this.props.change })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            _react2.default.createElement(
              'span',
              null,
              'Gym'
            ),
            _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.loopListings = function () {
      var listingsData = _this.props.listingsData;


      if (listingsData === undefined || listingsData.length === 0) {
        return _react2.default.createElement(
          "h1",
          null,
          "Sorry no listings found"
        );
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          "div",
          { className: "col-sm-6 col-lg-3", key: index },
          _react2.default.createElement(
            "div",
            { className: "listing" },
            _react2.default.createElement(
              "div",
              { className: "listing-img", style: { background: "url(\"" + listing.image + "\") no-repeat center center" } },
              _react2.default.createElement(
                "span",
                { className: "address" },
                listing.address
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "div",
                  { className: "col-md-3" },
                  _react2.default.createElement("div", { className: "user-img" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-md-9" },
                  _react2.default.createElement(
                    "div",
                    { className: "user-details" },
                    _react2.default.createElement(
                      "span",
                      { className: "user-name" },
                      "Tom Hanks"
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "post-date" },
                      "05/05/2017"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "listing-details" },
                    _react2.default.createElement(
                      "div",
                      { className: "floor-space" },
                      _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        listing.floorSpace,
                        " ft\xB2"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "bedrooms" },
                      _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        listing.bedrooms,
                        " bedrooms"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "view-btn" },
                    "Listing details"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "bottom-info" },
              _react2.default.createElement(
                "span",
                { className: "price" },
                "$",
                listing.price
              ),
              _react2.default.createElement(
                "span",
                { className: "location" },
                _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                listing.neighbourhood,
                ", ",
                listing.state
              )
            )
          )
        );
      });
    };

    _this.state = {
      name: "Joe"
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search" })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            null,
            "390 results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              { name: "sortby", id: "", className: "sortby" },
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Highest price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                "Lowest price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", { className: "fa fa-list" }),
              _react2.default.createElement("i", { className: "fa fa-th" })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-results" },
          this.loopListings()
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              null,
              "Prev"
            ),
            _react2.default.createElement(
              "li",
              { className: "avtive" },
              "1"
            ),
            _react2.default.createElement(
              "li",
              null,
              "2"
            ),
            _react2.default.createElement(
              "li",
              null,
              "3"
            ),
            _react2.default.createElement(
              "li",
              null,
              "Next"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = exports.listingsData = [{
    address: 'Katowicka 20',
    neighbourhood: 'Jezyce',
    city: 'Warsaw',
    state: 'Mazowieckie',
    bedrooms: 2,
    price: 44,
    floorSpace: 10,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://cdn.pixabay.com/photo/2019/12/22/17/13/snuggle-4713013__480.jpg'
}, {
    address: 'Miedzyborska 20',
    neighbourhood: 'Jezyce',
    city: 'Poznan',
    state: 'Wielkopolska',
    bedrooms: 3,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'http://naruszeniedobrosobistych.com/wp-content/uploads/2017/10/pexels-photo-186077.jpeg'
}, {
    address: 'Miedzyborska 20',
    neighbourhood: 'Wilda',
    city: 'Warsaw',
    state: 'Mazowieckie',
    bedrooms: 1,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'http://naruszeniedobrosobistych.com/wp-content/uploads/2017/10/pexels-photo-186077.jpeg'
}, {
    address: 'Miedzyborska 20',
    neighbourhood: 'Wilda',
    city: 'Warsaw',
    state: 'Mazowieckie',
    bedrooms: 3,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Studio',
    image: 'https://cdn.pixabay.com/photo/2019/12/22/17/13/snuggle-4713013__480.jpg'
}, {
    address: 'Miedzyborska 20',
    neighbourhood: 'Grunwald',
    city: 'Warsaw',
    state: 'Mazowieckie',
    bedrooms: 3,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Studio',
    image: 'https://cdn.pixabay.com/photo/2019/12/22/17/13/snuggle-4713013__480.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.change = function (event) {
      console.log(event.target);
      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
        _this.filterData();
      });
    };

    _this.filterData = function () {
      var newData = _this.state.listingsData.filter(function (item) {
        return item.price >= _this.state.minPrice && item.price <= _this.state.maxPrice && item.floorSpace >= _this.state.minFloorSpace && item.floorSpace <= _this.state.maxFloorSpace && item.bedrooms >= _this.state.bedrooms;
      });

      if (_this.state.neighbourhood !== 'all') {
        newData = newData.filter(function (item) {
          return item.neighbourhood === _this.state.neighbourhood;
        });
      }

      if (_this.state.homeType !== 'all') {
        newData = newData.filter(function (item) {
          return item.homeType === _this.state.homeType;
        });
      }

      _this.setState({
        filteredData: newData
      });
    };

    _this.populateForms = function () {
      // neighbourhood
      var neighbourhoods = _this.state.listingsData.map(function (item) {
        return item.neighbourhood;
      });
      neighbourhoods = new Set(neighbourhoods);
      neighbourhoods = [].concat(_toConsumableArray(neighbourhoods));

      // homeType
      var homeTypes = _this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));

      // bedrooms
      var bedroomsList = _this.state.listingsData.map(function (item) {
        return item.bedrooms;
      });
      bedroomsList = bedroomsList.sort();
      bedroomsList = new Set(bedroomsList);
      bedroomsList = [].concat(_toConsumableArray(bedroomsList));

      _this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          neighbourhoods: neighbourhoods,
          bedroomsList: bedroomsList
        }
      }, function () {
        console.log(_this.state.populateFormsData);
      });
    };

    _this.state = {
      listingsData: _listingsData2.default,
      neighbourhood: 'all',
      homeType: 'all',
      bedrooms: 0,
      minPrice: 0,
      maxPrice: 500000,
      minFloorSpace: 0,
      maxFloorSpace: 50000,
      elevator: false,
      swimmingPool: false,
      finishedBasement: false,
      gym: false,
      filteredData: _listingsData2.default,
      populateFormsData: []
    };
    _this.change = _this.change.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);