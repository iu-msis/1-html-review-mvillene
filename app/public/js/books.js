const Offer = {
    data() {
      return {
        Book: [],
        bookForm: {}
        }
    },
    methods: {
        postBookOffer(evt) {
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.Book = json;
                
                // reset the form
                this.bookForm = {};
              });
          },
          prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookData(){
            fetch('/api/books/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.Book = responseJson;
                console.log(this.Book);
                // console.log(books);
            })
            .catch( (err) => {
                console.log(this.Book);
                // console.error(err);
            });
        },
        selectOfferToEdit(o) {
            this.selectedOffer = o;
            this.offerForm = this.selectedOffer;
        },
        resetOfferForm() {
            this.selectedOffer = null;
            this.offerForm = {};
        }
    },
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
Vue.createApp(Offer).mount('#offerApp');