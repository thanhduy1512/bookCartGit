import React from "react";
import { FaStar } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react/cjs/react.development";
import $ from "jquery";

export default function Book({ books, addToCart }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);
  // console.log(book.data);

  const renderStar = (numb) => {
    let starHolder = [];
    for (let i = 0; i < numb; i++) {
      starHolder.push(<FaStar className="starIcon" />);
    }
    return starHolder;
  };
  const renderBooks = () => {
    return books.data.map((item, index) => {
      return (
        <div
          key={index}
          className="book"
          onClick={() => {
            addToCart(item.id);
          }}
        >
          <img src={item.thumbnail_url}></img>
          <div style={{ marginLeft: "8px" }}>
            <img className="tikiNow" src="./tikiNow.png" />
            <p>
              {item.name} ({item.book_cover.value})
            </p>
            <div className="d-flex">
              <p>{renderStar(item.rating_average)}</p>
              <p style={{ fontSize: "10px", color: "#808089" }}>
                ({item.review_count})
              </p>
            </div>
            {item.discount ? (
              <p style={{ margin: "-14px 0px 0px 0px" }}>
                {item.discount.toLocaleString()} <u>đ</u>{" "}
                {item.discount_rate ? (
                  <button className="saleButton" style={{ fontSize: "12px" }}>
                    {"-" + item.discount_rate + "%"}{" "}
                  </button>
                ) : (
                  ""
                )}
              </p>
            ) : (
              <p style={{ margin: "-14px 0px 0px 0px" }}>
                {" "}
                {item.price.toLocaleString()} <u>đ</u>
              </p>
            )}{" "}
            {item.discount ? (
              <p>
                {" "}
                <s>
                  {item.price.toLocaleString()} <u>đ</u>
                </s>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
  };
  const renderBooksSuperSale = () => {
    return books.data.map((item, index) => {
      return (
        <div
          key={index}
          className="superSaleBook"
          onClick={() => {
            addToCart(item.id);
          }}
        >
          <img src={item.thumbnail_url}></img>
          <div style={{ marginLeft: "8px" }}>
            <img className="tikiNow" src="./tikiNow.png" />
            <p>
              {item.name} ({item.book_cover.value})
            </p>
            <div className="d-flex">
              <p>{renderStar(item.rating_average)}</p>
              <p style={{ fontSize: "10px", color: "#808089" }}>
                ({item.review_count})
              </p>
            </div>
            {item.discount ? (
              <p style={{ margin: "-14px 0px 0px 0px" }}>
                {item.discount.toLocaleString()} <u>đ</u>{" "}
                {item.discount_rate ? (
                  <button className="saleButton">
                    {"-" + item.discount_rate + "%"}{" "}
                  </button>
                ) : (
                  ""
                )}
              </p>
            ) : (
              <p style={{ margin: "-14px 0px 0px 0px" }}>
                {" "}
                {item.price.toLocaleString()} <u>đ</u>
              </p>
            )}
            {item.discount ? (
              <p>
                {" "}
                <s>
                  {item.price.toLocaleString()}
                  <u>đ</u>
                </s>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
  };

  const renderBooksFlashSale = () => {
    return books.data.slice(start, end).map((item, index) => {
      return (
        <div
          key={index}
          className="book"
          style={{ margin: "0px 0px 8px 8px" }}
          onClick={() => {
            addToCart(item.id);
          }}
        >
          <img src={item.thumbnail_url}></img>
          <div style={{ marginLeft: "8px" }}>
            <img className="tikiNow" src="./tikiNow.png" />
            <p>
              {item.name} ({item.book_cover.value})
            </p>
            <div className="d-flex">
              <p>{renderStar(item.rating_average)}</p>
              <p style={{ fontSize: "10px", color: "#808089" }}>
                ({item.review_count})
              </p>
            </div>
            {item.discount ? (
              <p style={{ margin: "-14px 0px 0px 0px" }}>
                {item.discount.toLocaleString()} <u>đ</u>{" "}
                {item.discount_rate ? (
                  <button className="saleButton" style={{ fontSize: "12px" }}>
                    {"-" + item.discount_rate + "%"}{" "}
                  </button>
                ) : (
                  ""
                )}
              </p>
            ) : (
              <p style={{ margin: "-14px 0px 0px 0px" }}>
                {" "}
                {item.price.toLocaleString()} <u>đ</u>
              </p>
            )}{" "}
            {item.discount ? (
              <p>
                {" "}
                <s>
                  {" "}
                  {item.price.toLocaleString()} <u>đ</u>
                </s>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
  };
  const onClickFlashNav = (start, end) => {
    setStart(start);
    setEnd(end);
  };

  $("button").on("click", function () {
    $("button").removeClass("selected");
    $(this).addClass("selected");
  });

  return (
    <div>
      <div className="row">{books.data.length === 4 ? renderBooks() : ""}</div>
      <div className="row" style={{ padding: "0px" }}>
        {books.data.length === 5 ? (
          <div className="superSaleBackGround">
            <h1>Siêu Sale Mở Bán Ngày 23/04</h1>
            <Carousel
              showThumbs={false}
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
              swipeable={true}
            >
              {renderBooksSuperSale()}
            </Carousel>
          </div>
        ) : (
          ""
        )}
      </div>
      {books.data.length === 8 ? (
        <div
          className="row"
          style={{ padding: "0px", margin: "0px 0px 40px 0px" }}
        >
          <img
            src="./flashSale.png"
            style={{ height: "34px", margin: "-14px 0px -4px 0px" }}
          />
          <nav className="col-12">
            <button
              className="col-3 "
              onClick={() => {
                onClickFlashNav(0, 2);
              }}
            >
              10:00
            </button>
            <button
              onClick={() => {
                onClickFlashNav(2, 4);
              }}
              className="col-3"
            >
              15:00
            </button>
            <button
              onClick={() => {
                onClickFlashNav(4, 6);
              }}
              className="col-3"
            >
              18:00
            </button>
            <button
              onClick={() => {
                onClickFlashNav(6, 8);
              }}
              className="col-3"
            >
              20:00
            </button>
          </nav>
          <div className="row" style={{ padding: "0px 0px 16px 20px" }}>
            {renderBooksFlashSale()}{" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
