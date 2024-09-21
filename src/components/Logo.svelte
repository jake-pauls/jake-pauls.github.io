<script>
  import { Icon } from "svelte-icons-pack";
  import { BsLightningChargeFill } from "svelte-icons-pack/bs";
</script>

<!--
@component
Main logo component with text aligned in flexboxes.
-->
<div class="tw-flex tw-flex-col">
  <div class="tw-flex tw-flex-wrap tw-items-baseline">
    <p class="tw-font-heading tw-leading-none tw-text-3xl tw-text-base-content">
      JAKE PAULS
    </p>
  </div>
  <div class="tw-flex tw-items-center">
    <p class="tw-font-subheading tw-text-xs tw-text-neutral">
      SOFTWARE ENGINEER
    </p>
    <Icon src={BsLightningChargeFill} size="8px" className="tw-fill-primary tw-ml-0.5" />
  </div>
</div>
