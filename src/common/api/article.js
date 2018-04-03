import {Axios} from '@/common/ajaxConf'

/**
 * 删除分类
 * @param {店铺id,分类id} sid 
 */
export const getNewsText = (id) => Axios(`/api/news/${id}`)

export const getNewsComment = (id) => Axios(`/api/story-extra/${id}`)
