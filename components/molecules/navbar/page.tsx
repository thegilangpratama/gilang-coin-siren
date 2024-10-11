'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms/button/page';

const Navbar: React.FC = () => {
    return (
        <div className={"top-0 w-full flex justify-center bg-transparent h-16 md:h-20 z-50 transition-all"}>
            <div className="flex items-center justify-between w-full">
                <div className='flex space-x-3 justify-center items-center'>
                    <Image
                        src="/logo.svg"
                        alt="Hyperhire Logo"
                        width={150}
                        height={40}
                        className="object-contain"
                    />
                </div>
                <div className='flex space-x-10'>
                    <div>
                        채용

                    </div>
                    <div>
                        해외 개발자 활용 서비스
                    </div>
                </div>
                <div>
                    <Button variant="secondary">
                        <p className='text-[#4A77FF] font-semibold'>
                            문의하기
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;