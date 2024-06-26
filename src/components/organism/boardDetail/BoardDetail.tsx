import "react-responsive-carousel/lib/styles/carousel.min.css";
import BoardDetailInfoWithText from "@/components/molecules/BoardDetailInfoWithText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BoardDetailProps } from "@/interface/BoardDetailProps";

export default function BoardDetail({
  auctionStartTime,
  category,
  cast,
  versifier,
  unit,
  boardTitle,
  eventStartTime,
  place,
  boardContent,
  imageData = [],
  state,
}: BoardDetailProps) {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: imageData.length }).map((_, index) => (
            <CarouselItem key={index}>
              <img
                src={imageData[index].url}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <BoardDetailInfoWithText
        auctionStartTime={auctionStartTime}
        category={category}
        cast={cast}
        versifier={versifier}
        unit={unit}
        boardTitle={boardTitle}
        boardContent={boardContent}
        eventStartTime={eventStartTime}
        place={place}
        state={state}
      />
    </>
  );
}
