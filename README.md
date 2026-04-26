

# svelte-stencil

A project stencil with multiple packages installed and loaded, along with
example pages. Additionally, language routing via svelte components.

Notable packages

- sveltekit 
- tailwindcss (with typography)
- daisyui
- skeleton
- smui
- mdsvex

# initialization

```bash
npm install
npm run dev -- --host
```

# building the component library

```bash
npm run package
```

# use as a component library

## install

```bash
npm install git+https://github.com/HomuraNagato/svelte-stencil.git
```

## quick start

In your root layout (`src/routes/+layout.svelte`):

```svelte
<script lang="ts">
  import '../tailwind.pcss';
  import { NavMain } from 'svelte-stencil';
</script>

<NavMain />

<div class="prose p-6 max-w-none">
  <slot />
</div>
```

In your home page (`src/routes/+page.svelte`):

```svelte
<script lang="ts">
  import { ThemeDropdown, default_langs, language } from 'svelte-stencil';

  let welcome = default_langs("欢迎", "Welcome!", "ようこそ！", "환영합니다!");
</script>

<h1>{welcome[$language.label]}</h1>

<ThemeDropdown />
```

Svelte Stencil provides out of the box a website design with: nav bar, language switching, and theme toggling all right out of the box.
