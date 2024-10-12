'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"

import {
    ChevronDownIcon
} from "@radix-ui/react-icons"



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
                <div className='hidden md:flex space-x-10 '>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className='flex space-x-2'>
                                    <p>
                                        채용
                                    </p>
                                    <ChevronDownIcon />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>채용</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>해외 개발자 원격 채용</DropdownMenuItem>
                                <DropdownMenuItem>외국인 원격 채용 (비개발 직군)</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>한국어 가능 외국인 채용</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        해외 개발자 활용 서비스
                    </div>
                </div>
                <div className='hidden md:block'>
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