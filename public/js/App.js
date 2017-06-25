const InterestCtrl = Src.Interest.Controller;

const App = {
    routes: {
        paths: {
            '/': 'home',
            '/result': 'result'
        },
        home: {
            path: "/",
            controller: InterestCtrl.index(),
        },
        result: {
            path: "/result",
            controller: InterestCtrl.result(),
        }
    },

    run(path = '/') {

        if (document.readyState === "complete") {
            App.routes[App.routes.paths[path]].controller();
            return this;
        }
        window.onload = function () {
            App.routes[App.routes.paths[path]].controller();
        };
        return this;
    }
};

App.run();