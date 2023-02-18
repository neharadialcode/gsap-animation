import React from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";
import About from "./About";
import Marketing from "./Marketing";
import Footer from "./Footer";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    // WITHOUT TIMELINE EAAMPLE
    // gsap.to(".text_1", {
    //   xPercent: -100,
    //   duration: 1,
    // });
    // gsap.to(".text_2", {
    //   xPercent: 50,
    //   duration: 1,
    // });
    // gsap.fromTo(
    //   ".text_3",
    //   {
    //     xPercent: -100,
    //     duration: 1,
    //   },
    //   {
    //     xPercent: 50,
    //     duration: 5,
    //   }
    // );

    // WITH TIMELINE EAAMPLE
    let value1 = gsap.timeline();
    value1
      .to(".text_1", {
        xPercent: -100,
        duration: 1,
      })
      .to(".text_2", {
        xPercent: 50,
        duration: 1,
      })
      .fromTo(
        ".text_3",
        {
          xPercent: -100,
          duration: 1,
        },
        {
          xPercent: 50,
          duration: 1,
        }
      );

    // SCROLLTRIGGER USE WITH SOME PROPERTIES
    let value2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".div_parent",
        start: "top 70%",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });
    value2
      .to(".div_1", {
        background: "yellow",
      })
      .fromTo(
        ".div_2",
        {
          scale: 0,
        },
        {
          scale: 1,
        }
      )
      .to(
        ".div_3",

        { borderRadius: "50%" }
      )
      .fromTo(
        ".div_4",
        { rotate: 0, left: 0, duration: 2 },
        { rotate: 360, left: "80%" }
      );
    let value3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider_value2",
        start: "top top",
        end: "+=200%",
        scrub: 1,
        markers: true,
        pin: true,
        // pinSpacer: true,
      },
    });
    value3
      .fromTo(
        ".img1",
        { autoAlpha: 0, background: "red", width: 500, height: 500 },
        { autoAlpha: 1, width: 500, height: 500, background: "red" }
      )
      .fromTo(
        ".img2",
        {
          autoAlpha: 0,
          background: "green",
          width: 500,
          height: 500,
          position: "relative",
          zIndex: 0,
        },
        { rotate: -180, width: 500, height: 500, zIndex: 5 }
      )
      .fromTo(
        ".img3",
        {
          autoAlpha: 0,
          background: "blue",
          width: 500,
          height: 500,
          position: "relative",
          zIndex: 1,
        },
        { rotate: -180, width: 500, height: 500 }
      );
    let value33 = gsap.timeline({
      scrollTrigger: {
        trigger: ".line_value",
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
        markers: true,
        // pin: true,
        // pinSpacer: true,
      },
    });
    value33.fromTo(".line2", { height: 0 }, { height: "100%" });

    // DOTS TOADMAP
    let ROADMAP1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".row1",
        start: "top 50%",
        end: "bottom top",
        // scrub: 1,
        markers: true,
      },
    });
    ROADMAP1.fromTo(
      ".circle1",
      { background: "transparent" },
      { background: "blue" }
    )
      .fromTo(".line_one", { height: 0 }, { height: "100%" }, "-=.5")
      .fromTo(".circle3", { background: "transparent" }, { background: "blue" })
      .fromTo(".line_two", { height: 0 }, { height: "100%" })
      .fromTo(".circle5", { background: "transparent" }, { background: "blue" })
      .fromTo(".line_three", { height: 0 }, { height: "100%" })
      .fromTo(
        ".circle6",
        { background: "transparent" },
        { background: "blue" }
      );
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      {/* <div className="bg-danger vh-100"></div> */}
      <div>
        <h2 className="text_1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eligendi
          porro sit vel quo fugiat, temporibus fugit dolorem sequi! Corporis
          quisquam repellat quod optio, harum porro odio veritatis ipsa est?
        </h2>
        <h2 className="text_2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eligendi
          porro sit vel quo fugiat, temporibus fugit dolorem sequi! Corporis
          quisquam repellat quod optio, harum porro odio veritatis ipsa est?
        </h2>
        <h2 className="text_3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eligendi
          porro sit vel quo fugiat, temporibus fugit dolorem sequi! Corporis
          quisquam repellat quod optio, harum porro odio veritatis ipsa est?
        </h2>
        <h2 className="text_4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eligendi
          porro sit vel quo fugiat, temporibus fugit dolorem sequi! Corporis
          quisquam repellat quod optio, harum porro odio veritatis ipsa est?
        </h2>
      </div>
      <div className="bg-warning vh-100"></div>
      <div className="position_relative">
        <div className="div_parent d-flex py-5 justify-content-between">
          <div className="box bg_danger div_1"></div>
          <div className="box bg-dark div_2"></div>
          <div className="box bg-primary div_3"></div>
          {/* <div className="box position_absolute bg-success div_4"></div> */}
        </div>
      </div>
      <div className="bg-success vh-100"></div>
      <div className="">
        <div className="row">
          <div className="col-6 ">
            <div className="slider_value2">
              <div className="img1"></div>
              <div className="img2"></div>
              <div className="img3"></div>
            </div>
          </div>
          <div className="col-6 ">
            <About />
            <Marketing />
            <Footer />
          </div>
        </div>
      </div>
      <div className="bg-primary vh-100"></div>
      <div className="position_relative line_value">
        <div className="row mx-0 py-5">
          <div className="col-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            suscipit placeat ab accusamus eligendi, maiores cumque mollitia sed,
            impedit, fuga incidunt officia laboriosam voluptates non minima est
            omnis architecto! Amet! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores suscipit placeat ab accusamus eligendi,
            maiores cumque mollitia sed, impedit, fuga incidunt officia
            laboriosam voluptates non minima est omnis architecto! Amet!
          </div>
          <div className="col-2"></div>
          <div className="col-5"></div>
        </div>
        <div className="row mx-0 py-5">
          <div className="col-5"></div>
          <div className="col-2"></div>
          <div className="col-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            suscipit placeat ab accusamus eligendi, maiores cumque mollitia sed,
            impedit, fuga incidunt officia laboriosam voluptates non minima est
            omnis architecto! Amet! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores suscipit placeat ab accusamus eligendi,
            maiores cumque mollitia sed, impedit, fuga incidunt officia
            laboriosam voluptates non minima est omnis architecto! Amet!
          </div>
        </div>
        <div className="row mx-0 py-5">
          <div className="col-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            suscipit placeat ab accusamus eligendi, maiores cumque mollitia sed,
            impedit, fuga incidunt officia laboriosam voluptates non minima est
            omnis architecto! Amet! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores suscipit placeat ab accusamus eligendi,
            maiores cumque mollitia sed, impedit, fuga incidunt officia
            laboriosam voluptates non minima est omnis architecto! Amet!
          </div>
          <div className="col-2"></div>
          <div className="col-5"></div>
        </div>
        <div className="line"></div>
        <div className="line2"></div>
      </div>
      <div className="bg-dark vh-100"></div>
      <div className="bg-white py-5">
        <div className="row mx-0 position_relative row1">
          <div className="col-5 py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            suscipit placeat ab accusamus eligendi, maiores cumque mollitia sed,
            impedit, fuga incidunt officia laboriosam voluptates non minima est
            omnis architecto! Amet! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores suscipit placeat ab accusamus eligendi,
            maiores cumque mollitia sed, impedit, fuga incidunt officia
            laboriosam voluptates non minima est omnis architecto! Amet!
          </div>
          <div className="col-2">
            <div className="line_one mx-auto  position_relative">
              <div className="circle1"></div>
              {/* <div className="circle2"></div> */}
            </div>
          </div>
          <div className="col-5 py-5"></div>
        </div>
        <div className="row mx-0 position_relative row2">
          <div className="col-5 py-5"></div>
          <div className="col-2">
            <div className="line_two mx-auto position_relative">
              <div className="circle3"></div>
              {/* <div className="circle4"></div> */}
            </div>
          </div>
          <div className="col-5 py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            suscipit placeat ab accusamus eligendi, maiores cumque mollitia sed,
            impedit, fuga incidunt officia laboriosam voluptates non minima est
            omnis architecto! Amet! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores suscipit placeat ab accusamus eligendi,
            maiores cumque mollitia sed, impedit, fuga incidunt officia
            laboriosam voluptates non minima est omnis architecto! Amet!
          </div>
        </div>
        <div className="row mx-0 position_relative row3">
          <div className="col-5 py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            suscipit placeat ab accusamus eligendi, maiores cumque mollitia sed,
            impedit, fuga incidunt officia laboriosam voluptates non minima est
            omnis architecto! Amet! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores suscipit placeat ab accusamus eligendi,
            maiores cumque mollitia sed, impedit, fuga incidunt officia
            laboriosam voluptates non minima est omnis architecto! Amet!
          </div>
          <div className="col-2">
            <div className="line_three mx-auto position_relative">
              <div className="circle5"></div>
            </div>
          </div>
          <div className="col-5 py-5"></div>
          <div>
            <div className="circle6"></div>
          </div>
        </div>
      </div>
      <div className="bg-danger vh-100"></div>
    </div>
  );
};

export default Hero;
