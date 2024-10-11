import Content from "@/components/molecules/content/page";
import Footer from "@/components/molecules/footer/page";
import Navbar from "@/components/molecules/navbar/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/atoms/carousel"

import Box from "@/public/body/box.svg";
import Marketing from "@/public/body/marketing.svg";
import Phone from "@/public/body/phone.svg";
import Picture from "@/public/body/picture.svg";
import Target from "@/public/body/target.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(151.17deg,#26C2B9_8.69%,#288BE7_126.06%)] ">
      <Content className="text-white font-semibold h-full">
        <Navbar />
        <div>
          <div className="py-10 md:py-15 space-y-10 font-bold">
            <div>
              <p className="text-[36px] md:text-[48px]">
                최고의 실력을 가진 <br />
                외국인 인재를 찾고 계신가요?
              </p>
            </div>
            <div>
              <p className="text-[18px] md:text-[24px]">
                법률 및 인사관리 부담없이 <br />
                1주일 이내에 원격으로 채용해보세요.
              </p>
            </div>
            <div>
              <p className="text-[18px] underline">
                개발자가 필요하신가요?
              </p>
            </div>
            <div className="hidden md:flex md:space-x-20">
              <div className="border-t py-3">
                <p className="text-[18px] mb-3">평균 월 120만원</p>
                <p className="text-[16px]">임금을 해당 국가를 기준<br />으로 계산합니다.</p>
              </div>
              <div className="border-t py-3">
                <p className="text-[18px] mb-3">최대 3회 인력교체</p>
                <p className="text-[16px]">막상 채용해보니 맞지 않<br />아도 걱정하지 마세요. </p>
              </div>
              <div className="border-t py-3">
                <p className="text-[18px] mb-3">평균 3일, 최대 10일</p>
                <p className="text-[16px]">급하게 사람이 필요한 경<br />우에도 빠른 채용이 가능<br />합니다.</p>
              </div>
            </div>
            <div className="hidden md:block">
              <CarouselInfo />
            </div>
          </div>
        </div>
      </Content >
      <Footer />
    </div >
  );
}

const CarouselInfo = () => {
  const cardData = [
    { icon: Marketing, text: '해외 마케팅' },
    { icon: Picture, text: '퍼블리셔' },
    { icon: Box, text: '캐드원(제도사)' },
    { icon: Target, text: '해외 세일즈' },
    { icon: Phone, text: '해외 CS' },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {cardData.map((card, idx) => (
          <CarouselItem key={idx} className="md:basis-1/4 lg:basis-1/4">
            <div className='flex space-x-3 rounded-xl space-y-3 px-5 py-3 items-center content-start w-[250px]' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <div className='rounded-xl w-10 h-10 flex justify-center items-center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                <card.icon />
              </div>
              <div className="flex content-center">
                <p className="text-[24px]">{card.text}</p>
              </div>
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
