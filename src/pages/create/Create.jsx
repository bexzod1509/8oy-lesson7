import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/productApi";
import Localimages from "./Localimages";
const initial = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

function Create() {
  const [files, setFiles] = useState("");
  const { formData, handleChange, setFormData } = useGetInputValue(initial);
  const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();
  let user = JSON.parse(localStorage.getItem("user"));
  if (user?.role === "user") {
    return <></>;
  }
  const handleCreateProduct = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify({}));
    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    createProduct(form);
  };
  return (
    <div>
      <div className="f3">
        <form onSubmit={handleCreateProduct} className="form" action="">
          <p>Title</p>
          <input
            value={formData.title}
            onChange={handleChange}
            required
            type="text"
            name="title"
            id=""
            placeholder="Apple"
          />
          <p>Price</p>
          <input
            onChange={handleChange}
            value={formData.price}
            required
            type="number"
            name="price"
            id=""
            placeholder="15"
          />
          <p>Old Price</p>
          <input
            onChange={handleChange}
            value={formData.oldPrice}
            required
            type="number"
            name="oldPrice"
            id=""
            placeholder="17"
          />
          <p>Category</p>
          <input
            onChange={handleChange}
            value={formData.category}
            required
            type="text"
            name="category"
            id=""
            placeholder="Fruits"
          />
          <p>Units</p>
          <input
            onChange={handleChange}
            value={formData.units}
            required
            type="text"
            name="units"
            id=""
            placeholder="...kg"
          />
          <p>Description</p>
          <input
            onChange={handleChange}
            value={formData.description}
            required
            type="text"
            name="description"
            id=""
            placeholder="Your description"
          />
          <p>Info</p>
          <input
            onChange={handleChange}
            value={formData.info}
            required
            type="text"
            name="info"
            id=""
            placeholder="Info"
          />
          <p>Image</p>
          <div>
            <input
              onChange={(e) => setFiles(e.target.files)}
              required
              type="file"
              multiple
              accept="image/*"
              name="urls"
              id=""
              placeholder="Your images"
            />
            <Localimages files={files} setFiles={setFiles} />
          </div>
          <div className="f4">
            <button disabled={isLoading}>CREATE</button>
            <NavLink to={"/"}>
              <button>Go Back</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
