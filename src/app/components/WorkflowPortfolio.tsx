import { useState, useEffect, useRef } from "react";
import {
  FileCode,
  GitBranch,
  Sparkles,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Zap,
  ChevronRight,
  Layout,
  Code2,
  Repeat,
  Plus,
  Minus,
  Maximize,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { CoverSlide } from "./CoverSlide";
import { ResumeSlide } from "./ResumeSlide";
import { ResumeDetailSlide } from "./ResumeDetailSlide";
import { ResumeDetailHalfSlide } from "./ResumeDetailHalfSlide";
import { AnalyticsIntroSlide } from "./AnalyticsIntroSlide";
import { CloudDetailSlide } from "./CloudDetailSlide";
import { DataQuerySlide } from "./DataQuerySlide";

function Slide({
  children,
  className = "",
  scale = 1,
  pageNumber,
}: {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  pageNumber?: number;
}) {
  return (
    <section
      className={`w-full h-screen flex items-center justify-center snap-start relative overflow-hidden bg-slate-900 ${className}`}
    >
      <div
        className="bg-white shadow-2xl relative overflow-hidden flex flex-col shrink-0 transition-transform duration-300 ease-out"
        style={{
          width: "1440px",
          height: "810px",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
        {pageNumber && (
          <div className="absolute bottom-6 right-10 text-[11px] font-black text-slate-300 tracking-widest select-none z-[100]">
            {String(pageNumber).padStart(2, '0')}
          </div>
        )}
      </div>
    </section>
  );
}

export function WorkflowPortfolio() {
  const [scale, setScale] = useState(1);
  const [autoScale, setAutoScale] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (autoScale) {
        const widthScale = window.innerWidth / 1500; // Giving some margin
        const heightScale = window.innerHeight / 850;
        setScale(Math.min(widthScale, heightScale, 1)); // Don't scale up beyond 1 by default
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () =>
      window.removeEventListener("resize", handleResize);
  }, [autoScale]);

  const handleZoomIn = () => {
    setAutoScale(false);
    setScale((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setAutoScale(false);
    setScale((prev) => Math.max(prev - 0.1, 0.2));
  };

  const handleReset = () => {
    setAutoScale(true);
    // Trigger recalculation
    const widthScale = window.innerWidth / 1500;
    const heightScale = window.innerHeight / 850;
    setScale(Math.min(widthScale, heightScale, 1));
  };
  const oldWorkflow = [
    {
      icon: "🎨",
      title: "Figma 디자인",
      description: "모든 화면을 일일이 디자인",
    },
    {
      icon: "💬",
      title: "리뷰 & 피드백",
      description: "디자인 검토 및 수정 요청",
    },
    {
      icon: "🔄",
      title: "반복 수정",
      description: "Figma에서 수정 작업 반복",
    },
    {
      icon: "✅",
      title: "최종 승인",
      description: "개발 단계로 이관",
    },
  ];

  const newWorkflow = [
    {
      icon: <GitBranch className="w-5 h-5 text-blue-500" />,
      title: "Git Clone & Pull",
      description: "FE 소스를 로컬에 복제",
      detail: "git clone kakao-cloud/console-fe",
    },
    {
      icon: <FileCode className="w-5 h-5 text-indigo-500" />,
      title: "VS Code 실행",
      description: "로컬 환경에서 프로젝트 오픈",
      detail: "code . && npm install",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
      title: "Claude AI 활용",
      description: "원하는 화면/인터랙션 요청",
      detail: "AI 기반 실시간 코드 생성",
    },
    {
      icon: <Monitor className="w-5 h-5 text-emerald-500" />,
      title: "Localhost 확인",
      description: "실시간으로 결과 확인",
      detail: "npm run dev",
    },
  ];

  const detailedSteps = [
    {
      step: "01",
      title: "Git Repository 준비",
      description:
        "카카오클라우드 콘솔 FE 프로젝트를 로컬로 가져옵니다.",
      commands: [
        "git clone https://github.com/kakao-cloud/console-fe.git",
        "git pull origin main",
      ],
      tips: ["개발 브랜치가 있다면 해당 브랜치로 체크아웃"],
    },
    {
      step: "02",
      title: "VS Code 환경 설정",
      description:
        "VS Code에서 프로젝트를 열고 필요한 패키지를 설치합니다.",
      commands: ["code .", "npm install"],
      tips: [
        "권장 확장 프로그램: ESLint, Prettier, Claude Dev",
      ],
    },
    {
      step: "03",
      title: "Claude AI로 화면 기획",
      description:
        "Claude AI 도구를 활용하여 원하는 화면과 인터랙션을 구현합니다.",
      commands: [
        '"대시보드에 사용량 차트를 추가해줘"',
        '"테이블에 정렬 기능을 추가해줘"',
      ],
      tips: ["구체적이고 명확한 요청이 중요"],
    },
    {
      step: "04",
      title: "Localhost에서 실시간 확인",
      description:
        "개발 서버를 실행하여 변경사항을 즉시 확인합니다.",
      commands: ["npm run dev", "http://localhost:3000"],
      tips: ["Hot Reload로 저장 즉시 반영"],
    },
    {
      step: "05",
      title: "반복 및 최적화",
      description:
        "Claude AI와 대화하며 원하는 결과가 나올 때까지 반복합니다.",
      commands: [
        '"좀 더 간격을 넓혀줘"',
        '"색상을 브랜드 컬러로 변경해줘"',
      ],
      tips: ["실시간 피드백으로 빠른 이터레이션"],
    },
  ];

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-slate-900">
      {/* ZOOM CONTROLS */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
          title="Zoom In"
        >
          <Plus className="w-6 h-6" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
          title="Zoom Out"
        >
          <Minus className="w-6 h-6" />
        </button>
        <button
          onClick={handleReset}
          className={`w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl ${autoScale ? "bg-blue-600 border-blue-400 text-white" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
          title="Fit to Screen"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>

      {/* 0. COVER SLIDE */}
      <Slide scale={scale}>
        <CoverSlide />
      </Slide>

      {/* 1. RESUME SLIDE */}
      <Slide scale={scale} pageNumber={2}>
        <ResumeSlide />
      </Slide>

      {/* 2. RESUME DETAIL SLIDE (Sidebar Style) */}
      <Slide scale={scale} pageNumber={3}>
        <ResumeDetailSlide />
      </Slide>

      {/* 3. RESUME DETAIL SLIDE (Half-Half Style) */}
      <Slide scale={scale} pageNumber={4}>
        <ResumeDetailHalfSlide />
      </Slide>

      {/* 3. ANALYTICS INTRO SLIDE */}
      <Slide scale={scale} pageNumber={5}>
        <AnalyticsIntroSlide />
      </Slide>

      {/* 4. CLOUD DETAIL SLIDE */}
      <Slide scale={scale} pageNumber={6}>
        <CloudDetailSlide />
      </Slide>

      {/* 5. DATA QUERY SLIDE */}
      <Slide scale={scale} pageNumber={7}>
        <DataQuerySlide />
      </Slide>

      {/* 6. HERO SLIDE */}
      <Slide scale={scale} pageNumber={8}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1440&h=810&auto=format&fit=crop"
            alt="Cloud tech"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/90 to-blue-50/50" />
        </div>

        <div className="relative h-full flex flex-col px-24 pt-32 pb-24 justify-between">
          <div className="space-y-8 mt-8">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider">
              <Zap className="w-4 h-4 fill-current" />
              WORKFLOW INNOVATION
            </div>

            <h1
              className="text-[52px] font-semibold leading-[1.2] text-slate-900 tracking-[-0.01em]"
              style={{
                fontFamily:
                  "'Pretendard', 'Noto Sans KR', sans-serif",
              }}
            >
              카카오클라우드 콘솔
              <br />
              <span className="text-blue-600">
                화면 기획 방식 개선
              </span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-2xl leading-relaxed">
              Figma 기반의 기존 디자인 과정을 거치지 않고,
              <br />
              Git과 AI를 활용해 실제 화면을 바로 확인하며
              기획하는 방식으로 전환했습니다. 이를 통해 반복적인
              커뮤니케이션을 줄이고, 기획 검증 속도를 높일 수
              있었습니다.
            </p>
          </div>

          <div className="flex items-end justify-between pt-12">
            <div className="flex gap-16"></div>
            <div className="text-right">
            </div>
          </div>
        </div>
      </Slide>

      {/* 4. WORKFLOW COMPARISON */}
      <Slide scale={scale} pageNumber={9}>
        <div className="flex h-full">
          {/* Left Panel (Width matched to Resume slide: 380px) */}
          <div className="w-[380px] bg-slate-50 p-20 flex flex-col justify-center border-r border-slate-200 shrink-0">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Workflow
              <br />
              Comparison
            </h2>

            <p className="text-slate-600 leading-relaxed mb-12">
              여러 번의 Figma 디자인 작업과 CBT 기반 FE 개발
              과정을 생략하고 커뮤니케이션을 최소화했습니다. AI
              기반 실시간 피드백 루프를 통해 기획 단계에서 코드
              수준의 검증까지 완료할 수 있는 방식을
              제안했습니다.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">
                  Efficiency Gain
                </p>
                <p className="text-5xl font-black text-blue-600">
                  -70%{" "}
                  <span className="text-xl font-normal text-slate-400">
                    Time Reduction
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel (Expanded after matching left panel to 380px) */}
          <div className="flex-1 p-20 grid grid-cols-2 gap-12 items-start">
            {/* Old Way */}
            <div className="space-y-8 mt-8">
              <div className="flex items-center gap-4 min-h-[72px]">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-xl text-white shadow-xl shadow-blue-200 shrink-0">
                  📋
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  기존 Figma 방식
                </h3>
              </div>

              <div className="space-y-3">
                {oldWorkflow.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 min-h-[88px] bg-blue-50 border border-blue-200 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0 text-xl">
                      {item.icon}
                    </div>

                    <div className="flex flex-col justify-center min-h-[40px] mt-1">
                      <span className="text-slate-900 font-bold leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-slate-600 mt-1 leading-tight">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 min-h-[68px] flex items-center bg-red-50 border border-red-100 rounded-xl">
                <p className="text-red-800 font-bold text-sm">
                  평균 2-3일 소요
                </p>
              </div>
            </div>

            {/* New Way */}
            <div className="space-y-8 relative mt-8">
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                NEW WORKFLOW
              </div>

              <div className="flex items-center gap-4 min-h-[72px]">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-xl text-white shadow-xl shadow-blue-200 shrink-0">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  AI + Live Dev 방식
                </h3>
              </div>

              <div className="space-y-3">
                {newWorkflow.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 min-h-[88px] bg-blue-50 border border-blue-200 rounded-xl group transition-all hover:bg-white hover:shadow-lg"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex flex-col justify-center min-h-[40px]">
                      <span className="text-slate-900 font-bold leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-blue-600 font-mono mt-1 leading-tight">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 min-h-[68px] flex items-center bg-emerald-50 border border-emerald-100 rounded-xl">
                <p className="text-emerald-800 font-bold text-sm">
                  평균 2-3시간 소요 (실시간)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 5. STEP-BY-STEP GUIDE (1-3) */}
      <Slide scale={scale} pageNumber={10}>
        <div className="px-20 py-8 flex flex-col h-full">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-blue-600 font-bold tracking-widest uppercase mb-1 text-xs">
                Step-by-step
              </p>
              <h2 className="text-4xl font-black text-slate-900">
                상세 가이드 (Part 1)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {detailedSteps.slice(0, 3).map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col h-full"
              >
                <div className="text-7xl font-black text-slate-50 mb-[-24px] select-none">
                  {step.step}
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md flex flex-col h-full min-h-[520px] relative z-10">
                  {/* 상단 */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 mb-3 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* 코드 */}
                    <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs mb-3 min-h-[110px] flex flex-col justify-center">
                      <div className="flex gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>

                      {step.commands.map((cmd, cIdx) => (
                        <div
                          key={cIdx}
                          className="text-blue-400 leading-relaxed"
                        >
                          <span className="text-emerald-500 mr-1">
                            $
                          </span>
                          {cmd}
                        </div>
                      ))}
                    </div>

                    {/* tip */}
                    <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                      <p className="text-xs text-slate-500 leading-snug">
                        {step.tips[0]}
                      </p>
                    </div>
                  </div>

                  {/* 🔥 하단 영역 */}
                  <div className="mt-auto pt-3 space-y-2.5">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3.5">
                      <p className="text-[10px] font-semibold text-blue-600 mb-1.5">
                        실제 활용
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {idx === 0 &&
                          "콘솔 구조를 확인해 컴포넌트 재사용 여부를 사전 판단"}
                        {idx === 1 &&
                          "VS Code에서 실제 UI를 확인하며 레이아웃 검증"}
                        {idx === 2 &&
                          "AI에 자연어로 요청해 UI와 인터랙션을 즉시 생성"}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3.5">
                      <p className="text-[10px] font-semibold text-slate-700 mb-1.5">
                        활용 포인트
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {idx === 0 &&
                          "재사용 중심 설계로 개발 비용 감소"}
                        {idx === 1 &&
                          "실제 화면 기준 빠른 의사결정"}
                        {idx === 2 &&
                          "수 분 내 동작 가능한 UI 확보"}
                      </p>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3.5">
                      <p className="text-[10px] font-semibold text-emerald-700 mb-1.5">
                        인사이트
                      </p>
                      <p className="text-xs text-emerald-900 leading-relaxed">
                        {idx === 0 &&
                          "구조 이해로 커뮤니케이션 비용 감소"}
                        {idx === 1 &&
                          "디자인보다 실제 화면이 더 정확"}
                        {idx === 2 &&
                          "기획이 바로 실행 가능한 결과물로 전환"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 6. STEP-BY-STEP GUIDE (4-5) & BENEFITS */}
      <Slide scale={scale} pageNumber={11}>
        <div className="px-24 py-16 flex flex-col h-full">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-blue-600 font-bold tracking-widest uppercase mb-2">
                Step-by-step
              </p>
              <h2 className="text-4xl font-black text-slate-900">
                상세 가이드 (Part 2) & 기대 효과
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 flex-1">
            <div className="grid grid-cols-1 gap-8">
              {detailedSteps.slice(3, 5).map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex items-start gap-8 relative overflow-hidden"
                >
                  <div className="text-6xl font-black text-slate-50 absolute right-4 bottom-4 select-none">
                    {step.step}
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mb-6 text-sm">
                      {step.description}
                    </p>
                    <div className="bg-slate-900 rounded-xl p-5 font-mono text-xs mb-4">
                      {step.commands.map((cmd, cIdx) => (
                        <div
                          key={cIdx}
                          className="text-blue-400 mb-1"
                        >
                          <span className="text-emerald-500 mr-2">
                            $
                          </span>
                          {cmd}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32" />
              <h3 className="text-3xl font-bold mb-8 relative z-10">
                성과 및 임팩트
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                      작업 효율
                    </p>
                    <p className="text-2xl font-black">
                      70% 이상 시간 단축
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Layout className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                      정확도
                    </p>
                    <p className="text-2xl font-black">
                      기획과 개발 간 간극 0%
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Repeat className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                      이터레이션
                    </p>
                    <p className="text-2xl font-black">
                      무제한 실시간 피드백 루프
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-600 rounded-3xl relative z-10">
                <p className="text-sm font-medium opacity-80 mb-2 italic">
                  Conclusion
                </p>
                <p className="text-lg font-bold leading-relaxed">
                  "단순히 도구를 바꾼 것이 아니라,
                  <br /> 사고 방식과 커뮤니케이션 방식을 함께
                  바꿔 나갔습니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 7. OVERALL WORKFLOW DIAGRAM & CLOSING */}
      <Slide scale={scale} pageNumber={12}>
        <div className="h-full flex flex-col justify-center items-center px-24 text-center">
          <div className="mb-16">
            <p className="text-blue-600 font-bold tracking-widest uppercase mb-4">
              Total Workflow
            </p>
            <h2 className="text-6xl font-black text-slate-900">
              End-to-End 프로세스
            </h2>
          </div>

          <div className="w-full max-w-6xl flex items-center justify-between relative mb-24">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -z-10 -translate-y-1/2" />

            {[
              {
                label: "Connect",
                icon: <GitBranch />,
                sub: "Git Clone",
              },
              {
                label: "Environment",
                icon: <Code2 />,
                sub: "VS Code",
              },
              {
                label: "Generation",
                icon: <Sparkles />,
                sub: "Claude AI",
              },
              {
                label: "Verification",
                icon: <Monitor />,
                sub: "Localhost",
              },
              {
                label: "Refine",
                icon: <Repeat />,
                sub: "Feedback Loop",
              },
            ].map((node, nIdx) => (
              <div
                key={nIdx}
                className="flex flex-col items-center"
              >
                {/* 아이콘 원 */}
                <div className="w-28 h-28 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-blue-600 shadow-xl shadow-slate-100 hover:border-blue-600 hover:scale-110 transition-all duration-300">
                  <div className="w-14 h-14">{node.icon}</div>
                </div>

                {/* 타이틀 */}
                <p className="mt-6 font-bold text-slate-900 text-lg">
                  {node.label}
                </p>

                {/* 서브 */}
                <p className="text-sm text-slate-400 uppercase font-bold tracking-tight mt-1">
                  {node.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-xl text-slate-500 leading-relaxed">
              이 새로운 워크플로우를 통해 카카오클라우드 콘솔의
              복잡한 사용자 경험을 <br />
              보다 빠르게 검증하고, 실제 동작 기준으로 설계할 수
              있게 되었습니다. <br />그 결과 기획과 개발 간
              커뮤니케이션 비용을 줄이고, 전반적인{" "}
              <strong> 업무 효율을 높일 수 있었습니다.</strong>
            </p>
          </div>

          <footer className="absolute bottom-12 left-0 w-full px-24 flex justify-between items-center text-slate-400 font-bold text-sm tracking-widest uppercase"></footer>
        </div>
      </Slide>
    </div>
  );
}
