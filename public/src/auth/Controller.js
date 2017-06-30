/**
 * Created by sylwester on 25.06.17.
 */

if (typeof Src === 'undefined') {
    var Src = {};
    Src.Auth = {};
}
if (!Src.hasOwnProperty('Auth')) {
    Src.Auth = {};
}
Src.Auth.Controller = Object.assign(Object.create(Src.Auth), {

    login(){
        return function view(anchor) {
            const form = Src.Auth.Forms.getLoginForm(AuthModel);
            anchor.innerHTML = '';
            form.render(anchor);
            return anchor;
        }
    },
    tryLogin(){
        return function view(anchor) {
            App.run('/preload');
            Ajax.setBaseUrl('localhost:3001');
            Ajax.get('/auth/login').then(
                function (result) {
                    App.run('/result')
                },
                function (err) {
                    App.run('/error');
                });
            return anchor;
        }
    },
    logout(){
        return function view(anchor) {
            anchor.innerHTML = '';
            const menu = Object.create(Menu);
            const m1 = Object.create(MenuElement);
            m1
                .setLabel('menu1')
                .setLink('/result');
            const m2 = Object.create(MenuElement);
            m2
                .setLabel('menu2')
                .setLink('/result');
            const m3 = Object.create(MenuElement);
            m3
                .setLabel('menu3')
                .setLink('/result');
            menu
                .addElement(m1)
                .addElement(m2)
                .addElement(m3)
                .build();

            anchor.appendChild(menu.domElement);
            return anchor;
        }
    },

});

