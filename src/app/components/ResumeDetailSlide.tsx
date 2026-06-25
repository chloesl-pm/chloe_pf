import React from "react";
import { BookOpen, Rocket, ChevronRight } from "lucide-react";

export function ResumeDetailSlide() {
  const experiences = [
    {
      category: "서비스 기획 / PM",
      items: [
        {
          title: "카카오클라우드 PaaS 서비스 기획",
        },
        { title: "카카오워크 메신저 서비스 기획" },
      ],
    },
    {
      category: "개발 / 운영",
      items: [
        { title: "기업용 메시징 서비스 개발/운영" },
        { title: "카카오톡 비즈메시지 개발/운영" },
        { title: "B2B 대외협력 기술미팅 담당자" },
        { title: "내/외부 서비스 교육 담당자" },
        { title: "기술문서 작성/배포 담당자" },
      ],
    },
  ];

  const coreCompetencies = [
    {
      group: "서비스 기획 및 운영",
      items: [
        "Client(4종)·Admin·Backend를 아우르는 풀스택 서비스 기획",
        "기획부터 배포·운영까지 엔드투엔드 리딩",
        "프로덕트 전주기 기능 기획 및 고도화 경험"
      ]
    },
    {
      group: "제품 설계 및 UX",
      items: [
        "개발자 Console UI/UX 설계 및 사용성 개선"
      ]
    },
    {
      group: "협업 및 커뮤니케이션",
      items: [
        "개발·디자인·법무·보안 등 다양한 직군과의 협업 리딩",
        "개발 경험 기반의 높은 기술 이해도와 소통 역량"
      ]
    },
    {
      group: "전문성 및 실행",
      items: [
        "신규 도메인에 대한 빠른 학습과 실행력",
        "API/SDK 테스트 기반 서비스 검증 및 품질 확보"
      ]
    },
    {
      group: "고객 및 문서",
      items: [
        "기술 문서 체계 구축 및 배포 프로세스 관리"
      ]
    }
  ];

  return (
    <div className="bg-white flex h-full text-slate-900 font-['Pretendard']">
      {/* Left Sidebar: Minimal Info */}
      <div className="w-[380px] bg-slate-50 p-16 flex flex-col justify-between border-r border-slate-100 shrink-0 overflow-hidden">
        <div>
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4">Experience</h1>
            <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
          </div>
          
          <div className="space-y-12">
            <div className="group">
              <p className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Focus</p>
              <p className="text-[17px] font-bold text-slate-700 leading-snug">
                기술적 깊이와<br />
                사용자 경험을 잇는<br />
                실전형 기획자
              </p>
            </div>
            
            <div className="pt-10 border-t border-slate-200">
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Core Value</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[17px] font-bold text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> 풀스택 기획
                </li>
                <li className="flex items-center gap-3 text-[17px] font-bold text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> 기술 커뮤니케이션
                </li>
                <li className="flex items-center gap-3 text-[17px] font-bold text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> 문제 해결 중심
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          © 2026 Dayeseul Lee Portfolio
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-16 pt-[64px] overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-12 gap-16">
          
          {/* 주요 직무 경험 Section */}
          <div className="col-span-5 space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-200 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">주요 직무 경험</h2>
            </div>

            <div className="space-y-16 pl-2 relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100" />

              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-8 relative">
                  <div className="flex items-center gap-4">
                    <div className="w-[12px] h-[12px] rounded-full bg-white border-2 border-slate-300 z-10 shrink-0 ml-[5px]" />
                    <h3 className="text-[17px] font-black text-slate-900 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100 shadow-sm" style={{ fontFamily: "'Kakao', 'Pretendard', sans-serif" }}>
                      {exp.category}
                    </h3>
                  </div>

                  <ul className="space-y-5 pl-10">
                    {exp.items.map((item: any, iIdx) => (
                      <li key={iIdx} className="group">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[18px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight block">
                              {item.title}
                            </span>
                          </div>
                          {item.details && (
                            <div className="mt-3 grid grid-cols-1 gap-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50 group-hover:border-blue-100 transition-colors">
                              {item.details.map((detail: string, dIdx: number) => (
                                <div key={dIdx} className="text-[14.5px] text-slate-500 font-semibold leading-relaxed flex items-start gap-2">
                                  <span className="text-blue-500/50 mt-1 shrink-0">
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  </span>
                                  {detail}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 핵심 역량 Section */}
          <div className="col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-200 shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">핵심 역량</h2>
            </div>

            <div className="bg-slate-50/50 rounded-[32px] p-10 border border-slate-100 shadow-sm">
              <div className="space-y-8">
                {coreCompetencies.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-4">
                    <h3 className="text-[16px] font-black text-blue-600 flex items-center gap-2" style={{ fontFamily: "'Kakao', 'Pretendard', sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {group.group}
                    </h3>
                    <div className="grid grid-cols-1 gap-2 pl-3">
                      {group.items.map((text, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                          <span className="shrink-0 text-[11px] font-black text-slate-300 group-hover:text-blue-400 transition-colors pt-1.5 italic w-5">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <p className="text-[16.5px] font-bold text-slate-700 leading-tight flex-1">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
