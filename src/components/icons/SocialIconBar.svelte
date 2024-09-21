<script>
  import IconButton from "@components/icons/IconButton.svelte";
  import { socialIconMap } from "@data/socialIcons.ts";

  /** @type {string} CSS string for the size of the icons, passed directly to the `IconButton` component */
  export let size = "2.25rem";

  /** @type {boolean} Determines if the buttons used are ghost buttons, passed directly to the `IconButton` component */
  export let isGhost = false;
</script>

<!--
@component
Set of icon buttons fixed at the bottom left corner of the site.
- Usage:
    ```jsx
    <SocialIconBar size={"1em"} />
    ```
-->
<div class="tw-flex tw-content-start tw-space-x-3">
  {#each socialIconMap.entries() as [name, {src, href}]}
    <IconButton {src} {href} {size} {isGhost} />
  {/each}
</div>