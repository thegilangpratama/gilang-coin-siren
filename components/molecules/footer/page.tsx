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
    weight: ['400', '600', '700'],
    subsets: ['latin'],
});

const cardData = [
    { icon: Code, text: '해외 개발자 원격 채용' },
    { icon: Avatar, text: '외국인 원격 채용 (비개발)' },
    { icon: Korean, text: '한국어 가능 외국인 채용' },
    { icon: Gear, text: '해외 개발자 활용 서비스' },
];

const Footer: React.FC = () => (
    <div className={`w-full bg-[#fbfbfb] content-center justify-center ${poppins.className}`}>
        <div className='mx-5 md:mx-32 my-10 pb-5 pt-2 items-center content-center text-[#343741] text-sm'>
            <div className='md:flex md:space-x-20 md:my-10 space-y-5 md:space-y-0'>
                {/* Hyperhire Logo and Info */}
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

                {/* Cards */}
                <div className='grid grid-cols-2 gap-3 md:flex md:space-x-3 font-bold'>
                    {cardData.map((card, idx) => (
                        <div key={idx} className='flex space-x-3'>
                            <div className='rounded-xl bg-white content-center space-y-3 px-3 w-[200px] h-[130px]'>
                                <div className='rounded-xl bg-[#eff1f6] w-10 h-10 flex justify-center items-center'>
                                    <card.icon />
                                </div>
                                <p>{card.text}</p>
                                <div className='flex space-x-2 items-center'>
                                    <p className='text-footerSecondary'>바로가기</p>
                                    <Arrow />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Company Info */}
            <div className='flex flex-col md:flex-row my-10 md:space-x-10 space-y-10 md:space-y-0'>
                <div className='flex md:space-x-10'>
                    <InfoBlock title="상호명" contents={["하이퍼하이어", "Hyperhire India Private Limited"]} />
                    <InfoBlock title="대표 CEO" contents={["김주현", "Juhyun Kim"]} />
                </div>
                <InfoBlock title="사업자등록번호 CIN" contents={["427-86-01187", "U74110DL2016PTC290812"]} />
                <InfoBlock
                    title="주소 ADDRESS"
                    contents={[
                        "서울특별시 강남대로 479, 지하 1층 238호",
                        "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India",
                    ]}
                />
            </div>

            {/* Footer Rights */}
            <div>
                <p className='font-bold'>ⓒ 2023 Hyperhire</p>
            </div>
        </div>
    </div>
);

const InfoBlock: React.FC<{ title: string; contents: string[] }> = ({ title, contents }) => (
    <div className='space-y-3'>
        <p className='font-bold'>{title}</p>
        {contents.map((content, idx) => (
            <p key={idx} className='font-bold text-footerSecondary'>
                {content}
            </p>
        ))}
    </div>
);

export default Footer;