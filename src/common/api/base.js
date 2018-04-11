
import {Axios} from './apiConf'

/**
 * 获取主题分类
 * @param {店铺id,分类id} sid 
 */
export const getThemeSorts = (opt) => Axios('api/themes', opt)

