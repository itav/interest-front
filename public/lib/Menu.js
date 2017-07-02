if (typeof Itav === 'undefined') {
    var Itav = {};
    if (typeof Itav.Components === 'undefined') {
        Itav.Components = {};
    }
}

Itav.Components.Menu = Object.assign(Object.create({}), {

    elements: [],
    heading: null,
    domElement: null,
    isBuilt: false,
    addElement(elem){
        this.elements.push(elem);
        return this;
    },
    /**
     *
     * @param {Itav.Components.Menu.Element} heading
     * @returns {Itav.Components.Menu}
     */
    setHeading(heading){
        this.heading = heading;
        return this;
    },
    build(){
        const div = document.createElement('div');
        div.classList.add(pure.menu.menu);
        if (this.heading) {
            const a = Object.create(Link);
            a.createLink(this.heading.link, this.heading.label, pure.menu.heading);
            div.appendChild(a.domElement);
        }
        const ul = document.createElement('ul');
        ul.classList.add(pure.menu.list);
        div.appendChild(ul);

        this.elements.forEach(function (elem) {
            const li = document.createElement('li');
            li.classList.add(pure.menu.item);
            const ln = Object.create(Link);
            ln.createLink(elem.link, elem.label, pure.menu.link, elem.anchor);
            li.appendChild(ln.domElement);
            ul.appendChild(li);
        });
        this.domElement = div;
        this.isBuilt = true;
        return this;
    }

});

Itav.Components.Menu.sideMenu = Object.create(Itav.Components.Menu);
Itav.Components.Menu.getSideMenu = function getSideMenu() {
    if (!this.sideMenu.isBuilt) {
        this.sideMenu.build();
    }
    return this.sideMenu;
};

Itav.Components.Menu.Element = Object.assign(Object.create(null), {

    link: '',
    label: '',
    anchor: null,

    setLink(link){
        this.link = link;
        return this;
    },
    setLabel(label){
        this.label = label;
        return this;
    },
    setAnchor(anchor){
        this.anchor = anchor;
        return this;
    }
});
const Menu = Itav.Components.Menu;
const MenuElement = Itav.Components.Menu.Element;