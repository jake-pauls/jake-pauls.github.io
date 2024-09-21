<script>
  import { Icon } from "svelte-icons-pack"

  /** Source of the icon from 'svelte-icons-pack' */
  export let src = undefined;

  /** Size of the icon */
  export let size = "2.55em";

  /** Color of the icon, expects the tailwind class definition */
  export let color = "white";
  let twColor = "tw-fill-" + color;

  /** Sets an href value, converting the button to a link */
  export let href = "";

  /** Determines whether the link opens in a new tab */
  export let isExternal = true;

  /** Determines whether this button is a ghost button (applies a hover effect) */
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
    <IconButton src={SvelteIcon} size=1em href="#" class=""/>
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
      className="tw-btn-ghost tw-rounded-2xl tw-p-1.5 {twColor}"
    />
  {:else}
    <Icon
      {src}
      {size}
      className="tw-p-1.5 {twColor}"
    />
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
