export default class Text{
    constructor(txt_before, txt_after){
        this.text_before=txt_before;
        this.text_after=txt_after;
        this.bold_flag=false;
        this.cursive_flag=false;
        this.underline_flag=false;
        this.up_flag=false;
        this.down_flag=false;
        this.colors_flag=new Map([["red", false],["green", false],["blue", false],["yellow", false]]);
    }
    change_state_toggle(flag)
    {
        flag=!flag;
        return flag;
    }
    set_font_color(color){
        this.text_after.style.color = color;
    }
    set_font_weight_bold(){
        this.text_after.style.fontWeight = "bold";
    }
    set_font_weight_normal(){
        this.text_after.style.fontWeight =  "normal";
    }
    set_font_style_cursive(){
        this.text_after.style.fontStyle = "italic";
    }
    set_font_style_normal(){
        this.text_after.style.fontStyle = "normal";
    }
    set_text_decor_underline(){
        this.text_after.style.textDecoration =  "underline";
    }
    set_text_decor_none(){
        this.text_after.style.textDecoration =  "none";
    }
    set_text_transform_upper(){
        this.text_after.style.textTransform =  "uppercase"; 
    }
    set_text_transform_low(){
        this.text_after.style.textTransform =  "lowercase"; 
    }
    set_text_transform_none(){
        this.text_after.style.textTransform =  "none";
    }


    change_color_button(button){
        for (let itter of this.colors_flag){
            if (itter[0] == button.getAttribute("id"))
            {
                this.colors_flag.set(button.getAttribute("id"), this.change_state_toggle(itter[1]));
            }
            else
            {
                this.colors_flag.set(itter[0], false);
            }
        } 
        for (let itter of this.colors_flag){
            if (itter[1]==true)
            {
                document.getElementById(itter[0]).style.opacity = ".5";
                //document.getElementById(itter[0]).style.boxShadow="0 0 0 1px #aaa inset, 0 1px 1px #aaa";
            }
            else{
                document.getElementById(itter[0]).style.opacity = "1";
                //document.getElementById(itter[0]).style.boxShadow="0 0 0 1px #ddd inset, 0 1px 1px #fff";
            }
        }
    }
    change_button(flag, id){
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
        return this.change_state_toggle(flag);
    }
    change_up_down_button(flag1, flag2, id1, id2){
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
}