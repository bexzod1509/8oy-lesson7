import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "../../api/index";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useSearchParams } from "react-router-dom";
import Model from "../model/Model";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
function Product({ data }) {
  const [model, setModel] = useState(null);
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    let id = params.get("detail");
    if (id) {
      axios
        .get(`/products/${id}`)
        .then((res) => setModel(res.data.data))
        .catch((err) => console.log(err));
    } else {
      setModel(null);
    }
  }, [params]);
  let products = data?.map((el) => (
    <div key={el.id} className="d2">
      <img
        onClick={() => setParams({ detail: el.id })}
        className="img"
        src={el.urls[0]}
        alt=""
      />
      <p>Hot</p>
      <span>{el.description}</span>
      <NavLink to={`/product/${el.id}`}>
        <h1>{el.title}</h1>
      </NavLink>
      <h4>
        By <b>NestClose</b>
      </h4>
      <div className="d4">
        <div className="d5">
          <h2>${el.price}</h2>
          <del>${Math.round(+el.price + 5)}</del>
        </div>
        <button>
          <MdOutlineShoppingCart />
          <h4>Add</h4>
        </button>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="d">
          <h1>Popular Products</h1>
        </div>
        <div className="d1">{products}</div>
      </div>
      <Model model={model}>
        <div onClick={() => setParams({})} className="over"></div>
        <div className="m">
          <Swiper
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {model?.urls.length >= 2 ? (
              model?.urls.map((p, inx) => (
                <SwiperSlide key={inx}>
                  <img src={p} alt="" />
                </SwiperSlide>
              ))
            ) : (
              <div>
                <SwiperSlide>
                  <img src={model?.urls[0]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={model?.urls[0]} alt="" />
                </SwiperSlide>
              </div>
            )}
          </Swiper>
        </div>
      </Model>
    </>
  );
}

export default Product;
