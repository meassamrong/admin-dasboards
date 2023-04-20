<template>
    <div class="createProduct">
        <div class="form-title">
            <h1>Create Items</h1>
        </div>
        <form>
            <div class="form-group">
                <label for="pname">Product Name</label><br>
                <input type="text" name="pname" class="form-control">
            </div>
            <div class="form-group">
                <label for="category">Category</label>
                <v-select v-model="selectCategory" :options="optionsCategory" name="category" label="label" multiple />
            </div>
            <div class="form-group">
                <label for="color">Color</label>
                <v-select v-model="selectColor" :options="optionsColor" name="color" label="label" multiple />
            </div>
        </form>
    </div>
</template>
<script>
import vSelect from 'vue-select';
export default {
    data() {
        return {
            selectCategory: [],
            selectColor : [],
            optionsCategory: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
                { label: 'Option 4', value: 'option4' },
            ],
            optionsColor: [
                { label: 'Color 1', value: 'Color1' },
                { label: 'Color 2', value: 'Color2' },
                { label: 'Color 3', value: 'Color3' },
                { label: 'Color 4', value: 'Color4' },
            ],
        };
    },
    components: {
        vSelect,
    },
};

</script>
<style scoped>
.form-group {
    display: inline-block;

}
.form-group .form-control {
    height: 30px;
    width: 400px;
    border: none;
}
</style>