import React, { useState, useEffect, useRef } from 'react';

// --- 极简线条手绘风图标库 (Line Art Icons) ---
const Icons = {
  Paw: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c-4 0-7-3-7-7 0-3.5 3-6 7-6s7 2.5 7 6c0 4-3 7-7 7z" />
      <ellipse cx="5" cy="11" rx="2.5" ry="3.5" transform="rotate(-35 5 11)" />
      <ellipse cx="19" cy="11" rx="2.5" ry="3.5" transform="rotate(35 19 11)" />
      <ellipse cx="9" cy="6" rx="2.5" ry="3.8" transform="rotate(-15 9 6)" />
      <ellipse cx="15" cy="6" rx="2.5" ry="3.8" transform="rotate(15 15 6)" />
    </svg>
  ),
  CrossPaw: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c-4 0-7-3-7-7 0-3.5 3-6 7-6s7 2.5 7 6c0 4-3 7-7 7z" />
      <ellipse cx="5" cy="11" rx="2.5" ry="3.5" transform="rotate(-35 5 11)" />
      <ellipse cx="19" cy="11" rx="2.5" ry="3.5" transform="rotate(35 19 11)" />
      <ellipse cx="9" cy="6" rx="2.5" ry="3.8" transform="rotate(-15 9 6)" />
      <ellipse cx="15" cy="6" rx="2.5" ry="3.8" transform="rotate(15 15 6)" />
      <path d="M11 12H9v2h2v2h2v-2h2v-2h-2v-2h-2v2z" fill="#FDFBF7" />
    </svg>
  ),
  WeightScale: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <path d="M8 8h8v3H8z" fill="currentColor" fillOpacity="0.1" />
      <path d="M12 17c-.8 0-1.5-.5-1.5-1.2 0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3c0 .7-.7 1.2-1.5 1.2z" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="14" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Syringe: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2l-2 2M15 5l4 4M14 4l6 6" />
      <rect x="7" y="7" width="12" height="6" rx="2" transform="rotate(45 7 7)" />
      <path d="M4 20l2.5-2.5" />
      <path d="M17 3c1-1 2-1 3 0s1 2 0 3" />
    </svg>
  ),
  PeekingCat: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 22H2M4 22V14c0-4 4-7 8-7s8 3 8 7v8" />
      <path d="M5 12L3 4l6 4M19 12l2-8-6 4" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
      <path d="M12 17c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z" />
    </svg>
  ),
  Poop: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-1.5 0-2.5 1-2.5 2.5S11 7 12 8s2.5 1 2.5 2.5S13.5 13 12 13H8c-2 0-3.5 1.5-3.5 3.5S6 21 8.5 21h7c3 0 5-2 5-4.5 0-1.5-.5-2.5-1.5-3.5.5-.5 1-1.5 1-2.5 0-2-1.5-3.5-3.5-3.5-1 0-1.5.5-2 1 0-1-1-1.5-2.5-1.5z" />
      <path d="M9.5 16v.01M14.5 16v.01" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  Pee: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a6 6 0 006-6c0-4-6-10.5-6-10.5S6 12 6 16a6 6 0 006 6z" />
      <path d="M12 18v.01" />
    </svg>
  ),
  Water: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15h16v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2z" />
      <path d="M4 15c0-4 8-9 8-9s8 5 8 9" />
      <path d="M8 15h8" />
    </svg>
  ),
  Tail: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c0-5 3-7 3-11s-2-5-4-5-4 1-4 3 2 4 2 7" />
    </svg>
  ),
  Plus: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Check: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Alert: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  Edit: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  BandAid: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
      <rect x="9" y="10" width="6" height="4" rx="1" transform="rotate(-45 12 12)" stroke="none" fill="currentColor" opacity="0.15" />
      <circle cx="10.5" cy="10.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="13.5" r="0.5" fill="currentColor" stroke="none" />
      <path d="M7 11l-1 1M17 13l-1 1" opacity="0.5" />
    </svg>
  ),
  ChevronDown: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  Camera: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  ),
  Bowl: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13c0 4 4 7 9 7s9-3 9-7" />
      <path d="M3 13h18" />
      <path d="M8 8l1-2M12 9V6M16 8l-1-2" opacity="0.6" />
      <path d="M12 17c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1c0 .6-.4 1-1 1z" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Fish: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12c0 2.5-3 5-7 5s-9-2-9-5c0-3 5-5 9-5s7 2.5 7 5z" />
      <path d="M6 12L2 9v6l4-3z" />
      <circle cx="18" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  CatStick: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21h12a2 2 0 002-2V7L12 3 4 7v12a2 2 0 002 2z" />
      <path d="M4 7h16" />
      <path d="M9 13h6M9 17h6" opacity="0.4" />
    </svg>
  ),
  Can: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="7" rx="8" ry="3" />
      <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
      <ellipse cx="12" cy="7" rx="2" ry="1" opacity="0.7" />
      <path d="M12 7l1-2" opacity="0.7" />
      <path d="M4 14h16" opacity="0.5" />
    </svg>
  )
};

// --- 💩 排便量视觉递进手绘风 SVG 渲染器 ---
const PoopVolumeIcon = ({ scale = 1, showShockLines = false, isSelected = false }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* 惊人的多 - 经典 Snoopy 漫画夸张惊叹/动作线条 */}
      {showShockLines && (
        <svg className="absolute -top-3.5 -left-3.5 w-12 h-12 text-[#E8B042] pointer-events-none animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="4" y1="12" x2="1" y2="12" />
          <line x1="6" y1="6" x2="3" y2="3" />
          <line x1="12" y1="4" x2="12" y2="1" />
          <line x1="18" y1="6" x2="21" y2="3" />
          <line x1="20" y1="12" x2="23" y2="12" />
        </svg>
      )}
      {/* 极简手绘线条便便 */}
      <svg 
        className={`transition-all duration-300 transform ${isSelected ? 'scale-125 rotate-[6deg] text-[#8C7662]' : 'text-[#C9BFB5]'}`} 
        style={{ width: `${14 + scale * 5.5}px`, height: `${14 + scale * 5.5}px` }} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M12 3c-1.5 0-2.5 1-2.5 2.5S11 7 12 8s2.5 1 2.5 2.5S13.5 13 12 13H8c-2 0-3.5 1.5-3.5 3.5S6 21 8.5 21h7c3 0 5-2 5-4.5 0-1.5-.5-2.5-1.5-3.5" />
        <circle cx="9.5" cy="16" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="16" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
};

// --- 猫咪头像库 ---
const CatAvatars = {
  orange: ({ className = "" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 0 1 16 0c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#FFF4E5" /><path d="M4 11V5l4 3 4-1 4 1 4-3v6" /><path d="M10 6v3m2-3.5v4m2-3.5v3" stroke="#F5A623" opacity="0.6" /><circle cx="9" cy="11" r="1" fill="#4A443E" stroke="none" /><circle cx="15" cy="11" r="1" fill="#4A443E" stroke="none" /><path d="M12 13.5c-.5 0-1.5-.5-1.5-1m1.5 1c.5 0 1.5-.5 1.5-1" /></svg>),
  calico: ({ className = "" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 0 1 16 0c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#FDFBF7" /><path d="M4 11V5l4 3 4-1 4 1 4-3v6" /><path d="M4 11V5l4 3" fill="#F5A623" stroke="none" opacity="0.8" /><path d="M20 11V5l-4 3" fill="#4A443E" stroke="none" opacity="0.8" /><circle cx="9" cy="11" r="1" fill="#4A443E" stroke="none" /><circle cx="15" cy="11" r="1" fill="#4A443E" stroke="none" /><path d="M12 13.5c-.5 0-1.5-.5-1.5-1m1.5 1c.5 0 1.5-.5 1.5-1" /></svg>),
  tuxedo: ({ className = "" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 0 1 16 0c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#FDFBF7" /><path d="M4 11V5l4 3 4-1 4 1 4-3v6" /><path d="M4 11c0-4 3-7 8-7s8 3 8 7" fill="#4A443E" stroke="none" opacity="0.9" /><circle cx="9" cy="11" r="1" fill="#FDFBF7" stroke="none" /><circle cx="15" cy="11" r="1" fill="#FDFBF7" stroke="none" /><path d="M12 13.5c-.5 0-1.5-.5-1.5-1m1.5 1c.5 0 1.5-.5 1.5-1" stroke="#4A443E" /></svg>),
  shorthair: ({ className = "" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 0 1 16 0c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#F0EBE1" /><path d="M4 11V5l4 3 4-1 4 1 4-3v6" /><path d="M9 7l3 3 3-3" stroke="#8C8276" opacity="0.6" /><path d="M5 12h2m10 0h2" stroke="#8C8276" opacity="0.6" /><circle cx="9" cy="11" r="1" fill="#4A443E" stroke="none" /><circle cx="15" cy="11" r="1" fill="#4A443E" stroke="none" /><path d="M12 13.5c-.5 0-1.5-.5-1.5-1m1.5 1c.5 0 1.5-.5 1.5-1" /></svg>),
  ragdoll: ({ className = "" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 0 1 16 0c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#FDFBF7" /><path d="M3 11c0 5 4 9 9 9s9-4 9-9" strokeDasharray="2 2" /><path d="M4 11V5l4 3 4-1 4 1 4-3v6" fill="#8C8276" stroke="none" opacity="0.4" /><path d="M9 11c0-1.5 6-1.5 6 0 0 2-3 3-3 3s-3-1-3-3z" fill="#8C8276" stroke="none" opacity="0.3" /><circle cx="9" cy="11" r="1" fill="#6A98D7" stroke="none" /><circle cx="15" cy="11" r="1" fill="#6A98D7" stroke="none" /><path d="M12 13.5c-.5 0-1.5-.5-1.5-1m1.5 1c.5 0 1.5-.5 1.5-1" /></svg>)
};

const AVATAR_OPTIONS = [
  { id: 'orange', name: '橘猫' }, { id: 'calico', name: '三花' }, { id: 'tuxedo', name: '奶牛猫' },
  { id: 'shorthair', name: '美短' }, { id: 'ragdoll', name: '布偶猫' }
];

// --- 饮食结构配置 ---
const FOOD_CATEGORIES = {
  main: { label: '主粮', subs: ['干粮', '主食罐', '冻干'] },
  snack: { label: '零食', subs: ['猫条', '冻干零食', '猫草'] },
  supplement: { label: '营养品', subs: ['鱼油', '益生菌', '化毛膏'] }
};

// --- 健康异常标签分类配置 ---
const HEALTH_CATEGORIES = [
  { id: 'gastro', title: '肠胃与排异', tags: ['吐毛球', '吐未消化食物', '吐黄水', '流口水'] },
  { id: 'skin', title: '五官与皮肤', tags: ['猫癣', '黑下巴', '频繁甩头', '单眼流泪', '牙龈红肿'] },
  { id: 'stress', title: '情绪与应激', tags: ['大口喘气', '肉垫出汗', '躲藏不出', '过度舔毛'] },
  { id: 'others', title: '其他体征', tags: ['打喷嚏', '咳嗽', '精神不振', '食欲减退', '频繁蹲砂盆'] }
];
const URGENT_TAGS = ['大口喘气', '频繁蹲砂盆']; // 需柔和高亮的急症标签

// --- CSS 动画注入 ---
const injectStyles = () => {
  if (document.getElementById('cat-daily-styles')) return;
  const style = document.createElement('style');
  style.id = 'cat-daily-styles';
  style.innerHTML = `
    @keyframes wag { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-15deg); } 75% { transform: rotate(15deg); } }
    .animate-wag { animation: wag 0.8s ease-in-out; }
    
    @keyframes stamp { 0% { opacity: 0; transform: scale(2) rotate(-15deg); } 40%, 60% { opacity: 1; transform: scale(0.95) rotate(0deg); } 100% { opacity: 0; transform: scale(1) rotate(0deg); } }
    .animate-stamp { animation: stamp 1.2s forwards; }

    @keyframes float-bubble { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    .animate-float { animation: float-bubble 3s ease-in-out infinite; }
    
    /* 软糯闪烁发光膨胀动画 */
    @keyframes sparkle-pulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(217, 194, 126, 0.4); }
      50% { transform: scale(1.03); box-shadow: 0 0 15px 6px rgba(217, 194, 126, 0.25); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(217, 194, 126, 0); }
    }
    .animate-sparkle { animation: sparkle-pulse 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards; }

    /* 数字滚动动画 */
    @keyframes slide-number-up { 0% { transform: translateY(100%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
    @keyframes slide-number-down { 0% { transform: translateY(-100%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
    .slide-up-enter { animation: slide-number-up 0.2s ease-out forwards; }
    .slide-down-enter { animation: slide-number-down 0.2s ease-out forwards; }

    /* 下落动画 (食物) */
    @keyframes fall-down { 
      0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; } 
      80% { opacity: 1; }
      100% { transform: translateY(110vh) rotate(360deg); opacity: 0; } 
    }
    .falling-item { animation: fall-down 2.5s linear forwards; position: absolute; top: 0; }

    .jelly-touch { transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1); }
    .jelly-touch:active { transform: scale(0.94); filter: brightness(0.95); }
    
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;
  document.head.appendChild(style);
};

const DEFAULT_TAGS = {
  poop: ['完美条状', '干硬', '软便', '拉稀', '带毛发'],
  pee: ['量大', '量少', '颜色深', '颜色正常'],
  water: ['主动喝', '骗水', '没喝'],
};

const STORAGE_KEY = 'miao_daily_data';
const RECORD_SCOPES = ['single', 'multiple', 'shared', 'unknown'];

const createRecordId = () => `record_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

const buildOccurredAt = (date, time) => {
  const fallback = new Date().toISOString();
  if (!date) return fallback;
  const normalizedTime = typeof time === 'string' && /^\d{2}:\d{2}/.test(time) ? time.slice(0, 5) : '12:00';
  const parsed = new Date(`${date}T${normalizedTime}:00`);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed.toISOString();
};

const normalizeRecord = (record, fallback = {}) => {
  const date = record?.date || fallback.date || new Date().toLocaleDateString('en-CA');
  const time = record?.time || fallback.time || '--:--';
  const fallbackCatId = fallback.catId ? [fallback.catId] : [];
  const catIds = Array.isArray(record?.catIds) ? record.catIds.filter(Boolean) : fallbackCatId;
  const scope = RECORD_SCOPES.includes(record?.scope)
    ? record.scope
    : (catIds.length > 1 ? 'multiple' : catIds.length === 1 ? 'single' : 'unknown');

  return {
    id: record?.id || createRecordId(),
    occurredAt: record?.occurredAt || buildOccurredAt(date, time),
    date,
    time,
    type: record?.type || fallback.type || 'health',
    catIds,
    scope,
    tags: Array.isArray(record?.tags) ? record.tags : [],
    details: record?.details && typeof record.details === 'object' ? record.details : {},
    ...(record?.photo ? { photo: record.photo } : {})
  };
};

const migrateRecords = (records) => {
  if (Array.isArray(records)) {
    return records.filter(Boolean).map(record => normalizeRecord(record));
  }

  const migrated = [];
  if (!records || typeof records !== 'object') return migrated;

  Object.entries(records).forEach(([catId, dates]) => {
    if (!dates || typeof dates !== 'object') return;
    Object.entries(dates).forEach(([date, types]) => {
      if (!types || typeof types !== 'object') return;
      Object.entries(types).forEach(([type, recordList]) => {
        if (!Array.isArray(recordList)) return;
        recordList.filter(Boolean).forEach(record => {
          migrated.push(normalizeRecord(record, { catId, date, type }));
        });
      });
    });
  });

  return migrated;
};

const TYPE_INFO = {
  poop: { title: '拉粑粑', icon: Icons.Poop, color: 'text-[#8C7662]', bg: 'bg-[#F4EFE6]' },
  pee: { title: '尿尿', icon: Icons.Pee, color: 'text-[#E8B042]', bg: 'bg-[#FDF6E3]' },
  food: { title: '吃饭', icon: Icons.Bowl, color: 'text-[#E87A5D]', bg: 'bg-[#FFEDE8]' },
  water: { title: '喝水', icon: Icons.Water, color: 'text-[#6A98D7]', bg: 'bg-[#EAF2FF]' },
  nails: { title: '剪指甲', icon: Icons.Check, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  brush: { title: '梳毛', icon: Icons.Check, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  play: { title: '陪玩', icon: Icons.Check, color: 'text-[#6A98D7]', bg: 'bg-[#EAF2FF]' },
  wipe: { title: '擦眼泪', icon: Icons.Check, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  ear: { title: '洗耳朵', icon: Icons.Check, color: 'text-[#E8B042]', bg: 'bg-[#FDF6E3]' },
  teeth: { title: '刷牙', icon: Icons.Check, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  nail: { title: '剪指甲', icon: Icons.Check, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  paw: { title: '剃脚毛', icon: Icons.Check, color: 'text-[#8C7662]', bg: 'bg-[#F4EFE6]' },
  bath: { title: '洗澡', icon: Icons.Check, color: 'text-[#6A98D7]', bg: 'bg-[#EAF2FF]' },
  health: { title: '异常状况', icon: Icons.Alert, color: 'text-[#D36B4F]', bg: 'bg-[#FFEDE8]' },
  weight: { title: '体重', icon: Icons.WeightScale, color: 'text-[#8C7662]', bg: 'bg-[#F4EFE6]' },
  deworm: { title: '驱虫', icon: Icons.Syringe, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  vaccine: { title: '疫苗', icon: Icons.CrossPaw, color: 'text-[#D36B4F]', bg: 'bg-[#FFEDE8]' }
};

export default function App() {
  const [data, setData] = useState({ 
    cats: [{ id: '1', name: '毛孩子', avatar: 'orange' }], 
    records: [],
    health: {},
    brandHistory: [], 
    customFoodSubs: { main: [], snack: [], supplement: [] },
    customHealthTags: { gastro: [], skin: [], stress: [], others: [] },
    stocks: { food: '充足', litter: '一半', meds: '见底啦' }
  });
  const [currentCatId, setCurrentCatId] = useState('1');
  const [isHydrated, setIsHydrated] = useState(false);
  const [isWagging, setIsWagging] = useState(false);
  const [showStamp, setShowStamp] = useState({ show: false, type: 'normal' }); 
  
  // 顶层状态
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [catModal, setCatModal] = useState({ isOpen: false, mode: 'add', catId: null });
  const [catForm, setCatForm] = useState({ name: '', avatar: 'orange' });
  const [historyModalOpen, setHistoryModalOpen] = useState(false); 
  const [viewMode, setViewMode] = useState('cat');
  
  // 弹窗状态管理
  const [sheetConfig, setSheetConfig] = useState({ isOpen: false, type: null, title: '' });
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTags, setCustomTags] = useState({});
  const [newTagInput, setNewTagInput] = useState('');
  const [isAddingTag, setIsAddingTag] = useState(false);

  const [healthSheet, setHealthSheet] = useState({ isOpen: false, type: null, title: '' }); 
  const [healthInput, setHealthInput] = useState('');

  // 饮食专属状态
  const [foodState, setFoodState] = useState({ tab: 'main', subType: '干粮', brand: '', amount: 50 });
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState('up'); 
  const [fallingItems, setFallingItems] = useState([]); 
  const [isAddingFoodSub, setIsAddingFoodSub] = useState(false); 
  const [newFoodSubInput, setNewFoodSubInput] = useState(''); 

  // 异常与健康专属状态
  const [activeAccordion, setActiveAccordion] = useState('gastro');
  const [healthPhoto, setHealthPhoto] = useState(null); 
  const [addingHealthTagCatId, setAddingHealthTagCatId] = useState(null); 
  const [newHealthTagInput, setNewHealthTagInput] = useState(''); 

  // 💩 拉粑粑专属状态
  const [poopVolume, setPoopVolume] = useState('正常量');
  const [poopColor, setPoopColor] = useState('棕色正常');

  // 💧 尿尿专属状态
  const [peeSize, setPeeSize] = useState('网球大小 (正常)');
  const [selectedPeeStatus, setSelectedPeeStatus] = useState([]);

  // 记录归属独立于当前查看的猫咪。
  const [recordScope, setRecordScope] = useState('shared');
  const [selectedOwnerCatIds, setSelectedOwnerCatIds] = useState([]);
  const [isMultiOwnerMode, setIsMultiOwnerMode] = useState(false);

  // --- 🪮 🌟 日常护理区状态与逻辑 ---
  const [careRecords, setCareRecords] = useState(() => {
    try {
      const saved = localStorage.getItem('cat_care_records');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [sparkleId, setSparkleId] = useState(null);

  useEffect(() => {
    localStorage.setItem('cat_care_records', JSON.stringify(careRecords));
  }, [careRecords]);

  // 温柔的时间计算器
  const getTimeText = (timestamp) => {
    if (!timestamp) return "还没做过哦";
    const now = new Date().getTime();
    const diffDays = Math.floor((now - timestamp) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      const diffMinutes = Math.floor((now - timestamp) / (1000 * 60));
      return diffMinutes < 60 ? "刚刚" : "今天刚做过";
    }
    return `已过 ${diffDays} 天`;
  };

  // 判断是否需要“燕麦黄光晕”提醒
  const needsAttention = (timestamp, cycleDays) => {
    if (!timestamp) return true; // 没做过默认需要提醒
    const now = new Date().getTime();
    const diffDays = Math.floor((now - timestamp) / (1000 * 60 * 60 * 24));
    return diffDays >= cycleDays;
  };

  // 护理打卡动作
  const handleCareAction = (id, itemName) => {
    const now = new Date();
    const date = now.toLocaleDateString('en-CA');
    const time = now.toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit', hour12: false});

    // 1. 更新对应猫咪的这一项时间戳
    setCareRecords(prev => ({
      ...prev,
      [currentCatId]: {
        ...(prev[currentCatId] || {}),
        [id]: new Date().getTime()
      }
    }));

    // 2. 将这次护理活动自动记录并同步插入到今日动态时间轴上，带来闭环成就感！
    setData(prev => {
      const careRecord = normalizeRecord({
        id: createRecordId(),
        occurredAt: now.toISOString(),
        date,
        time,
        type: id,
        catIds: [currentCatId],
        scope: 'single',
        tags: ['已按时护理'],
        details: { itemName, completed: true }
      });
      return {
        ...prev,
        records: [...migrateRecords(prev.records), careRecord]
      };
    });

    setSparkleId(id); // 触发该卡片的星星动画
    setTimeout(() => setSparkleId(null), 1000); // 1秒后回收星星
  };

  // 护理项目配置表 (包含预设提醒周期)
  const CARE_MODULES = [
    {
      group: '基础互动',
      items: [
        { id: 'brush', name: '梳毛', icon: '🪮', cycle: 3 },
        { id: 'play', name: '陪玩', icon: '🧶', cycle: 1 }
      ]
    },
    {
      group: '面部清洁',
      items: [
        { id: 'wipe', name: '擦眼泪/下巴', icon: '☁️', cycle: 2 },
        { id: 'ear', name: '洗耳朵', icon: '💧', cycle: 14 },
        { id: 'teeth', name: '刷牙', icon: '🪥', cycle: 7 }
      ]
    },
    {
      group: '身体四肢',
      items: [
        { id: 'nail', name: '剪指甲', icon: '✂️', cycle: 14 },
        { id: 'paw', name: '剃脚毛', icon: '🐾', cycle: 30 },
        { id: 'bath', name: '洗澡', icon: '🛁', cycle: 180 }
      ]
    }
  ];

  useEffect(() => {
    injectStyles();
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        if (!Array.isArray(parsed.cats) || parsed.cats.length === 0) {
          parsed.cats = [{ id: '1', name: '毛孩子', avatar: 'orange' }];
        }
        if (!parsed.brandHistory || !Array.isArray(parsed.brandHistory)) parsed.brandHistory = [];
        if (!parsed.customFoodSubs || typeof parsed.customFoodSubs !== 'object') parsed.customFoodSubs = { main: [], snack: [], supplement: [] };
        if (!parsed.customHealthTags || typeof parsed.customHealthTags !== 'object') parsed.customHealthTags = { gastro: [], skin: [], stress: [], others: [] };
        if (!parsed.health || typeof parsed.health !== 'object') parsed.health = {};
        if (!parsed.stocks || typeof parsed.stocks !== 'object') {
          parsed.stocks = { food: '充足', litter: '一半', meds: '见底啦' };
        }
        parsed.records = migrateRecords(parsed.records);
        setData(parsed);
        if (parsed.cats && parsed.cats.length > 0) setCurrentCatId(parsed.cats[0].id);
      } catch (error) {
        console.warn('猫咪日常数据读取失败，已保留默认数据。', error);
      }
    }
    setIsHydrated(true);
    triggerWag();
  }, []);

  useEffect(() => {
    if (isHydrated && data.cats && data.cats.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, isHydrated]);

  const getToday = () => new Date().toLocaleDateString('en-CA'); 
  const today = getToday();

  // --- 触发小动画 ---
  const triggerWag = () => { setIsWagging(false); setTimeout(() => setIsWagging(true), 10); };

  // --- 饮食交互处理 ---
  const handleFoodAmountChange = (newAmount) => {
    if (newAmount < 0) return;
    setScrollDir(newAmount > foodState.amount ? 'up' : 'down');
    setFoodState(prev => ({ ...prev, amount: newAmount }));
  };

  const generateFallingItems = () => {
    const items = [];
    const count = Math.floor(Math.random() * 3) + 3; 
    for(let i=0; i<count; i++) {
      items.push({
        id: Date.now() + i,
        type: Math.random() > 0.5 ? 'Fish' : 'Can',
        left: `${10 + Math.random() * 80}%`, 
        delay: `${Math.random() * 0.5}s`,
        duration: `${2 + Math.random()}s`
      });
    }
    setFallingItems(items);
    setTimeout(() => setFallingItems([]), 3500); 
  };

  const getRecordAssignment = () => {
    if (recordScope === 'shared') return { scope: 'shared', catIds: [] };
    if (recordScope === 'unknown') return { scope: 'unknown', catIds: [] };

    const validCatIds = selectedOwnerCatIds.filter(id => data.cats?.some(cat => cat.id === id));
    if (recordScope === 'multiple') {
      return {
        scope: validCatIds.length > 1 ? 'multiple' : validCatIds.length === 1 ? 'single' : 'unknown',
        catIds: validCatIds
      };
    }

    return {
      scope: 'single',
      catIds: [validCatIds[0] || currentCatId].filter(Boolean)
    };
  };

  const getAssignmentLabel = (scope, catIds) => {
    if (scope === 'shared') return '🏠 共同 / 分不清';
    if (scope === 'unknown') return '☁️ 不确定是谁';
    const names = (catIds || [])
      .map(id => data.cats?.find(cat => cat.id === id)?.name)
      .filter(Boolean);
    if (scope === 'multiple') return `🐾 ${names.join('、') || '多只猫咪'}`;
    return `🐱 ${names[0] || '明确归属'}`;
  };

  // --- 核心记录保存 ---
  const saveRecord = () => {
    const requiresSelectedTags = !['food', 'poop', 'pee'].includes(sheetConfig.type);
    if (requiresSelectedTags && selectedTags.length === 0) return;
    
    let tagsToSave = selectedTags;
    let details = {};
    let newBrandHistory = [...(data.brandHistory || [])];
    const assignment = getRecordAssignment();

    // 如果是饮食模块，重组数据
    if (sheetConfig.type === 'food') {
      const brandStr = foodState.brand.trim() ? `[${foodState.brand.trim()}]` : '';
      tagsToSave = [
        `${foodState.subType}`,
        brandStr,
        foodState.amount > 0 ? `${foodState.amount}g` : ''
      ].filter(Boolean);
      details = {
        category: foodState.tab,
        subType: foodState.subType,
        brand: foodState.brand.trim(),
        amount: foodState.amount,
        unit: 'g'
      };

      if (foodState.brand.trim() && !newBrandHistory.includes(foodState.brand.trim())) {
        newBrandHistory = [foodState.brand.trim(), ...newBrandHistory].slice(0, 10); 
      }
    }

    // 如果是💩拉粑粑模块，重组复合多选与单选项数据
    if (sheetConfig.type === 'poop') {
      tagsToSave = [
        ...selectedTags,
        poopColor ? `颜色: ${poopColor}` : '',
        poopVolume ? `分量: ${poopVolume}` : ''
      ].filter(Boolean);
      details = { texture: selectedTags, color: poopColor, volume: poopVolume };
    }

    // 如果是尿尿模块，重组复合数据
    if (sheetConfig.type === 'pee') {
      tagsToSave = [
        `大小: ${peeSize}`,
        ...selectedPeeStatus
      ].filter(Boolean);
      details = { size: peeSize, statuses: selectedPeeStatus };
    }

    if (sheetConfig.type === 'health') {
      tagsToSave = [...selectedTags];
      details = { symptoms: selectedTags };
    }

    if (sheetConfig.type !== 'food' && sheetConfig.type !== 'poop' && sheetConfig.type !== 'pee' && sheetConfig.type !== 'health') {
      tagsToSave = [...selectedTags];
      details = { statuses: selectedTags };
    }

    const now = new Date();
    const date = now.toLocaleDateString('en-CA');
    const time = now.toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit', hour12: false});
    const newRecord = normalizeRecord({
      id: createRecordId(),
      occurredAt: now.toISOString(),
      date,
      time,
      type: sheetConfig.type,
      catIds: assignment.catIds,
      scope: assignment.scope,
      tags: tagsToSave,
      details,
      ...(healthPhoto && sheetConfig.type === 'health' ? { photo: healthPhoto } : {})
    });

    setData(prev => {
      return {
        ...prev,
        brandHistory: newBrandHistory,
        records: [...migrateRecords(prev.records), newRecord]
      };
    });
    
    setSheetConfig({ isOpen: false, type: null, title: '' });
    
    let stampType = 'normal';
    if (sheetConfig.type === 'health') stampType = 'bandaid';
    setShowStamp({ show: true, type: stampType });
    
    if (sheetConfig.type === 'food') {
      generateFallingItems();
    }
    
    setTimeout(() => setShowStamp({ show: false, type: stampType }), 1200);
  };

  // --- 健康专属（体重、驱虫、疫苗）记录保存 ---
  const saveHealthRecord = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-CA');
    const time = now.toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit', hour12: false});
    const recordType = healthSheet.type;
    if (recordType === 'weight' && Number.isNaN(parseFloat(healthInput))) return;
    const recordTags = recordType === 'weight'
      ? [`${parseFloat(healthInput)} kg`]
      : [recordType === 'deworm' ? '体内外驱虫' : '年度疫苗'];
    const details = recordType === 'weight'
      ? { weight: parseFloat(healthInput), unit: 'kg' }
      : { completed: true };

    setData(prev => {
      const currentHealth = prev.health?.[currentCatId] || { weights: [] };
      let newHealth = { ...currentHealth };

      if (healthSheet.type === 'weight') {
        const weightVal = parseFloat(healthInput);
        if (!isNaN(weightVal)) {
          const existingWeights = [...(newHealth.weights || [])];
          const todayIdx = existingWeights.findIndex(w => w.date === today);
          if (todayIdx > -1) existingWeights[todayIdx] = { date: today, weight: weightVal };
          else existingWeights.push({ date: today, weight: weightVal });
          existingWeights.sort((a, b) => new Date(a.date) - new Date(b.date));
          newHealth.weights = existingWeights;
        }
      } else if (healthSheet.type === 'deworm') {
        newHealth.lastDeworming = today;
      } else if (healthSheet.type === 'vaccine') {
        newHealth.lastVaccine = today;
      }

      return {
        ...prev,
        health: { ...prev.health, [currentCatId]: newHealth },
        records: [
          ...migrateRecords(prev.records),
          normalizeRecord({
            id: createRecordId(),
            occurredAt: now.toISOString(),
            date,
            time,
            type: recordType,
            catIds: [currentCatId],
            scope: 'single',
            tags: recordTags,
            details
          })
        ]
      };
    });
    setHealthSheet({ isOpen: false, type: null, title: '' });
    setShowStamp({ show: true, type: 'cross' }); 
    setTimeout(() => setShowStamp({ show: false, type: 'normal' }), 1200);
  };

  // --- 猫咪资料保存 ---
  const saveCatProfile = () => {
    if (!catForm.name || typeof catForm.name !== 'string' || !catForm.name.trim()) return;
    if (catModal.mode === 'add') {
      const newId = Date.now().toString();
      setData(prev => ({
        ...prev,
        cats: [...(prev.cats || []), { id: newId, name: catForm.name.trim(), avatar: catForm.avatar }]
      }));
      switchCat(newId);
    } else if (catModal.mode === 'edit') {
      setData(prev => ({
        ...prev,
        cats: (prev.cats || []).map(c => c.id === catModal.catId ? { ...c, name: catForm.name.trim(), avatar: catForm.avatar } : c)
      }));
    }
    setCatModal({ isOpen: false, mode: 'add', catId: null });
  };

  // --- Helpers ---
  const switchCat = (id) => {
    setCurrentCatId(id);
    setViewMode('cat');
    setIsDropdownOpen(false);
    triggerWag();
  };
  
  const openSheet = (type, title) => {
    setSheetConfig({ isOpen: true, type, title });
    const defaultsToShared = ['poop', 'pee', 'food', 'water'].includes(type);
    setRecordScope(defaultsToShared ? 'shared' : 'single');
    setSelectedOwnerCatIds(defaultsToShared ? [] : [currentCatId]);
    setIsMultiOwnerMode(false);
    if (type === 'food') {
      const defaultSub = FOOD_CATEGORIES['main'].subs[0];
      setFoodState({ tab: 'main', subType: defaultSub, brand: '', amount: 50 });
      setIsBrandDropdownOpen(false);
      setIsAddingFoodSub(false);
      setNewFoodSubInput('');
    } else if (type === 'health') {
      setSelectedTags([]);
      setHealthPhoto(null);
      setActiveAccordion('gastro');
      setAddingHealthTagCatId(null);
      setNewHealthTagInput('');
    } else if (type === 'poop') {
      setSelectedTags([]);
      setPoopVolume('正常量');
      setPoopColor('棕色正常');
    } else if (type === 'pee') {
      setPeeSize('网球大小 (正常)');
      setSelectedPeeStatus([]);
    } else {
      setSelectedTags([]);
      setIsAddingTag(false);
      setNewTagInput('');
    }
  };

  const openHealthSheet = (type, title) => {
    setHealthSheet({ isOpen: true, type, title });
    setHealthInput('');
  };

  const openAddCat = () => {
    setCatForm({ name: '', avatar: 'orange' });
    setCatModal({ isOpen: true, mode: 'add', catId: null });
    setIsDropdownOpen(false);
  };

  const openEditCat = (cat) => {
    setCatForm({ name: cat.name, avatar: cat.avatar || 'orange' });
    setCatModal({ isOpen: true, mode: 'edit', catId: cat.id });
    setIsDropdownOpen(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setHealthPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddCustomFoodSub = () => {
    if (newFoodSubInput.trim()) {
      const currentTab = foodState.tab;
      setData(prev => {
        const prevCustomFood = prev.customFoodSubs || { main: [], snack: [], supplement: [] };
        return {
          ...prev,
          customFoodSubs: {
            ...prevCustomFood,
            [currentTab]: [...(prevCustomFood[currentTab] || []), newFoodSubInput.trim()]
          }
        };
      });
      setFoodState(prev => ({ ...prev, subType: newFoodSubInput.trim() }));
      setNewFoodSubInput('');
      setIsAddingFoodSub(false);
    }
  };

  // 添加自定义症状标签
  const handleAddCustomHealthTag = (categoryId) => {
    if (newHealthTagInput.trim()) {
      setData(prev => {
        const prevCustomTags = prev.customHealthTags || { gastro: [], skin: [], stress: [], others: [] };
        return {
          ...prev,
          customHealthTags: {
            ...prevCustomTags,
            [categoryId]: [...(prevCustomTags[categoryId] || []), newHealthTagInput.trim()]
          }
        };
      });
      setSelectedTags(prev => [...prev, newHealthTagInput.trim()]);
      setNewHealthTagInput('');
      setAddingHealthTagCatId(null);
    }
  };

  const currentCat = (data.cats && data.cats.find(c => c.id === currentCatId)) || data.cats?.[0] || { id: '1', name: '毛孩子', avatar: 'orange' };
  const CurrentCatAvatar = CatAvatars[currentCat?.avatar] || CatAvatars.orange;

  const allRecords = migrateRecords(data.records);
  const isRecordVisibleInView = (record, mode = viewMode, catId = currentCatId) => {
    if (mode === 'family') return true;
    if (record.scope === 'unknown') return false;
    if (record.scope === 'shared') return true;
    return Array.isArray(record.catIds) && record.catIds.includes(catId);
  };
  const visibleRecords = allRecords.filter(record => isRecordVisibleInView(record));
  const todayVisibleRecords = visibleRecords.filter(record => record.date === today);
  const progressCount = ['poop', 'pee', 'food', 'water'].filter(type => todayVisibleRecords.some(record => record.type === type)).length;
  const progressPercentage = (progressCount / 4) * 100;
  const todaySummary = {
    explicit: todayVisibleRecords.filter(record => record.scope === 'single').length,
    shared: todayVisibleRecords.filter(record => record.scope === 'shared' || record.scope === 'multiple').length,
    unknown: todayVisibleRecords.filter(record => record.scope === 'unknown').length,
    health: todayVisibleRecords.filter(record => record.type === 'health').length
  };
  
  // 医疗数据指标
  const healthData = data.health?.[currentCatId] || {};
  const weightHistory = Array.isArray(healthData.weights) ? healthData.weights : [];
  const currentWeight = weightHistory.length > 0 ? weightHistory[weightHistory.length - 1].weight : null;

  // 生成平滑的软糖拉丝贝塞尔曲线
  const generateSmoothCurve = (dataArray) => {
    if (!Array.isArray(dataArray) || dataArray.length < 2) return "";
    const recent = dataArray.slice(-7); 
    const validWeights = recent.map(d => parseFloat(d.weight)).filter(w => !isNaN(w));
    if (validWeights.length < 2) return "";
    
    const minW = Math.min(...validWeights);
    const maxW = Math.max(...validWeights);
    const range = (maxW - minW) || 1; 
    
    const width = 100, height = 30; 
    
    const points = recent
      .map(d => ({ ...d, weight: parseFloat(d.weight) }))
      .filter(d => !isNaN(d.weight))
      .map((d, i, arr) => ({
        x: i * (width / (arr.length - 1)),
        y: height - ((d.weight - minW) / range) * (height - 4) - 2 
      }));

    if (points.length < 2) return "";

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const cX = (p0.x + p1.x) / 2;
      d += ` C ${cX} ${p0.y}, ${cX} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  };
  const weightCurvePath = generateSmoothCurve(weightHistory);

  const calculateDaysPassed = (dateStr) => {
    if (!dateStr) return null;
    const diffTime = new Date(today).getTime() - new Date(dateStr).getTime();
    return Math.max(0, Math.floor(diffTime / (1000 * 3600 * 24)));
  };

  const getRingColor = (percent) => {
    if (percent < 60) return '#A3BCA7'; 
    if (percent < 90) return '#E8B042'; 
    return '#D36B4F'; 
  };

  // 驱虫/疫苗圆环倒计时数据
  const dewormDays = calculateDaysPassed(healthData.lastDeworming);
  const dewormPercent = dewormDays !== null ? Math.min(100, (dewormDays / 30) * 100) : 0;
  const dewormColor = getRingColor(dewormPercent);
  const dewormRadius = 40;
  const dewormCircumference = 2 * Math.PI * dewormRadius;

  const vaccineDays = calculateDaysPassed(healthData.lastVaccine);
  const vaccinePercent = vaccineDays !== null ? Math.min(100, (vaccineDays / 365) * 100) : 0;
  const vaccineColor = getRingColor(vaccinePercent);
  const vaccineRadius = 26;
  const vaccineCircumference = 2 * Math.PI * vaccineRadius;
  const showDewormAlert = dewormDays !== null && dewormDays >= 30;

  // 当前视角只负责筛选，记录归属由 scope 与 catIds 决定。
  const getTimelineEvents = (dateStr, mode = viewMode, catId = currentCatId) => {
    return allRecords
      .filter(record => record.date === dateStr && isRecordVisibleInView(record, mode, catId))
      .sort((a, b) => (a.occurredAt || '').localeCompare(b.occurredAt || ''));
  };
  const todayTimelineEvents = getTimelineEvents(today);
  const sortedHistoryDates = [...new Set(visibleRecords.map(record => record.date).filter(Boolean))]
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  const selectSingleOwner = (catId) => {
    setRecordScope('single');
    setSelectedOwnerCatIds([catId]);
    setIsMultiOwnerMode(false);
  };

  const toggleMultipleOwner = (catId) => {
    setRecordScope('multiple');
    setIsMultiOwnerMode(true);
    setSelectedOwnerCatIds(prev => prev.includes(catId) ? prev.filter(id => id !== catId) : [...prev, catId]);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A443E] font-sans selection:bg-[#E8DCC8] relative overflow-x-hidden">
      
      {/* 盖章动画层 */}
      {showStamp.show && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="animate-stamp text-[#D29E7A]">
            {showStamp.type === 'cross' ? <Icons.CrossPaw className="w-32 h-32 opacity-90" /> : 
             showStamp.type === 'bandaid' ? <Icons.BandAid className="w-32 h-32 text-[#D36B4F] opacity-90" /> :
             <Icons.Paw className="w-32 h-32 opacity-80" />}
          </div>
        </div>
      )}

      {/* 食物掉落动画层 */}
      {fallingItems.length > 0 && (
        <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
          {fallingItems.map(item => {
            const Icon = Icons[item.type];
            return (
              <div 
                key={item.id} 
                className="falling-item text-[#D29E7A] opacity-60"
                style={{ left: item.left, animationDelay: item.delay, animationDuration: item.duration }}
              >
                <Icon className="w-10 h-10" />
              </div>
            );
          })}
        </div>
      )}

      <div className="max-w-md mx-auto min-h-screen relative shadow-[0_0_40px_rgba(0,0,0,0.02)] bg-[#FDFBF7] pb-10">
        
        {/* --- Top Navbar --- */}
        <header className="pt-10 pb-6 px-6 flex justify-between items-center sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-sm z-20">
          <div className="relative z-30">
            <div className="flex items-center gap-3 cursor-pointer jelly-touch" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#5D554D] border-2 border-white shadow-sm overflow-hidden">
                {viewMode === 'family' ? <Icons.Paw className="w-6 h-6 text-[#D29E7A]" /> : <CurrentCatAvatar className="w-8 h-8" />}
              </div>
              <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#5D554D] to-[#8C8276] flex items-center gap-2">
                {viewMode === 'family' ? '全家小日子' : currentCat?.name}
                {viewMode === 'cat' && (
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      openEditCat(currentCat); 
                    }} 
                    className="p-1.5 text-[#A9A096] hover:text-[#D29E7A] rounded-full hover:bg-white/80 transition-colors jelly-touch"
                    title="捏脸或修改名字花色"
                  >
                    <Icons.Edit className="w-4 h-4" />
                  </button>
                )}
              </h1>
              <div className={`text-[#8C8276] origin-bottom ${isWagging ? 'animate-wag' : ''}`}><Icons.Tail className="w-6 h-6" /></div>
            </div>
            
            {/* 下拉菜单 */}
            {isDropdownOpen && data.cats && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-[24px] shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-[#F0EBE1] p-2 z-30">
                <div className="p-1 max-h-[30vh] overflow-y-auto no-scrollbar">
                  <div className="flex items-center px-3 py-3 rounded-[16px] mb-1 hover:bg-[#F9F7F3] transition-colors cursor-pointer" onClick={() => { setViewMode('family'); setIsDropdownOpen(false); triggerWag(); }}>
                    <div className="w-7 h-7 rounded-full bg-[#F4EFE6] flex items-center justify-center mr-3">
                      <Icons.Paw className="w-4 h-4 text-[#D29E7A]" />
                    </div>
                    <span className={`font-semibold text-sm ${viewMode === 'family' ? 'text-[#4A443E]' : 'text-[#8C8276]'}`}>全家小日子</span>
                  </div>
                  {data.cats.map(cat => (
                    <div key={cat.id} className="flex items-center justify-between px-3 py-2 rounded-[16px] mb-1 hover:bg-[#F9F7F3] transition-colors">
                      <div className="flex items-center flex-1 py-1 cursor-pointer" onClick={() => switchCat(cat.id)}>
                        {React.createElement(CatAvatars[cat.avatar] || CatAvatars.orange, { className: "w-7 h-7 text-[#5D554D] mr-3" })}
                        <span className={`font-semibold text-sm ${viewMode === 'cat' && cat.id === currentCatId ? 'text-[#4A443E]' : 'text-[#8C8276]'}`}>{cat.name}</span>
                      </div>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          openEditCat(cat); 
                        }} 
                        className="p-2 text-[#A9A096] hover:text-[#D29E7A] jelly-touch"
                      >
                        <Icons.Edit className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-[#F0EBE1] my-1" />
                <div onClick={openAddCat} className="px-4 py-3 text-[#D29E7A] flex items-center gap-2 jelly-touch cursor-pointer hover:bg-[#F9F7F3] rounded-[16px] font-semibold text-sm">
                  <Icons.Plus className="w-4 h-4" /> 迎接新主子
                </div>
              </div>
            )}
          </div>
          {isDropdownOpen && <div className="fixed inset-0 z-20" onClick={() => setIsDropdownOpen(false)} />}
        </header>

        {/* --- 今日日期显示 --- */}
        <div className="text-center mb-6 mt-1">
          <span className="bg-[#F4EFE6]/80 text-[#8C8276] px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
             {`${new Date().getMonth() + 1}月${new Date().getDate()}日 ${['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date().getDay()]}`}
          </span>
        </div>

        <div className="px-6 mb-4">
          <div className="flex bg-[#F4EFE6]/70 rounded-full p-1">
            <button
              onClick={() => setViewMode('cat')}
              className={`jelly-touch flex-1 py-2 rounded-full text-xs font-bold transition-all ${viewMode === 'cat' ? 'bg-white text-[#5D554D] shadow-sm' : 'text-[#A9A096]'}`}
            >
              {currentCat?.name}的记录
            </button>
            <button
              onClick={() => setViewMode('family')}
              className={`jelly-touch flex-1 py-2 rounded-full text-xs font-bold transition-all ${viewMode === 'family' ? 'bg-white text-[#5D554D] shadow-sm' : 'text-[#A9A096]'}`}
            >
              全家记录
            </button>
          </div>
        </div>

        {/* --- 当前视角的今日归属摘要 --- */}
        <section className="px-6 mb-6">
          <div className="bg-white rounded-[24px] border border-[#F0EBE1] p-3 shadow-[0_4px_18px_rgb(0,0,0,0.025)]">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-bold text-[#8C8276]">{viewMode === 'family' ? '今日家庭记录' : `与${currentCat?.name}相关`}</span>
              <span className="text-[10px] text-[#A9A096]">{viewMode === 'family' ? '共同与待确认都会收在这里' : '包含明确归属与共同记录'}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-[16px] bg-[#F9F7F3] py-2.5 text-center">
                <div className="text-lg font-bold text-[#5D554D]">{todaySummary.explicit}</div>
                <div className="text-[10px] text-[#A9A096]">明确记录</div>
              </div>
              <div className="rounded-[16px] bg-[#F4EFE6] py-2.5 text-center">
                <div className="text-lg font-bold text-[#8C7662]">{todaySummary.shared}</div>
                <div className="text-[10px] text-[#A9A096]">共同 / 多猫</div>
              </div>
              <div className="rounded-[16px] bg-[#FFF4E5]/70 py-2.5 text-center">
                <div className="text-lg font-bold text-[#D29E7A]">{viewMode === 'family' ? todaySummary.unknown : todaySummary.health}</div>
                <div className="text-[10px] text-[#A9A096]">{viewMode === 'family' ? '待确认' : '异常记录'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 每日照顾进度环 --- */}
        <section className="px-6 flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90 absolute inset-0"><circle cx="64" cy="64" r="46" fill="transparent" stroke="#F0EBE1" strokeWidth="8" strokeLinecap="round" /></svg>
            <svg className="w-full h-full transform -rotate-90 absolute inset-0"><circle cx="64" cy="64" r="46" fill="transparent" stroke={progressPercentage === 100 ? "#A3BCA7" : "#D29E7A"} strokeWidth="8" strokeLinecap="round" strokeDasharray={2 * Math.PI * 46} strokeDashoffset={(2 * Math.PI * 46) - (progressPercentage / 100) * (2 * Math.PI * 46)} className="transition-all duration-700 ease-out" /></svg>
            <div className="text-center flex flex-col items-center justify-center z-10">
              {progressPercentage === 100 ? <Icons.Check className="w-8 h-8 text-[#A3BCA7] mb-1" /> : <span className="text-3xl font-bold text-[#5D554D]">{progressCount}<span className="text-lg text-[#A9A096]">/4</span></span>}
            </div>
          </div>
          <p className="mt-3 text-sm text-[#8C8276] font-medium tracking-wide">今日主线任务</p>
        </section>

        {/* --- 高频日常打卡区 --- */}
        <section className="px-6 grid grid-cols-2 gap-4 mb-8">
          {[
            { id: 'poop', title: '拉粑粑', icon: Icons.Poop, done: todayVisibleRecords.some(record => record.type === 'poop') },
            { id: 'pee', title: '尿尿', icon: Icons.Pee, done: todayVisibleRecords.some(record => record.type === 'pee') },
            { id: 'food', title: '吃饭', icon: Icons.Bowl, done: todayVisibleRecords.some(record => record.type === 'food') },
            { id: 'water', title: '喝水', icon: Icons.Water, done: todayVisibleRecords.some(record => record.type === 'water') }
          ].map((item) => (
            <button key={item.id} onClick={() => openSheet(item.id, `记录${item.title}`)} className={`jelly-touch relative overflow-hidden rounded-[28px] p-5 aspect-square flex flex-col items-center justify-center gap-3 transition-colors duration-300 ${item.done ? 'bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-2 border-[#EAE3D9]' : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent'}`}>
              <div className={`p-3 rounded-full ${item.done ? 'bg-[#F9F7F3] text-[#A9A096]' : 'bg-[#F4EFE6] text-[#5D554D]'}`}><item.icon className="w-8 h-8" /></div>
              <span className={`font-medium ${item.done ? 'text-[#8C8276]' : 'text-[#4A443E]'}`}>{item.title}</span>
              {item.done && <div className="absolute top-4 right-4 text-[#A3BCA7]"><Icons.Check className="w-5 h-5" /></div>}
            </button>
          ))}
        </section>

        {/* --- 🌟 日常护理日程管理区 (CARE_MODULES) --- */}
        <section className="px-6 mb-8">
          <h2 className="text-[15px] text-[#8C8276] font-bold mb-4 px-1 flex items-center gap-1.5">
            <span>🧼</span> 日常护理日程
            {viewMode === 'family' && <span className="ml-auto text-[10px] font-medium text-[#A9A096]">当前护理对象：{currentCat?.name}</span>}
          </h2>
          <div className="space-y-4">
            {CARE_MODULES.map(group => (
              <div key={group.group} className="space-y-2.5">
                <h3 className="text-[11px] font-bold text-[#A9A096] px-1 uppercase tracking-wider">{group.group}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.items.map(item => {
                    const catCare = careRecords[currentCatId] || {};
                    const lastDone = catCare[item.id];
                    const timeText = getTimeText(lastDone);
                    const attention = needsAttention(lastDone, item.cycle);
                    const isSparkling = sparkleId === item.id;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleCareAction(item.id, item.name)}
                        className={`jelly-touch relative overflow-hidden p-4 rounded-[26px] border flex flex-col gap-1.5 text-left transition-all duration-300 ${
                          isSparkling 
                            ? 'animate-sparkle' 
                            : attention 
                              ? 'bg-[#FFF9EE] border-[#F2E5D0] shadow-[0_4px_15px_rgba(217,194,126,0.1)]' 
                              : 'bg-white border-[#F0EBE1] shadow-sm'
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xl">{item.icon}</span>
                          {/* 燕麦黄光晕气泡提示 */}
                          {attention && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9C27E] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9C27E]"></span>
                            </span>
                          )}
                        </div>
                        
                        <div className="mt-1">
                          <div className="font-bold text-xs text-[#4A443E]">{item.name}</div>
                          <div className={`text-[10px] font-medium mt-0.5 ${attention ? 'text-[#A68F54]' : 'text-[#A9A096]'}`}>
                            {timeText}
                          </div>
                        </div>

                        {/* 星星闪烁微动画叠加层 */}
                        {isSparkling && (
                          <div className="absolute inset-0 bg-white/70 flex items-center justify-center pointer-events-none">
                            <span className="text-lg animate-bounce">✨</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 医疗与健康档案卡片 (Health Passport) --- */}
        <section className="px-6 mb-8">
          <h2 className="text-[16px] font-bold text-[#5D554D] flex items-center gap-1.5 mb-3 px-1">
             <Icons.CrossPaw className="w-4 h-4 text-[#D36B4F] opacity-80" /> 医疗与健康档案
             {viewMode === 'family' && <span className="ml-auto text-[10px] font-medium text-[#A9A096]">当前：{currentCat?.name}</span>}
          </h2>

          <div className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-[#F0EBE1] flex flex-col gap-6 relative overflow-hidden">
            
            {/* 1. 体重追踪 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-[#F4EFE6] rounded-xl text-[#8C7662]">
                    <Icons.WeightScale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A9A096] block mb-0.5">当前体重</span>
                    <span className="text-xl font-bold text-[#4A443E]">
                      {currentWeight ? `${currentWeight} kg` : <span className="text-sm font-normal text-[#D29E7A]">尚未记录</span>}
                    </span>
                  </div>
                </div>
                <button onClick={() => openHealthSheet('weight', '记录体重')} className="jelly-touch px-4 py-2 bg-[#F9F7F3] text-[#8C8276] text-xs font-semibold rounded-full border border-[#EAE3D9]">
                  记录
                </button>
              </div>

              {/* 软糖变化曲线 */}
              <div className="h-10 w-full mt-2 relative rounded-xl bg-gradient-to-b from-[#FDFBF7] to-transparent">
                {weightHistory.length >= 2 ? (
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path 
                      d={weightCurvePath} 
                      fill="none" 
                      stroke="#D29E7A" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="drop-shadow-[0_4px_4px_rgba(210,158,122,0.3)]"
                    />
                  </svg>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-[#EAE3D9]">至少记录两次体重生成曲线</div>
                )}
              </div>
            </div>

            <div className="h-px bg-[#F0EBE1]/60 w-full" />

            {/* 2. 预防周期环 */}
            <div className="flex items-center gap-5 relative">
              <div className="relative w-24 h-24 flex-shrink-0">
                {/* 驱虫 (外环) */}
                <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                  <circle cx="48" cy="48" r={dewormRadius} fill="transparent" stroke="#F4EFE6" strokeWidth="6.5" strokeLinecap="round" />
                </svg>
                <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                  <circle cx="48" cy="48" r={dewormRadius} fill="transparent" stroke={healthData.lastDeworming ? dewormColor : 'transparent'} strokeWidth="6.5" strokeLinecap="round" strokeDasharray={dewormCircumference} strokeDashoffset={dewormCircumference - (dewormPercent / 100) * dewormCircumference} className="transition-all duration-1000 ease-out" />
                </svg>

                {/* 疫苗 (内环) */}
                <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                  <circle cx="48" cy="48" r={vaccineRadius} fill="transparent" stroke="#F4EFE6" strokeWidth="6.5" strokeLinecap="round" />
                </svg>
                <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                  <circle cx="48" cy="48" r={vaccineRadius} fill="transparent" stroke={healthData.lastVaccine ? vaccineColor : 'transparent'} strokeWidth="6.5" strokeLinecap="round" strokeDasharray={vaccineCircumference} strokeDashoffset={vaccineCircumference - (vaccinePercent / 100) * vaccineCircumference} className="transition-all duration-1000 ease-out" />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icons.Syringe className="w-5 h-5 text-[#8C8276] opacity-60" />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-3.5 relative z-10">
                <div className="flex items-center justify-between cursor-pointer jelly-touch" onClick={() => openHealthSheet('deworm', '更新驱虫记录')}>
                  <div>
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{backgroundColor: dewormColor}}></div><span className="text-sm font-semibold text-[#5D554D]">体内外驱虫</span></div>
                    <div className="text-xs text-[#A9A096] mt-0.5 ml-3.5">{dewormDays !== null ? `已过 ${dewormDays} 天` : '无记录'} (周期: 30天)</div>
                  </div>
                  <span className="text-[#A9A096] text-xs font-semibold">记录</span>
                </div>
                
                <div className="flex items-center justify-between cursor-pointer jelly-touch" onClick={() => openHealthSheet('vaccine', '更新疫苗记录')}>
                  <div>
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{backgroundColor: vaccineColor}}></div><span className="text-sm font-semibold text-[#5D554D]">年度疫苗</span></div>
                    <div className="text-xs text-[#A9A096] mt-0.5 ml-3.5">{vaccineDays !== null ? `已过 ${vaccineDays} 天` : '无记录'} (周期: 365天)</div>
                  </div>
                  <span className="text-[#A9A096] text-xs font-semibold">记录</span>
                </div>
              </div>

              {/* 提醒气泡 */}
              {showDewormAlert && (
                <div className="absolute -top-12 right-0 flex flex-col items-end animate-float pointer-events-none z-10">
                  <div className="bg-white px-3.5 py-2 rounded-[14px] rounded-br-sm shadow-[0_4px_15px_rgba(211,107,79,0.15)] border border-[#FFEDE8] mb-1">
                    <span className="text-xs font-semibold text-[#D36B4F]">该驱虫啦～</span>
                  </div>
                  <Icons.PeekingCat className="w-6 h-6 text-[#D36B4F] mr-1 opacity-80" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- 偶发与异常记录区 (健康警报) --- */}
        <section className="px-6 mb-8">
          <div className="bg-[#FFF4E5]/60 rounded-[28px] p-5 flex items-center justify-between border border-[#FFE4C4]/50">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FFB677]/20 rounded-xl text-[#E87D5D]">
                <Icons.Alert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#D36B4F]">发现异常状况？</h3>
                <p className="text-xs text-[#D36B4F]/70 mt-0.5">呕吐、软便、精神不佳等</p>
              </div>
            </div>
            <button onClick={() => openSheet('health', '记录异常情况')} className="jelly-touch px-4 py-2 bg-[#FFB677] text-white rounded-2xl font-semibold shadow-sm shadow-[#FFB677]/30 text-sm">
              记录
            </button>
          </div>
        </section>

        {/* --- 📦 小猫储物柜 (消耗品管理) 模块 --- */}
        <section className="px-6 mb-8">
          <div className="bg-[#F8F5F0]/40 rounded-[32px] p-5 border border-[#F0EBE1] shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <h2 className="text-sm font-bold mb-4 ml-1 flex items-center gap-2 text-[#A9A096]">
              {/* 极简手绘风的纸箱小图标 */}
              <svg width="16" height="16" viewBox="0 0 24 24" className="stroke-[#A9A096] stroke-2 fill-none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              后勤储物柜
            </h2>
            
            <div className="flex flex-col gap-3">
              {[
                { id: 'food', name: '猫粮 / 主食罐', icon: '🥣' },
                { id: 'litter', name: '猫砂', icon: '🚽' },
                { id: 'meds', name: '驱虫药 / 备用药', icon: '💊' }
              ].map(item => {
                const currentStock = (data.stocks && data.stocks[item.id]) || '充足';
                
                return (
                  <div key={item.id} className="jelly-card bg-white p-4 rounded-[24px] border border-[#F0EBE1] flex flex-col gap-3 shadow-sm transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#4A443E] text-sm flex items-center gap-2">
                        <span className="text-base">{item.icon}</span>
                        {item.name}
                      </span>
                      {/* 如果见底了，显示一个可爱的小提示 */}
                      {currentStock === '见底啦' && (
                        <span className="text-[10px] font-bold text-[#D36B4F] bg-[#FDF0ED] px-2 py-1 rounded-md animate-pulse">
                          该进货啦！
                        </span>
                      )}
                    </div>
                    
                    {/* 存量状态选择器 (三段式软糖胶囊) */}
                    <div className="flex bg-[#F8F5F0] rounded-full p-1 relative">
                      {[
                        { label: '满满当当', status: '充足', color: 'bg-[#A3BCA7]', text: 'text-[#4A5D4E]' }, 
                        { label: '吃掉一半', status: '一半', color: 'bg-[#D9C27E]', text: 'text-[#6A5A30]' }, 
                        { label: '见底啦', status: '见底啦', color: 'bg-[#D36B4F]', text: 'text-white' } 
                      ].map(level => {
                        const isActive = currentStock === level.status;
                        return (
                          <button
                            key={level.status}
                            onClick={() => {
                              setData(prev => ({
                                ...prev,
                                stocks: {
                                  ...(prev.stocks || { food: '充足', litter: '一半', meds: '见底啦' }),
                                  [item.id]: level.status
                                }
                              }));
                            }}
                            className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all duration-300 jelly-touch ${
                              isActive 
                                ? `${level.color} ${level.text} shadow-sm transform scale-105` 
                                : 'text-[#A9A096] hover:bg-[#F0EBE1]/80'
                            }`}
                          >
                            {level.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- 今日动态区 (时间轴) --- */}
        <section className="px-6 mb-12">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-bold text-[#5D554D]">{viewMode === 'family' ? '今日家庭动态' : '今日动态'}</h2>
            <button onClick={() => setHistoryModalOpen(true)} className="text-[13px] text-[#A9A096] flex items-center gap-0.5 jelly-touch hover:text-[#D29E7A] transition-colors">
              查看历史记录 <Icons.Check className="w-4 h-4 rotate-[-90deg] -ml-0.5" />
            </button>
          </div>

          <div className="space-y-4">
            {todayTimelineEvents.length === 0 ? (
               <div className="text-center py-8 text-[#A9A096] text-sm bg-white/50 rounded-[24px] border border-[#F0EBE1] border-dashed">
                 今天还没有日常打卡哦～
               </div>
            ) : (
               todayTimelineEvents.map((event, idx) => {
                 const info = TYPE_INFO[event.type] || TYPE_INFO.health;
                 const Icon = info.icon;
                 return (
                   <div key={event.id || `timeline-${idx}`} className="flex gap-4 items-start relative">
                     <div className="flex flex-col items-center mt-0.5">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center ${info.bg} ${info.color} shadow-sm z-10 relative`}><Icon className="w-5 h-5" /></div>
                       {idx !== todayTimelineEvents.length - 1 && <div className="w-px h-full min-h-[30px] bg-gradient-to-b from-[#EAE3D9] to-transparent my-1 absolute top-10" />}
                     </div>
                     <div className="flex-1 pb-5 pt-2">
                       <div className="flex items-baseline gap-2 mb-2">
                         <span className="font-bold text-[#4A443E] text-[15px]">{info.title}</span>
                         <span className="text-xs text-[#A9A096] font-medium bg-white px-2 py-0.5 rounded-md border border-[#F0EBE1]/50 shadow-sm">{event.time}</span>
                       </div>
                       <div className="mb-2">
                         <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                           event.scope === 'unknown' ? 'bg-[#FFF4E5] text-[#D29E7A]' :
                           event.scope === 'shared' ? 'bg-[#F4EFE6] text-[#8C7662]' :
                           event.scope === 'multiple' ? 'bg-[#F0F5F1] text-[#708875]' :
                           'bg-[#F9F7F3] text-[#8C8276]'
                         }`}>
                           {getAssignmentLabel(event.scope, event.catIds)}
                         </span>
                       </div>
                       <div className="flex flex-wrap gap-2">
                         {event.tags && Array.isArray(event.tags) && event.tags.map((tag, tIdx) => (
                           <span key={`tag-${tag}-${tIdx}`} className="px-3 py-1 bg-white border border-[#F0EBE1] text-[#8C8276] text-xs rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.02)]">{tag}</span>
                         ))}
                       </div>
                       {event.photo && (
                         <div className="mt-3 w-16 h-16 rounded-[12px] overflow-hidden border border-[#F0EBE1] shadow-[0_4px_15px_rgba(0,0,0,0.03)] cursor-pointer hover:scale-105 transition-transform">
                           <img src={event.photo} alt="患处记录" className="w-full h-full object-cover" />
                         </div>
                       )}
                     </div>
                   </div>
                 )
               })
            )}
          </div>
        </section>

        {/* --- 通用/饮食/健康异常 Bottom Sheet 容器 --- */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${sheetConfig.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setSheetConfig({isOpen: false})} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.08)] transition-transform duration-400 cubic-bezier(0.2, 0.8, 0.2, 1) ${sheetConfig.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10">
              <div className="w-12 h-1.5 bg-[#F0EBE1] rounded-full mx-auto mb-6" />
              
              {/* 记录归属选择器 */}
              {sheetConfig.isOpen && (
                <div className="mb-4 pb-4 border-b border-[#F0EBE1]/50">
                  <div className="flex items-start justify-between gap-3 px-1 mb-3">
                    <div>
                      <label className="text-sm text-[#5D554D] font-bold block">这次是谁呀？</label>
                      <p className="text-[10px] text-[#A9A096] mt-1">分不清也没关系，先记下来就很好。</p>
                    </div>
                    <button
                      onClick={() => {
                        setIsMultiOwnerMode(!isMultiOwnerMode);
                        setRecordScope(!isMultiOwnerMode ? 'multiple' : 'single');
                        setSelectedOwnerCatIds(!isMultiOwnerMode ? [] : [currentCatId]);
                      }}
                      className={`jelly-touch px-3 py-1.5 rounded-full text-[10px] font-bold border ${
                        isMultiOwnerMode ? 'bg-[#F0F5F1] border-[#A3BCA7]/50 text-[#708875]' : 'bg-white border-[#F0EBE1] text-[#8C8276]'
                      }`}
                    >
                      {isMultiOwnerMode ? '正在多猫选择' : '选择多只猫'}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2.5">
                    <div className="w-full text-[10px] font-semibold text-[#A9A096] px-1">
                      {sheetConfig.type === 'food' && foodState.tab !== 'main' ? '这是单独喂的，可以直接选猫咪' : '明确是某只猫'}
                    </div>
                    {(data.cats || []).map((cat, idx) => {
                      const isSelected = selectedOwnerCatIds.includes(cat.id) && (recordScope === 'single' || recordScope === 'multiple');
                      return (
                        <button
                          key={`record-owner-${cat.id}`}
                          onClick={() => isMultiOwnerMode ? toggleMultipleOwner(cat.id) : selectSingleOwner(cat.id)}
                          className={`jelly-touch flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all border ${
                            isSelected
                              ? `${idx % 2 === 0 ? 'bg-[#E0CF9A] text-[#6A5A30]' : 'bg-[#A3BCA7] text-[#4A5D4E]'} border-transparent shadow-sm`
                              : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                          }`}
                        >
                          {React.createElement(CatAvatars[cat.avatar] || CatAvatars.orange, { className: "w-5 h-5" })}
                          {cat.name}
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setRecordScope('shared');
                        setSelectedOwnerCatIds([]);
                        setIsMultiOwnerMode(false);
                      }}
                      className={`jelly-touch px-3 py-2.5 rounded-[16px] text-xs font-bold border ${
                        recordScope === 'shared' ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                      }`}
                    >
                      🏠 两只都可能 / 共同
                    </button>
                    <button
                      onClick={() => {
                        setRecordScope('unknown');
                        setSelectedOwnerCatIds([]);
                        setIsMultiOwnerMode(false);
                      }}
                      className={`jelly-touch px-3 py-2.5 rounded-[16px] text-xs font-bold border ${
                        recordScope === 'unknown' ? 'bg-[#FFF4E5] border-[#D29E7A]/30 text-[#D29E7A]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                      }`}
                    >
                      ☁️ 分不清，先记下来
                    </button>
                  </div>
                </div>
              )}

              {sheetConfig.type === 'food' ? (
                // --- 吃饭专属柔软面板 ---
                <div className="flex flex-col gap-6">
                  <div className="flex bg-[#F9F7F3] rounded-full p-1 border border-[#F0EBE1]/50">
                    {Object.entries(FOOD_CATEGORIES).map(([key, config]) => (
                      <button 
                        key={`tab-${key}`}
                        onClick={() => {
                          const firstSub = config.subs[0];
                          setFoodState({ tab: key, subType: firstSub, brand: '', amount: 50 });
                          if (key === 'main') {
                            setRecordScope('shared');
                            setSelectedOwnerCatIds([]);
                          } else {
                            setRecordScope('single');
                            setSelectedOwnerCatIds([currentCatId]);
                          }
                          setIsMultiOwnerMode(false);
                          setIsAddingFoodSub(false);
                        }}
                        className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${foodState.tab === key ? 'bg-white text-[#4A443E] shadow-[0_2px_8px_rgba(0,0,0,0.04)]' : 'text-[#A9A096] hover:text-[#8C8276]'}`}
                      >
                        {config.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 px-1 items-center">
                    {(FOOD_CATEGORIES[foodState.tab] || FOOD_CATEGORIES.main).subs.map((sub, sIdx) => (
                      <button 
                        key={`sub-${sub}-${sIdx}`}
                        onClick={() => setFoodState(prev => ({ ...prev, subType: sub }))}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${foodState.subType === sub ? 'bg-[#F4EFE6] border-[#D29E7A]/40 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'}`}
                      >
                        {sub}
                      </button>
                    ))}
                    {(data.customFoodSubs?.[foodState.tab] || []).map((sub, sIdx) => (
                      <button 
                        key={`custom-sub-${sub}-${sIdx}`}
                        onClick={() => setFoodState(prev => ({ ...prev, subType: sub }))}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${foodState.subType === sub ? 'bg-[#F4EFE6] border-[#D29E7A]/40 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'}`}
                      >
                        {sub}
                      </button>
                    ))}
                    
                    {!isAddingFoodSub ? (
                      <button 
                        onClick={() => setIsAddingFoodSub(true)} 
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-dashed border-[#D29E7A]/50 text-[#D29E7A] jelly-touch"
                      >
                        <Icons.Plus className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="flex-shrink-0 flex items-center gap-1 bg-[#F9F7F3] rounded-full p-1 border border-[#EAE3D9]">
                        <input 
                          type="text" 
                          autoFocus
                          className="bg-transparent border-none outline-none text-sm px-2 w-20 text-[#5D554D] placeholder-gray-400"
                          placeholder="输入..."
                          value={newFoodSubInput}
                          onChange={(e) => setNewFoodSubInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddCustomFoodSub()}
                          onBlur={() => { if(!newFoodSubInput) setIsAddingFoodSub(false); }}
                        />
                        <button onClick={handleAddCustomFoodSub} className="bg-white p-1 rounded-full shadow-sm text-[#8C8276]">
                          <Icons.Check className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="bg-[#FDFBF7] rounded-[28px] p-5 border border-[#F0EBE1] shadow-sm flex flex-col gap-5">
                    <div className="relative">
                      <label className="text-xs text-[#A9A096] font-semibold mb-1.5 block px-2">食物品牌 / 口味</label>
                      <input 
                        type="text"
                        value={foodState.brand}
                        onChange={(e) => {
                          setFoodState(prev => ({ ...prev, brand: e.target.value }));
                          setIsBrandDropdownOpen(true);
                        }}
                        onFocus={() => setIsBrandDropdownOpen(true)}
                        onBlur={() => setTimeout(() => setIsBrandDropdownOpen(false), 200)}
                        placeholder="今天吃的是什么牌子呀？"
                        className="w-full bg-[#F4EFE6]/50 rounded-[20px] py-3.5 px-4 text-[#5D554D] placeholder-[#A9A096]/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border-none outline-none focus:bg-[#F4EFE6]"
                      />
                      {isBrandDropdownOpen && data.brandHistory && data.brandHistory.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#F0EBE1] z-20 overflow-hidden max-h-40 overflow-y-auto">
                          {data.brandHistory
                            .filter(b => b && typeof b === 'string' && b.toLowerCase().includes(foodState.brand.toLowerCase()))
                            .map((brand, idx) => (
                              <div 
                                key={`brand-history-${idx}`} 
                                onClick={() => {
                                  setFoodState(prev => ({ ...prev, brand }));
                                  setIsBrandDropdownOpen(false);
                                }}
                                className="px-4 py-3 text-[#8C8276] hover:bg-[#F9F7F3] cursor-pointer border-b border-[#F0EBE1]/50 last:border-0"
                              >
                                {brand}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between px-2">
                       <label className="text-sm text-[#8C8276] font-semibold">投喂分量</label>
                       <div className="flex items-center bg-[#F9F7F3] rounded-full p-1 border border-[#F0EBE1]">
                         <button onClick={() => handleFoodAmountChange(foodState.amount - 5)} className="w-10 h-10 flex items-center justify-center rounded-full text-[#A9A096] hover:bg-white hover:text-[#5D554D] transition-colors jelly-touch"><span className="text-xl leading-none -mt-1">-</span></button>
                         <div className="w-16 h-10 flex items-center justify-center overflow-hidden relative text-[#4A443E] font-bold text-lg">
                           <div key={foodState.amount} className={`absolute ${scrollDir === 'up' ? 'slide-up-enter' : 'slide-down-enter'}`}>
                             {foodState.amount}<span className="text-xs font-normal ml-0.5 text-[#8C8276]">g</span>
                           </div>
                         </div>
                         <button onClick={() => handleFoodAmountChange(foodState.amount + 5)} className="w-10 h-10 flex items-center justify-center rounded-full text-[#A9A096] hover:bg-white hover:text-[#5D554D] transition-colors jelly-touch"><span className="text-xl leading-none -mt-0.5">+</span></button>
                       </div>
                    </div>
                  </div>

                  <button 
                    onClick={saveRecord} 
                    className="jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all duration-300 bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]"
                  >
                    确认投喂
                  </button>
                </div>
              ) : sheetConfig.type === 'health' ? (
                // --- 异常与健康专属风琴面板 ---
                <div className="flex flex-col gap-4">
                  <div className="max-h-[52vh] overflow-y-auto no-scrollbar pb-4 space-y-3 px-1">
                    {HEALTH_CATEGORIES.map(category => {
                      const categoryTags = [
                        ...category.tags,
                        ...(data.customHealthTags?.[category.id] || [])
                      ];

                      return (
                        <div key={`category-accordion-${category.id}`} className="bg-[#FDFBF7] rounded-[24px] border border-[#F0EBE1] overflow-hidden transition-all duration-300">
                          <button 
                            onClick={() => setActiveAccordion(activeAccordion === category.id ? null : category.id)}
                            className="w-full flex items-center justify-between p-4 text-[#5D554D] font-bold jelly-touch"
                          >
                            {category.title}
                            <Icons.ChevronDown className={`w-5 h-5 text-[#A9A096] transition-transform duration-300 ${activeAccordion === category.id ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <div className={`transition-all duration-300 overflow-hidden ${activeAccordion === category.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-wrap gap-2.5 p-4 pt-0 items-center">
                              {categoryTags.map((tag, tIdx) => {
                                const isUrgent = URGENT_TAGS.includes(tag);
                                const isSelected = selectedTags.includes(tag);
                                
                                return (
                                  <button
                                    key={`health-tag-${tag}-${tIdx}`}
                                    onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
                                    className={`jelly-touch px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                                      isSelected 
                                        ? (isUrgent ? 'bg-[#FFEDE8] border-[#D36B4F]/30 text-[#D36B4F]' : 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]') 
                                        : (isUrgent ? 'bg-white border-[#FFE4C4]/60 text-[#D36B4F]/80 hover:bg-[#FFF4E5]' : 'bg-white border-[#F0EBE1] text-[#8C8276] hover:bg-gray-50')
                                    }`}
                                  >
                                    {tag}
                                  </button>
                                )
                              })}

                              {addingHealthTagCatId === category.id ? (
                                <div className="flex items-center gap-1.5 bg-[#F9F7F3] rounded-full p-1 border border-[#EAE3D9]">
                                  <input 
                                    type="text" 
                                    autoFocus
                                    className="bg-transparent border-none outline-none text-xs px-2.5 py-1 w-20 text-[#5D554D] placeholder-gray-400 font-semibold"
                                    placeholder="输入新症状"
                                    value={newHealthTagInput}
                                    onChange={(e) => setNewHealthTagInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAddCustomHealthTag(category.id)}
                                    onBlur={() => { if(!newHealthTagInput) setAddingHealthTagCatId(null); }}
                                  />
                                  <button onClick={() => handleAddCustomHealthTag(category.id)} className="bg-white p-1 rounded-full shadow-sm text-[#8C8276] jelly-touch">
                                    <Icons.Check className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ) : (
                                <button 
                                  onClick={() => {
                                    setAddingHealthTagCatId(category.id);
                                    setNewHealthTagInput('');
                                  }} 
                                  className="px-3 py-1.5 rounded-full border border-dashed border-[#D29E7A]/50 text-[#D29E7A] text-xs font-semibold flex items-center gap-1 jelly-touch hover:bg-[#F9F7F3]"
                                >
                                  <Icons.Plus className="w-3.5 h-3.5" /> 自定义
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}

                    {selectedTags.length > 0 && (
                      <div className="mt-2 p-4 rounded-[24px] bg-[#F9F7F3] border border-dashed border-[#D29E7A]/40 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300">
                        {healthPhoto ? (
                          <div className="relative w-full h-32 rounded-[16px] overflow-hidden">
                            <img src={healthPhoto} alt="异常记录照" className="w-full h-full object-cover" />
                            <button onClick={() => setHealthPhoto(null)} className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-[#4A443E] shadow-sm backdrop-blur-sm jelly-touch z-10">
                              <Icons.Plus className="w-4 h-4 rotate-45" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D29E7A] shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-2">
                              <Icons.Camera className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold text-[#8C7662]">上传状态照片 (可选)</span>
                            <span className="text-xs text-[#A9A096] mt-1">留底猫咪实时状态，更方便问诊与观察</span>
                            <input 
                              type="file" 
                              accept="image/*"
                              onChange={handlePhotoUpload}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={saveRecord} 
                    disabled={selectedTags.length === 0} 
                    className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all mt-2 ${selectedTags.length > 0 ? 'bg-[#D36B4F] text-white shadow-[0_8px_20px_rgba(211,107,79,0.2)]' : 'bg-[#F4EFE6] text-[#A9A096] cursor-not-allowed'}`}
                  >
                    保存记录
                  </button>
                </div>
              ) : sheetConfig.type === 'poop' ? (
                // --- 💩 拉粑粑专属柔软面板 ---
                <div className="flex flex-col gap-6">
                  {/* 第一层级：大便质地 (多选胶囊) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-2.5 block px-1">大便质地 (多选)</label>
                    <div className="flex flex-wrap gap-2.5">
                      {DEFAULT_TAGS.poop.map((tag, tIdx) => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                          <button
                            key={`poop-tag-${tag}-${tIdx}`}
                            onClick={() => {
                              setSelectedTags(prev => isSelected ? prev.filter(t => t !== tag) : [...prev, tag]);
                            }}
                            className={`jelly-touch px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                              isSelected 
                                ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' 
                                : 'bg-white border-[#F0EBE1] text-[#8C8276]'
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 第二层级：大便颜色 (单选胶囊) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-2.5 block px-1">大便颜色 (Color)</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: '棕色', bg: 'bg-[#8C7662]' },
                        { id: '焦黑便', bg: 'bg-black' },
                        { id: '带血便', bg: 'bg-[#D36B4F]' },
                        { id: '偏绿', bg: 'bg-[#A3BCA7]' },
                        { id: '偏黄软便', bg: 'bg-[#D9C27E]' }
                      ].map(colOpt => {
                        const isSelected = poopColor === colOpt.id;
                        return (
                          <button
                            key={colOpt.id}
                            onClick={() => setPoopColor(colOpt.id)}
                            className={`jelly-touch flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-bold transition-all border ${
                              isSelected
                                ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]'
                                : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${colOpt.bg}`}></span>
                            {colOpt.id}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 第三层级：排便量 (单选圆润大卡片) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-2.5 block px-1">排便分量 (Volume)</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: '只有一点', scale: 0.8 },
                        { id: '正常量', scale: 1.2 },
                        { id: '一大坨', scale: 1.6 },
                        { id: '惊人的多', scale: 2.1, shock: true }
                      ].map(volOpt => {
                        const isSelected = poopVolume === volOpt.id;
                        return (
                          <button
                            key={volOpt.id}
                            onClick={() => setPoopVolume(volOpt.id)}
                            className={`jelly-touch flex flex-col items-center gap-2 py-3 px-1 rounded-2xl border transition-all duration-300 ${
                              isSelected 
                                ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662] scale-105 shadow-[0_4px_12px_rgba(210,158,122,0.1)]' 
                                : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                            }`}
                          >
                            <PoopVolumeIcon scale={volOpt.scale} showShockLines={volOpt.shock && isSelected} isSelected={isSelected} />
                            <span className="text-[10px] font-bold tracking-tight">{volOpt.id}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    onClick={saveRecord} 
                    disabled={selectedTags.length === 0 && !poopVolume}
                    className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all mt-2 ${
                      (selectedTags.length > 0 || poopVolume) ? 'bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]' : 'bg-[#F4EFE6] text-[#A9A096] cursor-not-allowed'
                    }`}
                  >
                    确认记录
                  </button>
                </div>
              ) : sheetConfig.type === 'pee' ? (
                // --- 💧 尿尿专属柔软面板 ---
                <div className="flex flex-col gap-6">
                  {/* 第一层级：尿团大小 (单选胶囊) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-2.5 block px-1">尿团大小 (Size)</label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        { id: '硬币大小 (尿频)', icon: '💧' },
                        { id: '网球大小 (正常)', icon: '🎾' },
                        { id: '超大一滩 (多尿)', icon: '🌊' }
                      ].map(sizeOpt => {
                        const isSelected = peeSize === sizeOpt.id;
                        return (
                          <button
                            key={sizeOpt.id}
                            onClick={() => setPeeSize(sizeOpt.id)}
                            className={`jelly-touch px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border flex items-center gap-2 ${
                              isSelected ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#8C8276]'
                            }`}
                          >
                            <span>{sizeOpt.icon}</span>
                            {sizeOpt.id}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 第二层级：特殊状态 (多选胶囊) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-2.5 block px-1">颜色与状态 (多选)</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: '颜色正常', color: 'bg-[#E0CF9A]' }, 
                        { id: '带粉红血丝', color: 'bg-[#D36B4F]' }, 
                        { id: '碎块不成型', color: 'bg-[#A9A096]' },
                        { id: '尿在盆外', color: 'bg-[#C1B6AB]' }
                      ].map(statusOpt => {
                        const isSelected = selectedPeeStatus.includes(statusOpt.id);
                        return (
                          <button
                            key={statusOpt.id}
                            onClick={() => {
                              setSelectedPeeStatus(prev => isSelected ? prev.filter(t => t !== statusOpt.id) : [...prev, statusOpt.id]);
                            }}
                            className={`jelly-touch flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-bold transition-all border ${
                              isSelected ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${statusOpt.color}`}></span>
                            {statusOpt.id}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    onClick={saveRecord} 
                    className="jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all mt-2 bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]"
                  >
                    确认记录
                  </button>
                </div>
              ) : (
                // --- 通用日常面板 ---
                <div>
                  <h2 className="text-xl font-bold text-center mb-6 text-[#4A443E]">{sheetConfig.title}</h2>
                  <div className="flex flex-wrap gap-3 mb-8 min-h-[100px] content-start">
                    {(sheetConfig.type ? [...(DEFAULT_TAGS[sheetConfig.type] || []), ...(customTags[sheetConfig.type] || [])] : []).map((tag, tIdx) => (
                      <button key={`general-tag-${tag}-${tIdx}`} onClick={() => {
                        setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
                      }} className={`jelly-touch px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border ${selectedTags.includes(tag) ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#8C8276]'}`}>{tag}</button>
                    ))}
                  </div>
                  <button onClick={saveRecord} disabled={selectedTags.length === 0} className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all ${selectedTags.length > 0 ? 'bg-[#4A443E] text-white shadow-md' : 'bg-[#F4EFE6] text-[#A9A096] cursor-not-allowed'}`}>确认记录</button>
                </div>
              )}
              
            </div>
          </div>
        </div>

        {/* --- 医疗/体重/接种 Bottom Sheet --- */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${healthSheet.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setHealthSheet({isOpen: false})} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-400 cubic-bezier(0.2, 0.8, 0.2, 1) ${healthSheet.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10 text-center">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-bold mb-6 text-[#4A443E]">{healthSheet.title}</h2>
              
              {healthSheet.type === 'weight' ? (
                <div className="mb-8 px-6">
                  <div className="bg-white rounded-[24px] shadow-sm border border-[#F0EBE1] flex items-center justify-center p-4">
                    <input 
                      type="number" step="0.1"
                      value={healthInput}
                      onChange={(e) => setHealthInput(e.target.value)}
                      placeholder="0.0"
                      className="w-24 text-center bg-transparent border-none outline-none text-3xl font-bold text-[#5D554D] placeholder-[#D29E7A]/40"
                    />
                    <span className="text-lg font-bold text-[#A9A096] ml-2">kg</span>
                  </div>
                </div>
              ) : (
                <div className="mb-8 text-[#8C8276] text-sm">
                  <p>记录今天为主子完成了 <span className="font-semibold text-[#5D554D]">{healthSheet.type === 'deworm' ? '体内外驱虫' : '年度疫苗'}</span>，</p>
                  <p className="mt-1">我们会自动为您重置倒计时。</p>
                </div>
              )}

              <button 
                onClick={saveHealthRecord} 
                disabled={healthSheet.type === 'weight' && !healthInput}
                className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all duration-300 ${(healthSheet.type !== 'weight' || healthInput) ? 'bg-[#D36B4F] text-white shadow-[0_8px_20px_rgba(211,107,79,0.2)]' : 'bg-[#EAE3D9] text-[#A9A096] cursor-not-allowed'}`}
              >
                保存档案
              </button>
            </div>
          </div>
        </div>

        {/* --- 猫咪资料编辑/添加 Sheet --- */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${catModal.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setCatModal({ ...catModal, isOpen: false })} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-400 cubic-bezier(0.2, 0.8, 0.2, 1) ${catModal.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-bold text-center mb-6 text-[#4A443E]">{catModal.mode === 'add' ? '迎接新主子' : '编辑主子信息'}</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#8C8276] mb-3 px-1">选择猫咪花色</label>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
                  {AVATAR_OPTIONS.map(opt => {
                    const Icon = CatAvatars[opt.id];
                    const isSelected = catForm.avatar === opt.id;
                    return (
                      <div key={opt.id} onClick={() => setCatForm(prev => ({ ...prev, avatar: opt.id }))} className={`flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer jelly-touch ${isSelected ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
                        <div className={`w-[60px] h-[60px] rounded-[24px] flex items-center justify-center transition-all ${isSelected ? 'bg-white shadow-md border-2 border-[#D29E7A]' : 'bg-[#F4EFE6] border-2 border-transparent'}`}>
                          <Icon className="w-10 h-10 text-[#5D554D]" />
                        </div>
                        <span className={`text-xs font-semibold ${isSelected ? 'text-[#D29E7A]' : 'text-[#A9A096]'}`}>{opt.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-[#8C8276] mb-3 px-1">主子大名</label>
                <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#F0EBE1] p-1.5">
                  <input 
                    type="text" 
                    value={catForm.name} 
                    onChange={(e) => setCatForm(prev => ({ ...prev, name: e.target.value }))} 
                    placeholder="输入猫咪名字..." 
                    className="w-full bg-transparent border-none outline-none px-4 py-3 text-[#5D554D] placeholder-[#A9A096] font-semibold" 
                  />
                </div>
              </div>

              <button 
                onClick={saveCatProfile} 
                disabled={!catForm.name || !catForm.name.trim()} 
                className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all duration-300 ${catForm.name && catForm.name.trim() ? 'bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]' : 'bg-[#EAE3D9] text-[#A9A096] cursor-not-allowed'}`}
              >
                保存档案
              </button>
            </div>
          </div>
        </div>

        {/* --- 历史记录查看弹窗 (全部历史) --- */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${historyModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setHistoryModalOpen(false)} />
          <div className={`absolute bottom-0 left-0 right-0 h-[85vh] max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-400 flex flex-col cubic-bezier(0.2, 0.8, 0.2, 1) ${historyModalOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-2 shrink-0">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#4A443E]">全部历史记录</h2>
                  <p className="text-[11px] text-[#A9A096] mt-1">{viewMode === 'family' ? '全家记录，包含共同与待确认事项' : `${currentCat?.name}的明确记录与相关共同记录`}</p>
                </div>
                <button onClick={() => setHistoryModalOpen(false)} className="w-8 h-8 flex items-center justify-center bg-[#F4EFE6] rounded-full text-[#8C8276] jelly-touch"><Icons.Plus className="w-5 h-5 rotate-45" /></button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-8 no-scrollbar">
               {sortedHistoryDates.length === 0 ? (
                 <div className="flex flex-col items-center justify-center h-40 text-[#A9A096]">
                   <Icons.Paw className="w-12 h-12 text-[#EAE3D9] mb-3" />
                   <p>这里还是一片空白哦</p>
                 </div>
               ) : (
                 sortedHistoryDates.map(date => {
                    const events = getTimelineEvents(date);
                    if (events.length === 0) return null;
                    return (
                      <div key={`history-date-${date}`} className="relative">
                        <h3 className="font-bold text-[#8C8276] mb-4 sticky top-0 bg-[#FDFBF7]/95 py-2 backdrop-blur-md z-10 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D29E7A]" />{date}</h3>
                        <div className="space-y-4 bg-white p-5 rounded-[24px] border border-[#F0EBE1] shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                          {events.map((event, idx) => {
                             const info = TYPE_INFO[event.type] || TYPE_INFO.health;
                             return (
                               <div key={event.id || `history-event-${idx}`} className="flex gap-4 items-start">
                                 <div className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center ${info.bg} ${info.color}`}><info.icon className="w-4 h-4" /></div>
                                 <div className="flex-1 border-b border-[#F0EBE1]/60 pb-3 last:border-0 last:pb-0">
                                   <div className="flex items-center justify-between"><span className="font-semibold text-[#5D554D] text-[14px]">{info.title}</span><span className="text-xs text-[#A9A096]">{event.time}</span></div>
                                   <div className="text-xs text-[#8C8276] mt-1.5 leading-relaxed">
                                     {(event.tags && Array.isArray(event.tags)) ? event.tags.join(' · ') : ''}
                                   </div>
                                   <div className="text-[10px] text-[#A9A096] mt-1.5">
                                     {getAssignmentLabel(event.scope, event.catIds)}
                                   </div>
                                   {event.photo && (
                                     <div className="mt-2 w-14 h-14 rounded-[8px] overflow-hidden border border-[#F0EBE1]">
                                       <img src={event.photo} alt="患处" className="w-full h-full object-cover" />
                                     </div>
                                   )}
                                 </div>
                               </div>
                             )
                          })}
                        </div>
                      </div>
                    )
                 })
               )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
