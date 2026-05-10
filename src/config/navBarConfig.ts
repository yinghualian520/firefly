import {
    LinkPreset,
    type NavBarConfig,
    type NavBarLink,
    type NavBarSearchConfig,
    NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
    // 基础导航栏链接
    const links: (NavBarLink | LinkPreset)[] = [
        // 主页
        LinkPreset.Home,
    ];

    // 根据配置决定是否添加留言板
    if (siteConfig.pages.guestbook) {
        links.push(LinkPreset.Guestbook);
    }

    // 我的及其子菜单
    links.push({
        name: "我的",
        url: "/my/",
        icon: "material-symbols:person",
        children: [
            ...(siteConfig.pages.gallery ? [LinkPreset.Gallery] : []),
        ],
    });

    // 关于
    links.push({
        name: "关于",
        url: "/content/",
        icon: "material-symbols:info",
    });

    // 链接
    links.push({
        name: "链接",
        url: "/links/",
        icon: "material-symbols:link",
    });

    return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
    method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
