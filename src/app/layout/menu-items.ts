import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

        {
            title: 'PROFILE',
            icon: 'person-outline',
            link: '/layout/profile'
        },

        {
            title: 'FORMULAIRE',
            icon: 'layout-outline',
            children: [
                {
                    title: 'Soumettre un Business',
                    link: '/layout/add-forms',
                },
                {
                    title: 'Liste des Business',
                    link: '/layout/forms-list',
                }
            ],
        },

    ];
