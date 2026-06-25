import React from "react";
import { 
  BookOpen, 
  Rocket, 
  ChevronRight, 
  CheckCircle2, 
  Settings, 
  Monitor, 
  MessageSquare, 
  Layers, 
  ShieldCheck,
  Zap,
  Cpu
} from "lucide-react";

export function ResumeDetailHalfSlide() {
  const experiences = [
    {
      category: "서비스 기획 / PM",
      icon: "📋",
      items: [
        { title: "카카오클라우드 PaaS 서비스 기획", desc: "사용자 분석 및 로드맵 수립" },
        { title: "카카오워크 메신저 서비스 기획", desc: "SaaS 기능 설계 및 UX 개선" },
      ],
    },
    {
      category: "개발 / 운영",
      icon: "⚙️",
      items: [
        { title: "기업용 메시징 서비스 개발/운영", desc: "대용량 트래픽 처리 시스템" },
        { title: "카카오톡 비즈메시지 개발/운영", desc: "알림톡/친구톡 플랫폼 관리" },
        { title: "B2B 대외협력 기술미팅 담당", desc: "기술 파트너십 및 기술 지원" },
        { title: "내/외부 서비스 교육 담당", desc: "가이드 제작 및 교육 수행" },
      ],
    },
  ];

  const coreCompetencies = [
    { group: "서비스 기획 및 운영", item: "엔드투엔드 프로덕트 리딩" },
    { group: "제품 설계 및 UX", item: "데이터 기반 UX/UI 최적화" },
    { group: "협업 및 커뮤니케이션", item: "기술 중심 다각도 소통 역량" },
    { group: "전문성 및 실행", item: "신규 도메인 빠른 학습/실행" },
    { group: "고객 및 문서", item: "기술 문서 체계 및 교육 관리" },
  ];

  return (
    <div className="flex h-full font-['Pretendard'] bg-white">
      {/* Left Panel (1/3) - Width matched to Resume slide (380px) */}
      <div className="w-[380px] bg-slate-50 p-16 flex flex-col justify-between border-r border-slate-200 shrink-0">
        <div className="space-y-12">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
              <Zap className="w-3 h-3 fill-current" /> Core Competencies
            </div>
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">
              기술과 기획의<br />
              경계를 허무는 역량
            </h2>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              10년 이상의 개발 및 운영 경험을 기반으로, 단순한 기능을 넘어 기술적 실현 가능성과 사용자 경험을 동시에 고려하는 실무형 기획 역량을 보유하고 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Professional Strength</p>
              <div className="space-y-3">
                {coreCompetencies.slice(0, 3).map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-[14px] font-bold text-slate-700">{comp.group}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-blue-600 rounded-2xl shadow-xl shadow-blue-100 text-white">
              <p className="text-[10px] font-black opacity-80 mb-1 uppercase tracking-wider">Total Career</p>
              <p className="text-4xl font-black">11+ <span className="text-lg font-normal opacity-80">Years</span></p>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          © 2026 Dayeseul Lee Portfolio
        </div>
      </div>

      {/* Left Panel (2/3) - Now expanded after matching left panel to 380px */}
      <div className="flex-1 p-16 pt-[64px] flex flex-col overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-2 gap-12 items-start">
          
          {/* Service Planning Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 min-h-[72px]">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-xl text-white shadow-xl shadow-blue-200 shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">서비스 기획 / PM</h2>
            </div>

            <div className="space-y-3">
              {experiences[0].items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 min-h-[92px] bg-blue-50 border border-blue-200 rounded-2xl group transition-all hover:bg-white hover:shadow-lg"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0 text-lg">
                    {idx === 0 ? "☁️" : "💬"}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-slate-900 font-bold text-[16px] leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[12px] text-slate-500 mt-1.5 font-medium leading-tight">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
              <p className="text-slate-700 font-bold text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                SaaS & PaaS 도메인 전문성
              </p>
            </div>
          </div>

          {/* Dev & Ops Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 min-h-[72px]">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl text-white shadow-xl shadow-slate-200 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">개발 / 운영</h2>
            </div>

            <div className="space-y-3">
              {experiences[1].items.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 min-h-[92px] bg-slate-50 border border-slate-200 rounded-2xl group transition-all hover:bg-white hover:shadow-lg"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0 text-lg">
                    {idx === 0 ? "📟" : idx === 1 ? "📱" : idx === 2 ? "🤝" : "📚"}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-slate-900 font-bold text-[16px] leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[12px] text-slate-500 mt-1.5 font-medium leading-tight">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <p className="text-emerald-800 font-bold text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                대용량 플랫폼 개발 및 운영 경험
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
