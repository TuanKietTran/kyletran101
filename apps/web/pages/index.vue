<script lang="ts" setup>
import { Page, Avatar, Logo, Table } from "ui";
const headers = [
  { id: "year", label: "Year", key: "year" },
  { id: "event", label: "Event", key: "event" },
];
const rows = [
  {
    year: "2024 - Present",
    event: "Working as Junior Developer at Omnia System Vietnam Ltd.",
  },
  {
    year: "2024",
    event: "Finished B.Eng. in Computer Science at Ho Chi Minh University of Technology",
  },
  {
    year: "2023",
    event: "Worked as Intern & Fresher Developer at Precio Fishbone Vietnam Ltd.",
  },
];
</script>

<template>
  <Page>
    <!-- <Avatar src="https://avatars.githubusercontent.com/u/35926768" alt="KyleTran" size="xl"  /> -->
    <!-- <Avatar
      src="/avatar-full.png"
      alt="Kyle Tran"
      size="xl"
      :border-width="10"
    /> -->
    <div class="hero">
      <Logo size="xl" />
      <div class="hero-content">
        <h1>Kyle Tran</h1>
        <p>Developer</p>
      </div>
    </div>

    <div class="section">
      <h2>> whoami</h2>
      <p>
        I'm a passionate full-stack developer based in Saigon, Vietnam. Here, I
        aim to dive into insights and share knowledge in the ever-evolving
        landscape of software development together.
      </p>
    </div>

    <div class="section">
      <h2>> bio</h2>
      <Table :headers="headers" :rows="rows" hide-header />
    </div>

    <div class="section-projects"></div>
  </Page>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media (max-width: 640px) {
  .hero {
    flex-direction: column-reverse;
    align-items: center;
  }
  .hero-content {
    align-items: center;
    gap: 0.5rem;
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
