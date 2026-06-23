export const sectionMeta = {
  papers: {
    label: '论文精读',
    shortLabel: 'Papers',
    description: '具身智能、人形机器人、机器人学习与 Sim-to-Real 论文拆解。'
  },
  agents: {
    label: 'Agent 实践',
    shortLabel: 'Agents',
    description: 'AI Agent、Vibe Coding 与智能工具工作流的真实使用记录。'
  },
  projects: {
    label: '项目复现',
    shortLabel: 'Projects',
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
