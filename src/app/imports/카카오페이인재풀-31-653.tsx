function Frame() {
  return (
    <div className="absolute content-stretch flex items-start left-[701px] top-[594px]">
      <p className="font-['Kakao:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dbeaff] text-[25px] whitespace-nowrap">지원 직무</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#1e1e1e] relative size-full" data-name="카카오페이- 인재풀">
      <p className="absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[normal] left-[92px] text-[100px] text-white top-[103px] whitespace-nowrap">{`Portfolio `}</p>
      <p className="absolute font-['Kakao:Regular',sans-serif] leading-[normal] left-[701px] not-italic text-[22px] text-white top-[653px] whitespace-nowrap">서비스 기획</p>
      <div className="absolute h-0 left-[77px] top-[232px] w-[467px]">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 467 1.5">
            <line id="Line 120" stroke="var(--stroke-0, white)" strokeWidth="1.5" x2="467" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[701px] top-[635px] w-[401px]">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 401 1.5">
            <line id="Line 121" stroke="var(--stroke-0, white)" strokeWidth="1.5" x2="401" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <Frame />
      <p className="absolute font-['Kakao:Bold',sans-serif] leading-[normal] left-[1153px] not-italic text-[#dbeaff] text-[25px] top-[594px] whitespace-nowrap">지원자</p>
      <div className="absolute font-['Kakao:Regular',sans-serif] leading-[0] left-[1157px] not-italic text-[20px] text-white top-[653px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">이다예슬</p>
        <p className="leading-[normal]">ldysgs0718@naver.com</p>
      </div>
      <div className="absolute h-0 left-[1157px] top-[635px] w-[200px]">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1.5">
            <line id="Line 122" stroke="var(--stroke-0, white)" strokeWidth="1.5" x2="200" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Arial_Rounded_MT_Bold:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[normal] left-[92px] text-[35px] text-white top-[247px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        for 현대자동차
      </p>
    </div>
  );
}