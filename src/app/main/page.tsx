"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Header from "@/components/common/Header";

export default function Main() {
    return (
        // 전체 레이아웃에 최소 너비(min-width)를 1200px로 설정
        // PC 화면에서 브라우저를 줄여도 내부 콘텐츠가 줄어들지 않고 고정됨
        <div className="flex flex-col min-h-screen min-w-[1200px]">
            {/* 헤더 섹션 */}
            <Header/>

            {/* 캐러셀 섹션 */}
            <div>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 5000, // 5초마다 자동 슬라이드
                        }),
                    ]}
                    opts={{
                        loop: true, // 반복 재생을 원하면 loop 옵션 추가
                    }}
                >
                    <CarouselContent className="">
                        {Array.from({ length: 5 }).map((_, index) => (
                            // 각 슬라이드 항목이 간격 없고 꽉 차도록 설정
                            <CarouselItem key={index} className="p-0 basis-full">
                                <Card className="flex w-full h-[400px] justify-center items-center rounded-none shadow-none">
                                    <CardContent className="">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2" />
                </Carousel>
            </div>

            {/* 이벤트 섹션 */}
            <div className="flex flex-col items-center mt-[20px]">
                <div className="mb-[10px] text-[25px] font-semibold">이벤트</div>
                <div className="flex w-full justify-center gap-[15px]">
                    <div className="flex flex-col">
                        <div className="w-[450px] h-[250px] border mb-[5px]"></div>
                        <div className="font-semibold">아직 구매한 적 없으시다면</div>
                        <div>첫 구매 최대 90% 할인 받아가세요</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-[450px] h-[250px] border mb-[5px]"></div>
                        <div className="font-semibold">친구에게 Look Lab을 추천해주세요</div>
                        <div>무제한 2천 코인을 챙겨드려요</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-[450px] h-[250px] border mb-[5px]"></div>
                        <div className="font-semibold">일단 가입! 첫 구매 지원금</div>
                        <div>매일 100명에게 선착순 1만 코인을 드립니다</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
