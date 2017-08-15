var app = new Vue({
    el:"#app",
    data: {
        message: "Navid is kinda cool too",
        message2: "Jasmine is cool sometimes too",
        message3: "You loaded this page on" +new Date(),
        seen: false,
        students:[
            "Oskar",
            "Samuel",
            "Noor",
            "Ellis",
            "Johnathan",
            "Adeola",
            "Sharan",
            "Ambrose",
            "Kevin",
            "Joel",
            "Denzel",
            "Nick",
            "Nigel",
            "Jared"
        ]
    },
    methods:{
        showDiv: function(){
            this.seen = !this.seen;
        }
    }
});