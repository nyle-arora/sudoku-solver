<template>
    <div>
        <input
        class="inputSquare"
        inputmode="numeric"
        type="number"
        min="1"
        max="9"
        @input="emitter"
        />
    </div>
</template>

<script>

export default {
    name: 'Square',
    data() {
        return {
            rules: {
                counter: value => value.length <= 1 || 'Max 1 character',
            },
            char: '',
        }
    },
    props: ['solvedSquare'],
    watch: {
        'solvedSquare': function(newVal, oldVal) {
            console.log('Prop changed: ', newVal, ' | was: ', oldVal);
            document.querySelector('input').value = newVal;
        }
    },
    methods: {
        emitter(e) {
            this.$emit('charEntered', e.target.value);
        }
    }
}

</script>

<style>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.inputSquare {
    border: 1px dashed black;
    text-align: center;
    height: 5vw;
    width: 5vw;
    padding: 0;
}

</style>
