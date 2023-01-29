import { Link, useLocation } from "react-router-dom";
import "./order.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Order() {
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  
  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderId)
  );
  
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === order.productId)
  );

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Order</h1>
       </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Order id: </span>
              <span className="productInfoValue">{ order._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Product id: </span>
              <span className="productInfoValue">{ product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock.toString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Ordered Product Name</label>
            <input type="text" value={product.title} disabled/>
            <label>Product Description</label>
            <input type="text" value={product.desc} disabled/>
            <label>Price</label>
            <input type="text" value={product.price} disabled/>
            <label>Order Status</label>
            <select name="inStock" id="idStock">
              <option value="true">Dispached</option>
              <option value="false">Completed</option>
            </select>
          </div>
          <div className="orderFormCenter">
          <label>Address</label>
            <input type="text" value={order.address.line1} disabled/>
            {/* <input type="text" value={order.address.line2} disabled/> */}
            <input type="text" value={order.address.city} disabled/>
            <input type="text" value={order.address.postal_code} disabled/>
            <input type="text" value={order.address.country} disabled/>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              </div>
            <button className="productButton">Update Order Status</button>
          </div>
        </form>
      </div>
    </div>
  );
}
