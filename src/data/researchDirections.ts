export const researchDirections = [
  {
    slug: 'data-retargeting',
    label: '数据重定向',
    description: '人体动作、视频演示与交互轨迹到机器人可执行动作的数据转换链路。',
    color: '#6762c8'
  },
  {
    slug: 'motion-tracking',
    label: '运动跟踪',
    description: '全身轨迹跟踪、参考动作追踪、柔顺控制与抗扰动策略。',
    color: '#208a78'
  },
  {
    slug: 'amp',
    label: 'AMP',
    description: '对抗运动先验、风格模仿、动作自然性约束与强化学习结合方法。',
    color: '#db6f48'
  },
  {
    slug: 'world-models',
    label: '世界模型',
    description: '面向机器人决策的状态预测、环境建模、动作后果估计与规划。',
    color: '#9b6a2f'
  },
  {
    slug: 'loco-manip',
    label: 'Loco-Manip',
    description: '移动操作、全身协调、接触丰富任务与场景交互行为学习。',
    color: '#7a6fce'
  },
  {
    slug: 'data-generation',
    label: '数据生成',
    description: '合成演示、仿真采样、数据增强、自动标注与训练数据管线。',
    color: '#2f80a7'
  },
  {
    slug: 'simulators',
    label: '仿真器',
    description: 'MuJoCo、Isaac、Genesis 等仿真平台的环境搭建、接口与实验范式。',
    color: '#6f7d45'
  }
] as const;

export type ResearchDirectionSlug = typeof researchDirections[number]['slug'];

export function getResearchDirection(slug: string) {
  return researchDirections.find((direction) => direction.slug === slug);
}
