var app = new Vue(({
    el: '#app',
    data: {
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        entries: [],
        editedItem: undefined,
        cachedItem:{}
    },
    created: function () {
            this.getData();

    },

    methods: {
        getData: function () {
            var localData = localStorage.getItem('entries');
            return this.entries = JSON.parse(localData);

        },
        postData: function () {
            var jsonData = JSON.stringify(this.entries);
            localStorage.setItem('entries', jsonData);
            console.log(localStorage.getItem('entries'))
        },
        deleteData: function (index) {
            this.entries.splice(index, 1);
            var jsonData = JSON.stringify(this.entries);
            localStorage.setItem('entries', jsonData);
            console.log(localStorage.getItem('entries'))
        },
        updateMode: function (item) {
            this.editedItem = item;

            this.lastName = this.entries[item].lastName;
            this.firstName = this.entries[item].firstName;
            this.email = this.entries[item].email;
            this.phone = this.entries[item].phone;
            return;
        },
        updateData: function (item) {

            this.cachedItem = this.entries[item];

            this.entries[item] = {
                lastName: this.lastName,
                firstName: this.firstName,
                email: this.email,
                phone: this.phone,
            };

            this.postData()

            this.lastName = '';
            this.firstName = '';
            this.email = '';
            this.phone = '';
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
                    lastName: lastName,
                    firstName: firstName,
                    email: email,
                    phone: phone
                };

                this.createEntrie(entrie);
            }
        },

        createEntrie: function (item) {
            this.entries.push(item);

            this.postData(item)

            this.lastName = '';
            this.firstName = '';
            this.email = '';
            this.phone = '';
        },

    }
}));
