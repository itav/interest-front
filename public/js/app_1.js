const app = {
    routes: {
        home: {
            path: "/",
            controller: "home.js",
            method: "GET"
        },
        result: {
            path: "/result",
            controller: "result.js",
            method: "POST"
        }
    },
    run() {
        window.onload = function () {

            const root = document.getElementById("App");
            root.innerHTML = '';

            const formInput = document.createElement("input");
            const form = document.createElement("form");
            const fieldset = document.createElement("fieldset");
            const dateFrom = document.createElement("input");
            const rate = document.createElement("input");
            const amount =document.createElement("input");
            const labelRate = document.createElement("label");
            const labelAmount = document.createElement("label");
            const labelDateFrom = document.createElement("label");
            const dateTo = document.createElement("input");
            const labelDateTo = document.createElement("label");
            const grDateFrom = document.createElement("div");
            const labelSubmit = document.createElement("label");
            const submit = document.createElement("button");


            grDateFrom.classList.add(pure.form.pure_control_group);
            const grDateTo = grDateFrom.cloneNode(true);
            const grRate = grDateFrom.cloneNode(true);
            const grAmount = grDateFrom.cloneNode(true);
            const grSubmit = grDateFrom.cloneNode(true);

            form.classList.add(pure.form.pure_form);
            form.classList.add(pure.form.pure_form_aligned);
            form.setAttribute("method", "post");
            form.setAttribute("action", app.routes.result.path);
            dateFrom.setAttribute("type", "text");
            dateFrom.setAttribute("id", "dateFrom");
            dateFrom.setAttribute("placeholder", "date from:");
            dateTo.setAttribute("type", "text");
            dateTo.setAttribute("placeholder", "date to:")
            labelDateFrom.setAttribute("for", "dateFrom");

            labelDateTo.setAttribute("for", "dateTo");
            labelRate.setAttribute("for", "rate");
            labelAmount.setAttribute("for", "amount");
            rate.setAttribute("type", "text");
            rate.setAttribute("placeholder", "rate:");
            rate.setAttribute("id", "rate");
            amount.setAttribute("type", "text");
            amount.setAttribute("placeholder", "amount:");
            amount.setAttribute("id", "amount");
            submit.setAttribute("type", "submit");
            submit.classList.add(pure.button.pure_button);
            submit.classList.add(pure.button.pure_button_primary);

            labelDateFrom.appendChild(document.createTextNode("Date from:"));
            labelDateTo.appendChild(document.createTextNode("Date to:"));
            labelRate.appendChild(document.createTextNode("Rate:"));
            labelAmount.appendChild(document.createTextNode("Amount:"));
            submit.appendChild(document.createTextNode("Calculate"));
            grDateFrom.appendChild(labelDateFrom);
            grDateFrom.appendChild(dateFrom);
            grDateTo.appendChild(labelDateTo);
            grDateTo.appendChild(dateTo);
            grRate.appendChild(labelRate);
            grRate.appendChild(rate);
            grAmount.appendChild(labelAmount);
            grAmount.append(amount);
            grSubmit.appendChild(labelSubmit);
            grSubmit.appendChild(submit);
            fieldset.appendChild(grDateFrom);
            fieldset.appendChild(grDateTo);
            fieldset.appendChild(grRate);
            fieldset.appendChild(grAmount);
            fieldset.appendChild(grSubmit);
            form.appendChild(fieldset);
            root.appendChild(form);
        }
    }
};

const pure = {
    form: {
        pure_form: "pure-form",
        pure_form_stacked: "pure-form-stacked",
        pure_form_aligned: "pure-form-aligned",
        pure_control_group: "pure-control-group"
    },
    button: {
        pure_button: "pure-button",
        pure_button_primary: "pure-button-primary"
    }
};


app.run();