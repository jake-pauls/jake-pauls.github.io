<script>
  import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
  import FaBrandsLinkedinIn from "svelte-icons-pack/fa/FaBrandsLinkedinIn";
  import IoMail from "svelte-icons-pack/io/IoMail";

  import IconButton from "@components/IconButton.svelte";
  import { links } from "@data/links";
</script>

<!--
  @component
  Set of icon buttons fixed at the bottom left corner of the site.
-->
<div class="tw-flex tw-absolute tw-bottom-8 tw-left-8 tw-space-x-3">
  <IconButton src={AiFillGithub} href={links.github}/>
  <IconButton src={FaBrandsLinkedinIn} href={links.linkedin}/>
  <IconButton src={IoMail} href={links.email}/>
</div>
