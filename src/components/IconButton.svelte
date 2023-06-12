<script>
  import Icon from "svelte-icons-pack/Icon.svelte";

  export let src = undefined;
  export let size = "2.55em";

  /** Sets an href value, converting the button to a link */
  export let href = "";

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
  class="icon-button"
  {...$$restProps}
>
  <Icon
    {src}
    {size}
    className="tw-fill-white tw-btn-ghost tw-rounded-2xl tw-p-1.5 {className}"
  />
  <slot />
</svelte:element>

<style>
  .icon-button {
    outline: none;
    border: none;
    box-sizing: border-box;
    min-inline-size: 30px;
    min-block-size: 30px;
  }
</style>
