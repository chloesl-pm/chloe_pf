import { Mail, MapPin, GraduationCap, Briefcase, Code2, Wrench, BarChart3, Cloud, Sparkles } from "lucide-react";
import svgPaths from "../imports/svg-7wk08qzxrg";
import imgJira from "figma:asset/35be2e0f84fd7755c43645b3b1a1c296d6e8837b.png";
import imgFigma from "figma:asset/5d3b8faa7aa771d09062c28f3869daa504147e55.png";
import imgKibana from "figma:asset/9bfcf14c070f26f6a94cef5b75e72e3688c74496.png";
import imgSuperset from "figma:asset/f31ef622a1687aceb1d45c35beac624e25ef8664.png";
import imgConfluence from "figma:asset/bbe5c8a32609d24e0ff13d81e550b2cb825e5948.png";

export function ResumeSlide() {
  const skills = [
    { name: "Figma", icon: <img src={imgFigma} alt="Figma" className="w-10 h-10 object-contain" />, category: "Design" },
    { name: "Jira", icon: <img src={imgJira} alt="Jira" className="w-10 h-10 object-contain" />, category: "Tool" },
    { name: "Slack", icon: (
      <svg className="w-10 h-10" viewBox="0 0 60 59.9523">
        <path d={svgPaths.p32b4b940} fill="#E01E5A" />
        <path d={svgPaths.p3c350700} fill="#36C5F0" />
        <path d={svgPaths.p241d51f0} fill="#2EB67D" />
        <path d={svgPaths.p18cea00} fill="#ECB22E" />
      </svg>
    ), category: "Tool" },
    { name: "Google Cloud", icon: (
      <svg className="w-10 h-10" viewBox="0 0 60.0001 61.3027">
        <path d={svgPaths.p3ec46200} fill="#4285F4" />
        <path d={svgPaths.p20b23600} fill="#34A853" />
        <path d={svgPaths.p2de83080} fill="#FBBC05" />
        <path d={svgPaths.p18389f00} fill="#EA4335" />
      </svg>
    ), category: "Cloud" },
    { name: "GitHub", icon: (
      <svg className="w-10 h-10" viewBox="0 0 60 60">
        <path d={svgPaths.p3c46f000} fill="black" />
      </svg>
    ), category: "Tool" },
    { name: "AWS", icon: (
      <div className="w-12 h-10 flex items-center">
        <svg className="w-full h-full" viewBox="0 0 70 41.8597">
          <path d={svgPaths.p1a1b5b00} fill="#252F3E" />
          <path d={svgPaths.p7a18800} fill="#FF9900" />
        </svg>
      </div>
    ), category: "Cloud" },
    { name: "Kibana", icon: <img src={imgKibana} alt="Kibana" className="w-10 h-10 object-contain" />, category: "Data" },
    { name: "Superset", icon: <img src={imgSuperset} alt="Superset" className="w-10 h-10 object-contain" />, category: "Data" },
    { name: "Confluence", icon: <img src={imgConfluence} alt="Confluence" className="w-10 h-10 object-contain" />, category: "Tool" },
    { name: "Claude AI", icon: <Sparkles className="w-10 h-10 text-purple-500" />, category: "AI" },
    { name: "Postman", icon: (
      <svg className="w-10 h-10" viewBox="0 0 256 256">
        <path d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Z" fill="#FF6C37" />
        <path d="M164.5,103.5a7.99,7.99,0,0,1,0,11.31l-34.34,34.35a8,8,0,0,1-11.32,0l-14.34-14.34a8,8,0,0,1,11.32-11.32L124.5,132.19l28.69-28.69A7.99,7.99,0,0,1,164.5,103.5Z" fill="#FFFFFF" />
      </svg>
    ), category: "Tool" },
    { name: "SDK/API", icon: <Code2 className="w-10 h-10 text-emerald-500" />, category: "Dev" },
  ];

  const career = [
    {
      period: "2023.08 ~ 재직 중",
      company: "카카오엔터프라이즈",
      team: "클라우드서비스개발실",
      role: "· 카카오클라우드 Analytics 서비스 기획",
      isCurrent: true
    },
    {
      period: "2020.10 ~ 2023.07",
      company: "카카오엔터프라이즈",
      team: "카카오워크팀",
      role: "· 카카오워크 SaaS 서비스 기획"
    },
    {
      period: "2013.01 ~ 2020.09",
      company: "인포뱅크",
      team: "iMessage 사업부",
      role: "· 카카오톡 비즈메시지(알림톡, 친구톡, 브랜드톡)\n· 기업용 비즈메시지 개발 및 운영"
    }
  ];

  return (
    <div className="flex h-full bg-white text-slate-900">
      {/* Left Section: Profile & Info */}
      <div className="w-[380px] bg-slate-50 p-16 flex flex-col justify-between border-r border-slate-100 shrink-0">
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl font-black mb-4">Resume</h1>
            <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
          </div>

          <div className="space-y-10">
            <section className="space-y-5">
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Profile</h2>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900 leading-tight">이다예슬</p>
                    <p className="text-sm text-slate-500 font-medium">Dayeseul Lee</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-base font-bold text-slate-700">ldysgs0718@naver.com</p>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Education</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="py-0.5">
                    <p className="text-base font-bold text-slate-900">국민대학교</p>
                    <p className="text-xs text-slate-500 font-medium">컴퓨터공학과 학사 졸업</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="py-0.5">
                    <p className="text-base font-bold text-slate-900">서울 경인고등학교</p>
                    <p className="text-xs text-slate-500 font-medium">졸업</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          © 2026 Dayeseul Lee Portfolio
        </div>
      </div>

      {/* Right Section: Skills & Career */}
      <div className="flex-1 p-16 flex flex-col gap-12 overflow-y-auto">
        <div className="flex gap-16 h-full">
          {/* Left Column: Skills & Tools */}
          <section className="w-[420px] flex flex-col gap-8 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-200 shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">Skills & Tools</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="group p-5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="group-hover:scale-110 transition-transform duration-300 w-12 h-12 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <p className="text-xs font-black text-slate-800 tracking-tight">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Right Column: Career */}
          <section className="flex-1 flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-200 shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">Professional Experience</h2>
            </div>

            <div className="relative pl-10 space-y-14 before:absolute before:left-[13px] before:top-3 before:bottom-3 before:w-1 before:bg-slate-100">
              {career.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[33px] top-2 w-[18px] h-[18px] rounded-full border-4 border-white shadow-md z-10 ${item.isCurrent ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'}`} />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className={`text-xs font-black px-3 py-1 rounded-lg ${item.isCurrent ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-500'}`}>
                        {item.period}
                      </span>
                      <span className="text-2xl font-black text-slate-700 tracking-tight">{item.company}</span>
                    </div>
                    <div className="pl-0.5 space-y-3">
                      <p className="text-lg font-bold text-slate-600">{item.team}</p>
                      <div className="group/item relative">
                        <div className="text-slate-800 text-base leading-relaxed bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group-hover/item:border-blue-200 group-hover/item:shadow-md transition-all duration-300 inline-block whitespace-pre-line">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
