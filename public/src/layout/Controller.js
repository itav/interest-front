/**
 * Created by sylwester on 30.06.17.
 */
/**
 * Created by sylwester on 25.06.17.
 */

if (typeof Src === 'undefined') {
    var Src = {};
    Src.Layout = {};
}
if (!Src.hasOwnProperty('Layout')) {
    Src.Layout = {};
}
Src.Layout.Controller = Object.assign(Object.create(Src.Layout), {

    SideMenuLayout(){

        const layout = Layout.getSomeLayout();
        return function view(anchor) {
            layout.render(anchor);
            App.run('/layout/side/menu', layout.menu);
            return layout.content;
        }
    },

    sideMenu(){
        const home = Object.create(MenuElement);
        home
            .setLabel('home')
            .setLink('/');

        const menu = Object.create(Menu);
        menu
            .addElement(home)
            .build();

        return function view(anchor) {
            anchor.appendChild(menu.domElement);
            return anchor;
        }
    },

    preload(){
        const template = `
            <div class="vertical-center__element">
                <span class="preloader preloader--top"></span>
                <span class="preloader preloader--bottom"></span>
            </div>`;
        const div = document.createElement('div');
        div.id = 'loader';
        div.classList.add('vertical--center');
        div.innerHTML = template;
        return function view(anchor) {
            anchor.innerHTML = '';
            anchor.appendChild(div);
            return anchor;
        }
    }
});

