import React from "react";
import { motion } from "motion/react";
import { 
  Database, 
  Settings, 
  Code2, 
  PlayCircle, 
  BarChart3, 
  ChevronRight,
  CheckCircle2,
  Users,
  Calendar,
  Layers,
  Layout,
  ArrowRight
} from "lucide-react";
import svgPaths from "../imports/svg-7h7jt30wf0";

function TitleIcon() {
  return (
    <div className="relative w-[38px] h-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 40">
        <path clipRule="evenodd" d={svgPaths.p1bff6600} fill="#FFDB00" fillRule="evenodd" />
        <path d={svgPaths.p22b27a80} stroke="#031461" strokeWidth="2.5" />
        <circle cx="41" cy="5" r="3.5" stroke="#031461" strokeWidth="2.5" />
        <circle cx="41" cy="20" r="3.5" stroke="#031461" strokeWidth="2.5" />
        <circle cx="41" cy="35" r="3.5" stroke="#031461" strokeWidth="2.5" />
        <rect fill="#FFDB00" height="11" stroke="#031461" strokeWidth="2.5" width="11" x="17" y="14" />
        <path d={svgPaths.p376cc900} stroke="#031461" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

export function DataQuerySlide() {
  const steps = [
    { icon: <Database className="w-6 h-6" />, title: "데이터 원본 지정", sub: "Data Catalog / MySQL", color: "text-blue-600" },
    { icon: <Settings className="w-6 h-6" />, title: "결과 저장 경로", sub: "Object Storage", color: "text-indigo-600" },
    { icon: <Code2 className="w-6 h-6" />, title: "SQL 쿼리 작성", sub: "Standard SQL", color: "text-violet-600" },
    { icon: <PlayCircle className="w-6 h-6" />, title: "SQL 쿼리 실행", sub: "Serverless Engine", color: "text-emerald-600" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "결과 분석", sub: "Trino Analytics", color: "text-amber-600" }
  ];

  return (
    <div 
      className="bg-white relative w-[1440px] h-[810px] overflow-hidden flex flex-col" 
      style={{ fontFamily: "'Pretendard', sans-serif" }}
    >
      {/* Refined Header */}
      <header className="px-20 pt-14 pb-10 flex items-center gap-5 border-b border-slate-50">
        <TitleIcon />
        <h1 className="text-[30px] font-medium text-slate-900 tracking-tight leading-none">
          1. 간편한 데이터 분석을 위한 서버리스 대화형 쿼리 서비스 <span className="font-extrabold text-blue-600 ml-1">Data Query 기획</span>
        </h1>
      </header>

      {/* Content Layout */}
      <div className="flex-1 px-20 pt-8 pb-12 flex flex-col gap-10">
        
        {/* Horizontal Process Flow Section - Enclosed in a styled container */}
        <section className="relative">
          <div className="absolute inset-0 bg-blue-50/40 rounded-[40px] border border-blue-100/60 -m-6 z-0" />
          
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-5 bg-blue-600 rounded-full" />
                <h2 className="text-[20px] font-bold text-slate-800 tracking-tight italic uppercase">Service Process Flow</h2>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                ))}
              </div>
            </div>

            <div className="relative flex items-start justify-between px-4">
              {/* Background Connector Line */}
              <div className="absolute top-10 left-16 right-16 h-0.5 bg-slate-200/60 z-0" />
              
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center group w-[180px]"
                >
                  {/* Step Number Badge */}
                  <div className="mb-3 px-3 py-1 bg-slate-900 border border-slate-900 text-white text-[10px] font-black rounded-full tracking-widest uppercase shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    Step 0{idx + 1}
                  </div>

                  {/* Main Icon Circle */}
                  <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-[28px] flex items-center justify-center shadow-sm group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`relative z-10 ${step.color} transform scale-110 group-hover:scale-125 transition-transform`}>
                      {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8" })}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 text-center">
                    <h3 className="text-[17px] font-bold text-slate-900 mb-0.5 leading-tight group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-slate-400 font-medium leading-tight">
                      {step.sub}
                    </p>
                  </div>

                  {/* Intermediate Arrow (Horizontal) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-8 -right-4 transform -translate-y-1/2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      <ChevronRight className="w-5 h-5 text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Details & Performance Grid */}
        <section className="grid grid-cols-[1fr_380px] gap-12 border-t border-slate-50 pt-10">
          
          {/* Detailed Role & Performance */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-5 bg-slate-900 rounded-full" />
              <h2 className="text-[20px] font-bold text-slate-800 tracking-tight uppercase">Planning Details</h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Role */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Layout className="w-5 h-5" />
                  <span className="text-[15px] font-black uppercase tracking-widest" style={{ fontFamily: "'Kakao Big Sans', sans-serif" }}>역할 및 참여도</span>
                </div>
                <p className="text-[17px] font-bold text-slate-900 leading-[1.7] pl-1">
                  Data Query 신규 서비스<br />
                  Console 화면 기획 및 기능 상세 설계,<br />
                  전체 프로젝트 PM 리딩
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-2.5 text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-[15px] font-black uppercase tracking-widest" style={{ fontFamily: "'Kakao Big Sans', sans-serif" }}>주요 성과</span>
                </div>
                <div className="grid grid-cols-1 gap-2 pl-1">
                  {[
                    "Console 화면 기획 및 상세 기능 스펙 정의",
                    "사용자 행위 추적을 위한 Trail Event 정의",
                    "내외부 연동을 위한 상세 API 규격 정의",
                    "경쟁 서비스 벤치마킹을 통한 핵심 기능 분석"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-2.5 bg-slate-50/80 rounded-xl border border-slate-100 hover:border-blue-200 transition-all group">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600 shrink-0" />
                      <p className="text-[15.5px] font-bold text-slate-800 leading-tight">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-[15px] leading-[1.6] text-slate-500 font-medium text-justify">
              Data Query는 다양한 데이터 소스를 표준 SQL로 즉시 분석할 수 있는 서버리스 환경을 제공합니다. 
              인프라 설정의 복잡함을 제거 및 Trino 엔진을 통한 고성능 분석 구조를 구축하여 데이터 분석 허브 역할을 수행하도록 기획되었습니다.
            </p>
          </div>

          {/* Meta Information Cards (Right) - Adjusted top padding to match the new heights on the left */}
          <div className="flex flex-col gap-3 pt-12">
            <div className="bg-blue-50/50 p-6 rounded-[28px] border border-blue-100 flex flex-col gap-1.5 relative overflow-hidden">
              <div className="flex items-center gap-2 text-blue-400 mb-0.5">
                <Calendar className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-400">Project Period</span>
              </div>
              <p className="text-[18px] font-bold text-slate-900 leading-none">2024.06 ~ Present</p>
              <p className="text-[13px] text-blue-600/60 font-medium">서비스 고도화 및 GA 버전 준비 중</p>
            </div>

            <div className="bg-blue-50/50 p-6 rounded-[28px] border border-blue-100 flex flex-col gap-1.5 relative overflow-hidden">
              <div className="flex items-center gap-2 text-blue-400 mb-0.5">
                <Users className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-400">Team Scale</span>
              </div>
              <p className="text-[18px] font-bold text-slate-900 leading-none">총 7명 정예 구성</p>
              <div className="flex gap-2 mt-1">
                {["Dev 4", "QA 2", "PM 1"].map((role) => (
                  <span key={role} className="text-[11.5px] bg-white px-2.5 py-1 rounded-lg text-blue-600 font-bold border border-blue-100 leading-none">{role}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
