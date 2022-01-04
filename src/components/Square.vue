<template>
    <div>
        <!-- <v-text-field
        maxlength="1"
        outlined
        color='blue'
        type='number'
        hide-spin-buttons
        >
        </v-text-field> -->
        <input
        class="inputSquare"
        inputmode="numeric"
        type="number"
        min="1"
        max="9"
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
        }
    },
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
