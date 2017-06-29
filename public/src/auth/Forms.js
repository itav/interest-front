/**
 * Created by sylwester on 25.06.17.
 */


if (typeof Src === 'undefined') {
    var Src = {};
    Src.Auth = {};
}
if (!Src.hasOwnProperty('Auth')) {
    Src.Auth = {};
}

Src.Auth.Forms = Object.create(Src.Auth);
Src.Auth.Forms.create = function create(model) {

    const form = Object.create(Form.Form);
    form.setModel(model);

    const login = Object.create(Form.Input);
    login
        .setId('login')
        .setType(Form.Input.TYPE_TEXT)
        .setName('login')
        .setLabel('login')
        .setPlaceholder('login:')
        .build();

    const passwd = Object.create(Form.Input);
    passwd
        .setId('passwd')
        .setType(Form.Input.TYPE_TEXT)
        .setName('passwd')
        .setLabel('Password')
        .setPlaceholder('password:')
        .build();

    const submit = Object.create(Form.Button);
    submit
        .setType(Form.Button.TYPE_SUBMIT)
        .setLabel('Login')
        .build();

    const cancel = Object.create(Form.Button);
    cancel
        .setType(Form.Button.TYPE_RESET)
        .setLabel('Cancel')
        .build();
    cancel.widget.addEventListener('click', function () {
        App.run('/');
    });

    form
        .setAction('/auth/try')
        .addElement(login)
        .addElement(passwd)
        .addElement(submit)
        .addElement(cancel)
        .build();

    form.domElement.addEventListener('submit', function (event) {
        if(!event.defaultPrevented){
            event.preventDefault();
        }
        console.log(form.action);
        App.run(form.action);
    });

    return form;
};

Src.Auth.Forms.getLoginForm = function getLoginForm(model) {
    if (typeof this.loginForm === 'undefined') {
        this.loginForm = this.create(model);
    }
    return this.loginForm;
};

Src.Auth.Forms.resetLoginForm = function resetLoginForm() {
    this.loginForm = this.create();
    return this;
};