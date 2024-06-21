<template>
    <center>
        <AppTimeline>
            <AppTimelineNode>
                <h4>事件标题1</h4>
                <p>事件详情1</p>
            </AppTimelineNode>
            <AppTimelineNode>
                <h4>事件标题2</h4>
                <p>事件详情2</p>
            </AppTimelineNode>
            <AppTimelineNode>
                <h4>事件标题3</h4>
                <p>事件详情3</p>
            </AppTimelineNode>
            <AppTimelineNode>
                <h4>事件标题4</h4>
                <p>事件详情4</p>
            </AppTimelineNode>
        </AppTimeline>
    </center>
</template>
<script>
import AppTimeline from './components/Timeline.vue';
import AppTimelineNode from './components/TimelineNode.vue';

export default {
    components: {
        AppTimeline,
        AppTimelineNode
    }
};
</script>