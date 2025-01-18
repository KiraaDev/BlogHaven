interface MenuItem {
    title: string,
    to: string
}

export const menuItems: MenuItem[] =[
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'About',
        to: '/about'
    },
    {
        title: 'Blog',
        to: '/blog'
    },
    {
        title: 'Categories',
        to: '/categories'
    },
]
