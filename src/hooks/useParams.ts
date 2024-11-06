import type { RouteParams } from 'vue-router'

/**
 * 一个自定义钩子，返回作为计算属性的路由参数。
 * @template P - 路由参数的类型。
 * @returns 一个包含路由参数并转换为类型 P 的计算属性。
 */
export function useParams<P extends RouteParams>() {
  const route = useRoute()

  return computed(() => route.params as P)
}
