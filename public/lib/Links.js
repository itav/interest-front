if (typeof Itav === 'undefined') {
    var Itav = {};
    if (typeof Itav.Components === 'undefined') {
        Itav.Components = {};
    }
}

Itav.Components.Link = {};
Itav.Components.Link = {
    href: '',
    class: '',
    anchor: null,
    attributes: [],
    /**
     * @property {Element}
     */
    domElement: null,
    /**
     * @property {Element}
     */
    domOwner: null,

    setAnchor(anchor){
        this.anchor = anchor;
        return this;
    },

    /**
     @param {string} href
     @param {string} label
     @param {string} cls
     @param {object|null} anchor
     @param {object} attr
     @return {Element}
     */
    createLink(href, label = '', cls = '', anchor = null, attr = {}){
        this.anchor = anchor;
        let a = document.createElement('a');
        a.setAttribute('href', href);
        a.appendChild(document.createTextNode(label !== '' ? label : href));
        if (cls !== '') {
            a.setAttribute('class', cls);
        }
        for (let at in attr) {
            a.setAttribute(at, attr[at]);
        }
        a.addEventListener('click', function (e) {
            e.preventDefault();
            App.run(e.srcElement.pathname, anchor);
        }, false);

        this.domElement = a;
        return this;
    },

    render: function render(where) {
        this.domOwner = where;
        where.appendChild(this.domElement);
        return this;
    }
};

const Link = Itav.Components.Link;