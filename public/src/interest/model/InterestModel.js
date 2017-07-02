/**
 *
 * @type {InterestModel}
 */
const InterestModel = Object.assign(Object.create({}), {

    TYPE_SIMPLE: 1,
    TYPE_ADVANCED: 2,

    dateFrom: null,
    dateTo: null,
    days: 0,
    periods: [],
    rates: [],
    diffAmountPeriods: [],
    rate: 0.00,
    amount: 0.00,
    totalAmount: 0.00,
    averageRate: 0.00,
    totalInterest: 0.00,
    type: 1,

    setDateFrom(dateFrom){
        this.dateFrom = dateFrom;
        return this;
    },
    setDateTo(dateTo){
        this.dateTo = dateTo;
        return this;
    },
    setDays(days){
        this.days = days;
        return this;
    },
    setPeriods(periods){
        this.periods = periods;
        return this;
    },
    setRates(rates){
        this.rates = rates;
        return this;
    },
    setRate(rate){
        this.rate = rate;
        return this;
    },
    setAmount(amount){
        this.amount = amount;
        return this;
    },
    setTotalInterest(totalInterest){
        this.totalInterest = totalInterest;
        return this;
    },
    setType(type){
        this.type = type;
        return this;
    }
});

const PeriodModel = Object.assign(Object.create({}), {
    dateFrom: null,
    dateTo: null,
    rate: 0.00,
    amount: 0.00,
    days: 0
});


Object.defineProperty(
    InterestModel,
    "rate",
    {
        get: function () {
            return this._rate_;
        },
        set: function (value) {
            this._rate_ = value;
            console.log('ustawiam value Model' + this._rate_);
        }
    }
);

let model = Object.create(InterestModel);

