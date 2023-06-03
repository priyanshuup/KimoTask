import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
const Highlights = () => {
  let [datas, setdata] = useState([]);

  let [hovered, setHovered] = useState("");

  /* Making API request */
  useEffect(function () {
    (() => {
      axios
        .get(
          "https://web-dev.dev.kimo.ai/v1/highlights"
        )
        .then((res) => {
          setdata(res.data);
        });
      console.log(datas);
    })();
  });

  return (
    <div className="highlightssection">
      <div className="highlightcontents">
        <h3>Highlights</h3>
        <div className="highlighsectionitems">
          {datas.length === 0 ? (
            <Oval
              height="80"
              width="80"
              radius="9"
              color="gray"
              secondaryColor="gray"
              ariaLabel="loading"
            />
          ) : (
            datas.map((movie) => {
              return (
                <div className="innerdivs">
                  <div
                    className="image"
                    style={{
                      backgroundImage:`url(${movie.image})`
                    }}
                  ></div>
                  <div className="indiv">
                    <h3>{movie.title}</h3>
                    <h4>{movie.description}</h4>
                  </div>
                  <div className="btndiv">
                    <button><i class="ri-arrow-right-line"></i></button>
                  </div>
                </div>
              );
            })
          )}

          {/* <div className="innerdivs">
            <div className="image"></div>
            <div className="indiv">
              <h3>Hula</h3>
              <h4>Try it yourself.</h4>
            </div>
            <div className="btndiv">
              <button>→</button>
            </div>
          </div>
          <div className="innerdivs">
            <div className="image"></div>
            <div className="indiv">
              <h3>Vulcanoes</h3>
              <h4>Volcanic conditions can change at any time</h4>
            </div>
            <div className="btndiv">
              <button>→</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
