import './cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: 'ca',
        autoDetect: 'browser',
        translations: {
            ca: {
                consentModal: {
                    title: 'La teva privacitat és la nostra prioritat',
                    description: 'Aquest portal web únicament utilitza galetes pròpies amb finalitat tècnica, no recapta ni cedeix dades de caràcter personal dels usuaris sense el seu coneixement. No obstant això, conté enllaços a llocs web de tercers amb polítiques de privacitat alienes a la de la Diputació de Barcelona que vostè podrà decidir si accepta o no quan accedeixi a ells.',
                    acceptAllBtn: 'Accepta-ho tot',
                    acceptNecessaryBtn: 'Rebutja-ho tot',
                    showPreferencesBtn: 'Gestionar galetes'
                },
                preferencesModal: {
                    title: 'Gestionar les preferències de les galetes',
                    acceptAllBtn: 'Accepta-ho tot',
                    acceptNecessaryBtn: 'Rebutja-ho tot',
                    savePreferencesBtn: 'Accepta la selecció actual',
                    closeIconLabel: 'Tanca la modal',
                    sections: [
                        {
                            title: 'La teva privacitat és la nostra prioritat',
                            description: 'Aquest portal web únicament utilitza galetes pròpies amb finalitat tècnica, no recapta ni cedeix dades de caràcter personal dels usuaris sense el seu coneixement. No obstant això, conté enllaços a llocs web de tercers amb polítiques de privacitat alienes a la de la Diputació de Barcelona que vostè podrà decidir si accepta o no quan accedeixi a ells.'
                        },
                        {
                            title: 'Galetes estrictament necessàries',
                            description: 'Aquestes galetes són essencials per al bon funcionament del lloc web i no es poden desactivar.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Rendiment i anàlisi',
                            description: 'Aquestes galetes recullen informació sobre com utilitza el nostre lloc web. Totes les dades són anònimes i no es poden utilitzar per identificar-vos.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Més informació',
                            description: 'Pots consultar la llista completa de galetes i el seu ús en el nostre <a href="https://www.diba.cat/avislegal">avís legal</a>.'
                        }
                    ]
                }
            }
        }
    }
});