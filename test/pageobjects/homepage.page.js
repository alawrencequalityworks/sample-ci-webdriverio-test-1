class Homepage {

    get headerTitle() { return $('#headerTitle') }

    open() {
        return browser.url(`http://localhost:3000`);
    }
}

module.exports = new Homepage();
