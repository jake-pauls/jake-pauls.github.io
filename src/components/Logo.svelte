<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BsLightningChargeFill from "svelte-icons-pack/bs/BsLightningChargeFill";

  /** Color for the heading text in the logo, appends a `tw-text-` prefix */
  export let textColor = "black";
  let twTextColor = "tw-text-" + textColor;

  /** Color for the subheading text in the logo, appends a `tw-text-` prefix */
  export let subheadingTextColor = "grey";
  let twSubheadingTextColor = "tw-text-" + subheadingTextColor;

  /** todo: find svelte-ish way of settting these props correctly */
</script>

<!--
@component
Main logo component with text aligned in flexboxes.
-->
<div class="tw-flex tw-flex-col">
  <div class="tw-flex tw-flex-wrap tw-items-baseline">
    <!-- todo: author finer control over sizing -->
    <p class="tw-font-heading tw-leading-none tw-text-6xl {twTextColor}">
      Jake Pauls
    </p>
    <!-- `Icon` classes are sent to <svg>, color may have to be directly defined here -->
    <Icon src={BsLightningChargeFill} className="tw-fill-lightning" />
  </div>
  <div class="tw-flex">
    <p class="tw-font-bold tw-text-xs {twSubheadingTextColor}">
      Graphics Programmer
    </p>
  </div>
</div>
