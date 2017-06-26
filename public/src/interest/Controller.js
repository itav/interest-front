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
        return function view() {
            const lnCalc = Object.create(Itav.Components.Link);
            const interestForm = Src.Interest.Forms.getInterestForm(model);
            const root = document.getElementById("app");
            root.innerHTML = '';
            interestForm.render(root);
            lnCalc.createLink('/result', 'calc').render(root);
        }
    },

    result(){

        let template = ` 
            <p>Amount: ${model.amount}</p>
            <p>Rate: ${model.rate}</p>
            <p>Days: ${model.days}</p>
            <p>TotalInterest: ${model.totalInterest}</p>
         `;

        return function view() {

            const root = document.getElementById("app");
            root.innerHTML = template;

            const back = Object.create(Itav.Components.Link);
            back.createLink('/', 'home').render(root);
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