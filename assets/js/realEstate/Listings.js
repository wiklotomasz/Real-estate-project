import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
    };
  }
  clickedBtn = () => {
    console.log("swag");
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
          <div className="listing col-md-2">
            <div className="listing-img">
              <span className="address">Miedzymorska 23</span>
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
                      <span>100 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>5 bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn">Listing details</div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">$2554</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i> Poznan,
                WLKP{" "}
              </span>
            </div>
          </div>
        </section>

        <section className="pagination">
          <ul className="pagination-num">
            <li>Prev</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}
