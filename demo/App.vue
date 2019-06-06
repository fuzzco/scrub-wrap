<template>
    <main class="demo">
        <h2 class="progress">
            {{
                Math.floor(progress * 100)
                    .toString()
                    .padStart(2, '0') + '%'
            }}
        </h2>
        <scrub-wrap @progress="progress = $event">
            <div class="scroll-area" />
        </scrub-wrap>
    </main>
</template>

<script>
import ScrubWrap from '../src/ScrubWrap'

export default {
    components: {
        'scrub-wrap': ScrubWrap
    },
    data() {
        return {
            progress: 0
        }
    }
}
</script>

<style lang="scss">
.demo {
    font-family: Helvetica, sans-serif;

    .progress {
        position: fixed;
        top: 20px;
        right: 0;
        left: 0;
        display: inline-block;
        background: white;
        margin: auto;
        text-align: center;
        width: 100px;
        z-index: 10;
        padding: 10px 5px;
        border-radius: 10px;
        box-shadow: -1px 1px 3px #aaa;
    }
    .scroll-area {
        width: 300px;
        margin: 50vh auto 100vh;
        background: #ccc;
        height: 400vh;
    }
}
</style>
