"use client";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LiaShoppingBagSolid, LiaHeart } from "react-icons/lia";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function Test() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="">
                <div className="flex justify-end gap-[15px] bg-black text-white p-3">
                    <div className="text-[13px]">마이페이지</div>
                    <div className="text-[13px]">로그인</div>
                </div>
                <div className="flex justify-between items-center px-4 gap-[15px] bg-white text-white p-3">
                    <div className="flex gap-[5px]">
                        <div className="text-[30px] text-purple-900 font-semibold">Look</div>
                        <div className="text-[30px] text-purple-900 font-thin">Lab</div>
                    </div>
                    <div className="flex gap-[10px] text-[28px] text-black">
                        <HiMiniMagnifyingGlass />
                        <LiaHeart/>
                        <LiaShoppingBagSolid/>
                    </div>
                </div>
                <div className="flex justify-start bg-white border border-gray-300 border-opacity-25 border-[1px]text-white p-4">
                    <div className="flex items-center font-light text-[16px] gap-[10px]">
                        <div>여성</div>
                        <div>남성</div>
                        <div>키즈</div>
                        <div>럭셔리</div>
                        <div>백&슈즈</div>
                        <div>스포츠</div>
                        <div>스포츠</div>
                        <div>골프</div>
                        <div>뷰티</div>
                        <span className="mx-2 border-r border-gray-200 h-4 inline-block"></span>
                        <div>라이프</div>
                        <div>아울렛</div>
                        <div>랭킹</div>
                        <div>브랜드</div>
                        <div>매거진</div>
                        <div>기획전</div>
                        <div>이벤트</div>
                    </div>
                </div>
            <div>
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            </header>
        </div>
    );
}
