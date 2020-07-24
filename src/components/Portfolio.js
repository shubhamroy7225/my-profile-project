import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                         {/* <img src={`${item.imgurl}`} className="item-img"/>  */}
                         <Carousel>
			<div>
				<img src="https://master.d2sco1xx3h73m3.amplifyapp.com/boards" alt="Hong Kong" />
				<p className="legend">Hong Kong</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
				<p className="legend"></p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
				<p className="legend">Japan</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
				<p className="legend">Las Vegas</p>
			</div>
		</Carousel>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// let styles = {
//     margin: 'auto',
//     width: '300px'
//   };
  
// function Porfolio() {
//   return (
// 	<div style={styles}>
// 		<Carousel>
// 			<div>
// 				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
// 				<p className="legend">Hong Kong</p>
// 			</div>
// 			<div>
// 				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
// 				<p className="legend"></p>
// 			</div>
// 			<div>
// 				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
// 				<p className="legend">Japan</p>
// 			</div>
// 			<div>
// 				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
// 				<p className="legend">Las Vegas</p>
// 			</div>
// 		</Carousel>
// 	</div>
//   );
// }

// export default Porfolio;