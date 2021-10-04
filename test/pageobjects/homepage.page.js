class Homepage {

    get headerTitle() { return $('#headerTitle') }

    open() {
        return browser.url('/');
    }
}

module.exports = new Homepage();
