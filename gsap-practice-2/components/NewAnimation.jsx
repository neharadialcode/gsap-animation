import React, { useLayoutEffect } from "react";
import About from "./About";
import Footer from "./Footer";
import Marketing from "./Marketing";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const NewAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".target",
        start: "top top",
        end: "+=500%",
        pin: true,
      },
    });
    tl.set(".team-img", {
      autoAlpha: 1,
    });

    let second = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_1",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    second

      .fromTo(
        ".img_one",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".team-img",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let third = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    third

      .fromTo(
        ".img_two",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_one",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let four = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_3",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    four

      .fromTo(
        ".img_three",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_two",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let five = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_4",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    five

      .fromTo(
        ".img_four",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_three",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let six = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_5",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    six

      .fromTo(
        ".img_five",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_four",
        {
          opacity: 0,
        },
        "-=.5"
      );
  }, []);
  return (
    <div>
      <div className="overflow-hidden target-main" id="team">
        <div className="position-relative mt-5 pt-4 pt-xl-0">
          <div className="container container-modified">
            <div className="row justify-content-center justify-content-xl-between section_1 mb-5 mb-xl-0">
              <div className="col-sm-10 col-lg-9 col-xl-6 mt-5 mt-xl-0 order-2 order-xl-0">
                <About />
              </div>

              <div className="col-xl-6 d-none d-xl-flex flex-column justify-content-center target py-4 text-center">
                <div className="image_conatiner d-flex flex-column justify-content-center w-100 mx-auto overflow-hidden position-relative">
                  <div className="team-img">
                    <Image
                      width={600}
                      height={420}
                      src="/Image-7.png"
                      alt="one"
                    />
                  </div>

                  <div className="w-100 p-4 position_absolute img_one">
                    <Image
                      width={600}
                      height={420}
                      src="/Image-1.png"
                      alt="one"
                    />
                  </div>

                  <div className="w-100 p-4 position_absolute img_two">
                    <Image
                      width={600}
                      height={420}
                      src="/Image-2.png"
                      alt="one"
                    />
                  </div>

                  <div className="w-100 p-4 position_absolute img_three ">
                    <Image
                      width={600}
                      height={420}
                      src="/Image-3.png"
                      alt="one"
                    />
                  </div>

                  <div className="w-100  p-4 position_absolute img_four">
                    <Image
                      width={600}
                      height={420}
                      src="/Image-4.png"
                      alt="one"
                    />
                  </div>

                  <div className="w-100 p-4 position_absolute img_five">
                    <Image
                      width={600}
                      height={420}
                      src="/Image-5.png"
                      alt="one"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center justify-content-xl-between section_2 mb-5 mb-xl-0">
              <div className="col-sm-10 col-lg-9 col-xl-6 mt-5 mt-xl-0 order-2 order-xl-0">
                <Marketing />
              </div>
            </div>
            <div className="row justify-content-center justify-content-xl-between section_3 mb-5 mb-xl-0">
              <div className="col-sm-10 col-lg-9 col-xl-5 mt-5 mt-xl-0 order-2 order-xl-0">
                <Footer />
              </div>
            </div>
            <div className="row justify-content-center justify-content-xl-between section_4 mb-5 mb-xl-0">
              <div className="col-sm-10 col-lg-9 col-xl-6 mt-5 mt-xl-0 order-2 order-xl-0">
                <About />
              </div>
            </div>
            <div className="row justify-content-center justify-content-xl-between section_5 mb-5 mb-xl-0">
              <div className="col-sm-10 col-lg-9 col-xl-5 mt-5 mt-xl-0 order-2 order-xl-0">
                <Marketing />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnimation;
