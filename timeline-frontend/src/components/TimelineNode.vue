<template>
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
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
.timeline-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.timeline-marker {
    width: 20px;
    height: 20px;
    background-color: #2196f3;
    border-radius: 50%;
}

.timeline-content {
    margin-left: 20px;
}
</style>