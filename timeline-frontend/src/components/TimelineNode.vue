<template>
    <div class="node">
        <div class="node-description">
            <!-- 使用slot允许外部内容的插入 -->
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppTimelineNode',
};
</script>
<style scoped>
.node {
    display: flex;
    align-items: center;
    margin: 10px 0;
    border: 1px solid gray;
    border-radius: 10px;
}

.node-description {
    margin-left: 20px;
}
</style>