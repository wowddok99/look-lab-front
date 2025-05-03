import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LiaHeart, LiaShoppingBagSolid } from "react-icons/lia";

export default function Header() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-end gap-[15px] bg-black text-white p-3">
                <div className="text-[13px]">마이페이지</div>
                <div className="text-[13px] pr-[15px]">로그인</div>
            </div>
            <div className="flex justify-between items-center px-6 gap-[15px] bg-white text-white p-3">
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
            <div className="flex justify-start bg-white border border-gray-300 border-opacity-25 p-4">
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
        </div>
    )

}