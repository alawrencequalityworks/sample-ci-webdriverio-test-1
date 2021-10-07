class Homepage {

    get headerTitle() { return $('#headerTitle') }
    get continueBtn() { return $('button.btn') }
    get h2() { return $('h2') }
    get error() { return $('body pre') }

    open() {
        return browser.url('/');
    }
}

module.exports = new Homepage();
