<template>
    <div class="timeline">
        <!-- 使用slot允许外部AppTimelineItem的插入 -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'AppTimeline',
};
</script>
<style scoped>
.timeline {
    border-left: 2px solid #2196f3;
    position: relative;
    padding-left: 20px;
}
</style>