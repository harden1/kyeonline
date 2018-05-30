export default {
    methods: {
        //阻止事件冒泡
        stopBubble(e, type) {
            e.target.addEventListener(type, e => {
                e.stopPropagation();
            }, false);
        }
    }
}