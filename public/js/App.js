const InterestCtrl = Src.Interest.Controller;
const AuthCtrl = Src.Auth.Controller;
const LayoutCtrl = Src.Layout.Controller;

const App = {
    routes: {
        paths: {
            '/': 'home',
            '/page': 'page',
            '/result': 'result',
            '/error': 'error',
            '/period/add': 'period_add',
            '/auth/login': 'auth_login',
            '/auth/logout': 'auth_logout',
            '/auth/try': 'auth_try',
            '/preload': 'preload',
            '/period/bar/rates': 'period_bar_rates',
            '/layout/side/menu/layout': 'layout_side_menu_layout',
            '/layout/side/menu': 'layout_side_menu'

        },
        home: {
            path: "/",
            controller: InterestCtrl.index(),
        },
        page: {
            path: "/page",
            controller: InterestCtrl.pageDouble(),
        },
        period_add: {
            path: "/period/add",
            controller: InterestCtrl.periodAdd(),
        },
        result: {
            path: "/result",
            controller: InterestCtrl.result(),
        },
        period_bar_rates: {
            path: "/period/bar/rates",
            controller: InterestCtrl.periodBar(),
        },
        error: {
            path: "/result",
            controller: InterestCtrl.error(),
        },
        auth_login: {
            path: "/result",
            controller: AuthCtrl.login(),
        },
        auth_logout: {
            path: "/result",
            controller: AuthCtrl.logout(),
        },
        auth_try: {
            path: "/auth/try",
            controller: AuthCtrl.tryLogin(),
        },
        preload: {
            path: "/preload",
            controller: LayoutCtrl.preload(),
        },
        layout_side_menu_layout: {
            path: '/layout/side/menu/layout',
            controller: LayoutCtrl.SideMenuLayout(),
        },
        layout_side_menu: {
            path: '/layout/side/menu',
            controller: LayoutCtrl.sideMenu(),
        }

    },
    view: null,

    run(path = '/', anchor = null) {

        //TODO PROMISE

        let pattern = App.routes.paths[path];
        if (typeof pattern === 'undefined') {
            pattern = 'error';
        }
        if (document.readyState !== "complete") {

            window.onload = function () {
                anchor = (null === anchor) ? document.getElementsByTagName('body')[0] : anchor;
                App.routes[pattern].controller(anchor);
            };
            return;
            //return App.routes[pattern].controller(anchor);
        }
        anchor = (null === anchor) ? document.getElementsByTagName('body')[0] : anchor;
        return App.routes[pattern].controller(anchor);
    }
};

const interestForm2 = Src.Interest.Forms.getInterestForm(model, false);
App.run();