var app = new Vue(({
    el: '#app',
    data: {
        entries: []
    },
    created: function () {

    },

    getData: function () {
        localStorage.getItem('entries')
    },

    postData: function (item) {
        localStorage.setItem('entries', JSON.stringify(item));
    },

    getFormValue: function () {
        var lastName = document.querySelector('#last-name'),
            firstName = document.querySelector('#first-name'),
            email = document.querySelector('#email'),
            phone = document.querySelector('#phone');

        this.errorCheck(lastName, firstName, email, phone);
    },

    errorCheck: function (lastName, firstName, email, phone) {
        if (!lastName || typeof lastName != "string") {
            alert('put a string in the input last-name');
            return;
        }
        if (!firstName || typeof firstName != "string") {
            alert('put a string in the input first-name');
            return;
        }
        if (!email || typeof email != "string") {
            alert('put a string in the input email');
            return;
        }
        if (!phone || typeof phone != "string") {
            alert('put a string in the input phone');
            return;
        }
        else {
            var entrie = {
                lastName: '',
                firstName: '',
                email: '',
                phone: ''
            };

            this.createEntrie(entrie);
        }
    },

    createEntrie: function (item) {
        this.data.entries.push(item);

        this.postData(item)
    }
}));

var btn = document.querySelector('.btn');

btn.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('yoo');

    app.getFormValue();
})