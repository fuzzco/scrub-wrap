Get a section's scroll progress. Useful for animations like [this one](https://www.synack.com/red-team/) (scroll down to the "Do you have what it takes?" section), for example.

`npm i @fuzzco/scrub-wrap`

[Register component in Vue](https://vuejs.org/v2/guide/components-registration.html), then:

```html
<template>
    <main>
        <!-- get scroll progress -->
        <scrub-wrap @progress="progress = $event">
            <div class="scroll-area" />
        </scrub-wrap>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                progress: 0
            }
        }
    }
</script>
```

## Options

| Prop        | Type             | Default | Notes                                                                                                             |
| ----------- | ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `component` | String           | `div`   | Wrapper element.                                                                                                  |
| `height`    | [Number, String] | -1      | Height of the wrapper in px. Useful for making the wrapper extend past the viewport, for example. `-1` to ignore. |
| `top` }     | [Number, String] | -1      | Top of the internal content. `-1` to ignore.                                                                      |

## Events

| Name       | Parameters        | Notes                                                                                                                                            |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `progress` | `(value: number)` | The percentage scrolled. 0 = 0% = the element's top is at the top of the screen, 1 = 100% = the element's bottom is at the bottom of the screen. |
