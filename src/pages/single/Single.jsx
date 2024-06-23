import React from "react";
import "./Single.css";
import { useParams } from "react-router-dom";
import { useGetDeteilProductQuery } from "../../context/productApi";
function Single() {
  let { id } = useParams();
  let { data, isLoading, error, isError } = useGetDeteilProductQuery(id);
  let products = data?.data;
  return (
    <div className="container">
      <div className="products">
        <div key={products?.id} className="p">
          <img
            className="p-image"
            src="https://www.drtc.org/wp-content/plugins/fancy-product-designer/assets/img/product-templates/hoodie_duocolor_front.png"
            alt=""
          />
          <div className="p1">
            <div className="p2">
              <div className="p2">
                <h1>{products?.price}$</h1>
                <p>{products?.category}</p>
              </div>
              <p>Posted on 27th January 2021</p>
            </div>
            <h1>{products?.title}</h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
            <h1>{products?.description}</h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
