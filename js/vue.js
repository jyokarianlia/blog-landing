const app = Vue.createApp({
    data() {
        return {
            clasemenu: "",
            verProductos: "", 
            verCompany: "", 
            verConnec: ""
        }
    },
    methods: {
        vermenu() {
            if (this.clasemenu == "") {
                this.clasemenu="menu-principal";
            } else {
                this.clasemenu=""
                this.verSubmenu('reset');
            }
        }, 
        verSubmenu(submenu) {
            switch (submenu) {
                case 'verProductos':
                    if (this.verProductos=="") {
                        this.verProductos="verProductos";
                        this.verCompany="";
                        this.verConnec="";
                    } else {
                        this.verProductos="";
                    }
                    break;
                
                case 'verCompany':
                    if (this.verCompany=="") {
                        this.verProductos="";
                        this.verCompany="verCompany";
                        this.verConnec="";
                    } else {
                        this.verCompany="";
                    }
                    break;
                case 'verConnec':
                    if (this.verConnec=="") {
                        this.verProductos="";
                        this.verCompany="";
                        this.verConnec="verConnec";
                    } else {
                        this.verConnec="";
                    }
                    break;
                case 'reset':
                    this.verProductos="";
                    this.verCompany="";
                    this.verConnec="";
                    break;
            }
        }
    }
}).mount('#app')