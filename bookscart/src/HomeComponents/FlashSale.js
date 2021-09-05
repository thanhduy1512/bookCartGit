import React from "react";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import Book from "./Book";

export default function FlashSale(props) {
  const uniqueSaleUrl =
    "https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=316&page=1";

  const { data: booksFlashSale, loading, error } = useFetch(uniqueSaleUrl);

  if (loading) return <Spinner />;
  if (error) throw error;
  return (
    <div>
      <Book books={booksFlashSale} addToCart={props.addToCart} />
    </div>
  );
}
