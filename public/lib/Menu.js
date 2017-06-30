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
        const wrap = document.createElement('div');
        const div = wrap.cloneNode(false);
        wrap.id = 'menu';
        div.classList.add(pure.menu.menu);
        wrap.appendChild(div);
        if(this.heading){
            const a = Object.create(Link)
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
            ln.createLink(elem.link, elem.label, pure.menu.link);
            li.appendChild(ln.domElement);
            ul.appendChild(li);
        });
        this.domElement = wrap;
    }

});

Itav.Components.Menu.Element = Object.assign(Object.create(null), {

    link:'',
    label:'',

    setLink(link){
        this.link = link;
        return this;
    },
    setLabel(label){
        this.label = label;
        return this;
    }
});

const Menu = Itav.Components.Menu;
const MenuElement = Itav.Components.Menu.Element;