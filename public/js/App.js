const InterestCtrl = Src.Interest.Controller;

const App = {
    routes: {
        paths: {
            '/': 'home',
            '/page': 'page',
            '/result': 'result',
            '/error': 'error',
            '/period/add': 'period_add'

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
        error: {
            path: "/result",
            controller: InterestCtrl.error(),
        }
    },
    view: null,

    run(path = '/', anchor = null) {

        let pattern = App.routes.paths[path];
        if(typeof pattern === 'undefined'){
            pattern = 'error';
        }
        if (document.readyState !== "complete") {
            const div = document.createElement('div');
            div.id = 'app';
            anchor = (null === anchor) ? div : anchor;
            window.onload = function () {
                const appDiv = document.getElementById('app');
                const body = document.getElementsByTagName('body')[0];
                body.replaceChild(anchor, appDiv);
                App.routes[pattern].controller(anchor);
            };

            return App.routes[pattern].controller(anchor);
        }
        anchor = (null === anchor) ? document.getElementById('app') : anchor;
        return App.routes[pattern].controller(anchor);
    }
};

const interestForm = Src.Interest.Forms.getInterestForm(model, false);

App.run();