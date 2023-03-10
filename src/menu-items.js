const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/app/dashboard/default',
                    icon: 'feather icon-home'
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Upload scripts',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'upload',
                    title: 'Upload',
                    type: 'item',
                    url: '/upload',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'view',
                    title: 'View',
                    type: 'item',
                    url: '/view',
                    icon: 'feather icon-server'
                }
            ]
        }        
    ]
};

export default menuItems;
