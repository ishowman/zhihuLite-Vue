
import {Axios} from '@/common/ajaxConf'

/**
 * 获取最新新闻
 * @param {店铺id,分类id} sid 
 */
export const getLatestNews = (opt) => Axios('/api/news/latest', opt)
/**
 * 获取某日新闻
 * @param {店铺id,分类id} sid 
 */
export const getNewsByDate = (date, opt) => Axios(`/api/news/before/${date}`, opt)
/**
 * 获取某分类新闻
 * @param {店铺id,分类id} sid 
 */
export const getNewsByTheme = (id, opt) => Axios(`/api/theme/${id}`, opt)