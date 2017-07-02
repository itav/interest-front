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

            return anchor;
        }
    },

});

