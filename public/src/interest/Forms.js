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

Src.Interest.Forms = Object.assign(Object.create(Src.Interest), {
    create(){
        const dateFrom = Object.create(Form.Input);
        dateFrom
            .setId('dateFromId')
            .setType(Form.Input.TYPE_TEXT)
            .setName('date_from')
            .setLabel('Fill date from')
            .setPlaceholder('date from:')
            .build();

        const dateTo = Object.create(Form.Input);
        dateTo
            .setId('dateToId')
            .setType(Form.Input.TYPE_TEXT)
            .setName('date_to')
            .setLabel('Fill date to')
            .setPlaceholder('date to:')
            .build();

        const rate = Object.create(Form.Input);
        rate
            .setId('rateId')
            .setType(Form.Input.TYPE_TEXT)
            .setName('rate')
            .setLabel('Rate')
            .setPlaceholder('rate:')
            .build();

        const amount = Object.create(Form.Input);
        amount
            .setId('amountId')
            .setType(Form.Input.TYPE_TEXT)
            .setName('amount')
            .setLabel('Amount')
            .setPlaceholder('amount:')
            .build();

        const submit = Object.create(Form.Button);
        submit
            .setType(Form.Button.TYPE_SUBMIT)
            .setLabel('Calculate')
            .build();

        const form = Object.create(Form.Form);
        form
            .setAction('/result')
            .addElement(dateFrom)
            .addElement(dateTo)
            .addElement(rate)
            .addElement(amount)
            .addElement(submit)
            .build();

        return form;
    }
});

Src.Interest.Forms.interestForm = Src.Interest.Forms.create();
Src.Interest.Forms.getInterestForm = function getInterestForm(singleton = true) {
    if(singleton){
        return this.interestForm;
    }
    return Object.create(this.interestForm);
};

