<template>
    <component :is="component" class="scrub-wrap" :style="cmpWrapperStyle">
        <div class="scrub-content-wrap" :style="cmpContentStyle">
            <slot />
        </div>
    </component>
</template>

<script>
import smoothScroll from './mixins/smooth-scroll'

export default {
    mixins: [smoothScroll(40)],
    props: {
        component: {
            type: String,
            default: 'div'
        },
        height: {
            type: [Number, String],
            default: -1
        },
        top: {
            type: [Number, String],
            default: -1
        }
    },
    async mounted() {
        await this.$nextTick()
        this.refresh()
    },
    data() {
        return {
            scrubPosition: 0,
            alive: true
        }
    },
    computed: {
        cmpWrapperStyle() {
            if (this.height == -1) {
                return {}
            }

            return { height: parseFloat(this.height) + 'px' }
        },
        cmpContentStyle() {
            if (this.top == -1) {
                return {}
            }

            return { top: parseFloat(this.top) + 'px' }
        }
    },
    methods: {
        updateScroll(evt) {
            requestAnimationFrame(() => {
                const rect = this.$el.getBoundingClientRect()
            })
        },
        refresh() {
            if (!this || !this.$el || !this.alive) return

            // get start position
            const scrubbableArea = this.$el.offsetHeight - window.innerHeight
            const zeroedScrollPos = this.$el.getBoundingClientRect().top * -1
            this.scrubPosition = zeroedScrollPos / scrubbableArea
        }
    },
    beforeDestroy() {
        this.alive = false
    },
    watch: {
        ssTop() {
            this.refresh()
        },
        scrubPosition(newVal) {
            this.$emit('progress', newVal)
        }
    }
}
</script>

<style lang="scss">
.scrub-wrap {
    .scrub-content-wrap {
        position: sticky;
        top: 0;
    }
}
</style>
