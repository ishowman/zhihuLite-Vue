import {Axios} from './apiConf'

/**
 * 删除分类
 * @param {店铺id,分类id} sid 
 */
export const getNewsText = (id, opt) => Axios(`/api/news/${id}`, opt)

export const getNewsComment = (id, opt) => Axios(`/api/story-extra/${id}`, opt)
