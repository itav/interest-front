if (typeof Itav === 'undefined') {
    var Itav = {};
    if (typeof Itav.Components === 'undefined') {
        Itav.Components = {};
    }
}

Itav.Components.Form = {};

const Form = Itav.Components.Form;

/**
 *
 * @type {Form.FormElement}
 */
Form.FormElement = {
    id: null,
    name: null,
    model: {},

    setId: function setId(id) {
        this.id = id;
        return this;
    },

    setModel(model){
        this.model = model;
        if (this.model.hasOwnProperty(this.name)) {
            this.value = model[this.name];
        }
        return this;
    },

    setModelValue(value){
        if (typeof this.model === 'object') {
            if (this.model.hasOwnProperty(this.name)) {
                this.model[this.name] = value;
            }
        }
    },

    setClass: function setClass(cls) {
        this.cls = cls;
        return this;
    },

    addClass(cls){
        this.cls += ' ' + cls;
        return this;
    },

    removeClass(cls){
        if (typeof this.cls === 'string') {
            this.cls.replace(cls, ' ');
        }
        return this;
    },

    setAttributes(attributes){
        if (Object.prototype.toString.call(attributes) === '[object Array]') {
            this.attributes = attributes;
        }
        return this;
    },

    setTemplate(template){
        this.template = template;
        return this;
    },

    setName(name){
        this.name = name;
        if (typeof this.model === 'object') {
            if (this.model.hasOwnProperty(name)) {
                this.value = this.model[name];
            }
        }
        return this;
    }
};

/**
 *
 * @type {Form.Input}
 */
Form.Input = Object.assign(Object.create(Form.FormElement), {

    TYPE_TEXT: 'text',
    TYPE_PASSWORD: 'password',
    TYPE_CHECKBOX: 'checkbox',
    TYPE_RADIO: 'radio',
    TYPE_SUBMIT: 'submit',
    TYPE_RESET: 'reset',
    TYPE_FILE: 'file',
    TYPE_HIDDEN: 'hidden',
    TYPE_IMAGE: 'image',
    TYPE_BUTTON: 'button',

    label: '',
    type: 'text',
    _value_: '',
    placeholder: '',
    checked: false,
    disabled: false,
    readOnly: false,
    size: 20,
    maxLength: null,
    src: null,
    alt: null,
    useMap: null,
    isMap: null,
    tabindex: null,
    accesskey: null,
    onFocus: null,
    onBlur: null,
    onSelect: null,
    onChange: null,
    accept: null,
    domElement: null,
    domOwner: null,
    widget: null,

    setType(type) {
        this.type = type;
        return this;
    },
    setValue(value) {
        this.value = value;
        return this;
    },
    setLabel(label) {
        this.label = label;
        return this;
    },
    setPlaceholder(ph) {
        this.placeholder = ph;
        return this;
    },

    setWidgetValue(value) {
        if (this.widget) {
            this.widget.value = value;
        }
        return this;
    },

    build: function build() {

        let widget = document.createElement("input");
        let label = document.createElement("label");
        let wrap = document.createElement("div");
        wrap.classList.add(pure.form.pure_control_group);

        widget.setAttribute('type', this.type);
        widget.setAttribute('id', this.id);
        widget.setAttribute('name', this.name);
        widget.setAttribute('value', this.value);
        widget.setAttribute('placeholder', this.placeholder);
        label.setAttribute('for', this.id);

        label.appendChild(document.createTextNode(this.label));
        wrap.appendChild(label);
        wrap.appendChild(widget);
        let model = this;
        widget.addEventListener('change', function (event) {
            model.value = event.srcElement.value;
        });

        this.widget = widget;
        this.domElement = wrap;
        return this;
    },

    render: function render(where) {
        where.appendChild(this.domElement);
        this.domOwner = where;
    }
});

Object.defineProperty(
    Form.Input,
    "value",
    {
        get: function () {
            return this._value_;
        },
        set: function (value) {
            this._value_ = value;
            this.setWidgetValue(value);
            this.setModelValue(value);
            console.log('ustawiam value');
        }
    }
);

Form.Button = Object.assign(Object.create(Form.FormElement), {
    TYPE_SUBMIT: 'submit',
    TYPE_BUTTON: 'button',
    TYPE_RESET: 'reset',

    label: '',
    type: 'text',
    _value_: '',
    domElement: null,
    domOwner: null,
    widget: null,

    setType(type) {
        this.type = type;
        return this;
    },

    setLabel(label) {
        this.label = label;
        return this;
    },

    build: function build() {

        let widget = document.createElement("button");
        let label = document.createElement("label");
        let wrap = document.createElement("div");
        wrap.classList.add(pure.form.pure_control_group);

        widget.setAttribute("type", this.type);
        widget.setAttribute('name', this.name);
        widget.setAttribute('value', this.value);
        widget.classList.add(pure.button.button);
        widget.classList.add(pure.button.primary);
        widget.appendChild(document.createTextNode(this.label));

        wrap.appendChild(label);
        wrap.appendChild(widget);
        let model = this;
        widget.addEventListener('change', function (event) {
            model.value = event.srcElement.value;
        });

        this.widget = widget;
        this.domElement = wrap;
        return this;
    },

    render: function render(where) {
        where.appendChild(this.domElement);
        this.domOwner = where;
    }
});

Form.Form = Object.assign(Object.create(Form.FormElement), {
    METHOD_GET: 'get',
    METHOD_POST: 'post',
    ENCTYPE_FILE: 'multipart/form-data',
    ENCTYPE_NORMAL: 'application/x-www-form-urlencoded',

    method: 'post',
    enctype: 'application/x-www-form-urlencoded',
    action: '',
    elements: [],
    domElement: null,
    domOwner: null,

    addElement(elem){
        if (!this.hasOwnProperty('elements')) {
            this.elements = [];
        }
        this.elements.push(elem);
        return this;
    },

    setMethod(method){
        this.method = method;
        return this;
    },

    setAction(action){
        this.action = action;
        return this;
    },

    setEnctype(enctype){
        this.enctype = enctype;
        return this;
    },

    build: function build() {

        const widget = document.createElement("form");
        const fieldset = document.createElement("fieldset");

        widget.id = this.id;
        widget.classList.add(pure.form.pure_form);
        widget.classList.add(pure.form.pure_form_aligned);
        widget.setAttribute("method", this.method);
        widget.setAttribute("action", this.action);
        this.elements.forEach(function (elem) {
            fieldset.appendChild(elem.domElement);
        });
        widget.appendChild(fieldset);
        this.domElement = widget;
        this.domElement.addEventListener('submit', function (event) {
            event.preventDefault();
        });
        return this;
    },

    render: function render(where) {
        where.appendChild(this.domElement);
        this.domOwner = where;
    }
})
;


