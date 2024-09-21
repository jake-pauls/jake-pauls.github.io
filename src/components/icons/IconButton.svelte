<script>
  import { Icon } from "svelte-icons-pack";

  /** @type {IconType} Source of the icon from 'svelte-icons-pack' */
  export let src = undefined;

  /** @type {string} Size of the icon using a CSS size string */
  export let size = "2.55em";

  /** @type {string} Color of the icon, expects the tailwind class definition */
  export let color = "white";
  const colorVariants = {
    white: "tw-fill-base-content",
    yellow: "tw-fill-primary",
  };

  /** @type {string} Sets an href value, converting the button to a link */
  export let href = "";

  /** @type {boolean} Determines whether the link opens in a new tab */
  export let isExternal = true;

  /** @type {boolean} Determines whether this button is a ghost button (applies a hover effect) */
  export let isGhost = true;

  /** Provides class overrides for the icon */
  let className = "";
  export { className as class };
</script>

<!--
@component
An Icon Button that wraps a 'svelte-icons-pack' icon, provides routing to a particular link on click.
- Usage:
    ```jsx
    <IconButton src={SvelteIcon} size={"1em"} color="white" href="#" class=""/>
    ```
-->
<svelte:element
  this={href ? "a" : "button"}
  role={href ? "button" : undefined}
  href={href ? href : undefined}
  class="icon-button {className}"
  target={href && isExternal ? "_blank" : undefined}
  {...$$restProps}
>
  {#if isGhost}
    <Icon
      {src}
      {size}
      className="tw-btn-ghost tw-rounded-xl tw-p-1.5 {colorVariants[color]}"
    />
  {:else}
    <Icon {src} {size} className={colorVariants[color]} />
  {/if}
  <slot />
</svelte:element>

<style>
  .icon-button {
    outline: none;
    border: none;
    box-sizing: border-box;
    min-inline-size: 30px;
    min-block-size: 30px;
    /* https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/ */
    filter: drop-shadow(3px 2px 2px rgb(0 0 0 / 0.4));
  }
</style>
