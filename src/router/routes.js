
export default [
  {
    path: '/',
    component: () => import('layouts/Navigation'),
    meta: {
      breadcrumb: 'Accueil',
      name: '/'
    },
    children: [
      {
        path: '',
        component: () => import('pages/Home'),
        meta: {
          breadcrumb: 'Accueil',
        }
      },
      {
        path: 'accueil',
        name: 'Accueil',
        component: () => import('pages/Home'),
        meta: {
          breadcrumb: 'Accueil'
        }
      },
      {
        path: 'aide-a-domicile',
        name: 'Aide à domicile',
        component: () => import('pages/HomeCare'),
        meta: {
          breadcrumb: 'Aide à domicile',
          name: 'aide-a-domicile'
        }
      },
      {
        path: 'compagnie',
        name: 'Compagnie',
        component: () => import('pages/Company'),
        meta: {
          breadcrumb: 'Compagnie et stimulation',
          name: 'compagnie'
        }
      },
      {
        path: 'sortie-hopital',
        name: "Sortie d'hôpital",
        component: () => import('pages/HospitalExit'),
        meta: {
          breadcrumb: "Sortie d'hôpital",
          name: 'sortie-hopital'
        }
      },
      {
        path: 'mentions',
        name: 'Mentions Légales',
        component: () => import('pages/LegalNotices'),
        meta: {
          breadcrumb: 'Mentions Légales',
          name: 'mentions'
        }
      },
      {
        path: 'recrutement',
        name: 'Recrutement',
        component: () => import('pages/Recruitment'),
        meta: {
          breadcrumb: 'Recrutement',
          name: 'recrutement'
        }
      },
      {
        path: 'envie',
        name: 'Envie',
        component: () => import('pages/Recruitment'),
        meta: {
          breadcrumb: 'Recrutement',
          name: 'recrutement'
        }
      },
      {
        path: 'contrat',
        name: 'contrat',
        component: () => import('pages/Recruitment'),
        meta: {
          breadcrumb: 'Recrutement',
          name: 'recrutement'
        }
      },
      {
        path: 'vision',
        name: 'vision',
        component: () => import('pages/Vision'),
        meta: {
          breadcrumb: 'Vision',
          name: 'vision'
        }
      },
      {
        path: 'equipe',
        name: 'Equipe',
        component: () => import('pages/Team'),
        meta: {
          breadcrumb: 'Equipe',
          name: 'team'
        }
      },
      {
        path: 'charte-beneficiaire',
        beforeEnter: (to, from, next) => {
          window.location = 'https://blog.alenvi.io/charte-envie';
        }
      },
      {
        path: 'charte-envie',
        beforeEnter: (to, from, next) => {
          window.location = 'https://blog.alenvi.io/charte-envie';
        }
      },
      {
        path: 'formations-managers',
        name: 'formation',
        component: () => import('pages/Formation')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
