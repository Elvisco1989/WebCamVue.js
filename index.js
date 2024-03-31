
Vue.createApp({
    data(){
        return{
            newWebcam:{ "Id":null,
            "Brand":null,
            "Height":null,
            "Width":null

            },
            WebCamObj: [{"Id":1,"Brand":"Logitech",
            "Height":1080,
            "Width":1920},{"Id":2,"Brand":"Logitech",
            "Height":2160,
            "Width":3840},{"Id":3,"Brand":"Paracon",
            "Height":1080,
            "Width":1920},{"Id":4,"Brand":"Sandberg",
            "Height":2160,
            "Width":3840},{"Id":5,"Brand":"ZealandCams",
            "Height":1080,
            "Width":1440},],
            TargetId : null

        }
    },
    methods:{
        Addwebcam(){
            
            this.WebCamObj.push(this.newWebcam);
            
            this.newWebcam = {
                Id: null,
                Brand: null,
                Height: null,
                Width: null
    
            };
            
        },
        DeleteWencam(){
            // const webcam = this.WebCamObj.find(w=>w.Id===this.TargetId)
            // this.WebCamObj.splice(webcam);

            // this.TargetId = null
            const index = this.WebCamObj.findIndex(w => w.Id === this.TargetId);
            if (index !== -1) {
            this.WebCamObj.splice(index, 1);
            }
            this.TargetId = null;

        },
        UpdateWencam(){
            const data = this.WebCamObj.find(d=>d.Id===this.TargetId)
            if(data){
                data.Brand=this.newWebcam.Brand
                data.Height=this.newWebcam.Height
                data.Width=this.newWebcam.Width

                this.newWebcam = {
                    TargetId: null,
                    Brand: null,
                    Height: null,
                    Width: null
        
                };
            }

        }

    }
}).mount("#app")