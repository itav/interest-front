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
        return function view(anchor) {
            const lnCalc = Object.create(Link);
            const lnPage = Object.create(Link);
            const interestForm = Src.Interest.Forms.getInterestForm(model);
            anchor.innerHTML = '';
            interestForm.render(anchor);
            lnCalc.createLink('/result', 'calc', `${pure.button.pure_button} ${pure.button.pure_button_success}`).render(anchor);
            lnPage.createLink('/page', 'page', `${pure.button.pure_button} ${pure.button.pure_button_primary}`).render(anchor);
            return anchor;
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
            addBtn.createLink('/period/add', 'add period', `${pure.button.pure_button_primary}`).render(anchor);
            const div = document.createElement('div');
            const btn = document.createElement('button');
            btn.appendChild(document.createTextNode('add elem'));
            anchor.appendChild(btn);
            btn.addEventListener('click', function() {anchor.appendChild(App.run('/period/add', div));})
            //anchor.appendChild(App.run('/result', div));
            return anchor;
        }
    },

    result(){

        let template = ` 
            <p>Amount: ${model.amount}</p>
            <p>Rate: ${model.rate}</p>
            <p>Days: ${model.days}</p>
            <p>TotalInterest: ${model.totalInterest}</p>
         `;

        return function view(anchor) {

            anchor.innerHTML = template;
            const back = Object.create(Link);
            const login = Object.create(Link);
            back.createLink('/', 'home').render(anchor);
            login.createLink('/auth/login', 'login', pure.button.pure_button_primary).render(anchor);
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
    },

    preload(){

        let template = `IIIIIIIIIIIIIII:::::::::::AMMMMMMMMMMM:::LOADING`;
        return function view(anchor) {
            anchor.innerHTML = template;
            const back = Object.create(Link);
            back.createLink('/', 'home').render(anchor);
            return anchor;
        }
    }

});

const model = Object.create(InterestModel);
model
    .setType(1)
    .setRate(10.00)
    .setAmount(453.00)
    .setDateFrom(new Date())
    .setDateTo(new Date())
    .setDays(50)
    .setTotalInterest(3.56);