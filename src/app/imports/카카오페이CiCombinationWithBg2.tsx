import svgPaths from "./svg-deiwz3jm3p";

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

export default function CiCombinationWithBg() {
  return (
    <div className="relative size-full" data-name="카카오페이_CI_combination_with_BG 2">
      <Group />
    </div>
  );
}