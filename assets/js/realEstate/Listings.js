import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
    };
    this.loopListings = this.loopListings.bind(this);
  }
  loopListings = () => {
    const {listingsData} = this.props;

    if(listingsData === undefined || listingsData.length === 0) {
      return (<h1>Sorry no listings found</h1>);
    }

    return listingsData.map((listing, index) => {
      return (
        <div className="col-sm-6 col-lg-3" key={index}>
          <div className="listing">
            <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"></div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Tom Hanks</span>
                    <span className="post-date">05/05/2017</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>{listing.floorSpace} ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.bedrooms} bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn">Listing details</div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {listing.neighbourhood}, {listing.state}
              </span>
            </div>
          </div>
        </div>
      )
    })
  };
  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div>390 results found</div>
          <div className="sort-options">
            <select name="sortby" id="" className="sortby">
              <option value="price-asc">Highest price</option>
              <option value="price-dsc">Lowest price</option>
            </select>
            <div className="view">
              <i className="fa fa-list"></i>
              <i className="fa fa-th"></i>
            </div>
          </div>
        </section>

        <section className="listings-results">

          {this.loopListings()}
        </section>

        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="avtive">1</li>
            <li>2</li>
            <li>3</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}
