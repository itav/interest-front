/**
 * Created by sylwester on 25.06.17.
 */

if (typeof Src === 'undefined') {
    var Src = {};
    Src.Interest = {};
}
if (!Src.hasOwnProperty('Interest')) {
    Src.Interest = {};
}
Src.Interest.Controller = Object.assign(Object.create(Src.Interest), {

    index(){
        const layout = Layout.getSomeLayout();
        const interestForm = Src.Interest.Forms.getInterestForm(model, false);
        interestForm.domElement.addEventListener('submit', function () {
            App.run('/preload', layout.content);
            Ajax.post('/result', $(interestForm.domElement).serialize(), interestForm.enctype).then(
                function (result) {
                    model = result;
                    App.run('/result', layout.content);
                },
                function (error) {
                    App.run('error', layout.content);
                }
            );
        }, false);

        return function view(anchor) {
            anchor.innerHTML = '';
            App.run('/layout/side/menu/layout', anchor);
            layout.content.innerHTML = '';
            interestForm.render(layout.content);
            App.run('/period/bar/rates', layout.content);
            return layout.content;
        }
    },

    periodAdd(){
        return function view(anchor) {
            const div2 = document.createElement('div');
            div2.appendChild(document.createTextNode('added ... '));
            const delBtn = document.createElement('button');
            delBtn.appendChild(document.createTextNode('del elem'));
            div2.appendChild(delBtn);
            anchor.appendChild(div2);
            delBtn.addEventListener('click', function () {
                anchor.removeChild(div2);
            });
            return anchor;
        }
    },

    pageDouble(){
        return function view(anchor) {
            const lnCalc = Object.create(Link);
            const addBtn = Object.create(Link);
            anchor.innerHTML = '';
            interestForm.render(anchor);
            lnCalc.createLink('/', 'home').render(anchor);
            addBtn.createLink('/period/add', 'add period', `${pure.button.primary}`).render(anchor);
            const div = document.createElement('div');
            const btn = document.createElement('button');
            btn.appendChild(document.createTextNode('add elem'));
            anchor.appendChild(btn);
            btn.addEventListener('click', function () {
                anchor.appendChild(App.run('/period/add', div));
            });
            //anchor.appendChild(App.run('/result', div));
            return anchor;
        }
    },

    result(){
        const back = Object.create(Link).createLink('/', 'home', pure.button.button);

        return function view(anchor) {
            anchor.innerHTML = ` 
                <p>Amount: ${model.amount}</p>
                <p>Rate: ${model.rate}</p>
                <p>Days: ${model.days}</p>
                <p>TotalInterest: ${model.totalInterest}</p>
             `;
            back.render(anchor);
            return anchor;
        }
    },

    periodBar(){
        return function view(anchor) {
            const canvas = document.createElement('canvas');
            canvas.id = 'ratesBar';
            canvas.setAttribute('height', '70');
            canvas.setAttribute('width', '600');
            const ctx = canvas.getContext('2d');

            //const rect = ctx.rect(0,0,150,70);
            ctx.fillStyle = '#ff5353';
            ctx.fillRect(0,0,150,40);
            ctx.fillStyle = '#4155ff';
            ctx.fillRect(151,0,300,40);
            ctx.fillStyle = '#7cff3f';
            ctx.fillRect(301,0,450,40);
            anchor.appendChild(canvas);
            return anchor;
        }
    },

    error(){

        let template = `Sorry but error occurred!`;
        return function view(anchor) {
            anchor.innerHTML = template;
            const back = Object.create(Link);
            back.createLink('/', 'home').render(anchor);
            return anchor;
        }
    }
});

