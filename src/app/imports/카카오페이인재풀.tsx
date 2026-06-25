import svgPaths from "./svg-beufwtwpuz";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-start left-[701px] top-[594px]">
      <p className="font-['Kakao:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dbeaff] text-[25px] whitespace-nowrap">지원 직무</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_-0.05%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.052 42">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p33f52100} fill="var(--fill-0, #FFEB00)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[24%_65.22%_25.5%_12.03%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7579 21.209">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p8c9bb00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[24%_65.22%_25.5%_12.03%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[24%_13.53%_21.02%_12.03%]" data-name="Group">
      <Group3 />
      <div className="absolute inset-[24.88%_46.03%_22.64%_40.23%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7377 22.0448">
          <path d={svgPaths.p32369180} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.12%_30.9%_35.82%_56.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5972 16.403">
          <path d={svgPaths.p3d35fd80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.63%_13.53%_21.02%_71.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1374 22.8284">
          <path d={svgPaths.p385fda00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_-0.05%_0_0]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function CiCombinationWithBg() {
  return (
    <div className="absolute h-[42px] left-[156px] overflow-clip top-[247px] w-[100px]" data-name="카카오페이_CI_combination_with_BG 2">
      <Group />
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
      <p className="absolute font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] left-[92px] not-italic text-[35px] text-white top-[247px] whitespace-nowrap">for</p>
      <CiCombinationWithBg />
    </div>
  );
}