class Homepage {

    get headerTitle() { return $('#headerTitle') }
    get continueBtn() { return $('button.btn') }
    get h2() { return $('h2') }
    get error() { return $('body pre') }

    open() {
        return browser.url('https://ciexample121.loca.lt');
    }
}

module.exports = new Homepage();
