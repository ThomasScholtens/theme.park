let videoHTML = `
<div class="background-wrap">
    <video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted">
        <source src="https://your-correct-link-to-the-video.mp4" type="video/mp4">
        Video not supported
    </video>
</div>
`;

document.body.innerHTML += videoHTML;
