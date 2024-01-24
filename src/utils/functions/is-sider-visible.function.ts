const ROUTE_PREFIXES_WITH_SIDER = new Set([
    'oddities',
    'admin'
])

export function isSiderVisible(currentPage: string): boolean {
    // console.log('isSiderVisible currentPage', currentPage)
    const routePrefix = currentPage.split('/')[0];
    return ROUTE_PREFIXES_WITH_SIDER.has(routePrefix);
}