import "../../styles/Cartpreview.css";
import CartItem from "./CartItem";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

function CartPreview({ items }) {
  const [active, setActive] = useState(true);

  /*useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".cart-preview")) {
        closeBag();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });*/


  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".cart-preview") &&
          !event.target.closest(".nav-bag-wrapper") ||
          event.target === document.querySelector(".review-bag-button")) {
         // Click is outside the component
        closeBag();
        console.log("Clicked outside the cart preview");
      }
    }

    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeBag = (event) => {
    event?.preventDefault();
    if (document.querySelector(".cart-preview").classList.contains("active")) {
      const bagPreview = document.querySelector(".cart-preview");
      bagPreview.classList.remove("active");
      setActive(false);
    }
  }

  const renderItems = () => {
      return items.map(item => (
        <CartItem key={uniqid()} name={item.name} image={item.smallImage}/>
      ));
  }

  const setBagText = () => {
    if (items.length < 1) {
      return(
        <div className="bag">
          <h1>Your Bag is empty.</h1>
          <p><a>Sign in</a> to see if you have any saved items</p>
        </div>
      )
    } else {
      return(
        <div className="bag">
          <div className="bag-header">
            <h1>Bag</h1>
            <Link to="/bag"><button className="review-bag-button">Review Bag</button></Link>
          </div>
          <div className="bag-items">
            {renderItems()}
          </div>
        </div>
      )
    }


  }

  return (
    <div className="cart-preview">
        {setBagText()}
        <div className="profile">
          <p>My Profile</p>
          <ul>
            <li>
              <svg id="Outlined" xmlns="http://www.w3.org/2000/svg" className="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="shippingbox_compact"><rect id="box_" width="16" height="25" fill="none"></rect><path id="art_" d="M14.5146,9.5234a2.56,2.56,0,0,0-1.11-1.4228l-4.25-2.3975a2.3909,2.3909,0,0,0-2.31,0l-4.25,2.3975a2.2971,2.2971,0,0,0-.6025.5107A2.2684,2.2684,0,0,0,1.4,10.1475v4.705a2.3546,2.3546,0,0,0,1.1953,2.0469l4.25,2.3975a2.3541,2.3541,0,0,0,2.31,0l4.25-2.3975A2.3546,2.3546,0,0,0,14.6,14.8525v-4.705A2.3322,2.3322,0,0,0,14.5146,9.5234ZM7.4,12.9453v5.2871L3.1851,15.8545a1.153,1.153,0,0,1-.585-1.002L2.603,10.24Zm.6-1.04L3.147,9.17a.4347.4347,0,0,1,.0385-.0244l1.7623-.9941,4.895,2.7158Zm5.4-1.666v4.6132a1.153,1.153,0,0,1-.585,1.002L8.6,18.2324V12.9453ZM8.5649,6.748l4.25,2.3975a.4347.4347,0,0,1,.0385.0244l-1.7842,1.0059L6.1733,7.46l1.2618-.712A1.1731,1.1731,0,0,1,8.5649,6.748Z" fill="6E6E73"></path></g></svg>
              Orders
            </li>
            <li>
              <svg id="Outlined" xmlns="http://www.w3.org/2000/svg" className="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="bookmark_compact"><rect id="box_" width="16" height="25" fill="none"></rect><path id="art_" d="M10.3,5.15H5.7a2.3022,2.3022,0,0,0-2.3,2.3V19.0381a.8642.8642,0,0,0,.19.5869.67.67,0,0,0,.5313.2246.7441.7441,0,0,0,.438-.1465,4.8685,4.8685,0,0,0,.5366-.4765l2.8931-2.8858,2.9165,2.8867a6.4062,6.4062,0,0,0,.5307.4717.7286.7286,0,0,0,.4429.15.6684.6684,0,0,0,.5308-.2246.8619.8619,0,0,0,.19-.5869V7.45A2.3022,2.3022,0,0,0,10.3,5.15ZM4.6,7.45A1.102,1.102,0,0,1,5.7,6.35h4.6A1.102,1.102,0,0,1,11.4,7.45l-.0005,10.5781L8.832,15.4863a1.186,1.186,0,0,0-1.665.001L4.6,18.0293Z" fill="6E6E73"></path></g></svg>
              Your Saves
            </li>
            <li>
              <svg id="Outlined" xmlns="http://www.w3.org/2000/svg" className="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="gear_compact"><rect id="box_" width="16" height="25" fill="none"></rect><path id="art_" d="M15.6094,12.3252a.5142.5142,0,0,0-.2959-.2959l-.5972-.2324a6.6665,6.6665,0,0,0-.16-.917l.4809-.42a.5172.5172,0,0,0-.3291-.9073l-.6372-.0136c-.0654-.1377-.1343-.2784-.2139-.4151s-.1635-.2636-.2519-.3935l.3076-.5576a.517.517,0,0,0-.62-.7393l-.6035.2051a6.68,6.68,0,0,0-.7134-.5977l.0986-.6328a.5172.5172,0,0,0-.43-.5918.54.54,0,0,0-.4052.1084l-.5015.4033A6.911,6.911,0,0,0,9.87,6.01l-.124-.6328a.5178.5178,0,0,0-.9512-.167l-.333.5507a7.2576,7.2576,0,0,0-.92.0039L7.2056,5.207a.518.518,0,0,0-.9512.167l-.125.6377a6.6192,6.6192,0,0,0-.8652.31l-.501-.4063a.5176.5176,0,0,0-.8364.4834l.0991.6358a6.6073,6.6073,0,0,0-.7017.5947L2.71,7.417a.5173.5173,0,0,0-.6211.7392l.3134.5694a6.7192,6.7192,0,0,0-.4653.7959l-.6421.0117a.516.516,0,0,0-.5083.5264.52.52,0,0,0,.1763.38l.4849.4238a6.8261,6.8261,0,0,0-.16.9111l-.6006.23a.5176.5176,0,0,0-.001.9658l.5972.2324a6.6665,6.6665,0,0,0,.16.917l-.4809.419a.5184.5184,0,0,0-.05.7314.52.52,0,0,0,.3789.1758l.6367.0137c.063.1318.1333.2754.2144.416.0673.1172.143.2246.2163.3281l.04.0566-.312.5664a.5176.5176,0,0,0,.2036.7032.52.52,0,0,0,.416.0361l.5967-.2031a6.82,6.82,0,0,0,.7207.5937l-.0991.6348a.5153.5153,0,0,0,.0933.3857.5187.5187,0,0,0,.7421.0977l.5064-.4082a6.6137,6.6137,0,0,0,.8628.3193l.1245.6358a.5139.5139,0,0,0,.22.33.53.53,0,0,0,.3877.0782.5193.5193,0,0,0,.3433-.24l.3388-.56.0577.0049a4.8076,4.8076,0,0,0,.7871.0019l.0669-.0058.3383.5625a.518.518,0,0,0,.9512-.167l.1245-.6348a6.6152,6.6152,0,0,0,.8589-.3193l.5088.4131a.5176.5176,0,0,0,.8364-.4834l-.0991-.6358a6.6173,6.6173,0,0,0,.7017-.5947l.6142.2119a.5174.5174,0,0,0,.6211-.7392l-.3135-.5694a6.6548,6.6548,0,0,0,.4649-.7959l.6421-.0117a.5168.5168,0,0,0,.5088-.5264.5166.5166,0,0,0-.1768-.38l-.4849-.4238a6.6694,6.6694,0,0,0,.16-.9111l.6006-.2315a.5177.5177,0,0,0,.2969-.6689ZM6.4941,13.9043,4.7666,16.8926a5.4449,5.4449,0,0,1,.0044-8.792L6.5,11.0986A2.0525,2.0525,0,0,0,6.4941,13.9043Zm2.1646-1.7822a.7608.7608,0,1,1-.4609-.3555A.7543.7543,0,0,1,8.6587,12.1221ZM7.54,10.499,5.8154,7.5068A5.4579,5.4579,0,0,1,7.9907,7.041h.0239a5.4693,5.4693,0,0,1,5.4068,4.8633l-3.457-.0029a2.0363,2.0363,0,0,0-.18-.43A2.0586,2.0586,0,0,0,7.54,10.499Zm-.0058,4.0049a2.0556,2.0556,0,0,0,2.435-1.4023l3.4512.0029a5.4455,5.4455,0,0,1-7.6147,4.3877Z" fill="6E6E73"></path></g></svg>
              Account
            </li>
            <li>
            <svg id="Outlined" xmlns="http://www.w3.org/2000/svg" className="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="person.crop.circle_compact"><rect id="box_" width="16" height="25" fill="none"></rect><path id="art_" d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z" fill="6E6E73"></path></g></svg>
              Sign in
            </li>
          </ul>
        </div>
    </div>
  )
}

export default CartPreview;
