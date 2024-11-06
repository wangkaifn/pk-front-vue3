<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

async function close() {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span v-if="offlineReady"> 应用已准备好离线工作 </span>
      <span v-else> 有新内容可用，点击重新加载按钮进行更新。 </span>
    </div>
    <ElButton v-if="needRefresh" @click="updateServiceWorker()">
      重新加载
    </ElButton>
    <ElButton @click="close"> 关闭 </ElButton>
  </div>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}

.pwa-toast .message {
  margin-bottom: 8px;
}
</style>

<!-- import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  /**
   * 注册一个服务工作者并为其生命周期事件设置事件处理程序。
   * @param {Object} options - 注册服务工作者的选项。
   * @param {Function} options.onNeedRefresh - 当有新的服务工作者可用且需要激活时调用的回调函数。
   * @param {Function} options.onRegisteredSW - 成功注册服务工作者时调用的回调函数。
   * @param {string} options.onRegisteredSW.swScriptUrl - 已注册服务工作者脚本的URL。
   * @param {ServiceWorkerRegistration} options.onRegisteredSW.swRegistration - 与已注册服务工作者关联的ServiceWorkerRegistration对象。
   */
  registerSW({
    onNeedRefresh() {
      console.log('onNeedRefresh')
    },
    onRegisteredSW(swScriptUrl, swRegistration) {
      setInterval(() => {
        if (swRegistration) {
          swRegistration.update()
        }
        console.log('onRegisteredSW', swScriptUrl, swRegistration)
      }, 5000)
    },
  })
}) -->
