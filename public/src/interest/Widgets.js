
if (typeof Src === 'undefined') {
    var Src = {};
    Src.Interest = {};
}
if (!Src.hasOwnProperty('Interest')) {
    Src.Interest = {};
}

Src.Interest.Widgets = Object.assign(Object.create(Src.Interest), {
    periodBar: null,
    create(){

    }
});
