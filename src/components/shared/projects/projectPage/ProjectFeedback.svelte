<script>
	import { fly, slide }       from 'svelte/transition'
    import Comment              from '../../../shared/feedback/Comment.svelte'
    import  DividerZagged20px   from '../../../shared/layout/DividerZagged20px.svelte'
    import { ui, user }         from '../../../../data/stores.js'
    import { app }              from '../../../../data/realm.js'
    import { componentContent } from '../../../../data/content.js'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData
    $: newComment = ''

    let interactionsData = []
    const getInteractionData = async() => {
        interactionsData = await app.data.collections.interactions.find({})
        $ui.state.focus.projectComments = interactionsData.filter( d => d.type === 'comment' && d.projectName === $ui.state.focus.projectData.name).sort( (a,b) => b.date - a.date)

    };
    let promise = getInteractionData()

    // Get project comments data
    function handleNewComment(){
        if($user.isRegistered){
            console.log('Adding a new comment')
            const newCommentEntry = { 
                type:           'comment',
                comment:        newComment,
                user: {
                    firstName:      $user.details.firstName,
                    lastName:       $user.details.lastName,
                    username:       $user.details.username, 
                    org:            $user.details.organisation
                },
                date:           new Date()
            }
            /*** TO BE UPDATED TO WRITE TO DB*/
            interactionsData= [newCommentEntry, ...interactionsData]
            $ui.state.focus.projectComments  = [newCommentEntry, ...$ui.state.focus.projectComments]

        } else {
            $ui.infoModal.message = {
                buttons:        [{ text: 'Ok, got it!', function:  'close', }],
                header:         `You'll need to log in to post a message.`,
                content:         componentContent.messageModal.loginToComment
            }
        }
    };
</script>


<!-- COMPONENT HTML MARKUP-->
{#await promise then value}
<section>
    <DividerZagged20px/>
    <h3>&mdash;&mdash; What stakeholders think about {projectData.name}</h3>
    <div class = 'content'>
        <div>
            {@html componentContent.misc.feedbackInstruction }
            <hr>
            <h4>Have a thought to share about this project?</h4>
            <div id = "new-comment-container">
                <textarea rows="10" bind:value={newComment}></textarea>
            </div>
            <div class = 'add-feedback'>
                <button on:click={handleNewComment}>Post your thoughts</button>
            </div>
        </div>
        <div class = 'comment-container'>
            <ul class='unformatted' transition:slide>
                {#each $ui.state.focus.projectComments  as commentData, index (index)}
                <Comment {commentData} {index}/>
                {/each}
            </ul>
        </div>
    </div>
</section>
{/await}

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
    .add-feedback button{
        width: 50%;
    }

    #new-comment-container{
        position: relative;
    }
    #new-comment-container:before {
        content:                "";
        width:                  0px;
        height:                 0px;
        position:               absolute;
        border-left:            0px solid transparent;
        border-right:           20px solid var(--userComment);
        border-top:             0px solid var(--userComment);
        border-bottom:          60px solid transparent;
        left:                   50px;
        bottom:                 -55px;
    }
    #new-comment-container:after {
        content:                "";
        width:                  0px;
        height:                 0px;
        position:               absolute;
        border-left:            0px solid transparent;
        border-right:           12px solid #fff;
        border-top:             0px solid #fff;
        border-bottom:          40px solid transparent;
        left:                   54px;
        bottom:                 -32px;
    }

    textarea{
        width:                  100%;
        font-weight:            300;
        font-size:              1rem;
        padding:                1.25rem;
        border-radius:          1rem;
        border:                 4px solid var(--userComment);
    }
    textarea:focus { 
        outline:                 none !important;
        border-color:           var(--userComment);
        box-shadow:             0 0 10px var(--userComment);
    }


</style>