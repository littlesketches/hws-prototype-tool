<script>
	import { fly, slide }       from 'svelte/transition'
    import Comment              from '../../../shared/feedback/Comment.svelte'
    import { ui, user }         from '../../../../data/stores.js'
    import  DividerZagged20px   from '../../../shared/misc/DividerZagged20px.svelte'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData
    $: newComment = ''

    // Add dummy data for the project comments
    $ui.state.focus.projectComments = [
        { 
            text:   'This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text',
            author: 'Someone else #1',
            org:    'Organisation name',
            date:   '16th March, 2020',
            type:   'comment'
        },
        { 
            text: 'This is some comment text. This is some comment text. This is some comment text.',
            author: 'Someone else #2',
            org:    'Organisation name',
            date:   '16th March, 2020',
            type:   'question'
        },
        { 
            text: 'This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text',
            author: 'Someone else #3',
            org:    'Organisation name',
            date:   '16th March, 2020',
            type:   'thought'
        },
        { 
            text: 'This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text. This is some comment text',
            author: 'Someone else #2',
            org:    'Organisation name',
            date:   '16th March, 2020',
            type:   'question'
        },
    ]

    function handleNewComment(){
        console.log('Adding a new comment')
        const dateNow = new Date()
        $ui.state.focus.projectComments  = [{ 
            text:           newComment,
            author:         `${$user.details.firstName} ${$user.details.lastName}`,
            authorID:       $user.details.userID,
            org:            $user.details.organisation,
            date:           dateNow.toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})
        }, ...$ui.state.focus.projectComments ]
    };

</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <DividerZagged20px/>
    <h3>&#8212;&#8212; What stakeholders think about {projectData.name}</h3>
    <div class = 'content'>
        <div>
            <p>This is some text about the comments</p>
            <hr>
            <h5>Share your thoughts...</h5>
            <div id = "new-comment-container">
                <textarea rows="10" bind:value={newComment}></textarea>
                <div class = 'add-feedback'>
                    <div on:click={handleNewComment}>Post your thoughts</div>
                </div>
            </div>
        </div>
        <div class = 'comment-container'>
            <ul class='unformatted'>
                {#each $ui.state.focus.projectComments as comment, index (index)}
                <Comment {comment} {index}/>
                {/each}
            </ul>
        </div>
    </div>
</section>


<!-- STYLES-->
<style>
    section{
        width:                  100%;
        height:                 fit-content;
        grid-area:              7 / 1 / 8 / 3;
        display:                grid;
    }
    .content{
        min-height:             30vh;
        display:                grid;
        grid-template-columns:  1fr 1fr;
        column-gap:             10vw;
    }
    .add-feedback{
        display:                flex;
        justify-content:        flex-end;
        font-weight:            500;
        cursor:                 pointer;
        font-size:              1rem;
    }
    .add-feedback:hover{
        text-decoration:        underline;
        font-weight:            700;
    }
    textarea{
        width:                  100%;
        font-weight:            300;
        font-size:              0.8rem;
        padding:                1.25rem;
        border-radius:          1rem;
        margin:                 1.5rem auto;
        border:                 4px solid var(--commentColor);
    }
    textarea:focus { 
        outline:                 none !important;
        border-color:           var(--commentColor);
        box-shadow:             0 0 10px var(--commentColor);
    }


</style>