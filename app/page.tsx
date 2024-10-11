import Content from '@/components/organisms/content';
import Footer from '@/components/organisms/footer';
import Navbar from '@/components/organisms/navbar';
import Tooltip from '@/components/atoms/tooltip';
import CarouselInfo from '@/components/molecules/carousel-info';
import ProfileCard from '@/components/molecules/profile-cards';
import Currency from '@/public/body/currency.svg';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`}min-h-screen bg-[linear-gradient(151.17deg,#26C2B9_8.69%,#288BE7_126.06%)] ${poppins.className}`}>
      <Content className="text-white font-semibold h-full">
        <Navbar />
        <div className='md:flex w-full md:my-5'>
          <div className="md:w-[70%] py-10 md:py-15 space-y-5 font-bold">
            <div>
              <Tooltip textColor="#40E2E8" backgroundColor="white" arrowPosition="left" >
                풀타임, 파트타임
              </Tooltip>
            </div>
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
            <div className='hidden md:block'>
              <p className="text-[18px] underline">개발자가 필요하신가요?</p>
            </div>
            <div className="hidden md:flex md:space-x-20">
              <div className="border-t py-3">
                <p className="text-[18px] mb-3">평균 월 120만원</p>
                <p className="text-[16px]">임금을 해당 국가를 기준<br />으로 계산합니다.</p>
              </div>
              <div className="border-t py-3">
                <p className="text-[18px] mb-3">최대 3회 인력교체</p>
                <p className="text-[16px]">막상 채용해보니 맞지 않<br />아도 걱정하지 마세요.</p>
              </div>
              <div className="border-t py-3">
                <p className="text-[18px] mb-3">평균 3일, 최대 10일</p>
                <p className="text-[16px]">급하게 사람이 필요한 경<br />우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-center'>
              <Tooltip textColor="#00C696" backgroundColor="#E9F7EF" arrowPosition="center" >
                <div className='flex space-x-2'>
                  <Currency />
                  <p>
                    월 100만원
                  </p>
                </div>
              </Tooltip>
            </div>
            <div>
              <div className='flex py-5 md:py-10 justify-center'>
                <ProfileCard
                  name="Abhishek Gupta"
                  designation="마케팅"
                  experience="2y+"
                  imageSrc="/profile-card/avatar.png"
                  flagSrc="/profile-card/flag.png"
                  skills={["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]}
                />
              </div>

            </div>
          </div>
        </div >
        <div className="hidden md:block py-10">
          <CarouselInfo />
        </div>
      </Content >
      <Footer />
    </div >
  );
}