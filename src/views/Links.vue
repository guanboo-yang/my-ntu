<template>
  <draggable :data="links" sortKey="href" storageKey="linkOrder">
    <template #default="{ element }">
      {{ element.title }}
    </template>
    <template #subtitle="{ element }">
      {{ element.subtitle }}
    </template>
  </draggable>
</template>

<script setup lang="ts">
import Draggable from '../components/Draggable.vue'

type Link = {
  title: string
  subtitle?: string
  href: string
}

const links: Link[] = [
  {
    title: '臺灣大學電子郵件系統',
    subtitle: 'NTU Mail',
    href: 'https://webmail2.ntu.edu.tw/'
  },
  {
    title: '學生學習歷程檔案',
    subtitle: 'NTU ePortfolio',
    href: 'https://if163.aca.ntu.edu.tw/'
  },
  {
    title: '台大課程網',
    subtitle: 'NTU course Information',
    href: 'https://nol.ntu.edu.tw/'
  },
  {
    title: '台大選課系統',
    subtitle: 'Course Selection System',
    href: 'https://if177.aca.ntu.edu.tw/'
  },
  {
    title: 'NTU Cool',
    subtitle: 'NTU Course OnLine',
    href: 'https://cool.ntu.edu.tw/'
  },
  {
    title: 'Ceiba',
    href: 'https://ceiba.ntu.edu.tw/'
  },
  {
    title: '網路額度流量查詢',
    href: 'http://140.112.2.212/'
  }
]
</script>
