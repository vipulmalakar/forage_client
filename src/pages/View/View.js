import  style from "./View.module.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
const View = () =>{
    return (
    <div className={style.viewcontainer}>
    <div>
      
    </div>
    <div className={style.imgcontainer}>
    <MDBContainer style={{width:800}}>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).webp"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).webp"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).webp"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
    <div className={style.infocontainer}>
    <div className={style.side} >
      <div className={style.ls}>
        <p>Phone No : 786941241</p>
      </div>
      <div className={style.rs}>
        <p>Date : 12/02/2002</p>
      </div>
    </div>
    <div>
        <div>
          Email: karunmourya4@gmail.com
        </div>
        <div >
          Address : 213fbnb/ sdjfvedihvcckjbc
        </div>
    </div>
    <div className="d-flex flex-column">
      <div className="p-2">
        <h4>Quantiy (approx)</h4>
        <div className="d-flex flex-row">
          <div className="p-2">
            3
          </div>
          <div className="p-2">
            Kg
          </div>
        </div>
      </div>
      <div className="p-2" >
        <h4>Description</h4>
        <p>gjsdytxkx7otsd75dcgdizxyrchcgkhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
      </div>
    </div>
    </div>
    </div>
    )
}
export default View;