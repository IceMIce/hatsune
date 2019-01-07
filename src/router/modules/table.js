/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  alwaysShow: true, // 当一个的时候也进行下拉
  redirect: '/table/third_core',
  name: 'Table',
  meta: {
    title: 'Third Core',
    icon: 'table'
  },
  children: [
    {
      path: 'third_core',
      component: () => import('@/views/table/complexTable'),
      name: '接口信息',
      meta: { title: '接口信息' }
    }
  ]
}
export default tableRouter
