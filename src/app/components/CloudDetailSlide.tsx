import React from "react";
import { ExternalLink, Layers } from "lucide-react";
import svgPaths from "../imports/svg-e3jua8ah2g";
import imgArrow6 from "figma:asset/8e4e84a1feb0c85368e21862dcda16138c8f6c32.png";
import imgDataQuery from "figma:asset/054c961ade5bd9ba054e6553aeeff72bd8faeb19.png";
import imgPubSub from "figma:asset/8840a0ccdedc415fe0a9acb8d0f39532792eb76a.png";
import imgDataCatalog from "figma:asset/e2c377c07d341573ae12dfd6ddc0e123ff222fdc.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CloudDetailSlide() {
  const paths: Record<string, string> = svgPaths as any;

  const services = [
    {
      title: "Data Query",
      desc: "다양한 데이터 원본을 표준 SQL로 조회, 분석, 처리하는 서버리스 쿼리 서비스",
      icon: <ImageWithFallback src={imgDataQuery} alt="Data Query" className="w-10 h-10 object-contain" />,
      theme: "bg-blue-50/40 hover:bg-white hover:border-blue-200 hover:shadow-blue-900/5",
      iconBg: "bg-blue-50/50 group-hover:border-blue-100",
      bullet: "bg-blue-500/30 group-hover/item:bg-blue-600",
      text: "group-hover/item:text-blue-900",
      items: [
        "A-Z 까지 기획/스펙 정의",
        "Beta 출시 / GA 준비 중",
        "API, SQL 설계 참여",
        "공동체 고객사 유입",
        "시각화 툴 연동"
      ]
    },
    {
      title: "Pub/Sub",
      desc: "대규모 이벤트 처리와 데이터 분석을 위한 클라우드 기반 메시지 큐 서비스",
      icon: <ImageWithFallback src={imgPubSub} alt="Pub/Sub" className="w-10 h-10 object-contain" />,
      theme: "bg-violet-50/40 hover:bg-white hover:border-violet-200 hover:shadow-violet-900/5",
      iconBg: "bg-violet-50/50 group-hover:border-violet-100",
      bullet: "bg-violet-500/30 group-hover/item:bg-violet-600",
      text: "group-hover/item:text-violet-900",
      items: [
        "콘솔 사용성 70% 이상 개선",
        "기술문서 전면 개편",
        "과금 체계 정의(유료화)",
        "GA 버전 기획 및 출시",
        "IAM Role 정의"
      ]
    },
    {
      title: "Data Catalog",
      desc: "데이터의 중앙 조회 및 검색 도구로 메타데이터를 통합 관리하는 서비스",
      icon: <ImageWithFallback src={imgDataCatalog} alt="Data Catalog" className="w-10 h-10 object-contain" />,
      theme: "bg-emerald-50/40 hover:bg-white hover:border-emerald-200 hover:shadow-emerald-900/5",
      iconBg: "bg-emerald-50/50 group-hover:border-emerald-200",
      bullet: "bg-emerald-500/30 group-hover/item:bg-emerald-600",
      text: "group-hover/item:text-emerald-900",
      items: [
        "신규 기능(Iceberg) 탑재",
        "Data Firehose(가칭) 연동 기획",
        "콘솔 사용성 개선 프로세스 리딩"
      ]
    }
  ];

  return (
    <div 
      className="bg-white relative w-[1440px] h-[810px] overflow-hidden flex" 
      style={{ fontFamily: "'Pretendard', 'Kakao', sans-serif" }}
    >
      {/* Left Sidebar - Achievements & Roles (Width matched to Resume slide: 380px) */}
      <div className="w-[380px] h-full bg-slate-50 p-16 flex flex-col border-r border-slate-200 shrink-0 overflow-hidden">
        <div className="mb-14">
          <div className="mb-4 h-[48px] flex flex-col justify-end">
            <h1 className="text-5xl font-black tracking-tighter text-slate-900 leading-none">
              kakaocloud
            </h1>
          </div>
          <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
        </div>

        <div className="space-y-12">
          {/* 성과 Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Achievements</span>
              <div className="h-[1px] flex-1 bg-blue-100"></div>
            </div>
            <ul className="space-y-4">
              {[
                "콘솔 화면 기획 방식 개선",
                "Data Firehose(가칭) 신규 기획 진행 중",
                "Data Query 신규 서비스 기획 및 GA 출시",
                "Pub/Sub 사용성 개선 및 신규 기능 탑재",
                "성공적인 Pub/Sub GA 버전 출시 완료",
                "Data Catalog Iceberg 기능 연동 기획"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-[14px] font-bold text-slate-700 leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <span className="break-keep">{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 주요 역할 Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Major Roles</span>
              <div className="h-[1px] flex-1 bg-slate-200"></div>
            </div>
            <ul className="space-y-4">
              {[
                "Analytics 서비스 사용성 개선 및 기능 탑재",
                "신규 파이프라인 구축 기획 및 방향성 설계",
                "클라우드 방향성 제시 및 정책 수립",
                "개발자 console 화면 기획",
                "서비스 API, SDK 검증 및 개선",
                "벤치마킹을 통한 경쟁력 강화"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-[14px] font-bold text-slate-500 leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  <span className="break-keep">{text}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Right Content - Service Details */}
      <div className="flex-1 h-full px-16 pt-16 pb-14 flex flex-col bg-white">
        {/* Header Alignment with Sidebar Title Baseline */}
        <div className="mb-14 h-[48px] flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-200 shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
            Service Details
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col h-full p-8 rounded-3xl border border-slate-100 group transition-all duration-500 ${service.theme}`}>
              <div className="mb-6 flex items-center gap-4">
                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 transition-all duration-300 ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 tracking-tighter leading-tight">
                  {service.title}
                </h4>
              </div>
              
              <div className="mb-4">
                <p className="text-[12px] font-bold text-slate-500 leading-relaxed min-h-[40px]">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/50">
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full transition-colors ${service.bullet}`} />
                      <span className={`text-[13.5px] font-bold text-slate-700 leading-snug break-keep transition-colors ${service.text}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer - Links Section */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] flex-1 bg-slate-100"></div>
            <h4 className="text-xs font-black text-slate-400 tracking-[0.2em] uppercase">Related Resources</h4>
            <div className="h-[1px] flex-1 bg-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100/50 hover:bg-slate-50 hover:border-slate-200 transition-all">
              <p className="text-[12px] font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
                Official Blog Posts
              </p>
              <div className="space-y-3">
                {[
                  { label: "Pub/Sub 서비스 정식 버전 출시", url: "#" },
                  { label: "Data Query 서비스 정식 버전 출시", url: "#" },
                  { label: "Pub/Sub IAM 기획 및 적용", url: "#" }
                ].map((link, i) => (
                  <a key={i} href={link.url} target="_blank" className="group flex items-center gap-2.5 text-[12px] font-bold text-slate-600 hover:text-blue-600 transition-all">
                    <ExternalLink className="w-3 h-3 shrink-0 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    <span className="truncate underline underline-offset-4 decoration-slate-200 group-hover:decoration-blue-400 transition-all">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100/50 hover:bg-slate-50 hover:border-slate-200 transition-all">
              <p className="text-[12px] font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-3 bg-emerald-500 rounded-full"></span>
                Guides & Pricing
              </p>
              <div className="space-y-3">
                {[
                  { label: "Pub/Sub 사용자 가이드", url: "#" },
                  { label: "Data Query 사용자 가이드", url: "#" },
                  { label: "서비스 유료화 과금 체계 정의", url: "#" }
                ].map((link, i) => (
                  <a key={i} href={link.url} target="_blank" className="group flex items-center gap-2.5 text-[12px] font-bold text-slate-600 hover:text-emerald-600 transition-all">
                    <ExternalLink className="w-3 h-3 shrink-0 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                    <span className="truncate underline underline-offset-4 decoration-slate-200 group-hover:decoration-emerald-400 transition-all">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
