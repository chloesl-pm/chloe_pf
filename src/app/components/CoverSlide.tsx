import React from "react";
import CiCombinationWithBg from "../imports/카카오페이CiCombinationWithBg2";

export function CoverSlide() {
  return (
    <div className="bg-[#1e1e1e] relative size-full overflow-hidden" data-name="카카오페이- 인재풀">
      {/* Main Title: Portfolio */}
      <p className="absolute font-semibold italic leading-[normal] left-[92px] text-[100px] text-white top-[103px] whitespace-nowrap tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
        Portfolio
      </p>

      {/* Main Underline */}
      <div className="absolute h-0 left-[77px] top-[232px] w-[467px]">
        <div className="absolute inset-[-0.75px_0_0_0] border-t-[1.5px] border-white" />
      </div>

      {/* Subtitle: for 카카오페이 로고 */}
      <div className="absolute flex items-center gap-5 left-[92px] top-[247px]">
        <p className="leading-[normal] text-[35px] text-slate-400 whitespace-nowrap font-light" style={{ fontFamily: "'Kakao', 'Pretendard', sans-serif" }}>
          for
        </p>
        <div className="w-[110px] h-[46px] relative opacity-100 brightness-110">
          <CiCombinationWithBg />
        </div>
      </div>

      {/* Role Section */}
      <div className="absolute left-[701px] top-[594px]">
        <p className="font-black leading-[normal] text-[#dbeaff] text-[25px] whitespace-nowrap tracking-tight" style={{ fontFamily: "'Kakao', sans-serif" }}>
          지원 직무
        </p>
      </div>
      
      {/* Role Underline */}
      <div className="absolute h-0 left-[701px] top-[635px] w-[401px]">
        <div className="absolute inset-[-0.75px_0_0_0] border-t-[1.5px] border-white" />
      </div>

      {/* Role Content */}
      <p className="absolute font-medium leading-[normal] left-[701px] text-[22px] text-white top-[653px] whitespace-nowrap tracking-tight" style={{ fontFamily: "'Kakao', sans-serif" }}>
        서비스 기획
      </p>

      {/* Applicant Section */}
      <div className="absolute left-[1153px] top-[594px]">
        <p className="font-black leading-[normal] text-[#dbeaff] text-[25px] whitespace-nowrap tracking-tight" style={{ fontFamily: "'Kakao', sans-serif" }}>
          지원자
        </p>
      </div>

      {/* Applicant Underline */}
      <div className="absolute h-0 left-[1157px] top-[635px] w-[200px]">
        <div className="absolute inset-[-0.75px_0_0_0] border-t-[1.5px] border-white" />
      </div>

      {/* Applicant Content */}
      <div className="absolute font-medium left-[1157px] text-[20px] text-white top-[653px] whitespace-nowrap tracking-tight" style={{ fontFamily: "'Kakao', sans-serif" }}>
        <p className="leading-[normal] mb-1">이다예슬</p>
        <p className="leading-[normal] text-[18px] text-white/80">ldysgs0718@naver.com</p>
      </div>
    </div>
  );
}
