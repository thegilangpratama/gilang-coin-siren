'use client';
import React from 'react';
import Image from 'next/image';

// Footer Icons
import Avatar from "@/public/footer/avatar.svg";
import Code from "@/public/footer/code.svg";
import Gear from "@/public/footer/gear.svg";
import Korean from "@/public/footer/korean.svg";
import Arrow from "@/public/footer/arrow.svg";

import { Poppins } from '@next/font/google';

const poppins = Poppins({
    weight: ['400', '600', '700'],  // Define which font weights you want to use
    subsets: ['latin'], // You can specify other subsets if needed
});

const Footer: React.FC = () => {
    return (
        <div className={`w-full bg-[#fbfbfb] content-center justify-center ${poppins.className}`}>
            <div className='md:mx-32 my-10 pb-5 pt-2 text-[#343741] text-sm'>
                <div className='flex space-x-20 my-10'>
                    <div className='space-y-5'>
                        <Image
                            src="/logo-colored.svg"
                            alt="Hyperhire Logo"
                            width={150}
                            height={40}
                            className="object-contain"
                        />
                        <div className='font-bold space-y-3'>
                            <p>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
                            <p>010-0000-0000</p>
                            <p>aaaaa@naver.com</p>
                        </div>
                    </div>
                    <div className='flex space-x-3'>
                        {/* Card 1 */}
                        <div className='rounded-lg bg-white content-center space-y-3 px-5'>
                            <div className='rounded-xl bg-[#eff1f6] w-10 h-10 flex justify-center items-center'>
                                <Code />
                            </div>
                            <p>해외 개발자 원격 채용</p>
                            <div className='flex space-x-2 items-center'>
                                <p className='text-footerSecondary'>
                                    바로가기
                                </p>
                                <Arrow />
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className='rounded-lg bg-white content-center space-y-3 px-5'>
                            <div className='rounded-xl bg-[#eff1f6] w-10 h-10 flex justify-center items-center'>
                                <Avatar />
                            </div>
                            <p>외국인 원격 채용 (비개발)</p>
                            <div className='flex space-x-2 items-center'>
                                <p className='text-footerSecondary'>
                                    바로가기
                                </p>
                                <Arrow />
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className='rounded-lg bg-white content-center space-y-3 px-5'>
                            <div className='rounded-xl bg-[#eff1f6] w-10 h-10 flex justify-center items-center'>
                                <Korean />
                            </div>
                            <p>한국어 가능 외국인 채용</p>
                            <div className='flex space-x-2 items-center'>
                                <p className='text-footerSecondary'>
                                    바로가기
                                </p>
                                <Arrow />
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className='rounded-lg bg-white content-center space-y-3 px-5'>
                            <div className='rounded-xl bg-[#eff1f6] w-10 h-10 flex justify-center items-center'>
                                <Gear />
                            </div>
                            <p>해외 개발자 활용 서비스</p>
                            <div className='flex space-x-2 items-center'>
                                <p className='text-footerSecondary'>
                                    바로가기
                                </p>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex my-10 space-x-10'>
                    <div className='space-y-3'>
                        <p className='font-bold'>
                            상호명
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            하이퍼하이어
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            Hyperhire India Private Limited
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <p className='font-bold'>
                            대표 CEO
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            김주현
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            Juhyun Kim
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <p className='font-bold'>
                            사업자등록번호 CIN
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            427-86-01187
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            U74110DL2016PTC290812
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <p className='font-bold'>
                            주소 ADDRESS
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            서울특별시 강남대로 479, 지하 1층 238호
                        </p>
                        <p className='font-bold text-footerSecondary'>
                            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                            110053 India
                        </p>
                    </div>

                </div>
                <div>
                    <p className='font-bold'>
                        ⓒ 2023 Hyperhire
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;