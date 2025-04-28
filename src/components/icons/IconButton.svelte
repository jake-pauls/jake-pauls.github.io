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

  /** @type {string} Text in the tooltip of the icon button */
  export let tooltipText = "";
  const tooltipClass =
    tooltipText !== "" ? "tw-tooltip tw-tooltip-accent" : "";

  /** @type {string} Sets an href value, converting the button to a link */
  export let href = "";

  /** @type {boolean} Determines whether the link opens in a new tab */
  export let isExternal = true;

  /** Provides class overrides for the icon */
  let className = "";
  export { className as class };
</script>

<!--
@component
An Icon Button that wraps a 'svelte-icons-pack' icon, provides routing to a particular link on click.
- Usage:
    ```jsx
    <IconButton src={SvelteIcon} size="1em" color="white" tooltipText="Svelte" href="#" isExternal={false} class=""/>
    ```
-->
<svelte:element
  this={href ? "a" : "button"}
  role={href ? "button" : undefined}
  href={href ? href : undefined}
  class="icon-button tw-drop-shadow-sm {href ? "" : "tw-pointer-events-none"} {className}"
  target={href && isExternal ? "_blank" : undefined}
  {...$$restProps}
>
  <div class={tooltipClass} data-tip={tooltipText}>
    <Icon {src} {size} title={href} className={colorVariants[color]} />
  </div>
</svelte:element>

<style>
  .icon-button {
    outline: none;
    border: none;
    box-sizing: border-box;
  }
</style>
