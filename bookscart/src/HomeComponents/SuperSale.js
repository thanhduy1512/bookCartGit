import React from "react";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import Book from "./Book";

export default function SuperSale(props) {
  const uniqueSaleUrl =
    "https://tiki.vn/api/personalish/v1/blocks/listings?limit=5&is_mweb=1&category=8322&page=1";

  const { data: booksSuperSale, loading, error } = useFetch(uniqueSaleUrl);
  if (loading) return <Spinner />;
  if (error) throw error;
  return (
    <div>
      <Book books={booksSuperSale} addToCart={props.addToCart} />
    </div>
  );
}
