---
import Layout from '../../layouts/Layout.astro';

const title = "Example Post Title";
const date = new Date('2026-02-19');
---

<Layout title={title}>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <!-- Timeline indicator -->
    <div class="flex items-center gap-2 text-xs font-mono text-video-accent mb-8">
      <div class="w-2 h-2 bg-video-accent rounded-full"></div>
      <span>● POST</span>
      <span class="text-video-muted">|</span>
      <span>00:00:00:00</span>
    </div>

    <article class="prose prose-invert prose-lg max-w-none">
      <header class="mb-8">
        <h1 class="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
          {title}
        </h1>
        <time class="text-sm font-mono text-video-muted">
          Published: {date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </header>

      <p>
        This is an example blog post. Replace this content with your own!
      </p>

      <p>
        Write about your interests in tech stocks, AI infrastructure, energy markets, or whatever else you want to share.
      </p>

      <p>
        The styling follows a video editor aesthetic with dark mode, clean typography, and minimal distractions.
      </p>
    </article>
  </div>
</Layout>
