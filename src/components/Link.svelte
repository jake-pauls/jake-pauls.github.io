<script>
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
Wraps an 'a' tag, provides routing to a particular link on click.
- Usage:
    ```jsx
    <Link href="#" isExternal={false} class="">Link</Link>
    ```
-->
<svelte:element
  this="a"
  role="button"
  href={href}
  class="tw-text-primary tw-underline {href ? "" : "tw-pointer-events-none"} {className}"
  target={href && isExternal ? "_blank" : undefined}
  {...$$restProps}
>
  <slot />
</svelte:element>
