<!-- PROJECT PAGE QUICK ACTION PANE-->
<script>
    import { ui }       from '../../../../data/stores.js'
    import StarOutline  from "svelte-material-icons/StarOutline.svelte";
    import Star         from "svelte-material-icons/Star.svelte";
    import Heart        from "svelte-material-icons/Heart.svelte";
    import HeartOutline from "svelte-material-icons/HeartOutline.svelte";

    $: stakeholderData = $ui.state.focus.stakeholderData
</script>



<!-- COMPONENT HTML MARKUP-->
<section class = "actions-pane">
    <span class = 'favourite'><StarOutline/></span>
    <!-- <span><Star/></span>
    <span class = 'like'><Heart/></span> -->
    <span class = 'like'><HeartOutline/></span>
</section>


<!-- STYLES-->
<style>
    section{
        grid-area:      1 / 2 / 2 / 3;
        align-self:     start;
        justify-self:   end;
        padding:        1rem;
    }
    .actions-pane span{
        padding: 0.5rem;
    }

</style>