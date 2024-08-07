var rule = {
    title: '极点影视',
    host: 'https://nnsvip.sbs',
    url: '/vod/index.html?page=fypage&type_id=fyclass',
    searchUrl: '/public/auto/search1.html?keyword=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    filter: '',
    filter_url: '',
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_parse: '.swiper-wrapper&&a:lt(5);a&&Text;a&&href;(\\d+)',
    cate_exclude: '',
    play_parse: true,
    lazy: '',
    double: true,
    推荐: '*',
    一级: '.list-items&&.vertical-box;.title&&Text;.lazyload&&data-original;;a&&href',
    二级: {
        title: '.title&&Text;vod_type',
        img: 'img&&data-original',
        desc: '.desc&&label:eq(1)&&Text;label:eq(3)&&Text;地区;label:eq(4)&&Text;.desc&&label&&Text',
        content: 'label:eq(5)&&Text',
        tabs: '.playline-tabs-title li',
        lists: '.playline-tab-item:eq(#id)&&a',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href',
    },
    搜索: '*',
}