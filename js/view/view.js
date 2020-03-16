
export default class View{
    constructor(txt){
        this.text=txt;
        document.querySelector('#bold').addEventListener('click', () => {this.text.bold_flag=this.toggle_pressed(this.text.bold_flag, "bold");});
        document.querySelector('#cursive').addEventListener('click', () => {this.text.cursive_flag=this.toggle_pressed(this.text.cursive_flag, "cursive");});
        document.querySelector('#underline').addEventListener('click', () => {this.text.underline_flag=this.toggle_pressed(this.text.underline_flag, "underline");});
        document.querySelector('#up').addEventListener('click', () => {[this.text.up_flag, this.text.down_flag] = this.toggle_up_down(this.text.up_flag, this.text.down_flag, "up", "down");});
        document.querySelector('#down').addEventListener('click', () => {[this.text.down_flag, this.text.up_flag]=this.toggle_up_down(this.text.down_flag, this.text.up_flag,  "down", "up");});
        this.buttons_colors = document.querySelectorAll('.color_but');
        for (let button of this.buttons_colors) {
            button.addEventListener('click', () => {this.toggle_collor(button);});
        }
    }
    toggle_collor(button){
        for (let itter of this.text.colors_flag){
            if (itter[0] == button.getAttribute("id"))
            {
                this.text.colors_flag.set(button.getAttribute("id"), this.text.change_state_toggle(itter[1]));
            }
            else
            {
                this.text.colors_flag.set(itter[0], false);
            }
        } 
        for (let itter of this.text.colors_flag){
            if (itter[1]==true)
            {
                document.getElementById(itter[0]).style.opacity = ".5";
                document.getElementById(itter[0]).style.boxShadow="0 0 0 1px #aaa inset, 0 1px 1px #aaa";
            }
            else{
                document.getElementById(itter[0]).style.opacity = "1";
                document.getElementById(itter[0]).style.boxShadow="0 0 0 1px #ddd inset, 0 1px 1px #fff";
            }
        }
    }
    toggle_pressed(flag, id){
        if (flag==false)
		{
            document.getElementById(id).style.background = "#dcdcdc linear-gradient(#fff, #dcdcdc)";
            document.getElementById(id).style.boxShadow="0 0 0 1px #aaa inset, 0 1px 1px #aaa";
		}
		else
		{
            document.getElementById(id).style.background = "none";
            document.getElementById(id).style.boxShadow="0 0 0 1px #ddd inset, 0 1px 1px #fff";
        }
        return this.text.change_state_toggle(flag);
    }
    toggle_up_down(flag1, flag2, id1, id2)
	{
		if (flag1==false)
		{
            document.getElementById(id1).style.background = "#dcdcdc linear-gradient(#fff, #dcdcdc)";
            document.getElementById(id1).style.boxShadow="0 0 0 1px #aaa inset, 0 1px 1px #aaa";
            document.getElementById(id2).style.background = "none";
            document.getElementById(id2).style.boxShadow="0 0 0 1px #ddd inset, 0 1px 1px #fff";
			return [flag1=true, flag2=false];
		}
		else
		{
            document.getElementById(id1).style.background = "none";
            document.getElementById(id1).style.boxShadow="0 0 0 1px #ddd inset, 0 1px 1px #fff";
			return [flag1=false, flag2];
		}
	}
    print_on_screen(){
        this.text.text_after.innerHTML=this.text.text_before.value;
    }
}