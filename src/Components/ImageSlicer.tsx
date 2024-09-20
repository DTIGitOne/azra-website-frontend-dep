import Slider from "react-slick";
import Slider1 from "../Images/Slider1.PNG";
import Slider2 from "../Images/Slider2.PNG";
import Slider3 from "../Images/Slider3.PNG";
import Slider4 from "../Images/Slider4.PNG";

const ImageSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    autoplay: true,
    fade: true,
    arrows: false
  };
  return (
    <Slider {...settings}>
        <div className="imageSliderImage">
            <img className=" h-full w-full" src={Slider1} alt="" />
        </div>
        <div className="imageSliderImage">
            <img className=" h-full w-full" src={Slider2} alt="" />
        </div>
        <div className="imageSliderImage">
            <img className=" h-full w-full" src={Slider3} alt="" />
        </div>
        <div className="imageSliderImage">
            <img className=" h-full w-full" src={Slider4} alt="" />
        </div>
    </Slider>
  );
}

export default ImageSlider;