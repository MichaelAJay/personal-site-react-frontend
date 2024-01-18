const ROUTE_PREFIXES_WITH_SIDER = [
    'oddities'
]

export function isSiderVisible(currentPage: string): boolean {
    const routePrefix = currentPage.split('/')[0];
    return ROUTE_PREFIXES_WITH_SIDER.includes(routePrefix);
}