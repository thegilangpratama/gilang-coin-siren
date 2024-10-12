import Content from '@/components/organisms/content';
import Footer from '@/components/organisms/footer';
import Navbar from '@/components/organisms/navbar';
import Tooltip from '@/components/atoms/tooltip';
import CarouselInfo from '@/components/molecules/carousel-info';
import Currency from '@/public/body/currency.svg';
import { Poppins } from 'next/font/google';
import ProfileCardsStack from '@/components/organisms/profile-stacked';
import CheckboxItem from '@/components/atoms/checkbox';

// Define the type for the data you are fetching
interface Post {
  id: number;
  title: string;
  body: string;
}

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

// Fetch data server-side
const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default async function Home() {
  const randomData: Post[] = await fetchPosts();

  // server side logging to check fetched data from api
  console.log(randomData)

  return (
    <div className={`min-h-screen bg-[linear-gradient(151.17deg,#26C2B9_8.69%,#288BE7_126.06%)] ${poppins.className}`}>
      <Content className="text-white font-semibold h-full">
        <Navbar />
        <div className='md:flex w-full md:my-5'>
          <div className="md:w-[70%] py-10 md:py-15 space-y-5 font-bold">
            <div className="animate-fade">
              <Tooltip textColor="#40E2E8" backgroundColor="white" arrowPosition="left">
                풀타임, 파트타임
              </Tooltip>
            </div>
            <div className="animate-fadeInUp">
              <p className="text-[36px] md:text-[48px]">
                최고의 실력을 가진 <br />
                외국인 인재를 찾고 계신가요?
              </p>
            </div>
            <div className="animate-fadeInUp">
              <p className="text-[18px] md:text-[24px]">
                법률 및 인사관리 부담없이 <br />
                1주일 이내에 원격으로 채용해보세요.
              </p>
            </div>
            <div className='animate-fadeInUp hidden md:block'>
              <p className="text-[18px] underline">개발자가 필요하신가요?</p>
            </div>
            <div className="hidden md:flex md:space-x-20 animate-fade">
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
            <div className='flex justify-center animate-fade'>
              <Tooltip textColor="#00C696" backgroundColor="#E9F7EF" arrowPosition="center">
                <div className='flex space-x-2'>
                  <Currency />
                  <p>월 100만원</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <div className='flex md:py-10 justify-left'>
                <ProfileCardsStack />
              </div>
            </div>
            <div className='md:hidden'>
              <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                <CheckboxItem label="한국어 능력" />
                <CheckboxItem label="업무 수행 능력" />
                <CheckboxItem label="검업 여부" />
                <CheckboxItem label="평판 조회" />
              </div>
              <div className="my-5">
                <p className="text-[#FEF68A] text-[18px] underline font-bold">
                  개발자가 필요하신가요?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block py-10 animate-fade">
          <CarouselInfo />
        </div>
      </Content>
      <Footer />
    </div>
  );
}