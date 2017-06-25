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
    attributes: [],
    /**
     * @property {Element}
     */
    domElement: null,
    /**
     * @property {Element}
     */
    domOwner: null,

    /**
     @param {string} href
     @param {string} label
     @param {string} cls
     @param {string} tgr
     @param {object} attr
     @return {Element}
     */
    createLink(href, label = '', cls = '', tgr = '_self', attr = {}){
        let a = document.createElement('a');
        a.setAttribute('href', href);
        a.appendChild(document.createTextNode(label !== '' ? label : href));
        if (cls !== '') {
            a.setAttribute('class', cls);
        }
        for (let at in attr) {
            a.setAttribute(at, attr[at]);
        }
        a.setAttribute('target', tgr);
        a.addEventListener('click', function (e) {
            e.preventDefault();
            App.run(e.srcElement.pathname);
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