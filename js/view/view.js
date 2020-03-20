
export default class View{
    constructor(txt){
        this.text=txt;
    }
    print_on_screen(){
        this.text.text_after.innerHTML=this.text.text_before.value;
    }
}