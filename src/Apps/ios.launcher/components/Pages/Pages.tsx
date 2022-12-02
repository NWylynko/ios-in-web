import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type PagesProps = {
  children: JSX.Element[]
}

export const Pages = ({ children }: PagesProps) => {
  return (
    <Carousel
      dynamicHeight={false}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={false}
      autoPlay={false}
      showStatus={false}
      showIndicators={true}
      useKeyboardArrows={true}
      swipeable={true}
      emulateTouch={true}
      autoFocus={false}
    >
      {children}
    </Carousel>
  )
}