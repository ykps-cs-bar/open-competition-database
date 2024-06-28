<template>
    <div class="timeline-container">
        <div class="timeline">
            <!-- 使用slot允许外部AppTimelineItem的插入 -->
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppTimeline',
};
</script>
<style scoped>
.timeline {
    border-left: 2px solid gray;
    padding-left: 20px;
}

.timeline-container {
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 30px;
    border: 1px solid gray;
}
</style>