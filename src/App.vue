<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

//   (function (doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
//         recalc = function () {
//             var clientWidth = docEl.clientWidth;
//             //clientWidth >= 750 ? (clientWidth = 750, doc.body.style.width = '750px') : doc.body.style.width = clientWidth + 'px';   
//             //alert(clientWidth)
//             docEl.style.fontSize = clientWidth / 192 + 'px';
//             console.log(clientWidth / 192 + 'px');
//         };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
//   }(document, window));

</script>

<style>
    #app {
        height: 100%;
        width : 100%;
    }
</style>
