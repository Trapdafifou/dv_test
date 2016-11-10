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
            if(localData){
               return this.entries = JSON.parse(localData);

            }
        },
        postData: function () {
            var jsonData = JSON.stringify(this.entries);
            localStorage.setItem('entries', jsonData);

        },
        deleteData: function (index) {
            this.entries.splice(index, 1);
            var jsonData = JSON.stringify(this.entries);
            localStorage.setItem('entries', jsonData);
        },
        updateMode: function (item) {
            this.editedItem = item;

            this.lastName = this.entries[item].lastName;
            this.firstName = this.entries[item].firstName;
            this.email = this.entries[item].email;
            this.phone = this.entries[item].phone;

            this.cachedItem = this.entries[item];
        },
        updateData: function (item) {



            this.entries[item] = {
                lastName: this.lastName,
                firstName: this.firstName,
                email: this.email,
                phone: this.phone,
            };

            this.postData();

            this.lastName = '';
            this.firstName = '';
            this.email = '';
            this.phone = '';
        },
        cancelUpdate(item){
            ;
            this.entries[item] = this.cachedItem;

            this.editedItem = undefined;
        },

        errorCheck: function (lastName, firstName, email, phone) {
            if (!lastName || typeof lastName != "string") {
                alert('veuillez remplir le champs Nom');
                return;
            }
            if (!firstName || typeof firstName != "string") {
                alert('veuillez remplir le champs Prénom');
                return;
            }
            if (!email || typeof email != "string") {
                alert('veuillez remplir le champs Mail');
                return;
            }
            if (!phone || typeof phone != "string") {
                alert('veuillez remplir le champs Téléphone');
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
