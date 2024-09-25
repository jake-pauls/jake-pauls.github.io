<script>
  import IconButton from "@components/icons/IconButton.svelte";
  import { socialIconMap } from "@data/socialIcons.ts";

  /** @type {string} CSS string for the size of the icons, passed directly to the `IconButton` component */
  export let size = "2.25rem";

  /** @type {boolean} Shows tooltips over social icons in the bar with the name of the corresponding link or social platform */
  export let showTooltips = false;

  let className = "";
  export { className as class };
</script>

<!--
@component
Set of icon buttons fixed at the bottom left corner of the site.
- Usage:
    ```jsx
    <SocialIconBar size={"1em"} showTooltips={false} />
    ```
-->
<div class="tw-flex tw-content-start {className}">
  {#each socialIconMap.entries() as [name, {src, href}]}
    {#if showTooltips}
      <IconButton {src} {href} {size} tooltipText="{name}" />
    {:else}
      <IconButton {src} {href} {size} />
    {/if}
  {/each}
</div>