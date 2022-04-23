<!-- COMMENT DIV COMPONENT-->
<script>
	import { slide }            from 'svelte/transition'
    import { user, ui }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
 
    export let commentData 
    export let index

    const iconClearPath = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';

    function deleteComment(){
        console.log('Delete this comment: ', index)
        $ui.state.focus.projectComments  = $ui.state.focus.projectComments .filter((d, i) => i !== index)
    };
</script>   

<!-- COMPONENT HTML MARLUP -->
<li>
    <div class = 'comment-container tick-{ (index % 4) + 1} {$user.details.username === commentData.user.username && 'user-comment' }' transition:slide>
        <div class = 'comment'>{@html commentData.comment} </div>
        <div class = 'source-container'>
            <div class = 'date'>{@html commentData.date.toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})} </div>
            <div>
                <div class = 'author'>- {@html commentData.user.firstName} {@html commentData.user.lastName}</div>
                <div class = 'organisation'>{@html commentData.user.org} </div>
            </div>
        </div>
        {#if $user.details.username === commentData.user.username}
        <div class = "delete" on:click={deleteComment}>
            <svg class="icon-clear" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="{iconClearPath}"/>
            </svg>
        </div>
        {/if}
    </div>
</li>


<!-- STYLES -->
<style>
    .comment-container{
        padding:            1.25rem;
        border-radius:      1rem;
        margin:             1.5rem auto;
        border:             4px solid var(--comment);
        font-weight:        900;
        color:               var(--midGrey);
        position:           relative;
    }
    .comment-container.user-comment{
        border:             4px solid var(--userComment);
        color:               var(--userComment);
    }
    .comment{
        font-weight:        300;
        font-size:          0.8rem;
        font-style:         italic;
        line-height:        1.35;
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
        color:              var(--comment)
    }
    .delete{
        position:           absolute;
        z-index:            50;
        bottom:             -15px;
        right:              -15px;
        background-color:    var(--userComment);
        border-radius:      50%;
        width:              30px;
        height:             30px;
        color:              #fff;
        cursor:             pointer;
        display:            flex;
        justify-content:    center;
        align-items:        center;
        transform-origin:   50% 50%;
        transition:         all 200ms;
    }
    .delete:hover{
        transform:          scale(1.1)
    }
    .delete:active{
        transform:          scale(1.25)
    }
    .icon-clear path {
        fill: white;
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
        border-left:    10px solid  var(--comment);
        border-right:   10px solid transparent;
        border-top:     10px solid  var(--comment);
        border-bottom:  10px solid transparent;
        right:          -21px;
        top:            6px;
    }
    .tick-1.user-comment:before {
        border-left:    10px solid  var(--userComment);
        border-top:   10px solid  var(--userComment);
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
        border-right:   10px solid  var(--comment);
        border-top:     10px solid  var(--comment);
        border-bottom:  10px solid transparent;
        left:           -21px;
        top:            6px;
    }
    .tick-2.user-comment:before {
        border-right:   10px solid  var(--userComment);
        border-top:     10px solid  var(--userComment);
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
        border-left:    10px solid  var(--comment);
        border-right:   10px solid transparent;
        border-top:     10px solid  var(--comment);
        border-bottom:  10px solid transparent;
        left:           20px;
        bottom:         -23px;
    }
    .tick-3.user-comment:before {
        border-left:    10px solid  var(--userComment);
        border-top:     10px solid  var(--userComment);
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
        border-right:   10px solid  var(--comment);
        border-top:     10px solid  var(--comment);
        border-bottom:  10px solid transparent;
        right:          20px;
        bottom:         -23px;
    }
    .tick-4.user-comment:before {
        border-right:   10px solid  var(--userComment);
        border-top:     10px solid  var(--userComment);
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
