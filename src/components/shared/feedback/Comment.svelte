<!-- COMMENT DIV COMPONENT-->
<script>
	import { slide }              from 'svelte/transition'
    import { user, ui }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
 
    export let comment 
    export let index

    // $: editable = 
    function deleteComment(){
        console.log('Delete this comment: ', index)
        $ui.state.focus.projectComments  = $ui.state.focus.projectComments .filter((d, i) => i !== index)
    };
</script>   

<!-- COMPONENT HTML MARLUP -->
<li transition:slide="{{duration: 1000}}">
    <div class = 'comment-container tick-{ (index % 4) + 1}'>
        <div class = 'comment'>{@html comment.text} </div>
        <div class = 'source-container'>
            <div class = 'date'>{@html comment.date} </div>
            <div>
                <div class = 'author'>- {@html comment.author}</div>
                <div class = 'organisation'>{@html comment.org} </div>
            </div>
        </div>
        {#if $user.details.userID === comment.authorID}
        <div class = "delete" on:click={deleteComment}>&mdash;</div>
        {/if}
    </div>
</li>


<!-- STYLES -->
<style>
    .comment-container{
        padding:            1.25rem;
        border-radius:      1rem;
        margin:             1.5rem auto;
        border:             4px solid var(--commentColor);
        font-weight:        900;
        color:               var(--commentColor);
        position:           relative;
    }
    .comment{
        font-weight:        300;
        font-size:          0.8rem;
        font-style:         italic;
    }
    .source-container{
        display:            flex;
        justify-content:    space-between;
        padding-top:        0.5rem;
    }
    .author{
        font-size:          0.8rem;
        font-weight:        600;
        text-align:         right;    
    }
    .organisation{
        font-weight:        400;
        font-size:          0.65rem;
        text-align:         right;  
    }
    .date{
        font-size:          0.65rem;
        font-weight:        600;
        color:              var(--midGrey)
    }
    .delete{
        position:             absolute;
        z-index:            50;
        top:                -15px;
        right:              -15px;
        background-color:   rgb(128, 10, 10);
        border-radius:      50%;
        width:              30px;
        height:             30px;
        color:              #fff;
        cursor:             pointer;
        display:            flex;
        justify-content:    center;
        align-items:        center;
    }

    .tick-1:before, .tick-1:after, 
    .tick-2:before, .tick-2:after, 
    .tick-3:before, .tick-3:after, 
    .tick-4:before, .tick-4:after{
        content:        "";
        width:          0px;
        height:         0px;
        position:       absolute;
    }
    .tick-1:before {
        content:        "";
        width:          0px;
        height:         0px;
        position:       absolute;
        border-left:    10px solid  var(--commentColor);
        border-right:   10px solid transparent;
        border-top:     10px solid  var(--commentColor);
        border-bottom:  10px solid transparent;
        right:          -21px;
        top:            6px;
    }

    .tick-1:after {
        content:        "";
        width:          0px;
        height:         0px;
        position:       absolute;
        border-left:    7px solid #fff;
        border-right:   7px solid transparent;
        border-top:     7px solid #fff;
        border-bottom:  7px solid transparent;
        right:          -11px;
        top:            10px;
    }
    .tick-2:before {
        border-left:    10px solid transparent;
        border-right:   10px solid  var(--commentColor);
        border-top:     10px solid  var(--commentColor);
        border-bottom:  10px solid transparent;
        left:           -21px;
        top:            6px;
    }

    .tick-2:after {
        border-left:    7px solid transparent;
        border-right:   7px solid #fff;
        border-top:     7px solid #fff;
        border-bottom:  7px solid transparent;
        left:           -11px;
        top:            10px;
    }
    .tick-3:before {
        border-left:    10px solid  var(--commentColor);
        border-right:   10px solid transparent;
        border-top:     10px solid  var(--commentColor);
        border-bottom:  10px solid transparent;
        left:           20px;
        bottom:         -23px;
    }
    .tick-3:after {
        border-left:    10px solid #fff;
        border-right:   10px solid transparent;
        border-top:     10px solid #fff;
        border-bottom:  10px solid transparent;
        left:           24px;
        bottom:         -13px;
    }

    .tick-4:before {
        border-left:    10px solid transparent;
        border-right:   10px solid  var(--commentColor);
        border-top:     10px solid  var(--commentColor);
        border-bottom:  10px solid transparent;
        right:          20px;
        bottom:         -23px;
    }

    .tick-4:after {
        border-left:    10px solid transparent;
        border-right:   10px solid #fff;
        border-top:     10px solid #fff;
        border-bottom:  10px solid transparent;
        right:          24px;
        bottom:         -13px;
    }

</style>
