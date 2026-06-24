export const sectionMeta = {
  research: {
    label: '研究方向',
    shortLabel: '方向',
    description: '围绕具身智能关键技术方向整理论文、算法与实现笔记。'
  },
  projects: {
    label: '项目复现',
    shortLabel: '项目',
    description: '开源项目阅读、环境搭建、实验过程、失败原因与复现结论。'
  }
} as const;

export type SectionKey = keyof typeof sectionMeta;

export function entryUrl(collection: SectionKey, id: string) {
  return `/${collection}/${id}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

export function estimateReadingMinutes(body = '') {
  const compact = body.replace(/\s+/g, '');
  return Math.max(1, Math.ceil(compact.length / 500));
}
