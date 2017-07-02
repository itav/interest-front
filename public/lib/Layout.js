if (typeof Itav === 'undefined') {
    var Itav = {};
    if (typeof Itav.Components === 'undefined') {
        Itav.Components = {};
    }
}

Itav.Components.Layout = Object.assign(Object.create(Itav.Components), {});

const Layout = Itav.Components.Layout;

Layout.SideMenuLayout = Object.assign(Object.create(Layout), {

    domElement: null,
    layout: null,
    menu: null,
    main: null,
    header: null,
    content: null,
    footer: null,

    build(){
        const layout = document.createElement('div');
        const menu = document.createElement('div');
        const main = document.createElement('div');
        const header = document.createElement('div');
        const content = document.createElement('div');
        const footer = document.createElement('div');
        layout.id = 'layout';
        menu.id = 'menu';
        main.id = 'main';
        header.classList.add('header');
        content.classList.add('content');
        footer.classList.add('footer');
        this.layout = layout;
        this.menu = menu;
        this.header = header;
        this.content = content;
        this.footer = footer;

        main.appendChild(header);
        main.appendChild(content);
        main.appendChild(footer);

        layout.appendChild(menu);
        layout.appendChild(main);

        this.domElement = layout;
        return this;
    },

    render(where){
        where.appendChild(this.domElement);
        return this;
    }
});

Layout.getSomeLayout = function getSomeLayout() {
    if(typeof this.someLayout === 'undefined') {
        this.someLayout = Object.create(Layout.SideMenuLayout);
        this.someLayout.build();
    }
    return this.someLayout;
};
