import React from "react";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import Book from "./Book";

export default function UniqueSale(props) {
  const uniqueSaleUrl =
    "https://tiki.vn/api/personalish/v1/blocks/listings?limit=4&is_mweb=1&category=8322&page=1";

  const { data: booksUniqueSale, loading, error } = useFetch(uniqueSaleUrl);
  if (loading) return <Spinner />;
  if (error) throw error;
  return (
    <div className="container" style={{ marginBottom: "-34px" }}>
      <div>
        <Book books={booksUniqueSale} addToCart={props.addToCart} />
      </div>
    </div>
  );
}
