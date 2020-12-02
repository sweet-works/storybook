/*
 * @Autor: yaojie
 * @Date: 2020-12-02 15:11:35
 * @LastEditors: yaojie
 * @LastEditTime: 2020-12-02 15:11:44
 * @Description: 
 */
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withLess(withCss({
  /* config options here */
}))
