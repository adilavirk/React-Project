import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // Destructuring ki help sa autor and Date hum props mesa nikalen ga
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-4">
        <div className="card" style={{ position: "relative" }}>
          <span
            className=" position-absolute translate-middle badge rounded-pill bg-danger"
            style={{ top: "-5px", right: "-5px" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">{description}</p>
            <h5 className="card-title">{title} </h5>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
