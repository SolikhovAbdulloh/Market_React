import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import axios from "axios";

function GET() {
  const [data, setData] = useState([]);
  const [filterproduct, setFilter] = useState([]);
  const [search , setSearch ] = useState([])
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);

        setData(response.data);

        setFilter(response.data);
      })
      .catch((error) => console.error("Xatolik:", error));
  }, []);

   useEffect(()=>{
     const filtered = data.filter((product) =>
       product.id.toString().includes(search)
     );
    setFilter(filtered);
  }, [search, data]);

  function filter(category) {
    const filterdata = data.filter((e) => e.category === category);
    setFilter(filterdata);
  }
  return (
    <div className={Style.contiener}>
      <input
        type="text"
        placeholder="Qidiruv..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={Style.search}
      />
      <div className={Style.Btns}>
        <button
          onClick={() => {
            filter("women's clothing");
          }}
        >
          Ayollar
        </button>
        <button
          onClick={() => {
            filter("men's clothing");
          }}
        >
          Erkaklar
        </button>
        <button
          onClick={() => {
            filter("electronics");
          }}
        >
          Elektron
        </button>
        <button
          onClick={() => {
            filter("jewelery");
          }}
        >
          Tilla-buyumlar
        </button>
        <button
          onClick={() => {
            setFilter(data);
          }}
        >
          Hammasi
        </button>
      </div>
      {filterproduct.map((product) => (
        <div className={Style.cards}>
          <div>
            <div key={product.id} className={Style.card}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GET;
